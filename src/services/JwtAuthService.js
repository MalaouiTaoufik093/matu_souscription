import fetch from 'auth/FetchInterceptor'
import axios from "axios";
import { env } from 'configs/EnvironmentConfig'

const API_URL = "http://localhost:8080/api/auth/";
export const API_BASE_URL = env.API_ENDPOINT_URL
const JwtAuthService = {}


// JwtAuthService.login = function (data) {
// 	return fetch({
// 		url: '/signin',
// 		method: 'post',
// 		headers: {
//       'public-request': 'true'
//     },
// 		data: data
// 	})
// }


JwtAuthService.login = (username,password) => {
	return axios
	  .post(API_URL + "signin", {
		username,
		password,
	  })
	  .then((response) => {
		if (response.data.accessToken) {
		  localStorage.setItem("user", JSON.stringify(response.data));
		}
        console.log("mydata is " + response.data)
		return response.data;
	});
  };


JwtAuthService.signUp = function (data) {
	return fetch({
		url: '/auth/signup',
		method: 'post',
		headers: {
      'public-request': 'true'
    },
		data: data
	})
}

export default JwtAuthService