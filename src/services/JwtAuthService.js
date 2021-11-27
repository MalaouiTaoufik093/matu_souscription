import fetch from 'auth/FetchInterceptor'

const JwtAuthService = {}

JwtAuthService.login = function (username,password) {
	return fetch({
		url: 'signin',
		method: 'post',
		headers: {
      'public-request': 'true'
    },
	username: username,
	password: password
		
	})
}

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