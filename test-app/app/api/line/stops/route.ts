import { NextResponse } from 'next/server'
import { Line } from '../../../../../utils/index'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const line = new Line(
    Number(searchParams.get('line')),
    Number(searchParams.get('operator'))
  )
  await line.addStops()
  return NextResponse.json(line.stops)
}
