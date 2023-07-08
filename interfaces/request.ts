import { ICoord } from './location'

type UseCase = 'LIVEMAP_PLANNING'

export interface IFetchData {
  from: ICoord
  to: ICoord
  nPaths: number // 3
  useCase: UseCase
  interval: number // 15
  arriveAt: boolean // true
}
