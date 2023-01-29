import React, { Component } from 'react';
import { robots } from '../Component/robots';
import Search from '../Component/Search';
import Cardlist from '../Component/Cardlist';
import Scroll from '../Component/Scroll';
import '../index.css';
import './App.css';



const state =  {
   
}

class App extends Component {
    // state1 
    constructor(){
        super()
        this.state = {
            // robots: robots,
            robots: [],
            searchword: ''
        }
    }

    // state2, lifecycle that will be implemented after render
    // fetching the robots  collection as fetch asp
    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users').then(
            response=>{ return response.json()}).then(users=>{this.setState({robots: robots})})

    // if not fetching as fetch api(i.e only locally)
            // this.setState({robots: robots})
    }
    
    // state3
    onSearchChange = (event) => {
        this.setState({searchword: event.target.value})
        //this updatates the searword from '' to search words
                 // const filterRobots = this.state.robots.filter(robots=>{
                  //     return robots.name.toLowerCase().includes(this.searchword.toLowerCase)
            // this filer loop around all robots first and only returns/display robots their name is included in the searchword
        
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchword.toLowerCase());
            // includes is very important to check if something has things under it
        })
         // if you fetch an api, you must give in space for slow loading from the REST API SITE sometimes
         if (this.state.robots === 0){return <h1>'loading'</h1>}
         else {
    return (
        <div className = 'Search'>
            <h1>Robofriends</h1>
             <Search searchChange={this.onSearchChange}/>
           <Scroll>
             <Cardlist robots = {filteredRobots}/>
           </Scroll>
        </div>
    );}

}
}
export default App;

