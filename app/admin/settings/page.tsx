'use client'

import { useEffect, useState } from 'react'
import { FormInput, FormTextarea, TagInput, FormSection } from '@/components/admin/FormComponents'
import { useToast } from '@/components/admin/Toast'
import { getSiteSettings, saveSiteSettings, type SiteSettings } from '@/lib/admin/data-manager'

export default function SettingsPage() {
  const { showToast } = useToast()
  const [settings, setSettings] = useState<SiteSettings>({
    title: '',
    description: '',
    tagline: '',
    metaDescription: '',
    metaKeywords: [],
  })

  useEffect(() => {
    const currentSettings = getSiteSettings()
    setSettings(currentSettings)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    saveSiteSettings(settings)
    showToast('Settings saved successfully', 'success')
  }

  const handleReset = () => {
    const defaultSettings: SiteSettings = {
      title: 'LogicEMB',
      description: 'Master Embedded Systems, PCB Design & Hardware Engineering',
      tagline: 'From schematics to silicon, learn hardware engineering the right way',
      metaDescription: 'Learn embedded systems, PCB design, and hardware engineering with hands-on tutorials, courses, and projects.',
      metaKeywords: ['embedded systems', 'PCB design', 'hardware engineering', 'IoT', 'microcontrollers'],
    }
    setSettings(defaultSettings)
    saveSiteSettings(defaultSettings)
    showToast('Settings reset to defaults', 'success')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
      <FormSection title="Site Settings">
        <FormInput
          label="Site Title"
          value={settings.title}
          onChange={(title) => setSettings({ ...settings, title })}
          placeholder="LogicEMB"
          required
        />
        <FormTextarea
          label="Site Description"
          value={settings.description}
          onChange={(description) => setSettings({ ...settings, description })}
          placeholder="Master Embedded Systems, PCB Design & Hardware Engineering"
          required
          rows={2}
        />
        <FormInput
          label="Tagline"
          value={settings.tagline}
          onChange={(tagline) => setSettings({ ...settings, tagline })}
          placeholder="From schematics to silicon..."
        />
      </FormSection>

      <FormSection title="SEO Settings">
        <FormTextarea
          label="Meta Description"
          value={settings.metaDescription}
          onChange={(metaDescription) => setSettings({ ...settings, metaDescription })}
          placeholder="Description for search engines..."
          rows={3}
        />
        <TagInput
          label="Meta Keywords"
          tags={settings.metaKeywords}
          onChange={(metaKeywords) => setSettings({ ...settings, metaKeywords })}
          placeholder="Add keyword and press Enter"
        />
      </FormSection>

      <FormSection title="Admin Profile">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-[#E65100] rounded-full flex items-center justify-center text-white font-bold text-2xl">
              A
            </div>
            <div>
              <p className="font-semibold text-gray-900">Admin User</p>
              <p className="text-sm text-gray-500">admin@logicemb.com</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">Profile management coming soon.</p>
        </div>
      </FormSection>

      {/* Actions */}
      <div className="flex items-center justify-between pt-6 border-t">
        <button
          type="button"
          onClick={handleReset}
          className="px-6 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          Reset to Defaults
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[#E65100] text-white rounded-lg hover:bg-[#BF360C] transition-colors font-medium"
        >
          Save Settings
        </button>
      </div>
    </form>
  )
}
