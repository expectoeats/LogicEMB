'use client'

import { ChangeEvent, useState, KeyboardEvent } from 'react'
import { X, Plus } from 'lucide-react'
import Image from 'next/image'

interface FormInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  placeholder?: string
  required?: boolean
  error?: string
}

export function FormInput({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  required,
  error,
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65100] ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

interface FormTextareaProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  rows?: number
  error?: string
}

export function FormTextarea({
  label,
  value,
  onChange,
  placeholder,
  required,
  rows = 4,
  error,
}: FormTextareaProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65100] resize-y ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

interface FormSelectProps {
  label: string
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  required?: boolean
  error?: string
}

export function FormSelect({ label, value, onChange, options, required, error }: FormSelectProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65100] ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

interface TagInputProps {
  label: string
  tags: string[]
  onChange: (tags: string[]) => void
  placeholder?: string
  required?: boolean
}

export function TagInput({ label, tags, onChange, placeholder, required }: TagInputProps) {
  const [inputValue, setInputValue] = useState('')

  const handleAddTag = () => {
    const trimmed = inputValue.trim()
    if (trimmed && !tags.includes(trimmed)) {
      onChange([...tags, trimmed])
      setInputValue('')
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddTag()
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    onChange(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || 'Type and press Enter'}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65100]"
        />
        <button
          type="button"
          onClick={handleAddTag}
          className="px-4 py-2 bg-[#E65100] text-white rounded-lg hover:bg-[#BF360C] transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className="hover:text-blue-900"
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

interface ImagePreviewProps {
  label: string
  imageUrl: string
  onChange: (url: string) => void
  required?: boolean
}

export function ImagePreview({ label, imageUrl, onChange, required }: ImagePreviewProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type="url"
        value={imageUrl}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://example.com/image.jpg"
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65100]"
      />
      {imageUrl && (
        <div className="mt-2 relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
          <Image
            src={imageUrl}
            alt="Preview"
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = '/placeholder-image.png'
            }}
          />
        </div>
      )}
    </div>
  )
}

interface FormSectionProps {
  title: string
  children: React.ReactNode
}

export function FormSection({ title, children }: FormSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#071A30] border-b border-gray-200 pb-2">
        {title}
      </h3>
      {children}
    </div>
  )
}
