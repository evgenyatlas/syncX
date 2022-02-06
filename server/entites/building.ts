import { Geometry } from 'geojson'
import { Player } from './player'

export class Building {
    geometry: Geometry
    captured: Player | null
}
