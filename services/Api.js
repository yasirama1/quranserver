const axiosLoaded = require('axios')

export default () => {
	var axios = axiosLoaded.create({
		baseURL: 'http://localhost:3000'
	})

	// axios.defaults.headers.common['Authorization'] = 'bearer '+ localStorage.getItem('jwt');
	return axios;
}