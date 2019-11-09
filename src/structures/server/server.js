import { ServerList } from "./serverList"

export default class Server {
    constructor (serverName, serverCharacters) {
        this.serverName = serverName;
        this.serverCharacters = serverCharacters;
    }


}

export function GetServers()
{
    var toreturn = [];
    for (let server in ServerList) {
        toreturn.push(server);
    }
    return (toreturn);
}