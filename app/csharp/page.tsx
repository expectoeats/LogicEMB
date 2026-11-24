import Link from 'next/link'
import { BookOpen, Code, Zap, ArrowRight, Diamond } from 'lucide-react'

export default function CSharpPage() {
  const topics = [
    { id: 1, title: 'C# Fundamentals', icon: '💎', lessons: 18 },
    { id: 2, title: '.NET Framework', icon: '🎯', lessons: 15 },
    { id: 3, title: 'LINQ & Lambda', icon: '⚡', lessons: 12 },
    { id: 4, title: 'ASP.NET Core', icon: '🌐', lessons: 16 },
    { id: 5, title: 'Entity Framework', icon: '📊', lessons: 10 },
    { id: 6, title: 'Async Programming', icon: '🔄', lessons: 9 },
  ]

  const tutorials = [
    { id: 1, title: 'C# Basics — Variables, Data Types & Control Structures', level: 'Beginner', time: '14 min', category: 'Basics' },
    { id: 2, title: 'Object-Oriented Programming in C# — Classes, Inheritance & Interfaces', level: 'Beginner', time: '20 min', category: 'OOP' },
    { id: 3, title: 'LINQ in C# — Query Syntax, Method Syntax & Lambda Expressions', level: 'Intermediate', time: '18 min', category: 'LINQ' },
    { id: 4, title: 'ASP.NET Core Web API — Building RESTful Services', level: 'Intermediate', time: '22 min', category: 'ASP.NET' },
    { id: 5, title: 'Entity Framework Core — Code First & Database Operations', level: 'Intermediate', time: '20 min', category: 'EF Core' },
    { id: 6, title: 'Async/Await in C# — Asynchronous Programming Patterns', level: 'Advanced', time: '16 min', category: 'Async' },
  ]

  const courses = [
    { id: 1, title: 'Complete C# and .NET Development — From Zero to Hero', lessons: 52, duration: '15 hours', level: 'All Levels', students: '7.4k' },
    { id: 2, title: 'ASP.NET Core Mastery — Web APIs, MVC & Blazor', lessons: 40, duration: '12 hours', level: 'Intermediate', students: '5.9k' },
    { id: 3, title: 'Entity Framework Core Deep Dive', lessons: 28, duration: '8 hours', level: 'Intermediate', students: '4.6k' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#9B4F96] to-[#C77EB5] py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white mb-4">
              <Diamond size={16} />
              <span>C# Programming</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Master C# — Build Modern .NET Applications
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Learn C# and .NET from scratch to advanced. Master OOP, LINQ, ASP.NET Core, Entity Framework, and build enterprise-grade web applications.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#071A30] mb-8">C# Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#9B4F96] hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-3">{topic.icon}</div>
                <h3 className="text-lg font-bold text-[#071A30] mb-2 group-hover:text-[#E65100] transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-gray-600">{topic.lessons} lessons available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#071A30]">C# Tutorials</h2>
            <Link href="/tutorials" className="text-sm font-medium text-[#E65100] hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-4">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[#9B4F96] hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#9B4F96] bg-[#9B4F96]/10 px-2 py-0.5 rounded">
                        {tutorial.category}
                      </span>
                      <span className="text-xs text-gray-500">{tutorial.level}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{tutorial.time} read</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#071A30] group-hover:text-[#E65100] transition-colors">
                      {tutorial.title}
                    </h3>
                  </div>
                  <BookOpen className="text-gray-400 group-hover:text-[#E65100] transition-colors" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-14 bg-[#F9F9F9]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#071A30]">C# Courses</h2>
            <Link href="/courses" className="text-sm font-medium text-[#E65100] hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-[#9B4F96] to-[#C77EB5] p-6 text-center">
                  <Diamond size={48} className="mx-auto mb-3 text-white" />
                  <h3 className="text-xl font-bold text-white">C#</h3>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-[#071A30] mb-3 leading-snug group-hover:text-[#E65100] transition-colors">
                    {course.title}
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center justify-between">
                      <span>📚 {course.lessons} lessons</span>
                      <span>⏱️ {course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>📊 {course.level}</span>
                      <span>👥 {course.students}</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#E65100] text-white py-2 rounded-lg font-semibold hover:bg-[#BF360C] transition-colors">
                    Enroll Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
