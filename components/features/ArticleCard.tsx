import Link from 'next/link'
import { Clock, Eye, User } from 'lucide-react'
import { Card } from '@/components/ui'
import Badge from '@/components/ui/Badge'
import { formatNumber, formatDate, cn } from '@/lib/utils'
import type { DifficultyLevel } from '@/lib/constants'

interface Article {
  id: string
  title: string
  slug: string
  category: string
  difficulty: DifficultyLevel
  readTime: number
  views: number
  author: string
  date: string
  excerpt: string
}

interface ArticleCardProps {
  article: Article
  compact?: boolean
}

export default function ArticleCard({ article, compact = false }: ArticleCardProps) {
  return (
    <Card padding="none" className="group overflow-hidden">
      <div className={compact ? 'p-3' : 'p-4'}>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="category">{article.category.toUpperCase()}</Badge>
          <Badge variant="difficulty" difficulty={article.difficulty}>{article.difficulty}</Badge>
        </div>
        <Link href={`/articles/${article.slug}`}>
          <h3 className={cn(
            'font-semibold text-gfg-text group-hover:text-primary-700 transition-colors line-clamp-2',
            compact ? 'text-sm' : 'text-base'
          )}>
            {article.title}
          </h3>
        </Link>
        {!compact && (
          <p className="text-gfg-textLight text-sm mt-1 line-clamp-2">{article.excerpt}</p>
        )}
        <div className="flex items-center gap-3 mt-3 text-xs text-gfg-textLight">
          <span className="flex items-center gap-1"><User size={12} />{article.author}</span>
          <span className="flex items-center gap-1"><Clock size={12} />{article.readTime} min</span>
          <span className="flex items-center gap-1"><Eye size={12} />{formatNumber(article.views)}</span>
          <span className="ml-auto">{formatDate(article.date)}</span>
        </div>
      </div>
    </Card>
  )
}
