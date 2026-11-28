'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Plus, Clock } from 'lucide-react'
import { DataTable, TableColumn } from '@/components/admin/DataTable'
import { ConfirmModal } from '@/components/admin/Modal'
import { useToast } from '@/components/admin/Toast'
import { getTutorials, deleteTutorial, type TutorialItem } from '@/lib/admin/data-manager'

export default function TutorialsPage() {
  const router = useRouter()
  const { showToast } = useToast()
  const [tutorials, setTutorials] = useState<TutorialItem[]>([])
  const [tutorialToDelete, setTutorialToDelete] = useState<TutorialItem | null>(null)

  useEffect(() => {
    loadTutorials()
  }, [])

  const loadTutorials = () => {
    setTutorials(getTutorials())
  }

  const handleEdit = (tutorial: TutorialItem) => {
    router.push(`/admin/tutorials/${tutorial.id}/edit`)
  }

  const handleDelete = (tutorial: TutorialItem) => {
    setTutorialToDelete(tutorial)
  }

  const confirmDelete = () => {
    if (tutorialToDelete) {
      deleteTutorial(tutorialToDelete.id)
      loadTutorials()
      showToast('Tutorial deleted successfully', 'success')
      setTutorialToDelete(null)
    }
  }

  const handleBulkDelete = (tutorialsToDelete: TutorialItem[]) => {
    tutorialsToDelete.forEach((tutorial) => deleteTutorial(tutorial.id))
    loadTutorials()
    showToast(`${tutorialsToDelete.length} tutorials deleted successfully`, 'success')
  }

  const columns: TableColumn<TutorialItem>[] = [
    {
      key: 'title',
      label: 'Title',
      render: (tutorial) => (
        <div className="max-w-md">
          <p className="font-semibold text-gray-900 line-clamp-1">{tutorial.title}</p>
        </div>
      ),
    },
    {
      key: 'category',
      label: 'Category',
      render: (tutorial) => (
        <span className="inline-block px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
          {tutorial.category}
        </span>
      ),
    },
    {
      key: 'difficulty',
      label: 'Difficulty',
      render: (tutorial) => (
        <span
          className={`inline-block px-2 py-1 text-xs rounded ${
            tutorial.difficulty === 'Beginner'
              ? 'bg-green-100 text-green-800'
              : tutorial.difficulty === 'Intermediate'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {tutorial.difficulty}
        </span>
      ),
    },
    {
      key: 'readTime',
      label: 'Read Time',
      render: (tutorial) => (
        <span className="flex items-center gap-1 text-sm text-gray-600">
          <Clock size={14} />
          {tutorial.readTime}
        </span>
      ),
    },
    {
      key: 'author',
      label: 'Author',
    },
    {
      key: 'date',
      label: 'Date',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#071A30]">All Tutorials</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your tutorial content</p>
        </div>
        <Link
          href="/admin/tutorials/add"
          className="flex items-center gap-2 px-4 py-2 bg-[#E65100] text-white rounded-lg text-sm font-medium hover:bg-[#BF360C] transition-colors"
        >
          <Plus size={20} />
          Add Tutorial
        </Link>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={tutorials}
        keyExtractor={(tutorial) => tutorial.id}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onBulkDelete={handleBulkDelete}
        searchPlaceholder="Search tutorials..."
      />

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={!!tutorialToDelete}
        onClose={() => setTutorialToDelete(null)}
        onConfirm={confirmDelete}
        title="Delete Tutorial"
        message={`Are you sure you want to delete "${tutorialToDelete?.title}"? This action cannot be undone.`}
        confirmLabel="Delete"
        variant="danger"
      />
    </div>
  )
}
