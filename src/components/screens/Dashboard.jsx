import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getData } from "../Data";

import table_1 from "../../assets/images/table_1.png";
import table_2 from "../../assets/images/table_2.png";
import table_3 from "../../assets/images/table_3.png";

function Dashboard({ setScreen }) {
	console.log("in dashboard");

	const data = getData();
	const categories = data[0];

	const tasks = data[1];

	useEffect(() => {
		setScreen("dashboard");
	}, []);

	return (
		<Container>
			<TopTable>
				<Table>
					<img src={table_1} alt="First table" />
				</Table>
				<Table>
					<img src={table_2} alt="Second table" />
				</Table>
				<Table>
					<img src={table_3} alt="Third table" />
				</Table>
			</TopTable>
			<TopItemsContainer>
				<TopProducts>
					<Title>
						<Heading>Top Products</Heading>
						<Link to="products/">
							<Right>view all</Right>
						</Link>
					</Title>
					<Lists>
						{categories.map((products) =>
							products.subCategories.map((item) => (
								<List key={item.id}>
									{item.id}. {item.name}
								</List>
							))
						)}
					</Lists>
				</TopProducts>
				<TopNewsContainer>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405688.6188940959!2d-122.32129462542736!3d37.40301850702317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1641819316861!5m2!1sen!2sin"
						title="address"
					></iframe>
				</TopNewsContainer>
				<UpcomingTaskContainer>
					<Heading className="bottom">Upcoming Tasks</Heading>
					<Lists>
						{tasks.map((item) => (
							<List key={item.id} className="task">
								{item.id}. {item.task}
							</List>
						))}
					</Lists>
				</UpcomingTaskContainer>
			</TopItemsContainer>
		</Container>
	);
}

export default Dashboard;

const Container = styled.div``;
const TopItemsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	grid-gap: 3rem;
`;
const TopTable = styled.ul`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	grid-gap: 15px;
`;
const Table = styled.li`
	height: 320px;
	overflow: hidden;
`;
const TopProducts = styled.div`
	padding: 25px;
	margin-top: 30px;
	color: #fff;
	backdrop-filter: blur(16px) saturate(138%);
	-webkit-backdrop-filter: blur(16px) saturate(138%);
	background-color: rgba(255, 255, 255, 0);
	border-radius: 12px;
	border: 1px solid rgba(209, 213, 219, 0.3);
	width: 25%;
	height: 100%;
	@media all and (max-width: 640px) {
		width: 70%;
		margin: 10px auto;
	}
`;
const Title = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`;
const Heading = styled.h4`
	font-size: 20px;
	&.bottom {
		margin-bottom: 30px;
	}
`;
const Right = styled.h6`
	font-size: 17px;
	color: #e6e4e4;
	font-weight: 500;
	&:hover {
		color: #fff;
	}
`;
const Lists = styled.ul``;
const List = styled.li`
	padding: 7px;
	color: #f1f1f1;
	background: #070a13;
	&:nth-child(2n) {
		background: #101111;
		border-top: 0.5px solid #444343;
		border-bottom: 0.5px solid #444343;
	}
	&.task {
		background: #151925;
		&:nth-child(2n) {
			background: #3f4141;
			border-top: 0.5px solid #444343;
			border-bottom: 0.5px solid #444343;
		}
	}
`;
const TopNewsContainer = styled.div`
	padding: 25px;
	margin-top: 30px;
	color: #fff;
	backdrop-filter: blur(16px) saturate(138%);
	-webkit-backdrop-filter: blur(16px) saturate(138%);
	background-color: rgba(255, 255, 255, 0);
	border-radius: 12px;
	box-shadow: inset -5px -6px 10px 10px #5e5b6459;
	border: 1px solid rgba(209, 213, 219, 0.3);
	width: 40%;
	height: 100%;
	@media all and (max-width: 640px) {
		width: 70%;
		margin: 10px auto;
	}
`;
const UpcomingTaskContainer = styled.div`
	padding: 25px;
	margin-top: 30px;
	color: #fff;
	backdrop-filter: blur(16px) saturate(138%);
	-webkit-backdrop-filter: blur(16px) saturate(138%);
	background-color: rgba(255, 255, 255, 0);
	border-radius: 12px;
	box-shadow: inset -5px -6px 10px 10px #5e5b6459;
	border: 1px solid rgba(209, 213, 219, 0.3);
	width: 30%;
	height: 100%;
	@media all and (max-width: 640px) {
		width: 70%;
		margin: 10px auto;
	}
`;
