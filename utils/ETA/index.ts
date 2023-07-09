import { ICoord } from '../../interfaces/location'
import { IResAlternative } from '../../interfaces/request'
import { fetchDataSource } from './datasource'

export class ETA {
  public static async GetETA(from: ICoord, to: ICoord) {
    const res = await fetchDataSource<{ alternatives: IResAlternative[] }>({
      from,
      to,
    })

    return res.alternatives[0].response.totalSeconds
  }
}
