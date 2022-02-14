import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getData } from "../Data";

import profile from "../../assets/images/profile-image.png";

function Accounts({ setScreen }) {
	const data = getData();
	const accounts = data[2];
	const [id, setId] = useState(1);

	useEffect(() => {
		setScreen("accounts");
	}, []);

	return (
		<MainContainer>
			<AccountsListContainer>
				<Title>Accounts</Title>
				<AccountsList>
					{accounts.map((i) => (
						<Account
							key={i.id}
							onClick={() => {
								setId(i.id);
							}}
							className={i.id == id && "selected"}
						>
							{i.id}. {i.accountName}
						</Account>
					))}
				</AccountsList>
			</AccountsListContainer>
			<EditAccountContainer>
				<Title>Edit Account</Title>
				{accounts.map(
					(e) =>
						e.id == id && (
							<FormContainer key={e.id}>
								<Label for="account_name">Account Name</Label>
								<Input
									type="text"
									name="account_name"
									value={e.accountName}
								/>

								<Label for="account_email">Account Email</Label>
								<Input
									type="email"
									name="account_email"
									value={e.email}
								/>

								<Label for="password">Password</Label>
								<Input
									type="password"
									name="password"
									value={e.password}
								/>

								<Label for="password2">Re-enter Password</Label>
								<Input
									type="password"
									name="password2"
									value={e.password}
								/>

								<Label for="account_phonenumber">
									Phone number
								</Label>
								<Input
									type="text"
									name="account_phonenumber"
									value={e.phonenumber}
								/>

								<ButtonContainer>
									<Button>Update</Button>
									<Button className="delete">
										Delete Account
									</Button>
								</ButtonContainer>
							</FormContainer>
						)
				)}
			</EditAccountContainer>
			<EditPhotoContainer>
				<PhotoContainer>
					<Photo src={profile} />
				</PhotoContainer>
				<Input type="file" placeholder="Upload New Photo" />
			</EditPhotoContainer>
		</MainContainer>
	);
}

export default Accounts;

const MainContainer = styled.div`
	display: flex;
	justify-content: space-between;
	grid-gap: 3rem;
`;
const AccountsListContainer = styled.div`
	padding: 25px;
	color: #fff;
	backdrop-filter: blur(16px) saturate(138%);
	&::-webkit-backdrop-filter: blur(16px) saturate(138%);
	background-color: rgba(209, 213, 219, 0.3);
	border-radius: 12px;
	box-shadow: inset -5px -6px 10px 10px #5e5b6459;
	border: 1px solid rgba(209, 213, 219, 0.3);
	width: 25%;
	height:100%;
	@media all and (max-width: 640px) {
		width: 70%;
		margin: 10px auto;
	}
`;
const Title = styled.h3`
	margin-bottom: 20px;
`;
const AccountsList = styled.ul``;
const Account = styled.li`
	padding: 10px 7px;
	color: #343434;
	font-weight: 600;
	background: #f5fcfb;
	cursor: pointer;
	&:hover {
		color: #6b6be9;
	}
	&:nth-child(2n) {
		background: #c0c9c9;
		border-top: 0.5px solid #d8d3d3;
		border-bottom: 0.5px solid #d8d3d3;
	}
	&.task {
		background: #151925;
		&:nth-child(2n) {
			background: #3f4141;
			border-top: 0.5px solid #444343;
			border-bottom: 0.5px solid #444343;
		}
	}
	&.selected {
		color: blue;
	}
`;
const EditAccountContainer = styled.div`padding: 25px;
	color: #fff;
	backdrop-filter: blur(16px) saturate(138%);
	&::-webkit-backdrop-filter: blur(16px) saturate(138%);
	background-color: rgba(209, 213, 219, 0.3);
	border-radius: 12px;
	box-shadow: inset -5px -6px 10px 10px #5e5b6459;
	border: 1px solid rgba(209, 213, 219, 0.3);
	width: 35%;
	height:100%;
	@media all and (max-width: 640px) {
		width: 70%;
		margin: 10px auto;
	}`;
const FormContainer = styled.form``;
const Label = styled.label`
	display: block;
	color: #141414;
	font-weight: 500;
	margin-bottom: 15px;
	font-size: 18px;
`;
const Input = styled.input`
	width: 100%;
	font-size: 16px;
	padding: 14px 10px;
	box-sizing: border-box;
	color: #424242;
	border: 1px solid #f1f1f1;
	border-radius: 2px;
	margin-bottom: 15px;
`;
const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
`;
const Button = styled.button`
	display: inline-block;
	width: 80px;
	height: 40px;
	background: #fff;
	border-radius: 4px;
	color: #242424;
	font-weight: 500;
	font-size: 18px;
	border: 2px solid #141414;
	cursor: pointer;
	&.delete {
		width: 200px;
		border: 2px solid #e02727;
		color: brown;
	}
`;
const EditPhotoContainer = styled.div`
	padding: 25px;
	color: #fff;
	backdrop-filter: blur(16px) saturate(138%);
	&::-webkit-backdrop-filter: blur(16px) saturate(138%);
	background-color: rgba(209, 213, 219, 0.3);
	border-radius: 12px;
	box-shadow: inset -5px -6px 10px 10px #5e5b6459;
	border: 1px solid rgba(209, 213, 219, 0.3);
	width: 20%;
	height:100%;
	@media all and (max-width: 640px) {
		width: 70%;
		margin: 10px auto;
	}
`;
const PhotoContainer = styled.div`
	width: 100%;
	height: 200px;
	margin-bottom: 30px;
	overflow: hidden;
`;
const Photo = styled.img`
	width: 100%;
	display: block;
`;
