import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/images/dashboard.png";
import user from "../../assets/images/user.png";

function Header() {
	return (
		<>
			<Container>
				<Left>
					<LogoContainer>
						<Logo src={logo} />
					</LogoContainer>
					<Title>DASHBOARD</Title>
				</Left>
				<Nav>
					<NavItem
						to="/"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<Menu>Dashboard</Menu>
					</NavItem>
					<Menu>Reports</Menu>
					<NavItem
						to="products/"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<Menu>Products</Menu>
					</NavItem>

					<NavItem
						to="accounts/"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<Menu>Accounts</Menu>
					</NavItem>
					<Menu>Settings</Menu>
				</Nav>
				<Right>
					<LogoBox>
						<UserLogo src={user} />
					</LogoBox>
					<NavLink to="/auth/login">
						<Logout>Logout</Logout>
					</NavLink>
				</Right>
			</Container>
			{/* <MoblieMenu>kjjpj</MoblieMenu> */}
			<Outlet />
		</>
	);
}

export default Header;

const Container = styled.div`
	height: 100px;
	padding: 0 10px;
	margin-bottom: 5%;
	border-radius: 12px;
	backdrop-filter: blur(16px) saturate(180%);
	-webkit-backdrop-filter: blur(5px) saturate(180%);
	background-color: rgba(255, 255, 255, 0.41);
	border: 1px solid rgba(255, 255, 255, 0.125);
	box-shadow: inset 0 0 1px rgba(17, 25, 40, 0);
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media all and (max-width: 640px) {
		display: none;
	}
`;
const Left = styled.h1`
	display: inline-flex;
	height: 100%;
	align-items: center;
	cursor: pointer;
`;
const LogoContainer = styled.div`
	width: 70px;
	margin-right: 5px;
	@media all and (max-width: 720px) {
		width: 50px;
	}
`;
const Logo = styled.img`
	display: block;
	width: 100%;
	filter: invert(100%) sepia(100%) saturate(18%) hue-rotate(215deg)
		brightness(105%) contrast(100%);
`;
const Title = styled.span`
	font-size: 32px;
	color: #141414;
	@media all and (max-width: 720px) {
		font-size: 24px;
	}
`;
const Nav = styled.ul`
	display: flex;
	align-items: center;
	grid-gap: 20px;
`;
const NavItem = styled(NavLink)`
	&.active {
		background: #e6e6e6;
		color: #656565;
		border-radius: 10px;
	}
`;
const Menu = styled.li`
	font-size: 20px;
	box-sizing: border-box;
	padding: 10px;
	&:hover {
		color: #656565;
		cursor: pointer;
	}
	&.selected {
	}
`;
const Right = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	box-sizing: border-box;
	padding: 10px;
	&:hover {
		background: #e6e6e6;
		color: #656565;
		border-radius: 10px;
	}
`;
const LogoBox = styled.div`
	width: 30px;
	margin-right: 5px;
`;
const UserLogo = styled.img`
	display: block;
	width: 100%;
	filter: invert(36%) sepia(24%) saturate(8%) hue-rotate(12deg)
		brightness(101%) contrast(89%);
`;
const Logout = styled.span`
	font-size: 20px;
`;
const MoblieMenu = styled.div``;
