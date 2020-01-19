import React from 'react'
import SearchBar from './searchBar'
import ActivityContainer from './activityContainer';
import ModalControlled from './newActivity'

class Container extends React.Component{
 constructor(){
     super();
     this.state = {
         data: [
            {
                id: 1,
                status: true,
                title: "programming"
            },
            {
                id:2,
                status: false,
                title: "GYM"
            }],
        filter: "",
        filterActive: false,
        checked: false,
        show: false
        }
 }   

 changeFilterCheckbox = (value) => {
     this.setState(state => ({checked: value}))
 }
 changeFilter = (value) =>{
    this.setState(state => ({filter: value.value, filterActive: value.filterActive}))
 }
 handleStatusChange = (id) =>{
    let dataCopy = JSON.parse(JSON.stringify(this.state.data))
    dataCopy[id-1].status = !this.state.data[id-1].status
    this.setState({
       data:dataCopy 
     }) 
 }
OnFormSubmit = act => {
    var last_id=this.state.data[this.state.data.length-1].id+1
    console.log(last_id)
    this.setState(prev => ({
        data: [...prev.data, {id: last_id,status: act.status,title: act.title }]
    }));
}
render(){
    return(
        <div>
            <ModalControlled OnFormSubmit={this.OnFormSubmit}/>
            <div className="ui divider" />
            <SearchBar changeFilter={this.changeFilter} 
                        changeFilterCheckbox={this.changeFilterCheckbox}
                        value={this.state.filter}
                        checked={this.state.checked}/>
            <div className="ui divider" />
            <ActivityContainer data={this.state.data}
                                filter={this.state.filter}
                                active={this.state.filterActive}
                                checked={this.state.checked}
                                handleStatusChange={this.handleStatusChange}/>
        </div>
    );
}}
export default Container