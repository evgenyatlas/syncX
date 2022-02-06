interface SxOptions<Filter extends Function, ClientMap extends Function> {
    filter?: Filter
    //Или все-таки map 🤔
    transform?: ClientMap
}

//Шарпистам не смотреть 
//💩💩💩 Да, да, так выглядит перегрузка фунций в TS 💩💩💩
export function sx(target: Object, property: string): void
export function sx<F extends Function>(options: SxOptions<F>): (target: Object, property: string) => void
export function sx(...args: Array<unknown>) {
    if (args.length > 2) {

    } else if (args.length === 1) {
        return function (target: Object, property: string) {

        }
    }
}

export class Room<State> {
    protected state: State
    onJoin(client: Client) {

    }
    onLeave(client: Client) { }
}

export class Client {
    send<T>(data: T) { }
}