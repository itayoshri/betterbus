import axios from 'axios'
import { ICoord } from '../../interfaces/location'
import { IFetchData } from '../../interfaces/request'

const BASE_URL = 'www.waze.com/live-map/api/user-drive?geo_env=il'

interface IFetchDataParams {
  from: ICoord
  to: ICoord
}

export function buildFetchUrl() {
  return `https://${BASE_URL}`
}

export function buildFetchData(data: IFetchDataParams): IFetchData {
  return {
    from: data.from,
    to: data.to,
    nPaths: 3,
    useCase: 'LIVEMAP_PLANNING',
    interval: 15,
    arriveAt: true,
  }
}

export async function fetchDataSource<T extends {}>(data: IFetchDataParams) {
  const url = buildFetchUrl()
  const fetchData = buildFetchData(data)
  const res = await axios.post<T>(url, fetchData)
  return res.data
}
