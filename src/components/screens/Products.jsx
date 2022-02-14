import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { getData } from "../Data";

import trash from "../../assets/images/delete.svg";

function Products({ setScreen, setSelectedMenu }) {
	const data = getData();
	const categories = data[0];

	const [selectedItemId, setSelectedItemId] = useState([]);
	const [itemIndex, setItemIndex] = useState("");
	const [sample, setSample] = useState([]);

	const selectedItem = (item) => {
		console.log(item);
	};

	const addItem = (item) => {
		setSelectedItemId((prev) => prev.concat(item.id));
	};

	console.log(selectedItemId);
	useEffect(() => {
		setScreen("products");

		axios
			.get("http://127.0.0.1:8000/products/")
			.then(function (response) {
				// handle success
				console.log(response.data);
				setSample(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, []);

	return (
		<Container>
			<ProductsListContainer>
				<Scroll>
					<Title>
						<Left>Products</Left>
						<Right>Add new products</Right>
					</Title>
					<ProductList>
						<Product className="top">
							<SelectionBox>
								<Selection className="hide"></Selection>
							</SelectionBox>
							<ProductName>Product Name</ProductName>
							<Units>Units Sold</Units>
							<Stocks>In Stock</Stocks>
							<ExpiryDate>Expire Date</ExpiryDate>
							<DeleteBox>
								<Delete className="hide">
									<img src={trash} alt="trash box" />
								</Delete>
							</DeleteBox>
						</Product>
						{categories.map((products) =>
							products.subCategories.map((item) => (
								<Product
									key={item.id}
									onClick={() => selectedItem(item)}
								>
									<SelectionBox>
										<Selection
											onClick={() => addItem(item)}
											className={
												selectedItemId.includes(
													item.id
												) && "selected"
											}
										></Selection>
									</SelectionBox>
									<ProductName>
										{item.id}. {item.name}
									</ProductName>
									<Units>{item.units}</Units>
									<Stocks>{item.stock}</Stocks>
									<ExpiryDate>{item.expiry}</ExpiryDate>
									<DeleteBox>
										<Delete>
											<img src={trash} alt="trash box" />
										</Delete>
									</DeleteBox>
								</Product>
							))
						)}
					</ProductList>
				</Scroll>
			</ProductsListContainer>
			<CategoryList>
				<Heading>Product Categories</Heading>
				{categories.map((item) => (
					<Categories key={item.id}>
						<CategoryName>
							{item.id}. {item.mainCategory}
						</CategoryName>
						<Delete>
							<img src={trash} alt="trash box" />
						</Delete>
					</Categories>
				))}
			</CategoryList>
			<div>
				{sample.map((item) => (
					<h6>{item.category}</h6>
				))}
			</div>
		</Container>
	);
}

export default Products;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
const ProductsListContainer = styled.div`
	padding: 30px;
	box-sizing: border-box;
	width: 65%;
	height: 100%;
	backdrop-filter: blur(16px) saturate(138%);
	background-color: rgba(116, 113, 113, 0.2);
	border-radius: 12px;
	box-shadow: inset -5px -6px 10px 10px #5e5b6459;
	border: 1px solid rgba(209, 213, 219, 0.3);
	@media all and (max-width: 640px) {
		width: 90%;
		margin: 0 auto;
	}
`;
const Scroll = styled.div``;
const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
`;
const Left = styled.h4`
	color: #242424;
	font-size: 24px;
`;
const Right = styled.span`
	font-size: 17px;
	color: #141414;
	border: 1px solid #242424;
	padding: 10px;
	font-weight: 500;
	&:hover {
		background: #fff;
		border: 1px solid #f1f1f1;
		cursor: pointer;
	}
`;
const ProductList = styled.ul`
	margin-top: 35px;
	overflow-x: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;
const Product = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 18px;
	color: #141414;
	background: #d4d3d3;
	padding: 10px;
	min-width: 640px;
	&.top {
		background: #989aaf;
		padding: 15px 10px;
		font-weight: 600;
		&:hover {
			color: #141414;
		}
	}
	&:nth-child(2n) {
		background: #fcefef;
		border-top: 0.5px solid #444343;
		border-bottom: 0.5px solid #444343;
	}
	&:hover {
		color: blue;
	}
`;
const SelectionBox = styled.div`
	width: 5%;
`;
const Selection = styled.div`
	width: 10px;
	height: 10px;
	border: 1px solid #242424;
	cursor: pointer;
	&.selected {
		background: brown;
	}
	&.hide {
		display: none;
	}
`;
const ProductName = styled.div`
	width: 30%;
`;
const Units = styled.div`
	width: 20%;
`;
const Stocks = styled.div`
	width: 20%;
`;
const ExpiryDate = styled.div`
	width: 20%;
`;
const DeleteBox = styled.div`
	width: 5%;
`;
const Delete = styled.div`
	width: 30px;
	cursor: pointer;
	&.hide {
		display: none;
	}
`;
const CategoryList = styled.div`
	width: 30%;
	height: 100%;
	padding: 30px;
	box-sizing: border-box;
	backdrop-filter: blur(16px) saturate(138%);
	-webkit-backdrop-filter: blur(16px) saturate(138%);
	background-color: rgba(116, 113, 113, 0.2);
	border-radius: 12px;
	box-shadow: inset -5px -6px 10px 10px #5e5b6459;
	border: 1px solid rgba(209, 213, 219, 0.3);
	@media all and (max-width: 640px) {
		width: 90%;
		margin: 0 auto;
	}
`;
const Heading = styled.h4`
	color: #242424;
	font-size: 24px;
	margin-bottom: 30px;
`;
const Categories = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #d4d3d3;
	padding: 10px;
	&.top {
		background: #989aaf;
		padding: 15px 10px;
		font-weight: 600;
		&:hover {
			color: unset;
		}
	}
	&:nth-child(2n) {
		background: #fcefef;
	}
`;
const CategoryName = styled.span`
	color: #242424;
	font-size: 20px;
	max-width: 70%;
`;
