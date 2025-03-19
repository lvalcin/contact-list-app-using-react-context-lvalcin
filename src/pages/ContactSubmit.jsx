import React, { useState } from "react";

export const ContactSubmit = () => {
    const[nameInput,setNameInput]=useState("")
    const[phoneInput,setphoneInput]=useState("")
    const[emailInput,setEmailInput]=useState("")
    const[addressInput,setAddressInput]=useState("")

    // {
    //     "name": "string",
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
    return(
	<div>
        <input onChange={(e)=>setNameInput(e.target.value)}type="text" placeholder="name"/>
        <input onChange={(e)=>setphoneInput(e.target.value)}type="text" placeholder="phone"/>
        <input onChange={(e)=>setEmailInput(e.target.value)}type="text" placeholder="email"/>
        <input onChange={(e)=>setAddressInput(e.target.value)}type="text" placeholder="address"/>
        <button onClick={submitContact}>Submit</button>
    </div>
    )
};
