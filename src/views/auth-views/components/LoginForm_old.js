


import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Button, Form, Input, Divider, Alert } from "antd";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { GoogleSVG, FacebookSVG } from 'assets/svg/icon';
import CustomIcon from 'components/util-components/CustomIcon'
import {
	signIn,
	showLoading,
	showAuthMessage,
	hideAuthMessage,
	signInWithGoogle,
	signInWithFacebook,
	authenticated
} from 'redux/actions/Auth';
import JwtAuthService from 'services/JwtAuthService'
import AuthService from "services/auth.service";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux";
export const LoginForm_old = props => {
	let history = useHistory();

	const {
		otherSignIn,
		showForgetPassword,
		hideAuthMessage,
		onForgetPasswordClick,
		showLoading,
		signInWithGoogle,
		signInWithFacebook,
		extra,
		signIn,
		token,
		loading,
		redirect,
		showMessage,
		message,
		allowRedirect,
		authenticated,
	} = props
 
  
	const initialCredential = {
		email: 'admin_matu',
		password: 'admin_matu123'
	}

	const required = (value) => {
		if (!value) {
			return (
				<div className="alert alert-danger" role="alert">
					Ce Champ est Obligatoire
				</div>
			);
		}
	};

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};




	const onLogin_jwt2 = values => {
		const currentUser = AuthService.getCurrentUser();
		AuthService.login_jwt(username, password).then(resp => {
			authenticated(currentUser.accessToken)
		},
		(error) => {
			const resMessage =
			  (error.response &&
				error.response.data &&
				error.response.data.message) ||
			  error.message ||
			console.log("message d'erreur : " + resMessage )
		  }
		)};



	useEffect(() => {
		 console.log("My Tocken (TOKEN) in useeffect  is : " + token )
		 console.log("loading  is: " + loading)
		 console.log("message  is: " + message)
		 console.log("showMessage  is: " + showMessage)
		 console.log("redirect  is: " + redirect)
		
		// loading, message, showMessage, token, redirect 
		if (token !== null && allowRedirect) {
			history.push(redirect)
		}
		if (showMessage) {
			setTimeout(() => {
				hideAuthMessage();
			}, 3000);
		}
	});

	const renderOtherSignIn = (
		<div>

		</div>
	)

	return (
		<>
			<motion.div
				initial={{ opacity: 0, marginBottom: 0 }}
				animate={{
					opacity: showMessage ? 1 : 0,
					marginBottom: showMessage ? 20 : 0
				}}>
				<Alert type="error" showIcon message={message}></Alert>
			</motion.div>
			<Form
				layout="vertical"
				name="login-form"
				onFinish={onLogin_jwt2}
			>
				<Form.Item
					name="email"
					label="Email"
					rules={[
						{
							required: true,
							message: 'Please input your email',
						},
						// {
						// 	type: 'email',
						// 	message: 'Please enter a validate email!'
						// }
					]}>
					<Input prefix={<MailOutlined className="text-primary" />} 
					value={username}
					onChange={onChangeUsername}/>
				</Form.Item>
				<Form.Item
					name="password"
					label={
						<div className={`${showForgetPassword ? 'd-flex justify-content-between w-100 align-items-center' : ''}`}>
							<span>Password</span>
							{
								showForgetPassword &&
								<span
									onClick={() => onForgetPasswordClick}
									className="cursor-pointer font-size-sm font-weight-normal text-muted"
								>
									Forget Password?
								</span>
							}
						</div>
					}
					rules={[
						{
							required: true,
							message: 'Please input your password',
						}
					]}
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}
					value={password}
					onChange={onChangePassword}
					/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" block loading={loading}>
						Sign In
					</Button>
				</Form.Item>
				{
					otherSignIn ? renderOtherSignIn : null
				}
				{extra}
			</Form>
		</>
	)
}

// LoginForm.propTypes = {
// 	otherSignIn: PropTypes.bool,
// 	showForgetPassword: PropTypes.bool,
// 	extra: PropTypes.oneOfType([
// 		PropTypes.string,
// 		PropTypes.element
// 	]),
// };

// LoginForm.defaultProps = {
// 	otherSignIn: true,
// 	showForgetPassword: false
// };

const mapStateToProps = ({ auth }) => {
	const { loading, message, showMessage, token, redirect } = auth;
	return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	signIn,
	showAuthMessage,
	showLoading,
	hideAuthMessage,
	signInWithGoogle,
	signInWithFacebook,
	authenticated
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm_old)
