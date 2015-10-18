/// <reference path="./../../typings/tsd.d.ts" />

import {Server} from "./Server";
import Utils from "./utils/Utils"
export default class Main {

    constructor(){
        const server = new Server();
        server.start().then((result)=>{
            console.log("Hello I'm up and running on  "   + result + " in " + (Utils.isDevelopmentEnv() ?'developer mode ': 'production mode'));

        })
    }
}
new Main();