import { Geometry } from 'geojson'
import { Player } from './player'

export interface IBuilding {
    geometry: Geometry
    captured: Player | null
}

export class Building implements IBuilding {
    geometry: Geometry
    captured: Player | null
}
