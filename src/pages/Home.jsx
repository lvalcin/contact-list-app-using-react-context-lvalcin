import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useState, useEffect} from "react";

import { ContactSubmit } from "./ContactSubmit.jsx";
export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const[contactArray,setContactArray]=useState([])

//   contactArray.map()=>{
// 	return 
//   }


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
	.then((data)=> console.log(data, "this is my agenda")) 
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
	.then((data)=>{console.log(data.contacts, "here are the contacts") //am I accessing the array of contacts??
	setContactArray(data.contacts)
	console.log("this is my state! ",contactArray )

})
}
useEffect(()=>{
	getData();
},[])
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>

			{contactArray.map(
				(contact)=>{
				return (
					<div className="record">
						{contact.item}
						<span className ="delete-btn">

						</span>
						{console.log(contact, " this is my mapping! ")}
					</div>
				)}
			)}
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
};
