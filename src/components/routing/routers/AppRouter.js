import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeRouter from "../../HomeRouter";
import Dashboard from "../../screens/Dashboard";

function AppRouter() {
	console.log("in app router");
	return (
		<Routes>
			<Route path="/*" element={<HomeRouter />} />
		</Routes>
	);
}

export default AppRouter;
