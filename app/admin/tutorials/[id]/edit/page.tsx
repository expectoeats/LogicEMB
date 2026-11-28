'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import {
  FormInput,
  FormTextarea,
  FormSelect,
  TagInput,
  ImagePreview,
  FormSection,
} from '@/components/admin/FormComponents'
import { useToast } from '@/components/admin/Toast'
import { saveTutorial, getTutorial, type TutorialItem } from '@/lib/admin/data-manager'

export default function EditTutorialPage() {
  const router = useRouter()
  const params = useParams()
  const { showToast } = useToast()
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState<TutorialItem | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [codeData, setCodeData] = useState({
    filename: '',
    language: '',
    code: '',
  })

  useEffect(() => {
    const tutorialId = params.id as string
    const tutorial = getTutorial(tutorialId)
    
    if (tutorial) {
      setFormData(tutorial)
      if (tutorial.codeSnippet) {
        setCodeData({
          filename: tutorial.codeSnippet.filename,
          language: tutorial.codeSnippet.language,
          code: tutorial.codeSnippet.code,
        })
      }
    }
    setLoading(false)
  }, [params.id])

  const validate = () => {
    if (!formData) return false
    const newErrors: Record<string, string> = {}

    if (!formData.title) newErrors.title = 'Title is required'
    if (!formData.excerpt) newErrors.excerpt = 'Excerpt is required'
    if (!formData.image) newErrors.image = 'Image URL is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData || !validate()) {
      showToast('Please fix all errors', 'error')
      return
    }

    const updatedTutorial: TutorialItem = {
      ...formData,
      codeSnippet:
        codeData.filename && codeData.language && codeData.code
          ? {
              filename: codeData.filename,
              language: codeData.language,
              code: codeData.code,
            }
          : undefined,
    }

    saveTutorial(updatedTutorial)
    showToast('Tutorial updated successfully', 'success')
    router.push('/admin/tutorials')
  }

  if (loading) {
    return <div className="text-center py-12">Loading...</div>
  }

  if (!formData) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Tutorial not found</p>
        <button
          onClick={() => router.push('/admin/tutorials')}
          className="mt-4 text-[#E65100] hover:underline"
        >
          Back to Tutorials
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
      <FormSection title="Basic Information">
        <FormInput
          label="Tutorial Title"
          value={formData.title}
          onChange={(title) => setFormData({ ...formData, title })}
          required
          error={errors.title}
        />
        <FormInput
          label="Slug"
          value={formData.slug}
          onChange={(slug) => setFormData({ ...formData, slug })}
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormSelect
            label="Category"
            value={formData.category}
            onChange={(category) => setFormData({ ...formData, category: category as TutorialItem['category'] })}
            options={[
              { value: 'PCB Design', label: 'PCB Design' },
              { value: 'Embedded C', label: 'Embedded C' },
              { value: 'Python', label: 'Python' },
              { value: 'Electronics', label: 'Electronics' },
              { value: 'Microcontrollers', label: 'Microcontrollers' },
              { value: 'JavaScript', label: 'JavaScript' },
            ]}
            required
          />
          <FormSelect
            label="Difficulty"
            value={formData.difficulty}
            onChange={(difficulty) => setFormData({ ...formData, difficulty: difficulty as 'Beginner' | 'Intermediate' | 'Advanced' })}
            options={[
              { value: 'Beginner', label: 'Beginner' },
              { value: 'Intermediate', label: 'Intermediate' },
              { value: 'Advanced', label: 'Advanced' },
            ]}
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Read Time"
            value={formData.readTime}
            onChange={(readTime) => setFormData({ ...formData, readTime })}
            required
          />
          <FormInput
            label="Author"
            value={formData.author}
            onChange={(author) => setFormData({ ...formData, author })}
          />
        </div>
        <FormTextarea
          label="Excerpt"
          value={formData.excerpt}
          onChange={(excerpt) => setFormData({ ...formData, excerpt })}
          required
          rows={3}
          error={errors.excerpt}
        />
      </FormSection>

      <FormSection title="Media">
        <ImagePreview
          label="Tutorial Image"
          imageUrl={formData.image}
          onChange={(image) => setFormData({ ...formData, image })}
          required
        />
      </FormSection>

      <FormSection title="Content">
        <TagInput
          label="Tags"
          tags={formData.tags}
          onChange={(tags) => setFormData({ ...formData, tags })}
        />
        <TagInput
          label="Key Takeaways"
          tags={formData.keyTakeaways}
          onChange={(keyTakeaways) => setFormData({ ...formData, keyTakeaways })}
        />
      </FormSection>

      <FormSection title="Code Snippet (Optional)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Filename"
            value={codeData.filename}
            onChange={(filename) => setCodeData((prev) => ({ ...prev, filename }))}
          />
          <FormInput
            label="Language"
            value={codeData.language}
            onChange={(language) => setCodeData((prev) => ({ ...prev, language }))}
          />
        </div>
        <FormTextarea
          label="Code"
          value={codeData.code}
          onChange={(code) => setCodeData((prev) => ({ ...prev, code }))}
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
          Update Tutorial
        </button>
      </div>
    </form>
  )
}
