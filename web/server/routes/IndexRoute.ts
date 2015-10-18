
import * as express from "express"
import * as fs from "fs";
import * as React from "react"
import {createMemoryHistory} from 'history';

import Bootstrap from "../../app/Bootstrap";
import Routes from "../../app/Routes";
import {match, RoutingContext} from "react-router"
import {renderToString } from "react-dom/server"
export default class IndexRoute{

   public getRequest(req, res,next){

      const file     = fs.readFileSync(__dirname+"/../layout/index.html");
      const bootstrapApp      = new Bootstrap();
      const fileStr  = file.toString();

      bootstrapApp.run(req.url).then((markup)=>{

         res.send(fileStr.replace("<%=rootComponentHTML%>",markup));

      }).catch((err)=>{
         res.status(501);
         res.send(err.toString())
      })

   }



}