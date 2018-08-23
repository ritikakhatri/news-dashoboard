import React, { Component } from 'react';
import {connect} from "react-redux"
import './App.css';
import { thunk_action_midd } from "./action/fetchData";
import News from "./News";

class App extends Component {
  componentDidMount(){
    this.props.dispatch(thunk_action_midd())
  }
  render() {

    return (
      <div className="col-md-6">
        <h1>Top 10 News</h1>
        {this.props.isFetching ? "Loading..." : null}
        <ul>{Array.isArray(this.props.data) && this.props.data.map(obj=> <News news={obj} />)}</ul>

      </div>
    );
  }
}

const mapStateTpProps = state=>({
  data: state.newsData,
  isFetching: state.isFetching
})
export default connect(mapStateTpProps)(App);
