import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../../assets/images/dashboard.png";
import bg_1 from "../../assets/images/dash-bg-01.jpg";

function Login() {
	const personUser = "admin";
	const personPassword = "admin@123";

	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [credentials, setCredentials] = useState([]);

	const LOCAL_STORAGE_KEY = ["username", "password"];

	const loginCheck = (e) => {
		e.preventDefault();
		if (userName === personUser && password === personPassword) {
			console.log("success");
			window.location.href = "/";
		} else {
			alert("Login Unsuccessfull");
		}
	};

	// useEffect(() => {
	// 	localStorage.setItem(LOCAL_STORAGE_KEY, [
	// 		JSON.stringify(userName),
	// 		JSON.stringify(password),
	// 	]);
	// }, [userName, password]);

	// useEffect(() => {
	// 	const retrieveCredentials = JSON.parse(
	// 		localStorage.getItem(LOCAL_STORAGE_KEY)
	// 	);
	// 	if (retrieveCredentials) setCredentials(retrieveCredentials);
	// 	console.log(credentials);
	// }, []);

	return (
		<Container>
			<LoginBox>
				<Top>
					<LogoContainer>
						<Logo src={logo} alt="logo" />
					</LogoContainer>
					<Title>Login</Title>
				</Top>
				<CredentialsForm
					onSubmit={(e) => {
						loginCheck(e);
					}}
				>
					<Credential>
						<Label for="username">Username</Label>
						<Input
							name="username"
							type="text"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
					</Credential>
					<Credential>
						<Label for="password">Password</Label>
						<Input
							name="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Credential>
					<Submit>Login</Submit>
				</CredentialsForm>
			</LoginBox>
			<Goto>
				Don't have an account yet,
				<Link to="/">
					<Span className="signup"> click here to Sign up..!</Span>
				</Link>
			</Goto>
		</Container>
	);
}

export default Login;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	/* height: 100%; */
	height: 100vh;
	background: url(${bg_1});
`;
const LoginBox = styled.div`
	background: #fff;
	width: 40%;
	padding: 2rem;
	margin: auto;
	border-radius: 4px;
	@media all and (max-width: 980px) {
		width: 55%;
	}
	@media all and (max-width: 640px) {
		width: 80%;
	}
`;
const Top = styled.div``;
const LogoContainer = styled.h1`
	margin: 0 auto;
	width: 75px;
`;
const Logo = styled.img`
	display: block;
	width: 100%;
	filter: invert(36%) sepia(24%) saturate(8%) hue-rotate(12deg)
		brightness(101%) contrast(89%);
`;
const Title = styled.h3`
	text-align: center;
	font-size: 24px;
	margin-bottom: 20px;
`;
const CredentialsForm = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	grid-gap: 15px;
`;
const Credential = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;
const Label = styled.label`
	font-size: 20px;
	width: 100px;
	@media all and (max-width: 640px) {
		width: 100%;
		text-align: center;
		margin-bottom: 10px;
	}
`;
const Input = styled.input`
	padding: 12px 5px;
	background: #fff;
	border: 1px solid #656565;
	border-radius: 2px;
	color: #656565;
	font-size: 16px;
	@media all and (max-width: 640px) {
		width: 85%;
	}
`;
const Submit = styled.button`
	display: inline-block;
	width: 100px;
	height: 40px;
	font-size: 18px;
	font-weight: 600;
	text-align: center;
	margin: 0 auto;
	background: #fff;
	border: 1px solid #656565;
	border-radius: 2px;
	color: #000;
	cursor: pointer;
	@media all and (max-width: 640px) {
		margin-top: 15px;
	}
`;
const Goto = styled.h6`
	text-align: center;
	margin: 20px 0;
	font-size: 14px;
	color: #fff;
`;
const Span = styled.span`
	color: #1e9cce;
`;
