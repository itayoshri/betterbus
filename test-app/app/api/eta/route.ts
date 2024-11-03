import { NextResponse } from 'next/server'
import { IGtfsRideStopsReqParams, IGtfsStop } from '../../../../interfaces/gtfs'
import { fetchDataSource } from '../../../../utils/GTFS/datasource'
import { Line } from '../../../../utils/index'
import { ETA } from '../../../../utils/ETA'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const line = new Line(
    Number(searchParams.get('line')),
    Number(searchParams.get('operator'))
  )
  await line.addStops()
  return NextResponse.json(
    await line.GetETA(
      Number(searchParams.get('start')),
      Number(searchParams.get('end'))
    )
  )
}
