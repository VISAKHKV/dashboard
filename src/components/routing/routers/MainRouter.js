import React from "react";
import { Routes, Route } from "react-router-dom";
import AppRouter from "./AppRouter";
import AuthRouter from "./AuthRouter";
import { PrivateRoute } from "../routes/PrivateRoute";
import { AuthRoute } from "../routes/AuthRoute";

function MainRouter() {
	console.log("in main router");
	return (
		<Routes>
			<Route
				path="/*"
				element={
					<PrivateRoute>
						<AppRouter />
					</PrivateRoute>
				}
			/>
			<Route path="/auth/*" element={<AuthRouter />} />
		</Routes>
	);
}

export default MainRouter;
