import * as React from "react"
import {Link} from "react-router"
export default class App extends React.Component<any,any>{

    render(){
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <ul className="nav navbar-nav">
                        <li><Link to="/" activeClassName="active">Home</Link></li>
                        <li><Link to="/about" activeClassName="active">About</Link></li>
                        <li><Link to="/cats" activeClassName="active">Cats</Link></li>
                    </ul>
                </nav>
                {this.props.children}
            </div>
        )

    }
}