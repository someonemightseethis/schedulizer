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
				<Route path="/schedulizer/" element={<Home />} />
				<Route path="/schedulizer/dashboard" element={<Dashboard />} />
				<Route path="/schedulizer/services" element={<Services />} />
				<Route path="/schedulizer/login" element={<Login />} />
				<Route
					path="/schedulizer/registration"
					element={<Registration />}
				/>
				<Route
					path="/schedulizer/businessregistration"
					element={<BusinessRegistrationForm />}
				/>
				<Route
					path="/schedulizer/businessinfo"
					element={<BusinessInfo />}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
