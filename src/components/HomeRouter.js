import React, { useState } from "react";
import styled from "styled-components";
import Login from "./screens/Login";
import LandingPage from "./screens/LandingPage";
// import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import bg_1 from "./../assets/images/dash-bg-01.jpg";
import bg_2 from "./../assets/images/dash-bg-02.jpg";
import bg_3 from "./../assets/images/dash-bg-03.jpg";
import Dashboard from "./screens/Dashboard";
import Products from "./screens/Products";
import Accounts from "./screens/Accounts";
import Header from "./includes/Header";

function HomeRouter() {
	const [screen, setScreen] = useState("dashboard");
	return (
		<MainContainer screen={screen}>
			<Wrapper>
				<Routes>
					{/* <Route path="/" element={<LandingPage />} /> */}
					<Route path="/" element={<Header />}>
						<Route
							path="/"
							element={<Dashboard setScreen={setScreen} />}
						/>
						<Route
							path="products/"
							element={<Products setScreen={setScreen} />}
						/>
						<Route
							path="accounts/"
							element={<Accounts setScreen={setScreen} />}
						/>
					</Route>
					{/* <Route path="/login" element={<Login />} /> */}
					<Route path="*" element={<p>There's nothing here...</p>} />
				</Routes>
			</Wrapper>
		</MainContainer>
	);
}

export default HomeRouter;

const MainContainer = styled.div`
	height: 100vh;
	overflow-y: scroll;
	background: ${({ screen }) =>
		screen === "dashboard"
			? `url(${bg_1})`
			: screen === "products"
			? `url(${bg_2})`
			: screen === "accounts"
			? `url(${bg_3})`
			: ""};
	background-size: cover;
`;
const Wrapper = styled.div`
	width: 90%;
	margin: 0 auto;
	padding: 30px 0;
	@media all and (max-width: 640px) {
		width: 100%;
		padding-top: unset;
	}
`;
