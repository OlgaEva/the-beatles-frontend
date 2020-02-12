import React from 'react';
import './App.css';

class Main extends React.Component {
    render() {
        
        const picArray = this.props.bandMates.map(pictureObj => pictureObj.pic)
        console.log(picArray)
        const picArraySrc = this.props.bandMates.map(pictureObj => <img src={pictureObj.pic} alt="" />)
        const names = this.props.bandMates.map(nameObj => <span>{nameObj.name}{" "}</span>)        
        return (
            <div>
                <h2>These are The Beatles: </h2>
                <div>
                {picArraySrc}
                <br/>
                {names}
                </div>
            </div>
        );
    }
}

export default Main;