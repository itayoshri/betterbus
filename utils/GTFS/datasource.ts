import axios from 'axios'

type FetchFor = 'stations' | string

interface IFetchData {}

export function buildFetchUrl(fetchFor: FetchFor, data: IFetchData) {
  switch (fetchFor) {
    case 'stations':
      return ''
    default:
      return ''
  }
}

export async function fetchDataSource<T extends {}>(
  fetchFor: FetchFor,
  data: IFetchData
) {
  const url = buildFetchUrl(fetchFor, data)
  const res = await axios.get<T>(url)
  return res.data
}
