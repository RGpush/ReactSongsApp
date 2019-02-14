import React from 'react';
import { connect } from 'react-redux';

import {selectSong} from '../actions';


class SongList extends React.Component{

    getSongsList() {
        return this.props.songs.map((item) => {
            return (
                <div key={item.title} className='item'>
                <div className='right floated content'>
                    <button onClick={()=> this.props.selectSong(item)}
                            className='ui button primary'
                    >
                        Select
                    </button>
                </div>
                <div className='content'>{item.title}</div>
                </div>
                )
        })
    }
    render() {
        return (
            <div className='ui divided list'>{this.getSongsList()}</div>
        );
    }
}

const mapStateToProps = state => {

return { songs: state.songs};
}

export default connect(mapStateToProps,{selectSong})(SongList);
