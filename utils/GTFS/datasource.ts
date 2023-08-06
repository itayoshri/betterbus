import axios from 'axios'
import { IGtfsRideStopsReqParams } from '../../interfaces/gtfs'

const BASE_URL =
  'https://open-bus-stride-api.hasadna.org.il/gtfs_ride_stops/list'

type FetchFor = 'stations' | string

export function BuildQuery(data: IGtfsRideStopsReqParams) {
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
  data: IGtfsRideStopsReqParams
) {
  switch (fetchFor) {
    case 'stops':
      return `${BASE_URL}?get_count=false${BuildQuery(data)}`
    default:
      return ''
  }
}

export async function fetchDataSource<T extends {}>(
  fetchFor: FetchFor,
  data: IGtfsRideStopsReqParams
): Promise<T> {
  const url = buildFetchUrl(fetchFor, data)
  const res = await axios.get<T>(url)
  return res.data
}
