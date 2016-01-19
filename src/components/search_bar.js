import React,{Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={term:'merhaba dünya'};
     this.onInputChange = this.onInputChange.bind(this)
  }
  onInputChange(event){
this.setState({
    term:event.target.value
  })
  }
  render(){
    return(
      <div>
      <input
        value={this.state.term}
        onChange={this.onInputChange} />
      <h2>value of state:{this.state.term}</h2>
    </div>
    );
  };
}

export default SearchBar;
