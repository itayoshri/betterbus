import { operator } from './constants'
import { ICoord } from './location'

export interface IStop {
  name: string
  id: number
  coord: ICoord
}
