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
import { saveProject, getProject, type ProjectItem } from '@/lib/admin/data-manager'

export default function EditProjectPage() {
  const router = useRouter()
  const params = useParams()
  const { showToast } = useToast()
  const [formData, setFormData] = useState<ProjectItem | null>(null)

  useEffect(() => {
    const project = getProject(params.id as string)
    if (project) setFormData(project)
  }, [params.id])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData) return

    saveProject({ ...formData, updatedAt: new Date().toISOString().split('T')[0] })
    showToast('Project updated successfully', 'success')
    router.push('/admin/projects')
  }

  if (!formData) {
    return <div className="text-center py-12">Loading...</div>
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
      <FormSection title="Basic Information">
        <FormInput
          label="Project Title"
          value={formData.title}
          onChange={(title) => setFormData({ ...formData, title })}
          required
        />
        <FormTextarea
          label="Description"
          value={formData.description}
          onChange={(description) => setFormData({ ...formData, description })}
          required
          rows={4}
        />
        <FormSelect
          label="Difficulty"
          value={formData.difficulty}
          onChange={(difficulty) => setFormData({ ...formData, difficulty: difficulty as any })}
          options={[
            { value: 'Beginner', label: 'Beginner' },
            { value: 'Intermediate', label: 'Intermediate' },
            { value: 'Advanced', label: 'Advanced' },
          ]}
        />
        <FormSelect
          label="Status"
          value={formData.status}
          onChange={(status) => setFormData({ ...formData, status: status as any })}
          options={[
            { value: 'Draft', label: 'Draft' },
            { value: 'Published', label: 'Published' },
          ]}
        />
      </FormSection>

      <FormSection title="Media & Links">
        <ImagePreview
          label="Project Image"
          imageUrl={formData.image}
          onChange={(image) => setFormData({ ...formData, image })}
        />
        <FormInput
          label="GitHub URL"
          value={formData.githubUrl}
          onChange={(githubUrl) => setFormData({ ...formData, githubUrl })}
        />
        <FormInput
          label="Live URL"
          value={formData.liveUrl}
          onChange={(liveUrl) => setFormData({ ...formData, liveUrl })}
        />
      </FormSection>

      <div className="flex items-center justify-end gap-4 pt-6 border-t">
        <button type="button" onClick={() => router.back()} className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          Cancel
        </button>
        <button type="submit" className="px-6 py-2 bg-[#E65100] text-white rounded-lg hover:bg-[#BF360C] font-medium">
          Update Project
        </button>
      </div>
    </form>
  )
}
