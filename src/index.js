import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
const API_KEY='AIzaSyDrNuclx6sQ4cPw-zhWWU1_WA_KQYEsci8';

class App extends Component{
  constructor(props){
    super(props);

    this.state={videos:[],ilker:'deneme'};

    YTSearch({key:API_KEY,term:'surfboards'}, (data)=>{
        this.setState({videos:data});
        //this.setState=({videos:video});
    });
  }
  render(){
            return (
              <div>
                <h1>{this.state.videos.length}</h1>
              <SearchBar />
              <VideoList videos={this.state.videos}/>
              </div>
              );
          }
    }

ReactDOM.render(<App />,document.querySelector('.container'));
