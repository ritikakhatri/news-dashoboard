import React,{Component} from "react";
import { thunk_action_findNews } from "./action/fetchData";
import {connect} from "react-redux"
import News from "./News"
class Form extends Component {
	handleSubmit = (e)=> {
		e.preventDefault();
		this.props.dispatch(thunk_action_findNews(this.getInput.value));

	}
	render() {
		return(
			<div className="col-md-6">
			<h1>Enter key word to fetch news</h1>
			<form onSubmit={this.handleSubmit}>
				<input type="text" ref={(input)=> this.getInput = input} />
				<button type="submit">Get News</button>

			</form>
			{Array.isArray(this.props.data) && this.props.data.map((obj)=> <News news={obj}/>)}
			</div>
		)
	}
}
const mapStateToProps = state=>({
  data: state.newsSearchData,
  isFetching: state.isFetching
})
export default connect(mapStateToProps)(Form);