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
	authenticated,
} from 'redux/actions/Auth';
import JwtAuthService from 'services/JwtAuthService'
import AuthService from "services/auth.service";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
 

  



export const LoginForm_old = props => {
	let history = useHistory();

	const {
		otherSignIn,
		showForgetPassword,
		hideAuthMessage,
		onForgetPasswordClick,
		extra,
		signIn,
		token,
		username,
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



	const [username_, setUsername_] = useState("");
	const [password, setPassword] = useState("");

	const onChangeUsername = (e) => {
		const username_ = e.target.value;
		setUsername_(username_);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};


	

	  const onLogin = () => {
		AuthService.login(username_, password).then(
			(res) => {
			  const currentUser = AuthService.getCurrentUser();
			  console.log("user name : " + currentUser.username + "\nEmail : " + currentUser.email + "\nToken : " + currentUser.accessToken )
			  authenticated(currentUser.accessToken,currentUser.username)
			  
			},
			(error) => {
			  const resMessage =
				(error.response &&
				  error.response.data &&
				  error.response.data.message) ||
				error.message ||
				error.toString();
				console.log("je suis dans le bloc 1  erreur  : " + resMessage )
				toast.error(resMessage, {autoClose:10000})
				
				showAuthMessage('resMessage')
				
			//  setLoading(false);
			//  setMessage(resMessage);
			}
		  );
	  }
	


	useEffect(() => {
		// loading, message, showMessage, token, redirect  (Data Store) 
		console.log("my username  comming in store   : " + username )
		console.log("my token  comming in store    : " + token )
		
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
			
			<Form
				layout="vertical"
				name="login-form"
				onFinish={onLogin}
			>
				<Form.Item
					//name="Identifiant"
					//label="Identifiant"
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
					value={username_}
					onChange={onChangeUsername}/>
				</Form.Item>
				<Form.Item
					//name="password"
					label={
						<div className={`${showForgetPassword ? 'd-flex justify-content-between w-100 align-items-center' : ''}`}>
							<span>Mot de passe </span>
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
						Se Connecter 
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


const mapStateToProps = ({ auth }) => {
	const { loading, message, showMessage, token, redirect,username } = auth;
	return { loading, message, showMessage, token, redirect,username }
}

const mapDispatchToProps = {
	signIn,
	showAuthMessage,
	showLoading,
	hideAuthMessage,
	signInWithGoogle,
	signInWithFacebook,
	authenticated,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm_old)
