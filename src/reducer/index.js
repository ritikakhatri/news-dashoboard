const initialState = {
	newsData:{},
	newsSearchData:{},
	isFetching: true,
	isError: false
}

const asyncReducer = (state=initialState, action)=>{
	switch(action.type){
		case "FETCH_NEWS" :
			return Object.assign({}, state,{
				newsData:  {},
				isFetching: true
			});
		case "RECEIVE_NEWS" :
			return Object.assign({}, state, {
				newsData:  action.data,
				isFetching: false
			});
		case "RECEIVE_NEWS_PARAMS" :
			console.log(action.data)
			return Object.assign({}, state, {
				newsSearchData:  action.data,
				isFetching: false
			});
		case "FETCH_NEWS_PARAMS" :
			return Object.assign({}, state, {
				newsSearchData:  {},
				isFetching: true
			});
		case "ERROR" :
			return state;
		default:
			return state;
	}
}

export default asyncReducer;