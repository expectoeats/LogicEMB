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
import { saveProject, getProjects, type ProjectItem } from '@/lib/admin/data-manager'

export default function AddProjectPage() {
  const router = useRouter()
  const { showToast } = useToast()

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    category: '',
    difficulty: '' as 'Beginner' | 'Intermediate' | 'Advanced' | '',
    components: [] as string[],
    image: '',
    githubUrl: '',
    liveUrl: '',
    status: 'Draft' as 'Draft' | 'Published',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.title) newErrors.title = 'Title is required'
    if (!formData.slug) newErrors.slug = 'Slug is required'
    if (!formData.description) newErrors.description = 'Description is required'
    if (!formData.category) newErrors.category = 'Category is required'
    if (!formData.difficulty) newErrors.difficulty = 'Difficulty is required'

    const existingProjects = getProjects()
    if (existingProjects.some((p) => p.slug === formData.slug)) {
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

    const now = new Date().toISOString().split('T')[0]
    const newProject: ProjectItem = {
      id: `proj-${Date.now()}`,
      ...formData,
      difficulty: formData.difficulty as 'Beginner' | 'Intermediate' | 'Advanced',
      createdAt: now,
      updatedAt: now,
    }

    saveProject(newProject)
    showToast('Project created successfully', 'success')
    router.push('/admin/projects')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
      <FormSection title="Basic Information">
        <FormInput
          label="Project Title"
          value={formData.title}
          onChange={(title) =>
            setFormData((prev) => ({ ...prev, title, slug: generateSlug(title) }))
          }
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
          <FormInput
            label="Category"
            value={formData.category}
            onChange={(category) => setFormData((prev) => ({ ...prev, category }))}
            placeholder="e.g., IoT, PCB Design"
            required
            error={errors.category}
          />
          <FormSelect
            label="Difficulty"
            value={formData.difficulty}
            onChange={(difficulty) =>
              setFormData((prev) => ({ ...prev, difficulty: difficulty as any }))
            }
            options={[
              { value: 'Beginner', label: 'Beginner' },
              { value: 'Intermediate', label: 'Intermediate' },
              { value: 'Advanced', label: 'Advanced' },
            ]}
            required
            error={errors.difficulty}
          />
        </div>
        <FormTextarea
          label="Description"
          value={formData.description}
          onChange={(description) => setFormData((prev) => ({ ...prev, description }))}
          required
          rows={4}
          error={errors.description}
        />
      </FormSection>

      <FormSection title="Components & Media">
        <TagInput
          label="Components"
          tags={formData.components}
          onChange={(components) => setFormData((prev) => ({ ...prev, components }))}
          placeholder="Add component and press Enter"
        />
        <ImagePreview
          label="Project Image"
          imageUrl={formData.image}
          onChange={(image) => setFormData((prev) => ({ ...prev, image }))}
        />
      </FormSection>

      <FormSection title="Links">
        <FormInput
          label="GitHub URL"
          value={formData.githubUrl}
          onChange={(githubUrl) => setFormData((prev) => ({ ...prev, githubUrl }))}
          placeholder="https://github.com/..."
        />
        <FormInput
          label="Live URL"
          value={formData.liveUrl}
          onChange={(liveUrl) => setFormData((prev) => ({ ...prev, liveUrl }))}
          placeholder="https://..."
        />
        <FormSelect
          label="Status"
          value={formData.status}
          onChange={(status) => setFormData((prev) => ({ ...prev, status: status as any }))}
          options={[
            { value: 'Draft', label: 'Draft' },
            { value: 'Published', label: 'Published' },
          ]}
        />
      </FormSection>

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
          Create Project
        </button>
      </div>
    </form>
  )
}
