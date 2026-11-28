'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  FormInput,
  FormTextarea,
  FormSelect,
  TagInput,
  ImagePreview,
  FormSection,
} from '@/components/admin/FormComponents'
import { useToast } from '@/components/admin/Toast'
import { saveTutorial, getTutorials, type TutorialItem } from '@/lib/admin/data-manager'

export default function AddTutorialPage() {
  const router = useRouter()
  const { showToast } = useToast()

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '' as TutorialItem['category'] | '',
    categoryColor: 'bg-blue-100 text-blue-800 border-blue-200',
    readTime: '',
    date: new Date().toISOString().split('T')[0],
    author: 'LogicEMB Hardware Lab',
    difficulty: '' as 'Beginner' | 'Intermediate' | 'Advanced' | '',
    image: '',
    excerpt: '',
    tags: [] as string[],
    keyTakeaways: [] as string[],
    codeFilename: '',
    codeLanguage: '',
    codeSnippet: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  }

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title) newErrors.title = 'Title is required'
    if (!formData.slug) newErrors.slug = 'Slug is required'
    if (!formData.category) newErrors.category = 'Category is required'
    if (!formData.difficulty) newErrors.difficulty = 'Difficulty is required'
    if (!formData.readTime) newErrors.readTime = 'Read time is required'
    if (!formData.excerpt) newErrors.excerpt = 'Excerpt is required'
    if (!formData.image) newErrors.image = 'Image URL is required'

    // Check slug uniqueness
    const existingTutorials = getTutorials()
    if (existingTutorials.some((t) => t.slug === formData.slug)) {
      newErrors.slug = 'Slug already exists'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      showToast('Please fix all errors', 'error')
      return
    }

    const newTutorial: TutorialItem = {
      id: `tut-${Date.now()}`,
      slug: formData.slug,
      title: formData.title,
      category: formData.category as TutorialItem['category'],
      categoryColor: formData.categoryColor,
      readTime: formData.readTime,
      date: formData.date,
      author: formData.author,
      difficulty: formData.difficulty as 'Beginner' | 'Intermediate' | 'Advanced',
      image: formData.image,
      excerpt: formData.excerpt,
      tags: formData.tags,
      keyTakeaways: formData.keyTakeaways,
      codeSnippet:
        formData.codeFilename && formData.codeLanguage && formData.codeSnippet
          ? {
              filename: formData.codeFilename,
              language: formData.codeLanguage,
              code: formData.codeSnippet,
            }
          : undefined,
    }

    saveTutorial(newTutorial)
    showToast('Tutorial created successfully', 'success')
    router.push('/admin/tutorials')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
      <FormSection title="Basic Information">
        <FormInput
          label="Tutorial Title"
          value={formData.title}
          onChange={handleTitleChange}
          required
          error={errors.title}
        />
        <FormInput
          label="Slug"
          value={formData.slug}
          onChange={(slug) => setFormData((prev) => ({ ...prev, slug }))}
          required
          error={errors.slug}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormSelect
            label="Category"
            value={formData.category}
            onChange={(category) => setFormData((prev) => ({ ...prev, category: category as TutorialItem['category'] }))}
            options={[
              { value: 'PCB Design', label: 'PCB Design' },
              { value: 'Embedded C', label: 'Embedded C' },
              { value: 'Python', label: 'Python' },
              { value: 'Electronics', label: 'Electronics' },
              { value: 'Microcontrollers', label: 'Microcontrollers' },
              { value: 'JavaScript', label: 'JavaScript' },
            ]}
            required
            error={errors.category}
          />
          <FormSelect
            label="Difficulty"
            value={formData.difficulty}
            onChange={(difficulty) => setFormData((prev) => ({ ...prev, difficulty: difficulty as 'Beginner' | 'Intermediate' | 'Advanced' }))}
            options={[
              { value: 'Beginner', label: 'Beginner' },
              { value: 'Intermediate', label: 'Intermediate' },
              { value: 'Advanced', label: 'Advanced' },
            ]}
            required
            error={errors.difficulty}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Read Time"
            value={formData.readTime}
            onChange={(readTime) => setFormData((prev) => ({ ...prev, readTime }))}
            placeholder="e.g., 9 min read"
            required
            error={errors.readTime}
          />
          <FormInput
            label="Author"
            value={formData.author}
            onChange={(author) => setFormData((prev) => ({ ...prev, author }))}
          />
        </div>
        <FormTextarea
          label="Excerpt"
          value={formData.excerpt}
          onChange={(excerpt) => setFormData((prev) => ({ ...prev, excerpt }))}
          placeholder="Short description of the tutorial..."
          required
          rows={3}
          error={errors.excerpt}
        />
      </FormSection>

      <FormSection title="Media">
        <ImagePreview
          label="Tutorial Image"
          imageUrl={formData.image}
          onChange={(image) => setFormData((prev) => ({ ...prev, image }))}
          required
        />
      </FormSection>

      <FormSection title="Content">
        <TagInput
          label="Tags"
          tags={formData.tags}
          onChange={(tags) => setFormData((prev) => ({ ...prev, tags }))}
          placeholder="Add tag and press Enter"
        />
        <TagInput
          label="Key Takeaways"
          tags={formData.keyTakeaways}
          onChange={(keyTakeaways) => setFormData((prev) => ({ ...prev, keyTakeaways }))}
          placeholder="Add takeaway and press Enter"
        />
      </FormSection>

      <FormSection title="Code Snippet (Optional)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Filename"
            value={formData.codeFilename}
            onChange={(codeFilename) => setFormData((prev) => ({ ...prev, codeFilename }))}
            placeholder="e.g., example.c"
          />
          <FormInput
            label="Language"
            value={formData.codeLanguage}
            onChange={(codeLanguage) => setFormData((prev) => ({ ...prev, codeLanguage }))}
            placeholder="e.g., c, python, javascript"
          />
        </div>
        <FormTextarea
          label="Code"
          value={formData.codeSnippet}
          onChange={(codeSnippet) => setFormData((prev) => ({ ...prev, codeSnippet }))}
          placeholder="Paste code here..."
          rows={10}
        />
      </FormSection>

      {/* Submit */}
      <div className="flex items-center justify-end gap-4 pt-6 border-t">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[#E65100] text-white rounded-lg hover:bg-[#BF360C] transition-colors font-medium"
        >
          Create Tutorial
        </button>
      </div>
    </form>
  )
}
