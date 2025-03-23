import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const ContactSubmit = () => {
    const {store, dispatch} =useGlobalReducer()

    const[nameInput,setNameInput]=useState(store.singleContact.name)
    const[phoneInput,setPhoneInput]=useState(store.singleContact.phone)
    const[emailInput,setEmailInput]=useState(store.singleContact.email)
    const[addressInput,setAddressInput]=useState(store.singleContact.address)

    // {
    //     "name": "",
    //     "phone": "",
    //     "email": "",
    //     "address": ""
    //   }
      const submitContact = ()=>{
        const option = {
			method:"POST",
			headers:{
				"Content-Type": "application/json"
			},
			body:JSON.stringify({
                "name": nameInput,
                "phone": phoneInput,
                "email": emailInput,
                "address": addressInput
              })
		}
        fetch("https://playground.4geeks.com/contact/agendas/lvalcin/contacts",option)
        .then((resp)=>resp.json())
        .then((data)=>console.log(data,"contact cretaed"))
      } 

      const updateContact = (id)=>{
        const option = {
			method:"PUT",
			headers:{
				"Content-Type": "application/json"
			},
			body:JSON.stringify({
                "name": nameInput,
                "phone": phoneInput,
                "email": emailInput,
                "address": addressInput
              }
          )
		}
        fetch("https://playground.4geeks.com/contact/agendas/lvalcin/contacts/"+id,option)
        .then((resp)=>resp.json())
        .then((data)=>console.log(data,"contact cretaed"))
      } 

    return(
	<div className="container addContact border rounded">
        <h1 className= "text-center"> Add A New Contact </h1>
        <input onChange={(e)=>setNameInput(e.target.value)} value={nameInput} type="text" className="form-control py-3 mb-3" placeholder="name"/>
        <input onChange={(e)=>setPhoneInput(e.target.value)} value={phoneInput} type="text" className="form-control py-3 mb-3" placeholder="phone"/>
        <input onChange={(e)=>setEmailInput(e.target.value)} value={emailInput} type="text" className="form-control py-3 mb-3" placeholder="email"/>
        <input onChange={(e)=>setAddressInput(e.target.value)} value={addressInput} type="text" className="form-control py-3 mb-3" placeholder="address"/>
        <Link to= "/">
        <button className="border rounded me-1" onClick={submitContact}>Submit</button>
        </Link>
        {/* <button className="border rounded" onClick={()=>updateContact(store.singleContact.id)}>Update</button> */}
    </div>
    )
};
