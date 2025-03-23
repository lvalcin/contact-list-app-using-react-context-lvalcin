import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
	const {store, dispatch} =useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Go to Contact List</span>
				</Link>
				<div className="ml-auto">
					<Link to="/submit">
						<button 
						onClick={()=>{
							let emptyContact={
								name:"",
								email:"",
								phone:"",
								address:""
							}
							dispatch({ type:"set_single_contact", payload:emptyContact })
						}}
						className="btn btn-success"
						>
							Add New Contact
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};