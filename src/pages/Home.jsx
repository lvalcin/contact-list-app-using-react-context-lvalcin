import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import { ContactSubmit } from "./ContactSubmit.jsx";
export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const[contactArray,setContactArray]=useState([])

  useEffect(()=>{
	getData();
},[])

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
		console.log("Reponse from getData:", resp)
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

// Delete method
const deleteContact = async (id) => {
	console.log("Dispatching delete_contact for id:", id);

	const option = {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json"
		}
	};

	 await fetch(`https://playground.4geeks.com/contact/agendas/lvalcin/contacts/${id}`, option);
	

	// console.log("Delete response:", data);
	dispatch({ type: "delete_contact", payload: id });
	// getData()
}

	return (
	<div className="container">
		<h1 className="text-center">My Contacts</h1>
		{store.contactArray.length > 0 ? 
			store.contactArray.map(
				(contacts)=>{
					return(
						<div key={contacts.id} className="contactCard d-flex justify-content-start m-3 p-2 rounded-3 border border-black ">
							<div>
							 <img src= "https://placehold.co/600x400/000000/FFFFFF/png" className="me-5 card-img-top rounded-circle mx-auto border border-dark" alt="Contact" style={{ width: '150px', height: '150px' }} />
							</div>
						<div className="d-flex flex-column">
							<div>
								<h3>{contacts.name}</h3>
							</div>
							<div>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1 bi bi-envelope-fill" viewBox="0 0 16 16">
								<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
								</svg>
								<strong>Email: </strong>
								{contacts.email}
							</div>
							<div>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1 bi bi-telephone-fill" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
								</svg>
								<strong>Phone: </strong>
								{contacts.phone}
							</div>
							<div className= "pb-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
								<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
								</svg>
								<strong>Address:</strong> 
								{contacts.address}
							</div>
						</div>
						
						<div className="  flex-justify-content-end ms-auto">
							<Link to="/submit">
								<button
								className="me-1 rounded"
								onClick={
									()=>{
									dispatch({ type:"set_single_contact", payload:contacts})
								}}
								
								>Edit
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-1 bi bi-pencil-square" viewBox="0 0 16 16">
  								<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
 								 <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
								</svg>
								</button>
							</Link>
							<button
							className="rounded"
							onClick={
								()=>deleteContact(contacts.id)}
								>Delete
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-1 bi bi-trash" viewBox="0 0 16 16">
									<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
									<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
									</svg>
								</button>
						</div>
				</div>
					)
				})
				:
				"no contacts found"
			}

	</div>
	);
};

