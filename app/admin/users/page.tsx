'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { DataTable, TableColumn } from '@/components/admin/DataTable'
import { ConfirmModal } from '@/components/admin/Modal'
import { useToast } from '@/components/admin/Toast'
import { getUsers, deleteUser, type UserItem } from '@/lib/admin/data-manager'

export default function UsersPage() {
  const router = useRouter()
  const { showToast } = useToast()
  const [users, setUsers] = useState<UserItem[]>([])
  const [userToDelete, setUserToDelete] = useState<UserItem | null>(null)

  useEffect(() => {
    setUsers(getUsers())
  }, [])

  const loadUsers = () => setUsers(getUsers())

  const handleEdit = (user: UserItem) => {
    router.push(`/admin/users/${user.id}`)
  }

  const handleDelete = (user: UserItem) => {
    setUserToDelete(user)
  }

  const confirmDelete = () => {
    if (userToDelete) {
      deleteUser(userToDelete.id)
      loadUsers()
      showToast('User deleted successfully', 'success')
      setUserToDelete(null)
    }
  }

  const handleBulkDelete = (usersToDelete: UserItem[]) => {
    usersToDelete.forEach((user) => deleteUser(user.id))
    loadUsers()
    showToast(`${usersToDelete.length} users deleted successfully`, 'success')
  }

  const columns: TableColumn<UserItem>[] = [
    {
      key: 'name',
      label: 'User',
      render: (user) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">
            {user.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-sm">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'role',
      label: 'Role',
      render: (user) => (
        <span
          className={`inline-block px-2 py-1 text-xs rounded ${
            user.role === 'Admin'
              ? 'bg-purple-100 text-purple-800'
              : user.role === 'Editor'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {user.role}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (user) => (
        <span
          className={`inline-block px-2 py-1 text-xs rounded ${
            user.status === 'Active'
              ? 'bg-green-100 text-green-800'
              : user.status === 'Blocked'
              ? 'bg-red-100 text-red-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {user.status}
        </span>
      ),
    },
    {
      key: 'joinedAt',
      label: 'Joined',
    },
    {
      key: 'lastLogin',
      label: 'Last Login',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#071A30]">All Users</h1>
        <p className="text-sm text-gray-500 mt-1">Manage user accounts and permissions</p>
      </div>

      <DataTable
        columns={columns}
        data={users}
        keyExtractor={(user) => user.id}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onBulkDelete={handleBulkDelete}
        searchPlaceholder="Search users..."
      />

      <ConfirmModal
        isOpen={!!userToDelete}
        onClose={() => setUserToDelete(null)}
        onConfirm={confirmDelete}
        title="Delete User"
        message={`Are you sure you want to delete "${userToDelete?.name}"?`}
        confirmLabel="Delete"
        variant="danger"
      />
    </div>
  )
}
