import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super();
    
    this.state = {
      filterText: '',
     // posts : props.posts
    };

    
  }
  
  
  // searchPostFn(text){
  //   let newArr = posts    
  //   .filter((element, index) => {
  //     return element.includes(this.state.text);
  //   })
    
  //};
  
  // handleChange(value){
  //   this.setState({filterText:value})
    
  // }
  render() {
    
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search Your Feed" />

          <SearchIcon id="Search__icon" />
        </div>
        
      </section>
    )
  }
}