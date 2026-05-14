export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sound-and-weak-verbs-in-arabic",
    title: "The Sound and Weak Verbs in Arabic Language",
    excerpt:
      "Understand the classification of Arabic verbs into sound (صحيح) and weak (معتل) categories, and learn how weak letters affect verb conjugation patterns.",
    content: `
      <h2>Introduction to Arabic Verb Classification</h2>
      <p>Arabic verbs are classified into two main categories based on the presence or absence of weak letters (أ, و, ي) in their root consonants. This classification is essential for understanding conjugation patterns.</p>

      <h2>Sound Verbs (الفعل الصحيح)</h2>
      <p>A sound verb is one whose root letters are all free from weak letters. Sound verbs are further divided into:</p>
      <ul>
        <li><strong>Sound Salim (سالم)</strong> — Free from hamza, doubled letters, and weak letters. Example: كَتَبَ (to write)</li>
        <li><strong>Sound Mahmuz (مهموز)</strong> — One of the root letters is hamza. Example: أَكَلَ (to eat)</li>
        <li><strong>Sound Mudha'af (مضعَّف)</strong> — The second and third root letters are identical. Example: مَدَّ (to extend)</li>
      </ul>

      <h2>Weak Verbs (الفعل المعتل)</h2>
      <p>A weak verb contains one or more weak letters (أ, و, ي) in its root. They are categorized by the position of the weak letter:</p>
      <ul>
        <li><strong>Mithal (مثال)</strong> — Weak letter is the first root letter. Example: وَجَدَ (to find)</li>
        <li><strong>Ajwaf (أجوف)</strong> — Weak letter is the second root letter. Example: قَالَ (to say)</li>
        <li><strong>Naqis (ناقص)</strong> — Weak letter is the third root letter. Example: دَعَا (to call)</li>
        <li><strong>Lafif (لفيف)</strong> — Contains two weak letters, either together (لفيف مقرون) or separated (لفيف مفروق)</li>
      </ul>

      <h2>Why This Matters</h2>
      <p>Weak verbs undergo predictable changes in conjugation, particularly in the imperfect tense and imperative mood. Mastering these patterns is crucial for reading classical and modern Arabic texts with fluency.</p>
    `,
    date: "2024-01-15",
  },
  {
    slug: "comparative-and-superlative-in-arabic",
    title: "The Comparative and Superlative افعل التفضيل",
    excerpt:
      "Learn how to form and use the comparative and superlative degrees in Arabic using the iconic أفعل التفضيل pattern, one of the most elegant features of Arabic morphology.",
    content: `
      <h2>What is اسم التفضيل?</h2>
      <p>اسم التفضيل (also known as أفعل التفضيل) is the Arabic elative form used to express the comparative and superlative degrees of adjectives. It follows the pattern <strong>أَفْعَل</strong> for the masculine singular form and <strong>فُعْلَى</strong> for the feminine singular form.</p>

      <h2>Formation Rules</h2>
      <p>To form اسم التفضيل from a three-letter root, simply apply the pattern أَفْعَل:</p>
      <ul>
        <li>كَبِير (big) → أَكْبَر (bigger/biggest)</li>
        <li>صَغِير (small) → أَصْغَر (smaller/smallest)</li>
        <li>جَمِيل (beautiful) → أَجْمَل (more beautiful/most beautiful)</li>
      </ul>

      <h2>Usage in Context</h2>
      <p><strong>Comparative:</strong> The noun being compared is placed in the genitive case after the comparative adjective.</p>
      <p>Example: هُوَ أَكْبَرُ مِنْ أَخِيهِ — "He is older than his brother."</p>
      <p><strong>Superlative:</strong> The definite article or possessive pronoun is used with the superlative form.</p>
      <p>Example: هُوَ أَكْبَرُ الطُّلَّابِ — "He is the oldest student."</p>

      <h2>Irregular Forms</h2>
      <p>Some adjectives have irregular comparative forms that must be memorized, such as خَيْر (better/best) from طَيِّب (good) and شَرّ (worse/worst) from رَدِيء (bad).</p>
    `,
    date: "2024-02-20",
  },
  {
    slug: "root-and-pattern-in-arabic",
    title: "الجذر و الوزن Root and Pattern",
    excerpt:
      "Explore the fundamental concept of the Arabic root and pattern system (الجذر والوزن), the morphological engine that generates meaning across the entire Arabic lexicon.",
    content: `
      <h2>The Genius of Arabic Morphology</h2>
      <p>Arabic is built on a remarkable root-and-pattern system. Most Arabic words are derived from a three-consonant root (جذر) that carries a core semantic meaning. By applying different vowel patterns (أوزان), new related words are generated.</p>

      <h2>The Root (الجذر)</h2>
      <p>A root is typically three consonants (sometimes four) that convey a basic meaning. For example, the root <strong>ك-ت-ب</strong> (K-T-B) carries the meaning of "writing." From this single root, dozens of words are derived:</p>
      <ul>
        <li>كَتَبَ — he wrote</li>
        <li>كِتَاب — book</li>
        <li>مَكْتَب — office/desk</li>
        <li>مَكْتَبَة — library</li>
        <li>كَاتِب — writer</li>
        <li>مَكْتُوب — written/letter</li>
      </ul>

      <h2>The Pattern (الوزن)</h2>
      <p>The pattern determines the grammatical and semantic function of the derived word. Patterns are traditionally described using the dummy root <strong>ف-ع-ل</strong> (F-'-L). For example:</p>
      <ul>
        <li>فَعَلَ — basic verb (كَتَبَ)</li>
        <li>فِعَال — noun of instrument/object (كِتَاب)</li>
        <li>مَفْعَل — noun of place (مَكْتَب)</li>
        <li>فَاعِل — active participle (كَاتِب)</li>
        <li>مَفْعُول — passive participle (مَكْتُوب)</li>
      </ul>

      <h2>Why Learn This?</h2>
      <p>Understanding the root-and-pattern system allows learners to deduce the meaning of unfamiliar words, expand their vocabulary exponentially, and gain deep insight into the logical structure of Arabic. It is the key that unlocks the richness of the Arabic language.</p>
    `,
    date: "2024-03-10",
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
