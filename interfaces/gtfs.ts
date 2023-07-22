export interface IGtfsStop {
  id: number
  gtfs_stop_id: number
  gtfs_ride_id: number
  arrival_time: string
  departure_time: string
  stop_sequence: number
  pickup_type: number // TODO: Make a type
  drop_off_type: number // TODO: Make a type
  /*
  relevant data
   */
  gtfs_stop__code: number
  gtfs_stop__lat: number
  gtfs_stop__lon: number
  gtfs_stop__name: string
  gtfs_stop__city: string
  /* */
  gtfs_route__line_ref: number
  gtfs_route__operator_ref: number
  gtfs_route__route_short_name: string
  gtfs_route__route_long_name: string
}
