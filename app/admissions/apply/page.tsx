"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PageHero } from "@/components/sections/PageHero"
import { Button } from "@/components/ui/Button"
import { submitApplication } from "@/lib/api"
import {
  ChevronRight,
  ChevronLeft,
  Check,
  User,
  BookOpen,
  Home,
  FileText,
  Plus,
  Trash2,
  Loader2,
  AlertCircle,
} from "lucide-react"

const steps = [
  { number: 1, label: "Personal", icon: User },
  { number: 2, label: "Academic", icon: BookOpen },
  { number: 3, label: "Housing", icon: Home },
  { number: 4, label: "Statement", icon: FileText },
]

const genderOptions = ["Male", "Female"]
const maritalOptions = ["Single", "Married", "Divorced", "Widowed"]
const proficiencyLevels = ["Poor", "Fair", "Good", "Excellent"]
const termOptions = ["Fall", "Winter", "Spring", "Summer", "Private"]

interface PreviousStudy {
  duration: string
  institution: string
  level: string
  books: string
  units: string
}

interface FormData {
  firstName: string
  lastName: string
  dateOfBirth: string
  email: string
  gender: string
  maritalStatus: string
  nationality: string
  occupation: string
  address: string
  phone: string
  passportNumber: string
  emergencyContact: string
  familiarWithScript: string
  studiedBefore: string
  previousStudies: PreviousStudy[]
  spoken: string
  reading: string
  writing: string
  aural: string
  englishLevel: string
  frenchLevel: string
  beenToArabCountry: string
  beenToMorocco: string
  needsHousing: string
  housingPreference: string
  termPreference: string
  specialNeeds: string
  personalStatement: string
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  email: "",
  gender: "",
  maritalStatus: "",
  nationality: "",
  occupation: "",
  address: "",
  phone: "",
  passportNumber: "",
  emergencyContact: "",
  familiarWithScript: "",
  studiedBefore: "",
  previousStudies: [],
  spoken: "",
  reading: "",
  writing: "",
  aural: "",
  englishLevel: "",
  frenchLevel: "",
  beenToArabCountry: "",
  beenToMorocco: "",
  needsHousing: "",
  housingPreference: "",
  termPreference: "",
  specialNeeds: "",
  personalStatement: "",
}

export default function ApplyPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const updateField = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next[field]
      return next
    })
  }, [])

  const updateStudyRow = useCallback((index: number, field: keyof PreviousStudy, value: string) => {
    setFormData((prev) => {
      const studies = [...prev.previousStudies]
      studies[index] = { ...studies[index], [field]: value }
      return { ...prev, previousStudies: studies }
    })
  }, [])

  const addStudyRow = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      previousStudies: [...prev.previousStudies, { duration: "", institution: "", level: "", books: "", units: "" }],
    }))
  }, [])

  const removeStudyRow = useCallback((index: number) => {
    setFormData((prev) => ({
      ...prev,
      previousStudies: prev.previousStudies.filter((_, i) => i !== index),
    }))
  }, [])

  function validateStep(s: number): boolean {
    const newErrors: Record<string, string> = {}

    if (s === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "Required"
      if (!formData.lastName.trim()) newErrors.lastName = "Required"
      if (!formData.dateOfBirth) newErrors.dateOfBirth = "Required"
      if (!formData.email.trim()) newErrors.email = "Required"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email"
      if (!formData.gender) newErrors.gender = "Required"
      if (!formData.maritalStatus) newErrors.maritalStatus = "Required"
      if (!formData.nationality.trim()) newErrors.nationality = "Required"
      if (!formData.address.trim()) newErrors.address = "Required"
      if (!formData.phone.trim()) newErrors.phone = "Required"
      if (!formData.emergencyContact.trim()) newErrors.emergencyContact = "Required"
    } else if (s === 2) {
      if (!formData.familiarWithScript) newErrors.familiarWithScript = "Required"
      if (!formData.studiedBefore) newErrors.studiedBefore = "Required"
      if (!formData.spoken) newErrors.spoken = "Required"
      if (!formData.reading) newErrors.reading = "Required"
      if (!formData.writing) newErrors.writing = "Required"
      if (!formData.aural) newErrors.aural = "Required"
    } else if (s === 3) {
      if (!formData.beenToArabCountry) newErrors.beenToArabCountry = "Required"
      if (!formData.beenToMorocco) newErrors.beenToMorocco = "Required"
      if (!formData.needsHousing) newErrors.needsHousing = "Required"
      if (formData.needsHousing === "yes" && !formData.housingPreference) newErrors.housingPreference = "Required"
      if (!formData.termPreference) newErrors.termPreference = "Required"
    } else if (s === 4) {
      if (!formData.personalStatement.trim()) {
        newErrors.personalStatement = "Required"
      } else {
        const wc = formData.personalStatement.trim().split(/\s+/).length
        if (wc < 300) newErrors.personalStatement = `Minimum 300 words (${wc} written)`
        if (wc > 400) newErrors.personalStatement = `Maximum 400 words (${wc} written)`
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function nextStep() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, 4))
  }

  function prevStep() {
    setStep((s) => Math.max(s - 1, 1))
  }

  async function handleSubmit() {
    if (!validateStep(4)) return
    setIsSubmitting(true)
    setSubmitError("")
    const result = await submitApplication({
      fullName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      program: formData.termPreference,
      startDate: "",
      message: formData.personalStatement,
    })
    setIsSubmitting(false)
    if (result.success) {
      setSubmitted(true)
    } else {
      setSubmitError(result.error || "Submission failed. Please try again.")
    }
  }

  if (submitted) {
    return (
      <>
        <PageHero
          title="Apply Now"
          subtitle="Begin your Arabic journey at IGAI"
          breadcrumbs={[
            { label: "Admissions", href: "/admissions" },
            { label: "Apply" },
          ]}
        />
        <section className="py-16 lg:py-24">
          <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-success" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-text mb-4">Application Submitted</h2>
            <p className="text-text-light leading-relaxed mb-8">
              Thank you, {formData.firstName}! We have received your application and will contact
              you at <strong>{formData.email}</strong> within 3–5 business days.
            </p>
            <Button onClick={() => window.location.href = "/"}>Return Home</Button>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero
        title="Apply Now"
        subtitle="Complete your application to join Ibn Ghazi Arabic Institute"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Apply" },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center justify-between">
              {steps.map((s, i) => {
                const Icon = s.icon
                const isActive = step === s.number
                const isComplete = step > s.number
                return (
                  <div key={s.number} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-primary text-white shadow-lg shadow-primary/30"
                            : isComplete
                            ? "bg-success text-white"
                            : "bg-border/60 text-text-light"
                        }`}
                      >
                        {isComplete ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                      </div>
                      <span
                        className={`mt-2 text-xs font-medium hidden sm:block ${
                          isActive ? "text-primary" : isComplete ? "text-success" : "text-text-light"
                        }`}
                      >
                        Step {s.number}
                      </span>
                      <span
                        className={`text-xs hidden sm:block ${
                          isActive ? "text-text font-medium" : "text-text-light"
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className={`flex-1 h-0.5 mx-2 ${
                          isComplete ? "bg-success" : "bg-border/60"
                        }`}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === 1 && <Step1 formData={formData} updateField={updateField} errors={errors} />}
              {step === 2 && (
                <Step2
                  formData={formData}
                  updateField={updateField}
                  updateStudyRow={updateStudyRow}
                  addStudyRow={addStudyRow}
                  removeStudyRow={removeStudyRow}
                  errors={errors}
                />
              )}
              {step === 3 && <Step3 formData={formData} updateField={updateField} errors={errors} />}
              {step === 4 && (
                <Step4 formData={formData} updateField={updateField} errors={errors} />
              )}
            </motion.div>
          </AnimatePresence>

          {submitError && (
            <div className="mt-6 p-4 rounded-lg bg-error/10 border border-error/30 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-error shrink-0 mt-0.5" />
              <p className="text-sm text-error">{submitError}</p>
            </div>
          )}

          <div className="mt-10 flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={prevStep}
              disabled={step === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" /> Back
            </Button>
            {step < 4 ? (
              <Button onClick={nextStep} className="flex items-center gap-2">
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} isLoading={isSubmitting} className="flex items-center gap-2">
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function RadioGroup({
  name,
  options,
  value,
  onChange,
  error,
}: {
  name: string
  options: string[]
  value: string
  onChange: (v: string) => void
  error?: string
}) {
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <label
            key={opt}
            className={`cursor-pointer px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
              value === opt
                ? "border-primary bg-primary/10 text-primary"
                : "border-border/60 text-text-light hover:border-primary/50 hover:text-text"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />
            {opt}
          </label>
        ))}
      </div>
      {error && <p className="mt-1 text-xs text-error">{error}</p>}
    </div>
  )
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
  error,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder?: string
  error?: string
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-text mb-1.5">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/40 ${
          error ? "border-error" : "border-border/60"
        }`}
      >
        <option value="">{placeholder || `Select ${label}`}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-error">{error}</p>}
    </div>
  )
}

function TextField({
  label,
  value,
  onChange,
  error,
  type = "text",
  optional,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  error?: string
  type?: string
  optional?: boolean
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-text mb-1.5">
        {label} {optional && <span className="text-text-light text-xs">(optional)</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/40 ${
          error ? "border-error" : "border-border/60"
        }`}
      />
      {error && <p className="mt-1 text-xs text-error">{error}</p>}
    </div>
  )
}

function Step1({
  formData,
  updateField,
  errors,
}: {
  formData: FormData
  updateField: (f: keyof FormData, v: string) => void
  errors: Record<string, string>
}) {
  return (
    <div className="space-y-6">
      <h2 className="font-heading text-2xl font-bold text-text">Personal Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <TextField label="First Name" value={formData.firstName} onChange={(v) => updateField("firstName", v)} error={errors.firstName} />
        <TextField label="Last Name" value={formData.lastName} onChange={(v) => updateField("lastName", v)} error={errors.lastName} />
        <TextField label="Date of Birth" type="date" value={formData.dateOfBirth} onChange={(v) => updateField("dateOfBirth", v)} error={errors.dateOfBirth} />
        <TextField label="Email" type="email" value={formData.email} onChange={(v) => updateField("email", v)} error={errors.email} />
        <SelectField label="Gender" value={formData.gender} onChange={(v) => updateField("gender", v)} options={genderOptions} error={errors.gender} />
        <SelectField label="Marital Status" value={formData.maritalStatus} onChange={(v) => updateField("maritalStatus", v)} options={maritalOptions} error={errors.maritalStatus} />
        <TextField label="Nationality" value={formData.nationality} onChange={(v) => updateField("nationality", v)} error={errors.nationality} />
        <TextField label="Occupation" value={formData.occupation} onChange={(v) => updateField("occupation", v)} />
        <div className="sm:col-span-2">
          <TextField label="Address" value={formData.address} onChange={(v) => updateField("address", v)} error={errors.address} />
        </div>
        <TextField label="Phone" type="tel" value={formData.phone} onChange={(v) => updateField("phone", v)} error={errors.phone} />
        <TextField label="Passport Number" value={formData.passportNumber} onChange={(v) => updateField("passportNumber", v)} optional />
        <div className="sm:col-span-2">
          <TextField label="Emergency Contact" value={formData.emergencyContact} onChange={(v) => updateField("emergencyContact", v)} error={errors.emergencyContact} />
        </div>
      </div>
    </div>
  )
}

function Step2({
  formData,
  updateField,
  updateStudyRow,
  addStudyRow,
  removeStudyRow,
  errors,
}: {
  formData: FormData
  updateField: (f: keyof FormData, v: string) => void
  updateStudyRow: (i: number, f: keyof PreviousStudy, v: string) => void
  addStudyRow: () => void
  removeStudyRow: (i: number) => void
  errors: Record<string, string>
}) {
  return (
    <div className="space-y-8">
      <h2 className="font-heading text-2xl font-bold text-text">Academic Background</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Are you familiar with the Arabic script?</label>
          <RadioGroup name="familiarWithScript" options={["Yes", "No"]} value={formData.familiarWithScript} onChange={(v) => updateField("familiarWithScript", v)} error={errors.familiarWithScript} />
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Have you studied Arabic before?</label>
          <RadioGroup name="studiedBefore" options={["Yes", "No"]} value={formData.studiedBefore} onChange={(v) => updateField("studiedBefore", v)} error={errors.studiedBefore} />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading text-lg font-semibold text-text">Previous Study History</h3>
          <button
            type="button"
            onClick={addStudyRow}
            className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            <Plus className="h-4 w-4" /> Add Row
          </button>
        </div>
        {formData.previousStudies.length === 0 && (
          <p className="text-sm text-text-light italic">No previous study records added.</p>
        )}
        {formData.previousStudies.map((study, i) => (
          <div key={i} className="p-4 mb-3 rounded-lg border border-border/40 bg-bg-alt/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-text">Study #{i + 1}</span>
              <button
                type="button"
                onClick={() => removeStudyRow(i)}
                className="text-error hover:text-error/80 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <TextField label="Duration" value={study.duration} onChange={(v) => updateStudyRow(i, "duration", v)} />
              <TextField label="Institution" value={study.institution} onChange={(v) => updateStudyRow(i, "institution", v)} />
              <TextField label="Level" value={study.level} onChange={(v) => updateStudyRow(i, "level", v)} />
              <TextField label="Textbooks / Materials" value={study.books} onChange={(v) => updateStudyRow(i, "books", v)} />
              <div className="sm:col-span-2">
                <TextField label="Units / Topics Covered" value={study.units} onChange={(v) => updateStudyRow(i, "units", v)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-heading text-lg font-semibold text-text mb-4">Self-Evaluation</h3>
        <p className="text-sm text-text-light mb-4">Rate your proficiency in each area:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 pr-4 text-left font-medium text-text" />
                {proficiencyLevels.map((l) => (
                  <th key={l} className="py-2 px-3 text-center font-medium text-text-light text-xs uppercase tracking-wider">
                    {l}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(["spoken", "reading", "writing", "aural"] as const).map((skill) => (
                <tr key={skill} className="border-b border-border/40">
                  <td className="py-3 pr-4 font-medium text-text capitalize">{skill}</td>
                  {proficiencyLevels.map((level) => (
                    <td key={level} className="py-3 px-3 text-center">
                      <label className="inline-flex items-center justify-center">
                        <input
                          type="radio"
                          name={`selfeval-${skill}`}
                          value={level}
                          checked={formData[skill] === level}
                          onChange={(e) => updateField(skill, e.target.value)}
                          className="sr-only peer"
                        />
                        <span
                          className={`block w-5 h-5 rounded-full border-2 transition-all duration-200 cursor-pointer ${
                            formData[skill] === level
                              ? "border-primary bg-primary shadow-sm"
                              : "border-border/60 hover:border-primary/50"
                          }`}
                        />
                      </label>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {(errors.spoken || errors.reading || errors.writing || errors.aural) && (
          <p className="mt-2 text-xs text-error">Please rate all four skills.</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <SelectField label="English Level" value={formData.englishLevel} onChange={(v) => updateField("englishLevel", v)} options={["Beginner", "Intermediate", "Advanced", "Native"]} placeholder="Select level" />
        <SelectField label="French Level" value={formData.frenchLevel} onChange={(v) => updateField("frenchLevel", v)} options={["Beginner", "Intermediate", "Advanced", "Native"]} placeholder="Select level" />
      </div>
    </div>
  )
}

function Step3({
  formData,
  updateField,
  errors,
}: {
  formData: FormData
  updateField: (f: keyof FormData, v: string) => void
  errors: Record<string, string>
}) {
  return (
    <div className="space-y-6">
      <h2 className="font-heading text-2xl font-bold text-text">Housing & Preferences</h2>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Have you been to an Arab country before?</label>
        <RadioGroup name="beenToArabCountry" options={["Yes", "No"]} value={formData.beenToArabCountry} onChange={(v) => updateField("beenToArabCountry", v)} error={errors.beenToArabCountry} />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Have you been to Morocco before?</label>
        <RadioGroup name="beenToMorocco" options={["Yes", "No"]} value={formData.beenToMorocco} onChange={(v) => updateField("beenToMorocco", v)} error={errors.beenToMorocco} />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Do you need housing assistance?</label>
        <RadioGroup name="needsHousing" options={["Yes", "No"]} value={formData.needsHousing} onChange={(v) => updateField("needsHousing", v)} error={errors.needsHousing} />
      </div>

      {formData.needsHousing === "Yes" && (
        <SelectField
          label="Housing Preference"
          value={formData.housingPreference}
          onChange={(v) => updateField("housingPreference", v)}
          options={["IGAI Residence", "Homestay"]}
          error={errors.housingPreference}
        />
      )}

      <SelectField
        label="Term Preference"
        value={formData.termPreference}
        onChange={(v) => updateField("termPreference", v)}
        options={termOptions}
        error={errors.termPreference}
      />

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">Special Needs / Accommodations</label>
        <textarea
          value={formData.specialNeeds}
          onChange={(e) => updateField("specialNeeds", e.target.value)}
          rows={4}
          className="w-full rounded-lg border border-border/60 bg-white px-4 py-2.5 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/40 resize-y"
          placeholder="Please describe any special needs, dietary requirements, medical conditions, or accommodations you may require..."
        />
      </div>
    </div>
  )
}

function Step4({
  formData,
  updateField,
  errors,
}: {
  formData: FormData
  updateField: (f: keyof FormData, v: string) => void
  errors: Record<string, string>
}) {
  const wordCount = formData.personalStatement.trim() ? formData.personalStatement.trim().split(/\s+/).length : 0
  const isValidCount = wordCount >= 300 && wordCount <= 400

  return (
    <div className="space-y-6">
      <h2 className="font-heading text-2xl font-bold text-text">Personal Statement</h2>
      <p className="text-text-light text-sm leading-relaxed">
        Please write a personal statement of <strong>300–400 words</strong> telling us about your
        academic background, your motivation for studying Arabic, why you chose IGAI, and how this
        program fits into your educational or professional goals.
      </p>

      <div>
        <textarea
          value={formData.personalStatement}
          onChange={(e) => updateField("personalStatement", e.target.value)}
          rows={12}
          className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/40 resize-y ${
            errors.personalStatement ? "border-error" : "border-border/60"
          }`}
          placeholder="Type your personal statement here..."
        />
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-text-light">
            {wordCount} {wordCount === 1 ? "word" : "words"}
          </p>
          {wordCount > 0 && (
            <p className={`text-xs ${isValidCount ? "text-success" : "text-warning"}`}>
              {wordCount < 300
                ? `${300 - wordCount} more words needed`
                : wordCount > 400
                ? `${wordCount - 400} words over limit`
                : "Word count within range"}
            </p>
          )}
        </div>
        {errors.personalStatement && (
          <p className="mt-1 text-xs text-error">{errors.personalStatement}</p>
        )}
      </div>
    </div>
  )
}
