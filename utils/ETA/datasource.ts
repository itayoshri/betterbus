import axios from 'axios'
import { ICoord } from '../../interfaces/location'
import { IFetchData } from '../../interfaces/request'

interface IFetchDataParams {
  from: ICoord
  to: ICoord
}

export function buildFetchUrl() {
  return `https://${process.env.BASE_URL}`
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
  const res = await axios.get<T>(url, { data: fetchData })
  return res.data
}
