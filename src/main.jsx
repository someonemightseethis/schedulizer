import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import BusinessRegistrationForm from "./components/BusinessRegistrationForm.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import BusinessInfo from "./components/BusinessInfo.jsx";
import Services from "./components/Services.jsx";
import Home from "./components/Home.jsx";
import ProfilePicBio from "./components/ProfilePicBio.jsx";
import Tests from "./components/Tests.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/schedulizer/" element={<Home />} />
				<Route path="/schedulizer/dashboard" element={<Dashboard />} />
				<Route path="/schedulizer/services" element={<Services />} />
				<Route path="/schedulizer/signin" element={<SignIn />} />
				<Route path="/schedulizer/signup" element={<SignUp />} />
				<Route path="/schedulizer/profilepicbio" element={<ProfilePicBio />} />
				<Route path="/schedulizer/tests" element={<Tests />} />
				<Route
					path="/schedulizer/businessregistration"
					element={<BusinessRegistrationForm />}
				/>
				<Route path="/schedulizer/businessinfo" element={<BusinessInfo />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
