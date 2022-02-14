import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../contexts/store";

export const AuthRoute = ({ component: Component, ...rest }) => {
	const { state } = useContext(Context);
	return (
		<Route
			{...rest}
			render={(props) => {
				if (!state.user_data.is_verified) {
					return <Component {...props} />;
				} else {
					return (
						<Navigate
							to={{
								pathname: "/",
							}}
						/>
					);
				}
			}}
		/>
	);
};
