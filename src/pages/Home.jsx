import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect} from "react";
export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

//This is a post request
 const createAgenda = ()=>{
	const option={
		method: "POST",
		headers:{
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			"slug": "lvalcin",
			"id": 0
		  })
	}
	fetch("https://playground.4geeks.com/contact/agendas/lvalcin/", option)
	.then((resp)=>{
		if(resp.ok==false){
			console.log("IT FAILED!")
	} 
	else{
		getData()
	}
	return resp.json()
	})
	.then((data)=> console.log(data, "agenda created"))
	} 

	//function to retreieve contacts
const getData= ()=>{
	fetch("https://playground.4geeks.com/contact/agendas/lvalcin/contacts")
	.then((resp)=>{
		console.log(resp)
		if (resp.ok==false){
			createAgenda()
		}
		else{
			return resp.json()
	}})
	.then((data)=>console.log(data))
}
useEffect(()=>{
	getData();
},[])
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
};
