import React from 'react';

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: [],
            filterActive: false,
            checked: false
        }   
    }
    componentDidMount(){
        this.setState({value: this.props.value,
                        filterActive: this.props.filterActive,
                        checked: this.props.checked})
    }
    handleChange(e){
        this.setState({value: e.target.value, filterActive:  e.target.value=== "" ? false : true}, 
                                            () => this.props.changeFilter(this.state));  
    }
    handleCheckChange(e){
        this.setState({checked: e.target.checked},() => this.props.changeFilterCheckbox(this.state.checked))
    }
render(){
        return(
            <div>
            <div className="ui icon input">
            <input type="text" placeholder="Search..." 
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.value}/>
            <i aria-hidden="true" className="search circular inverted icon"></i>
          </div>
          <div className="ui checkbox ">
          <input id="completed" placeholder="Only completed" type="checkbox"
           checked={this.state.checked}
            onChange={(e) => this.handleCheckChange(e)}/>
        <label>Only completed activities</label>
        </div>
        </div>
    
    )}
}