/// <reference path="./../../../typings/tsd.d.ts" />
import * as React from "react"


export default class Cats extends React.Component<any,any> {

    constructor(props,context){
        super(props,context);
        console.log("Here I'm the Cats-Page")
    }

    public render(){
        return (
            <img src="/public/img/cat.gif" />
        )
    }

}