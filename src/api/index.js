import Axios from 'axios'

//Axios.defaults.baseURL = 'https://simple-mongodb-server.herokuapp.com/'
Axios.defaults.baseURL = 'http://localhost:3000'

Axios.interceptors.request.use( config => {
    config.headers = {
        'Content-Type': 'application/json',
        'x-auth-token': sessionStorage.token === undefined ? '' : sessionStorage.token
    }
    return config
})

Axios.interceptors.response
    .use(response => { 
        var token = response.headers['x-auth-token'];    
        if (token != null && token != '') {
            sessionStorage['token'] = token;
        } else {
            // ...to login
        }    
        return response;
    }, error => {
        // error handling
        return Promise.reject(error)
    });

// the name to your database
const dbName = 'sample_airbnb'  

//establishes connection database
Axios
    .post('/db', JSON.stringify({ db: dbName}))
    .then( res => console.log(res))

export default {
    register(user) {
        return Axios.post('/users', JSON.stringify(user))
            
    },
    signin(user) {
        return Axios.post('/users/auth', JSON.stringify(user))
    },
    saveChanges(data) {
        return Axios.post('/api', JSON.stringify(data))
    },
    query(data) {
        return Axios.post('/api', JSON.stringify(data))
    }   
}