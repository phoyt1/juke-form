import React, { Component } from 'react';


import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class FilterableArtistContainer extends React.Component{
constructor(){
  super()
  this.state = {
    inputValue: ''
  }
  this.handleChange = this.handleChange.bind(this)
}

handleChange(event){
  this.setState({
    inputValue: event.target.value
  })
}

render(){
  const val = this.state.inputValue;
  const filteredArtists = this.props.artists.filter((artist)=>{
    return artist.name.match(val);
  })

  return (
    <div>
      <FilterInput handleChange={this.handleChange}/>
      <Artists artists={filteredArtists}/>
    </div>
  )

}


}
