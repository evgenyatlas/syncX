import { Player } from "./player";
import geojsonRbush, { RBush } from 'geojson-rbush'
import { Client, sx } from "../lib/syncx";
import { Geometry } from "geojson";
import { Building, IBuilding } from "./building";

export class Game {
    @sx({ filter: filterPlayer })
    private players: Map<string, Player>
    @sx({ filter: filterBuilding })
    private buildings: Map<string, Building>
    //Эти поля не будут передоваться на клиент
    private spaceBuilding: RBush<Geometry, Building>
    private spacePlayers: RBush<Geometry, Player>

    createPlayer(client: Client) { }
    //Если игрок вышел или сеть оборвалась
    sleepPlayer(client) { }
    /**** Эти методы будут вызываться клиентами ****/
    onMove() { }
    //Тут декоратор @sx, чтобы метод с таким же названием вызвался на всех клиентах
    //К примеру, чтобы отобразить анимацию атаки
    //Иначе мы просто отнимем энергию, а клиент не поймет, что к чему
    @sx({
        //Какие данные отправяться клиенту
        transform: transformClientAttack
    })
    onAttack(client: Client, energy: number) { }
    @sx({
        transform: transformClientCapture
    })
    onCaptureBuiding(client: Client, building: IBuilding) { }
}




function filterPlayer() { }
function filterBuilding() { }
function transformClientAttack() { }
function transformClientCapture() { }