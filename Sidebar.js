import React from 'react';
import './App.css';

class Sidebar extends React.Component {
    render() {
        console.log(this.props.songList)
        const songLis = this.props.songList.map(songObj => <li key={songObj}>{songObj}</li>)

        return (
            <div className="sidebar">
                <h3>List of Songs</h3>
                <ul>
                    {songLis}
                </ul>
            </div>
        );
    }
}

export default Sidebar;