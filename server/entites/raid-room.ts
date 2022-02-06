import { Client, Room } from "../lib/syncx";
import { Game } from "./game";

export class RaidRoom extends Room<Game> {
    state: Game
    onJoin(client: Client) {
        this.state.createPlayer(client)
    }
    onLeave(client: Client) {
        this.state.sleepPlayer
    }
}