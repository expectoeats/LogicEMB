'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { DataTable, TableColumn } from '@/components/admin/DataTable'
import { ConfirmModal } from '@/components/admin/Modal'
import { useToast } from '@/components/admin/Toast'
import { getCourses, deleteCourse, type DetailedCourse } from '@/lib/admin/data-manager'

export default function CoursesPage() {
  const router = useRouter()
  const { showToast } = useToast()
  const [courses, setCourses] = useState<DetailedCourse[]>([])
  const [courseToDelete, setCourseToDelete] = useState<DetailedCourse | null>(null)

  useEffect(() => {
    loadCourses()
  }, [])

  const loadCourses = () => {
    setCourses(getCourses())
  }

  const handleEdit = (course: DetailedCourse) => {
    router.push(`/admin/courses/${course.id}/edit`)
  }

  const handleDelete = (course: DetailedCourse) => {
    setCourseToDelete(course)
  }

  const confirmDelete = () => {
    if (courseToDelete) {
      deleteCourse(courseToDelete.id)
      loadCourses()
      showToast('Course deleted successfully', 'success')
      setCourseToDelete(null)
    }
  }

  const handleBulkDelete = (coursesToDelete: DetailedCourse[]) => {
    coursesToDelete.forEach((course) => deleteCourse(course.id))
    loadCourses()
    showToast(`${coursesToDelete.length} courses deleted successfully`, 'success')
  }

  const columns: TableColumn<DetailedCourse>[] = [
    {
      key: 'title',
      label: 'Title',
      render: (course) => (
        <div className="max-w-md">
          <p className="font-semibold text-gray-900 line-clamp-1">{course.title}</p>
        </div>
      ),
    },
    {
      key: 'category',
      label: 'Category',
      render: (course) => (
        <span className="inline-block px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
          {course.category}
        </span>
      ),
    },
    {
      key: 'level',
      label: 'Level',
      render: (course) => (
        <span
          className={`inline-block px-2 py-1 text-xs rounded ${
            course.level === 'Beginner'
              ? 'bg-green-100 text-green-800'
              : course.level === 'Intermediate'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {course.level}
        </span>
      ),
    },
    {
      key: 'enrolled',
      label: 'Enrolled',
    },
    {
      key: 'duration',
      label: 'Duration',
    },
    {
      key: 'modulesCount',
      label: 'Modules',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#071A30]">All Courses</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your course content</p>
        </div>
        <Link
          href="/admin/courses/add"
          className="flex items-center gap-2 px-4 py-2 bg-[#E65100] text-white rounded-lg text-sm font-medium hover:bg-[#BF360C] transition-colors"
        >
          <Plus size={20} />
          Add Course
        </Link>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={courses}
        keyExtractor={(course) => course.id}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onBulkDelete={handleBulkDelete}
        searchPlaceholder="Search courses..."
      />

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={!!courseToDelete}
        onClose={() => setCourseToDelete(null)}
        onConfirm={confirmDelete}
        title="Delete Course"
        message={`Are you sure you want to delete "${courseToDelete?.title}"? This action cannot be undone.`}
        confirmLabel="Delete"
        variant="danger"
      />
    </div>
  )
}
