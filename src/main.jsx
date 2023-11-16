import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Login from "./components/Login.jsx";
import Registration from "./components/Registration.jsx";
import BusinessRegistrationForm from "./components/BusinessRegistrationForm.jsx";
import Dashboard from "./components/Dashboard.jsx";
import BusinessInfo from "./components/BusinessInfo.jsx";
import Services from "./components/Services.jsx";
import Home from "./components/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/fyp-schedulizer/" element={<Home />} />
				<Route path="/fyp-schedulizer/dashboard" element={<Dashboard />} />
				<Route path="/fyp-schedulizer/services" element={<Services />} />
				<Route path="/fyp-schedulizer/login" element={<Login />} />
				<Route
					path="/fyp-schedulizer/registration"
					element={<Registration />}
				/>
				<Route
					path="/fyp-schedulizer/businessregistration"
					element={<BusinessRegistrationForm />}
				/>
				<Route
					path="/fyp-schedulizer/businessinfo"
					element={<BusinessInfo />}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
