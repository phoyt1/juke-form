import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class NewPlaylistContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      inputVal: '',
      playlistName: '',
      disabled: true,
      showMessage: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkInputLength = this.checkInputLength.bind(this);
    // console.log(props);
  }

  handleChange(event){
    this.setState({
      inputVal: event.target.value
    })
    this.checkInputLength(event)
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      playlistName: this.state.inputVal,
      inputVal: '',
      disabled: true
    })
    this.props.addPlaylist(this.state.inputVal);
    // axios.post('/api/playlists', { name: this.state.inputVal })
    //   .then(res => res.data)
    //   .then(result => {
    //     console.log(result) // response json from the server!
    //   });
  }
  checkInputLength(event){
    let inputLength = event.target.value.length
    if(inputLength >= 1 && inputLength <= 16){
      this.setState({
        disabled: false,
        showMessage: false
    })
    }else{
      this.setState({
        disabled: true,
        showMessage: true
      })
    }
  }




  render(){
    return (
      <div>
        <NewPlaylist disabled={this.state.disabled} inputVal={this.state.inputVal} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        {
          this.state.showMessage ?
            <div className="alert alert-warning">Please enter a valid name</div>
          :
          null
        }
      </div>
    )
  }

}
