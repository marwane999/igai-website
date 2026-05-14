const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

async function request<T>(endpoint: string, options?: RequestInit): Promise<{ success: boolean; data?: T; error?: string }> {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers: { "Content-Type": "application/json" },
      ...options,
    })
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      return { success: false, error: body.detail || body.message || `Request failed with status ${res.status}` }
    }
    const data = await res.json()
    return { success: true, data }
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : "Network error" }
  }
}

export function submitContact(data: { name: string; email: string; message: string; subject?: string }) {
  return request("/api/contact", { method: "POST", body: JSON.stringify(data) })
}

export function submitApplication(data: {
  fullName: string
  email: string
  phone: string
  program: string
  startDate: string
  message?: string
}) {
  return request("/api/applications", { method: "POST", body: JSON.stringify(data) })
}

export function subscribeNewsletter(email: string) {
  return request("/api/newsletter", { method: "POST", body: JSON.stringify({ email }) })
}

export function checkHealth() {
  return request<{ status: string }>("/api/health")
}
