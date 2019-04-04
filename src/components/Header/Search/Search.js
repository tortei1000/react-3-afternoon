import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super();
    
    this.state = {
      text: ''
    };

    this.searchPost = this.searchPost.bind( this );
  }
  
  
  searchPost() {
    const {text} = this.state
    const {searchPostFn} = this.props
    searchPostFn(text);
    //this.setState({text :""})
    console.log(text)
  }
  
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