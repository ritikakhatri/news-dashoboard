import React, {Components} from "react";

const News = (props)=>{
		return(
			<li>{props.news.title}</li>
		)

}
const mapStateToProps = state=> ({
	data: state.newsData
})
export default News;