import React, { Component } from 'react';
import { Text, View } from 'react-native';
//用Axio取数据: 在当前directory安装 Axios  npm install --save axios
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//class component
class AlbumList extends Component {

  state = { albums: [] }; //防止从API读取的数据很慢或者空
  //this.state.albums就能读到数据了

	// const { textStyle, viewStyle } = styles;
  //lifecycle method, will be automatically called
  componentWillMount() {
    console.log('component will mount in AlbumList');
    // debugger;
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then(response => console.log(response.data));

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

renderAlbums() {
  return this.state.albums.map(album =>
     <AlbumDetail key={album.title} record={album} />
  );
}

  render() {
    console.log(this.state); // 看response.data
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }

}

export default AlbumList;
