// components/dashboard/PrivacyScore.tsx
import { Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function PrivacyScore({ score }: { score: number }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500">Privacy Score</p>
            <p className="text-2xl font-bold text-green-500">{score}/100</p>
          </div>
          <Shield className="w-8 h-8 text-green-500" />
        </div>
      </CardContent>
    </Card>
  )
}