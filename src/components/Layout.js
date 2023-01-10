import React from "react";
import { Outlet } from "react-router-dom";
import ContactComponent from "./ContactComponent";
import Nav from "./nav/Nav";

const Layout = () => {
	return (
		<div className="App">
			<Nav />
			<Outlet />
			<div id="contact">
				<ContactComponent style={{ zIndex: "100" }} />
			</div>
		</div>
	);
};

export default Layout;
