'use client'

import { ALL_COURSES, DetailedCourse, CourseModule } from '@/lib/courses-data'
import { ALL_TUTORIALS, TutorialItem } from '@/lib/tutorials-data'

// Re-export types
export type { DetailedCourse, CourseModule, TutorialItem }

// Project Interface
export interface ProjectItem {
  id: string
  slug: string
  title: string
  description: string
  category: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  components: string[]
  image: string
  githubUrl: string
  liveUrl: string
  status: 'Draft' | 'Published'
  createdAt: string
  updatedAt: string
}

// User Interface
export interface UserItem {
  id: string
  name: string
  email: string
  role: 'User' | 'Admin' | 'Editor'
  status: 'Active' | 'Inactive' | 'Blocked'
  avatar: string
  joinedAt: string
  lastLogin: string
}

// Site Settings Interface
export interface SiteSettings {
  title: string
  description: string
  tagline: string
  metaDescription: string
  metaKeywords: string[]
}

// Storage keys
const STORAGE_KEYS = {
  courses: 'logicemb_courses',
  tutorials: 'logicemb_tutorials',
  projects: 'logicemb_projects',
  users: 'logicemb_users',
  settings: 'logicemb_site_settings',
  seeded: 'logicemb_data_seeded',
}

// SSR Guard
const isBrowser = () => typeof window !== 'undefined'

// Initialize storage with seed data
export function initializeStorage() {
  if (!isBrowser()) return

  const isSeeded = localStorage.getItem(STORAGE_KEYS.seeded)
  if (isSeeded === 'true') return

  // Seed courses
  localStorage.setItem(STORAGE_KEYS.courses, JSON.stringify(ALL_COURSES))

  // Seed tutorials
  localStorage.setItem(STORAGE_KEYS.tutorials, JSON.stringify(ALL_TUTORIALS))

  // Seed sample projects
  const sampleProjects: ProjectItem[] = [
    {
      id: 'proj-01',
      slug: 'iot-weather-station',
      title: 'IoT Weather Station with ESP32',
      description: 'Build a complete weather monitoring system with ESP32, DHT22 sensor, and cloud connectivity.',
      category: 'IoT',
      difficulty: 'Intermediate',
      components: ['ESP32', 'DHT22', 'OLED Display', 'WiFi Module'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&h=450&q=80',
      githubUrl: 'https://github.com/logicemb/iot-weather',
      liveUrl: 'https://weather.logicemb.com',
      status: 'Published',
      createdAt: '2024-01-10',
      updatedAt: '2024-01-15',
    },
    {
      id: 'proj-02',
      slug: 'pcb-solar-charger',
      title: 'Solar Battery Charger PCB',
      description: 'Design and fabricate a 4-layer PCB for solar-powered battery charging system.',
      category: 'PCB Design',
      difficulty: 'Advanced',
      components: ['Solar Panel', 'LiPo Battery', 'Charge Controller IC', 'Buck Converter'],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&h=450&q=80',
      githubUrl: 'https://github.com/logicemb/solar-charger',
      liveUrl: '',
      status: 'Published',
      createdAt: '2023-12-20',
      updatedAt: '2024-01-05',
    },
    {
      id: 'proj-03',
      slug: 'stm32-robotics-controller',
      title: 'STM32 Robotics Controller',
      description: 'Complete motor control system using STM32 with PID algorithms and sensor fusion.',
      category: 'Embedded Systems',
      difficulty: 'Advanced',
      components: ['STM32F4', 'Motor Driver', 'IMU Sensor', 'Encoder'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=450&q=80',
      githubUrl: 'https://github.com/logicemb/stm32-robotics',
      liveUrl: '',
      status: 'Draft',
      createdAt: '2024-01-12',
      updatedAt: '2024-01-16',
    },
  ]
  localStorage.setItem(STORAGE_KEYS.projects, JSON.stringify(sampleProjects))

  // Seed sample users
  const sampleUsers: UserItem[] = [
    {
      id: 'user-01',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'User',
      status: 'Active',
      avatar: '',
      joinedAt: '2024-01-15',
      lastLogin: '2024-01-20',
    },
    {
      id: 'user-02',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Editor',
      status: 'Active',
      avatar: '',
      joinedAt: '2024-01-14',
      lastLogin: '2024-01-19',
    },
    {
      id: 'user-03',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'User',
      status: 'Active',
      avatar: '',
      joinedAt: '2024-01-13',
      lastLogin: '2024-01-18',
    },
    {
      id: 'user-04',
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      role: 'Admin',
      status: 'Active',
      avatar: '',
      joinedAt: '2024-01-12',
      lastLogin: '2024-01-20',
    },
    {
      id: 'user-05',
      name: 'Tom Brown',
      email: 'tom@example.com',
      role: 'User',
      status: 'Inactive',
      avatar: '',
      joinedAt: '2024-01-11',
      lastLogin: '2024-01-15',
    },
    {
      id: 'user-06',
      name: 'Emily Davis',
      email: 'emily@example.com',
      role: 'User',
      status: 'Blocked',
      avatar: '',
      joinedAt: '2024-01-10',
      lastLogin: '2024-01-12',
    },
    {
      id: 'user-07',
      name: 'Chris Martinez',
      email: 'chris@example.com',
      role: 'Editor',
      status: 'Active',
      avatar: '',
      joinedAt: '2024-01-09',
      lastLogin: '2024-01-20',
    },
    {
      id: 'user-08',
      name: 'Lisa Anderson',
      email: 'lisa@example.com',
      role: 'User',
      status: 'Active',
      avatar: '',
      joinedAt: '2024-01-08',
      lastLogin: '2024-01-19',
    },
    {
      id: 'user-09',
      name: 'David Taylor',
      email: 'david@example.com',
      role: 'User',
      status: 'Active',
      avatar: '',
      joinedAt: '2024-01-07',
      lastLogin: '2024-01-17',
    },
    {
      id: 'user-10',
      name: 'Anna Thomas',
      email: 'anna@example.com',
      role: 'User',
      status: 'Active',
      avatar: '',
      joinedAt: '2024-01-06',
      lastLogin: '2024-01-16',
    },
  ]
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(sampleUsers))

  // Seed default site settings
  const defaultSettings: SiteSettings = {
    title: 'LogicEMB',
    description: 'Master Embedded Systems, PCB Design & Hardware Engineering',
    tagline: 'From schematics to silicon, learn hardware engineering the right way',
    metaDescription: 'Learn embedded systems, PCB design, and hardware engineering with hands-on tutorials, courses, and projects.',
    metaKeywords: ['embedded systems', 'PCB design', 'hardware engineering', 'IoT', 'microcontrollers'],
  }
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(defaultSettings))

  // Mark as seeded
  localStorage.setItem(STORAGE_KEYS.seeded, 'true')
}

// Generic CRUD functions
function getAll<T>(key: string): T[] {
  if (!isBrowser()) return []
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : []
}

function getById<T extends { id: string }>(key: string, id: string): T | null {
  if (!isBrowser()) return null
  const items = getAll<T>(key)
  return items.find((item) => item.id === id) || null
}

function create<T extends { id: string }>(key: string, item: T): void {
  if (!isBrowser()) return
  const items = getAll<T>(key)
  items.push(item)
  localStorage.setItem(key, JSON.stringify(items))
}

function update<T extends { id: string }>(key: string, id: string, updates: Partial<T>): void {
  if (!isBrowser()) return
  const items = getAll<T>(key)
  const index = items.findIndex((item) => item.id === id)
  if (index !== -1) {
    items[index] = { ...items[index], ...updates }
    localStorage.setItem(key, JSON.stringify(items))
  }
}

function deleteById<T extends { id: string }>(key: string, id: string): void {
  if (!isBrowser()) return
  const items = getAll<T>(key)
  const filtered = items.filter((item) => item.id !== id)
  localStorage.setItem(key, JSON.stringify(filtered))
}

// Course functions
export function getCourses(): DetailedCourse[] {
  return getAll<DetailedCourse>(STORAGE_KEYS.courses)
}

export function getCourse(id: string): DetailedCourse | null {
  return getById<DetailedCourse>(STORAGE_KEYS.courses, id)
}

export function saveCourse(course: DetailedCourse): void {
  const existing = getCourse(course.id)
  if (existing) {
    update<DetailedCourse>(STORAGE_KEYS.courses, course.id, course)
  } else {
    create<DetailedCourse>(STORAGE_KEYS.courses, course)
  }
}

export function deleteCourse(id: string): void {
  deleteById<DetailedCourse>(STORAGE_KEYS.courses, id)
}

// Tutorial functions
export function getTutorials(): TutorialItem[] {
  return getAll<TutorialItem>(STORAGE_KEYS.tutorials)
}

export function getTutorial(id: string): TutorialItem | null {
  return getById<TutorialItem>(STORAGE_KEYS.tutorials, id)
}

export function saveTutorial(tutorial: TutorialItem): void {
  const existing = getTutorial(tutorial.id)
  if (existing) {
    update<TutorialItem>(STORAGE_KEYS.tutorials, tutorial.id, tutorial)
  } else {
    create<TutorialItem>(STORAGE_KEYS.tutorials, tutorial)
  }
}

export function deleteTutorial(id: string): void {
  deleteById<TutorialItem>(STORAGE_KEYS.tutorials, id)
}

// Project functions
export function getProjects(): ProjectItem[] {
  return getAll<ProjectItem>(STORAGE_KEYS.projects)
}

export function getProject(id: string): ProjectItem | null {
  return getById<ProjectItem>(STORAGE_KEYS.projects, id)
}

export function saveProject(project: ProjectItem): void {
  const existing = getProject(project.id)
  if (existing) {
    update<ProjectItem>(STORAGE_KEYS.projects, project.id, project)
  } else {
    create<ProjectItem>(STORAGE_KEYS.projects, project)
  }
}

export function deleteProject(id: string): void {
  deleteById<ProjectItem>(STORAGE_KEYS.projects, id)
}

// User functions
export function getUsers(): UserItem[] {
  return getAll<UserItem>(STORAGE_KEYS.users)
}

export function getUser(id: string): UserItem | null {
  return getById<UserItem>(STORAGE_KEYS.users, id)
}

export function saveUser(user: UserItem): void {
  const existing = getUser(user.id)
  if (existing) {
    update<UserItem>(STORAGE_KEYS.users, user.id, user)
  } else {
    create<UserItem>(STORAGE_KEYS.users, user)
  }
}

export function deleteUser(id: string): void {
  deleteById<UserItem>(STORAGE_KEYS.users, id)
}

// Site settings functions
export function getSiteSettings(): SiteSettings {
  if (!isBrowser()) {
    return {
      title: 'LogicEMB',
      description: 'Master Embedded Systems, PCB Design & Hardware Engineering',
      tagline: 'From schematics to silicon, learn hardware engineering the right way',
      metaDescription: 'Learn embedded systems, PCB design, and hardware engineering.',
      metaKeywords: [],
    }
  }
  const data = localStorage.getItem(STORAGE_KEYS.settings)
  return data
    ? JSON.parse(data)
    : {
        title: 'LogicEMB',
        description: 'Master Embedded Systems, PCB Design & Hardware Engineering',
        tagline: 'From schematics to silicon, learn hardware engineering the right way',
        metaDescription: 'Learn embedded systems, PCB design, and hardware engineering.',
        metaKeywords: [],
      }
}

export function saveSiteSettings(settings: SiteSettings): void {
  if (!isBrowser()) return
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings))
}

// Export/Import functions
export function exportAllData(): string {
  if (!isBrowser()) return '{}'
  return JSON.stringify({
    courses: getCourses(),
    tutorials: getTutorials(),
    projects: getProjects(),
    users: getUsers(),
    settings: getSiteSettings(),
  })
}

export function importAllData(jsonString: string): void {
  if (!isBrowser()) return
  try {
    const data = JSON.parse(jsonString)
    if (data.courses) localStorage.setItem(STORAGE_KEYS.courses, JSON.stringify(data.courses))
    if (data.tutorials) localStorage.setItem(STORAGE_KEYS.tutorials, JSON.stringify(data.tutorials))
    if (data.projects) localStorage.setItem(STORAGE_KEYS.projects, JSON.stringify(data.projects))
    if (data.users) localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(data.users))
    if (data.settings) localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(data.settings))
  } catch (error) {
    console.error('Failed to import data:', error)
  }
}
