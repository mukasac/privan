// app/api/business/stats/route.ts
import { NextResponse } from 'next/server'
import { mockBusinessAccounts } from '@/lib/mockData'

export async function GET(request: Request) {
  const business = mockBusinessAccounts[0]
  return NextResponse.json(business.stats)
}