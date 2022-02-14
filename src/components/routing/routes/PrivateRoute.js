import React from "react";
import {
	Route,
	createSearchParams,
	useNavigate,
	Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../contexts/store";

export const PrivateRoute = ({ children }) => {
	const { state } = useContext(Context);
	const navigate = useNavigate();
	const goToPosts = () =>
		navigate({
			pathname: "/auth/login",
			search: "?sort=date&order=newest",
		});

	const auth = state.userData.isVerified;
	return auth ? children : goToPosts();
};
