
import * as express from "express"

export  class NotFoundRoute{

   public getRequest(req, res,next){
      res.status(404)
          .send({err:"Not found"})
   }



}