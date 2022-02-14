import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function LandingPage() {
	return (
		<Container>
			<Title>Dashboard</Title>
			<Link to="/login">
				<Button>Login</Button>
			</Link>
		</Container>
	);
}

export default LandingPage;

const Container = styled.div`
	text-align: center;
`;
const Title = styled.h1`
	color: #fff;
	font-size: 45px;
`;
const Button = styled.button`
	display: inline-block;
	margin: 100px auto 0;
	width: 150px;
	height: 45px;
	padding: 6px 10px;
	font-size: 18px;
	font-weight: 600;
	color: #000;
	cursor: pointer;
	backdrop-filter: blur(16px) saturate(180%);
	-webkit-backdrop-filter: blur(16px) saturate(180%);
	background-color: rgb(244, 246, 250);
	border-radius: 12px;
	border: 1px solid rgba(255, 255, 255, 0.125);
`;
