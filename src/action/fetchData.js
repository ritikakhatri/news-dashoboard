import store from "../store/index"

export const fetch_news = ()=>({
	type: "FETCH_NEWS"
})

export const receive_news =(post)=>({
	type: "RECEIVE_NEWS",
	data: post
})
export const fetch_news_params =(post)=>({
	type: "FETCH_NEWS_PARAMS",
	data: post
})
export const receive_news_params =(post)=>({
	type: "RECEIVE_NEWS_PARAMS",
	data: post
})
export const err_news =()=>({
	type: "ERROR"
})

const apiKey = "3fa05f29af4f4dcb8074edbb2485afe3";
export const thunk_action_midd =()=>{
	store.dispatch(fetch_news());
	return function() {
		return fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3fa05f29af4f4dcb8074edbb2485afe3`)
		.then((data)=> {return data.json()})
		.then((data)=>{
			if(data){
				store.dispatch(receive_news(data.articles));
			} else {
				throw new Error('data not found')
			}
			
		})
		.catch((err)=> store.dispatch(err_news()))
	}
}

export const thunk_action_findNews =(val)=>{
	console.log(val)
	store.dispatch(fetch_news_params());
	const url = `https://newsapi.org/v2/everything?q=${val}&sortBy=publishedAt&apiKey=${apiKey}`
	return function() {
		return fetch(url)
		.then((data)=> {console.log(data); return data.json()})
		.then((data)=>{
			if(data){
				store.dispatch(receive_news_params(data.articles));
			} else {
				throw new Error('data not found')
			}
			
		})
		.catch((err)=> store.dispatch(err_news()))
	}
}