export const SITE_NAME = 'LogicEmb'
export const SITE_DESCRIPTION = 'Learn Programming, Data Structures, Algorithms, and more. A free computer science education platform.'
export const SITE_URL = 'https://logicemb.com'

export const CATEGORIES = [
  { id: 'dsa', label: 'Data Structures & Algorithms', slug: 'dsa', icon: '🔗', color: '#FF6B00', count: 450 },
  { id: 'web-dev', label: 'Web Development', slug: 'web-development', icon: '🌐', color: '#1565c0', count: 380 },
  { id: 'python', label: 'Python', slug: 'python', icon: '🐍', color: '#f9a825', count: 320 },
  { id: 'cpp', label: 'C++ Programming', slug: 'cpp', icon: '⚡', color: '#6a1b9a', count: 290 },
  { id: 'java', label: 'Java', slug: 'java', icon: '☕', color: '#e65100', count: 275 },
  { id: 'ml', label: 'Machine Learning', slug: 'machine-learning', icon: '🤖', color: '#00695c', count: 210 },
  { id: 'dbms', label: 'Database Management', slug: 'dbms', icon: '🗄️', color: '#37474f', count: 180 },
  { id: 'os', label: 'Operating Systems', slug: 'os', icon: '💻', color: '#c62828', count: 160 },
]

export const NAV_LINKS = [
  { label: 'Tutorials', href: '/tutorials' },
  { label: 'Practice', href: '/practice' },
  { label: 'Courses', href: '/courses' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Contests', href: '/contests' },
]

export const DIFFICULTY_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Expert'] as const
export type DifficultyLevel = typeof DIFFICULTY_LEVELS[number]

export const DIFFICULTY_COLORS: Record<DifficultyLevel, string> = {
  Beginner:     'bg-orange-100 text-orange-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced:     'bg-orange-100 text-orange-700',
  Expert:       'bg-red-100 text-red-700',
}

export const SAMPLE_ARTICLES = [
  { id: '1', title: 'Introduction to Arrays in C++', slug: 'arrays-in-cpp', category: 'dsa', difficulty: 'Beginner' as const, readTime: 8, views: 125000, author: 'Rahul Sharma', date: '2024-01-15', excerpt: 'Arrays are one of the most fundamental data structures in programming. Learn everything about arrays in C++.' },
  { id: '2', title: 'Binary Search Tree - Implementation & Operations', slug: 'binary-search-tree', category: 'dsa', difficulty: 'Intermediate' as const, readTime: 15, views: 89000, author: 'Priya Singh', date: '2024-01-14', excerpt: 'A complete guide to Binary Search Trees with implementation in Java, Python, and C++.' },
  { id: '3', title: 'React Hooks - Complete Guide 2024', slug: 'react-hooks-guide', category: 'web-dev', difficulty: 'Intermediate' as const, readTime: 20, views: 72000, author: 'Amit Kumar', date: '2024-01-13', excerpt: 'Master React Hooks with practical examples. Learn useState, useEffect, useContext, and custom hooks.' },
  { id: '4', title: 'Python List Comprehensions', slug: 'python-list-comprehensions', category: 'python', difficulty: 'Beginner' as const, readTime: 6, views: 95000, author: 'Sneha Patel', date: '2024-01-12', excerpt: 'Learn how to write concise, Pythonic code with list comprehensions. Includes real-world examples.' },
  { id: '5', title: 'Dynamic Programming - Memoization vs Tabulation', slug: 'dp-memoization-tabulation', category: 'dsa', difficulty: 'Advanced' as const, readTime: 25, views: 55000, author: 'Vikram Nair', date: '2024-01-11', excerpt: 'Deep dive into Dynamic Programming techniques. Understand when to use memoization vs tabulation.' },
  { id: '6', title: 'SQL Joins Explained with Examples', slug: 'sql-joins', category: 'dbms', difficulty: 'Beginner' as const, readTime: 10, views: 110000, author: 'Ananya Roy', date: '2024-01-10', excerpt: 'Master all types of SQL Joins with clear diagrams and practical examples on real datasets.' },
]

export const FOOTER_LINKS = {
  Company:  [{ label: 'About Us', href: '/about' }, { label: 'Careers', href: '/careers' }, { label: 'Blog', href: '/blog' }, { label: 'Press', href: '/press' }],
  Learn:    [{ label: 'Tutorials', href: '/tutorials' }, { label: 'Practice', href: '/practice' }, { label: 'Courses', href: '/courses' }, { label: 'Quizzes', href: '/quizzes' }],
  Community:[{ label: 'Forum', href: '/forum' }, { label: 'Contribute', href: '/contribute' }, { label: 'Campus Ambassador', href: '/campus' }, { label: 'Events', href: '/events' }],
  Support:  [{ label: 'Help Center', href: '/help' }, { label: 'Contact Us', href: '/contact' }, { label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Use', href: '/terms' }],
}
