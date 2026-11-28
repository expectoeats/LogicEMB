'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Plus, Trash2 } from 'lucide-react'
import {
  FormInput,
  FormTextarea,
  FormSelect,
  TagInput,
  ImagePreview,
  FormSection,
} from '@/components/admin/FormComponents'
import { useToast } from '@/components/admin/Toast'
import { saveCourse, getCourse, type DetailedCourse, type CourseModule } from '@/lib/admin/data-manager'

export default function EditCoursePage() {
  const router = useRouter()
  const params = useParams()
  const { showToast } = useToast()
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  const [formData, setFormData] = useState<DetailedCourse | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    const courseId = params.id as string
    const course = getCourse(courseId)
    
    if (course) {
      setFormData(course)
    } else {
      setNotFound(true)
    }
    setLoading(false)
  }, [params.id])

  const updateModule = (index: number, field: keyof CourseModule, value: any) => {
    if (!formData) return
    setFormData({
      ...formData,
      syllabus: formData.syllabus.map((module, i) =>
        i === index ? { ...module, [field]: value } : module
      ),
    })
  }

  const updateModuleLessons = (index: number, lessonsText: string) => {
    const lessons = lessonsText.split('\n').filter((line) => line.trim())
    updateModule(index, 'lessons', lessons)
  }

  const addModule = () => {
    if (!formData) return
    setFormData({
      ...formData,
      syllabus: [
        ...formData.syllabus,
        {
          title: '',
          duration: '',
          lessons: [],
        },
      ],
      modulesCount: formData.syllabus.length + 1,
    })
  }

  const removeModule = (index: number) => {
    if (!formData) return
    setFormData({
      ...formData,
      syllabus: formData.syllabus.filter((_, i) => i !== index),
      modulesCount: formData.syllabus.length - 1,
    })
  }

  const validate = () => {
    if (!formData) return false
    const newErrors: Record<string, string> = {}

    if (!formData.title) newErrors.title = 'Title is required'
    if (!formData.slug) newErrors.slug = 'Slug is required'
    if (!formData.category) newErrors.category = 'Category is required'
    if (!formData.description) newErrors.description = 'Description is required'
    if (!formData.level) newErrors.level = 'Level is required'
    if (!formData.duration) newErrors.duration = 'Duration is required'
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

    saveCourse(formData)
    showToast('Course updated successfully', 'success')
    router.push('/admin/courses')
  }

  if (loading) {
    return <div className="text-center py-12">Loading...</div>
  }

  if (notFound || !formData) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Course not found</p>
        <button
          onClick={() => router.push('/admin/courses')}
          className="mt-4 text-[#E65100] hover:underline"
        >
          Back to Courses
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
      <FormSection title="Basic Information">
        <FormInput
          label="Course Title"
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
          error={errors.slug}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormSelect
            label="Category"
            value={formData.category}
            onChange={(category) => setFormData({ ...formData, category: category as DetailedCourse['category'] })}
            options={[
              { value: 'PCB Design', label: 'PCB Design' },
              { value: 'Embedded Systems', label: 'Embedded Systems' },
              { value: 'Python', label: 'Python' },
              { value: 'Electronics', label: 'Electronics' },
              { value: 'Microcontrollers', label: 'Microcontrollers' },
              { value: 'IoT', label: 'IoT' },
            ]}
            required
            error={errors.category}
          />
          <FormSelect
            label="Level"
            value={formData.level}
            onChange={(level) => setFormData({ ...formData, level: level as 'Beginner' | 'Intermediate' | 'Advanced' })}
            options={[
              { value: 'Beginner', label: 'Beginner' },
              { value: 'Intermediate', label: 'Intermediate' },
              { value: 'Advanced', label: 'Advanced' },
            ]}
            required
            error={errors.level}
          />
        </div>
        <FormTextarea
          label="Description"
          value={formData.description}
          onChange={(description) => setFormData({ ...formData, description })}
          required
          rows={4}
          error={errors.description}
        />
      </FormSection>

      <FormSection title="Course Details">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Duration"
            value={formData.duration}
            onChange={(duration) => setFormData({ ...formData, duration })}
            required
            error={errors.duration}
          />
          <FormInput
            label="Instructor"
            value={formData.instructor}
            onChange={(instructor) => setFormData({ ...formData, instructor })}
          />
        </div>
        <FormInput
          label="Instructor Role"
          value={formData.instructorRole}
          onChange={(instructorRole) => setFormData({ ...formData, instructorRole })}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormSelect
            label="Badge"
            value={formData.badge}
            onChange={(badge) => setFormData({ ...formData, badge: badge as 'FREE COURSE' | 'SELF PACED' })}
            options={[
              { value: 'FREE COURSE', label: 'Free Course' },
              { value: 'SELF PACED', label: 'Self Paced' },
            ]}
          />
          <FormInput
            label="Enrolled"
            value={formData.enrolled}
            onChange={(enrolled) => setFormData({ ...formData, enrolled })}
          />
        </div>
      </FormSection>

      <FormSection title="Media">
        <ImagePreview
          label="Course Image"
          imageUrl={formData.image}
          onChange={(image) => setFormData({ ...formData, image })}
          required
        />
      </FormSection>

      <FormSection title="Learning Objectives">
        <TagInput
          label="Prerequisites"
          tags={formData.prerequisites}
          onChange={(prerequisites) => setFormData({ ...formData, prerequisites })}
        />
        <TagInput
          label="What You Will Learn"
          tags={formData.whatYouWillLearn}
          onChange={(whatYouWillLearn) => setFormData({ ...formData, whatYouWillLearn })}
        />
      </FormSection>

      <FormSection title="Syllabus">
        <div className="space-y-4">
          {formData.syllabus.map((module, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-900">Module {index + 1}</h4>
                <button
                  type="button"
                  onClick={() => removeModule(index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <FormInput
                label="Module Title"
                value={module.title}
                onChange={(title) => updateModule(index, 'title', title)}
              />
              <FormInput
                label="Duration"
                value={module.duration}
                onChange={(duration) => updateModule(index, 'duration', duration)}
              />
              <FormTextarea
                label="Lessons (one per line)"
                value={module.lessons.join('\n')}
                onChange={(text) => updateModuleLessons(index, text)}
                rows={4}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addModule}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-[#E65100] hover:text-[#E65100] transition-colors"
          >
            <Plus size={20} />
            Add Module
          </button>
        </div>
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
          Update Course
        </button>
      </div>
    </form>
  )
}
