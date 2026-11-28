'use client'

import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string | number
  change?: string
  icon: LucideIcon
  color: string
  trend?: 'up' | 'down'
}

export function StatsCard({ title, value, change, icon: Icon, color, trend = 'up' }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}>
          <Icon className="text-white" size={24} />
        </div>
        {change && (
          <span
            className={`text-sm font-semibold flex items-center gap-1 ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            {change}
          </span>
        )}
      </div>
      <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-[#071A30]">{value}</p>
    </div>
  )
}
