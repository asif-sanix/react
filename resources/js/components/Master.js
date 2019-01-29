import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import About from './../pages/About'
import Register from './../pages/Register'
const Home = (props)=>{
    return(
        <div>
        Home
        </div>
        )
}
const Contact = (props)=>{
    return(
        <div>
        Contact
        </div>
        )
}
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="fluid-container">
                    <div className="justify-content-center">
                        <div className="">
                            <Header/>
                            <div className="col-md-12">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/contact" component={Contact} />
                                <Route exact path="/register" component={Register} />
                            </Switch>
                            </div>
                           <Footer />
                        </div>
                    </div>
                    
                </div>
            </BrowserRouter>
           
        );
    }
}

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}
