import * as React from "react"
import Home from "./components/Home";
import About from "./components/About";
import Cats from "./components/Cats";
import { Router, Route, Link, IndexRoute } from 'react-router'
import App from "./App"
export default class Routes extends React.Component<any,any>{

    public render(){
        return (
            <Router {...this.props}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="about" component={About}/>
                    <Route path="cats" component={Cats}/>
                </Route>
                <Route path="*" component={About}/>
            </Router>
        )
    }

}