import { operator } from './constants'
import { ICoord } from './location'

export interface IStop {
  name: string
  id: number
}
export interface IStopInRoute extends IStop {
  ETA: number
}

export interface ILine {
  operator: operator
  number: number
  id: string // or number
}

export interface IRoute {
  line: ILine
  from: IStop // or stop
  stops: IStopInRoute[]
}
