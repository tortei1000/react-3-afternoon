import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super();
    
    this.state = {
      filterText: '',
     
    };

  this.searchPostFn = this.searchPostFn.bind(this)  
  }
  
  
  searchPostFn(){
      
    this.props.searchPostFn(this.state.filterText)
    
  };
  
  handleChange(e){
    this.setState({filterText:e.target.value})
    
   }
  render() {
    
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input onChange={(e)=>this.handleChange(e)} placeholder="Search Your Feed" />

          <SearchIcon onClick={this.searchPostFn} id="Search__icon" />
        </div>
        
      </section>
    )
  }
}