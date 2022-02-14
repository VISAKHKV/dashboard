import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../screens/Login";

function AuthRouter() {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default AuthRouter;
