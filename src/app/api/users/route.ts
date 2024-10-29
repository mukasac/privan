// app/api/users/route.ts
import { NextResponse } from 'next/server'
import { mockUsers } from '@/lib/mockData'

export async function GET(request: Request) {
  // In a real app, we'd fetch from a database
  return NextResponse.json(mockUsers)
}