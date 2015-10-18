/// <reference path="./../../typings/tsd.d.ts" />
/// <reference path="./../../typings-custom/tsd-custom.d.ts" />
import Routes from "./Routes"
import * as React from "react"
import * as ReactDom  from "react-dom"
import {renderToString} from "react-dom/server"
import {createMemoryHistory,createBrowserHistory} from "history"
import {Promise} from "es6-promise"
import Utils from "../server/utils/Utils";
import Home from "./components/Home";

export default class Bootstrap {

    public run (url?):Promise<any>{
        if(Utils.isNodeEnv()){
            return this.runOnServer(url);
        }
        return this.runOnBrowser();

    }
    private runOnBrowser(){
        console.log("INIT REACT ON BROWSER");
        return new Promise<string>((resolve,reject)=>{
            const history = createBrowserHistory();

            ReactDom.render(React.createElement<any>(Routes,{history:history}),document.getElementById("root"));
        });

    }
    private runOnServer(url?:string):Promise<string>{
        console.log("INIT REACT ON SERVER");

        return new Promise<string>((resolve,reject)=>{

            const history = createMemoryHistory(url);

            const markup = renderToString(React.createElement<any>(Routes,{
                history:history
            }));

            resolve(markup);
        });
    }
}

if(!Utils.isNodeEnv()){
    window['AppBootstrap'] = Bootstrap;
}