import { IStop } from '../interfaces'
import { operator } from '../interfaces/constants'
import { IGtfsStop } from '../interfaces/gtfs'
import { ETA } from './ETA'
import { fetchDataSource } from './GTFS/datasource'

export class Line {
  name: number // Todo: Maybe string (?)
  operator: operator
  stops: IStop[]

  constructor(name: number, operator: operator) {
    this.name = name
    this.operator = operator
    this.stops = []
  }

  public async addStops() {
    console.log(
      await fetchDataSource('list', {
        gtfs_route__operator_refs: this.operator,
        gtfs_route__route_short_name: this.name,
      })
    )

    const id = await fetchDataSource<IGtfsStop[]>('list', {
      gtfs_route__operator_refs: this.operator,
      gtfs_route__route_short_name: this.name,
    })[0].id
    const stops = await fetchDataSource<IGtfsStop[]>('stops', {
      gtfs_ride_ids: id,
    })
    for (const stop of stops) {
      //TODO: add more relevant data
      this.stops.push({
        name: stop.gtfs_stop__name,
        id: stop.gtfs_stop_id,
        coord: { x: stop.gtfs_stop__lon, y: stop.gtfs_stop__lat },
        ETA: -1,
      })
    }
  }

  /**
   * Returns an array of the stations in the specified route with their ETA's
   * @param start The index of the route starting station.
   * @param end The end station of the route.
   */
  public async GetETA(from: number, to: number) {
    for (let i = from + 1; i <= to; i++) {
      this.stops[i].ETA = await ETA.GetETA(
        this.stops[i - 1].coord,
        this.stops[i].coord
      )
    }

    return this.stops.slice(from, to + 1)
  }
}
