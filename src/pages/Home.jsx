import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import { ContactSubmit } from "./ContactSubmit.jsx";
export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const[contactArray,setContactArray]=useState([])


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
	.then((data)=>{
		dispatch({type: "set_contact_list",payload:data.contacts})
	})
}

useEffect(()=>{
	getData();
},[])

	return (
	<div className="container">
		<h1>My Contacts</h1>
		{store.contactArray.length > 0 ? 
			store.contactArray.map(
				(contacts)=>{
					return(
						<div className= "contactCard m-3 p-2 rounded-3 border-3">
							<div>name: {contacts.name}</div>
							<div>email: {contacts.email}</div>
							<div>phone: {contacts.phone}</div>
							<div>address: {contacts.address}</div>
							<Link to="/submit">
								<button
								onClick={
									()=>{
									dispatch({ type:"set_single_contact", payload:contacts})
								}}
								>Edit</button>
							</Link>
							<button>Delete</button>
						</div>
					)
				})
				:
				"no contacts found"
			}

	</div>
	);
};

