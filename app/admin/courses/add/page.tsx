'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
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
import { saveCourse, getCourses, type DetailedCourse, type CourseModule } from '@/lib/admin/data-manager'

export default function AddCoursePage() {
  const router = useRouter()
  const { showToast } = useToast()

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '' as DetailedCourse['category'] | '',
    description: '',
    badge: 'FREE COURSE' as 'FREE COURSE' | 'SELF PACED',
    badgeColor: 'bg-[#E65100]',
    rating: '4.5',
    reviewsCount: '0',
    enrolled: '0',
    duration: '',
    modulesCount: 0,
    level: '' as 'Beginner' | 'Intermediate' | 'Advanced' | '',
    instructor: 'LogicEMB Engineering Team',
    instructorRole: 'Lead Hardware Architects',
    bannerGradient: 'linear-gradient(to right bottom, rgb(70, 100, 180), rgb(130, 160, 230))',
    bannerTitle: '',
    bannerSubtitle: '',
    bannerAccent: '',
    image: '',
    prerequisites: [] as string[],
    whatYouWillLearn: [] as string[],
    syllabus: [] as CourseModule[],
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
      bannerTitle: title,
    }))
  }

  const addModule = () => {
    setFormData((prev) => ({
      ...prev,
      syllabus: [
        ...prev.syllabus,
        {
          title: '',
          duration: '',
          lessons: [],
        },
      ],
      modulesCount: prev.syllabus.length + 1,
    }))
  }

  const removeModule = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      syllabus: prev.syllabus.filter((_, i) => i !== index),
      modulesCount: prev.syllabus.length - 1,
    }))
  }

  const updateModule = (index: number, field: keyof CourseModule, value: any) => {
    setFormData((prev) => ({
      ...prev,
      syllabus: prev.syllabus.map((module, i) =>
        i === index ? { ...module, [field]: value } : module
      ),
    }))
  }

  const updateModuleLessons = (index: number, lessonsText: string) => {
    const lessons = lessonsText.split('\n').filter((line) => line.trim())
    updateModule(index, 'lessons', lessons)
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title) newErrors.title = 'Title is required'
    if (!formData.slug) newErrors.slug = 'Slug is required'
    if (!formData.category) newErrors.category = 'Category is required'
    if (!formData.description) newErrors.description = 'Description is required'
    if (!formData.level) newErrors.level = 'Level is required'
    if (!formData.duration) newErrors.duration = 'Duration is required'
    if (!formData.image) newErrors.image = 'Image URL is required'

    // Check slug uniqueness
    const existingCourses = getCourses()
    if (existingCourses.some((c) => c.slug === formData.slug)) {
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

    const newCourse: DetailedCourse = {
      id: `cc-${Date.now()}`,
      ...formData,
      category: formData.category as DetailedCourse['category'],
      level: formData.level as 'Beginner' | 'Intermediate' | 'Advanced',
    }

    saveCourse(newCourse)
    showToast('Course created successfully', 'success')
    router.push('/admin/courses')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
      <FormSection title="Basic Information">
        <FormInput
          label="Course Title"
          value={formData.title}
          onChange={handleTitleChange}
          placeholder="e.g., PCB Design Fundamentals"
          required
          error={errors.title}
        />
        <FormInput
          label="Slug"
          value={formData.slug}
          onChange={(slug) => setFormData((prev) => ({ ...prev, slug }))}
          placeholder="pcb-design-fundamentals"
          required
          error={errors.slug}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormSelect
            label="Category"
            value={formData.category}
            onChange={(category) => setFormData((prev) => ({ ...prev, category: category as DetailedCourse['category'] }))}
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
            onChange={(level) => setFormData((prev) => ({ ...prev, level: level as 'Beginner' | 'Intermediate' | 'Advanced' }))}
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
          onChange={(description) => setFormData((prev) => ({ ...prev, description }))}
          placeholder="Detailed course description..."
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
            onChange={(duration) => setFormData((prev) => ({ ...prev, duration }))}
            placeholder="e.g., 6 Weeks (Self-Paced)"
            required
            error={errors.duration}
          />
          <FormInput
            label="Instructor"
            value={formData.instructor}
            onChange={(instructor) => setFormData((prev) => ({ ...prev, instructor }))}
            placeholder="Instructor name"
          />
        </div>
        <FormInput
          label="Instructor Role"
          value={formData.instructorRole}
          onChange={(instructorRole) => setFormData((prev) => ({ ...prev, instructorRole }))}
          placeholder="e.g., Lead Hardware Architect"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormSelect
            label="Badge"
            value={formData.badge}
            onChange={(badge) => setFormData((prev) => ({ ...prev, badge: badge as 'FREE COURSE' | 'SELF PACED' }))}
            options={[
              { value: 'FREE COURSE', label: 'Free Course' },
              { value: 'SELF PACED', label: 'Self Paced' },
            ]}
          />
          <FormInput
            label="Enrolled"
            value={formData.enrolled}
            onChange={(enrolled) => setFormData((prev) => ({ ...prev, enrolled }))}
            placeholder="e.g., 8.2k+ enrolled"
          />
        </div>
      </FormSection>

      <FormSection title="Banner Configuration">
        <FormInput
          label="Banner Title"
          value={formData.bannerTitle}
          onChange={(bannerTitle) => setFormData((prev) => ({ ...prev, bannerTitle }))}
          placeholder="Displayed on course banner"
        />
        <FormInput
          label="Banner Subtitle"
          value={formData.bannerSubtitle}
          onChange={(bannerSubtitle) => setFormData((prev) => ({ ...prev, bannerSubtitle }))}
          placeholder="Subtitle text"
        />
        <FormInput
          label="Banner Accent"
          value={formData.bannerAccent}
          onChange={(bannerAccent) => setFormData((prev) => ({ ...prev, bannerAccent }))}
          placeholder="Accent text"
        />
      </FormSection>

      <FormSection title="Media">
        <ImagePreview
          label="Course Image"
          imageUrl={formData.image}
          onChange={(image) => setFormData((prev) => ({ ...prev, image }))}
          required
        />
      </FormSection>

      <FormSection title="Learning Objectives">
        <TagInput
          label="Prerequisites"
          tags={formData.prerequisites}
          onChange={(prerequisites) => setFormData((prev) => ({ ...prev, prerequisites }))}
          placeholder="Add prerequisite and press Enter"
        />
        <TagInput
          label="What You Will Learn"
          tags={formData.whatYouWillLearn}
          onChange={(whatYouWillLearn) => setFormData((prev) => ({ ...prev, whatYouWillLearn }))}
          placeholder="Add learning outcome and press Enter"
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
                placeholder="e.g., Introduction to PCB Design"
              />
              <FormInput
                label="Duration"
                value={module.duration}
                onChange={(duration) => updateModule(index, 'duration', duration)}
                placeholder="e.g., 2 hours"
              />
              <FormTextarea
                label="Lessons (one per line)"
                value={module.lessons.join('\n')}
                onChange={(text) => updateModuleLessons(index, text)}
                placeholder="Lesson 1\nLesson 2\nLesson 3"
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
          Create Course
        </button>
      </div>
    </form>
  )
}
