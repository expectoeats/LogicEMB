'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { DataTable, TableColumn } from '@/components/admin/DataTable'
import { ConfirmModal } from '@/components/admin/Modal'
import { useToast } from '@/components/admin/Toast'
import { getProjects, deleteProject, type ProjectItem } from '@/lib/admin/data-manager'

export default function ProjectsPage() {
  const router = useRouter()
  const { showToast } = useToast()
  const [projects, setProjects] = useState<ProjectItem[]>([])
  const [projectToDelete, setProjectToDelete] = useState<ProjectItem | null>(null)

  useEffect(() => {
    setProjects(getProjects())
  }, [])

  const loadProjects = () => setProjects(getProjects())

  const handleEdit = (project: ProjectItem) => {
    router.push(`/admin/projects/${project.id}/edit`)
  }

  const handleDelete = (project: ProjectItem) => {
    setProjectToDelete(project)
  }

  const confirmDelete = () => {
    if (projectToDelete) {
      deleteProject(projectToDelete.id)
      loadProjects()
      showToast('Project deleted successfully', 'success')
      setProjectToDelete(null)
    }
  }

  const handleBulkDelete = (projectsToDelete: ProjectItem[]) => {
    projectsToDelete.forEach((project) => deleteProject(project.id))
    loadProjects()
    showToast(`${projectsToDelete.length} projects deleted successfully`, 'success')
  }

  const columns: TableColumn<ProjectItem>[] = [
    {
      key: 'title',
      label: 'Title',
      render: (project) => (
        <div className="max-w-md">
          <p className="font-semibold text-gray-900 line-clamp-1">{project.title}</p>
        </div>
      ),
    },
    {
      key: 'category',
      label: 'Category',
      render: (project) => (
        <span className="inline-block px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
          {project.category}
        </span>
      ),
    },
    {
      key: 'difficulty',
      label: 'Difficulty',
      render: (project) => (
        <span
          className={`inline-block px-2 py-1 text-xs rounded ${
            project.difficulty === 'Beginner'
              ? 'bg-green-100 text-green-800'
              : project.difficulty === 'Intermediate'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {project.difficulty}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (project) => (
        <span
          className={`inline-block px-2 py-1 text-xs rounded ${
            project.status === 'Published'
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {project.status}
        </span>
      ),
    },
    {
      key: 'updatedAt',
      label: 'Last Updated',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#071A30]">All Projects</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your project portfolio</p>
        </div>
        <Link
          href="/admin/projects/add"
          className="flex items-center gap-2 px-4 py-2 bg-[#E65100] text-white rounded-lg text-sm font-medium hover:bg-[#BF360C] transition-colors"
        >
          <Plus size={20} />
          Add Project
        </Link>
      </div>

      <DataTable
        columns={columns}
        data={projects}
        keyExtractor={(project) => project.id}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onBulkDelete={handleBulkDelete}
        searchPlaceholder="Search projects..."
      />

      <ConfirmModal
        isOpen={!!projectToDelete}
        onClose={() => setProjectToDelete(null)}
        onConfirm={confirmDelete}
        title="Delete Project"
        message={`Are you sure you want to delete "${projectToDelete?.title}"?`}
        confirmLabel="Delete"
        variant="danger"
      />
    </div>
  )
}
