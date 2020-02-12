import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends React.Component {
  render () {
 
  // const songs = this.props.initialdata.songs.map(songObj => songObj.name)
  console.log(this.props.initialdata.bandMates)

  return (
    <div className="App">
      <Header bandName={this.props.initialdata.bandName} />
      <Sidebar songList={this.props.initialdata.songs} />
      <Main bandMates={this.props.initialdata.bandMates}/>
      {/* <Footer /> */}
    </div>
    );
  }
}

export default App;
