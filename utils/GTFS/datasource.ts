import axios from 'axios'
import { IGtfsRideStopsReqParams } from '../../interfaces/gtfs'

const BASE_URL = 'https://open-bus-stride-api.hasadna.org.il/'

type FetchFor = 'stops' | 'list'

export function BuildQuery(data: Partial<IGtfsRideStopsReqParams>) {
  let res = ''
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      res += `&${key}=${data[key]}`
    }
  }
  return res
}

export function buildFetchUrl(
  fetchFor: FetchFor,
  data: Partial<IGtfsRideStopsReqParams>
) {
  switch (fetchFor) {
    case 'stops':
      return `${BASE_URL}gtfs_ride_stops/list?get_count=false${BuildQuery(
        data
      )}`

    case 'list':
      return `${BASE_URL}gtfs_rides/list?get_count=false${BuildQuery(
        data
      )}order_by=id%20desc&`

    default:
      return ''
  }
}

export async function fetchDataSource<T extends {}>(
  fetchFor: FetchFor,
  data: Partial<IGtfsRideStopsReqParams>
): Promise<T> {
  const url = buildFetchUrl(fetchFor, data)
  const res = await axios.get<T>(url)
  return res.data
}
