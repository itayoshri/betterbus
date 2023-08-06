import { IStop } from '../interfaces'
import { operator } from '../interfaces/constants'
import { IGtfsStop } from '../interfaces/gtfs'

export class Line {
  name: number // Todo: Maybe string (?)
  operator: operator
  stops: IStop[]

  constructor(name: number, operator: operator, stops: IGtfsStop[]) {
    this.name = name
    this.operator = operator
    this.stops = []

    for (const stop of stops) {
      //TODO: add more relevant data
      this.stops.push({
        name: stop.gtfs_stop__name,
        id: stop.gtfs_stop_id,
        coord: { x: stop.gtfs_stop__lon, y: stop.gtfs_stop__lat },
      })
    }
  }
}
