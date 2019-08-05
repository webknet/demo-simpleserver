import Axios from 'axios'

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
            //router.push('/login')
        }    
        return response;
    }, error => {
        // error handling
        return Promise.reject(error)
    });

const dbName = 'tmp' 

//establishes connection database
Axios
    .post('/db', JSON.stringify({ db: dbName}))
    .then( res => console.log(res))

export default {
    register(user) {
        return Axios
                .post('/users', JSON.stringify({
                        entity: {
                            action: 'insert'
                        },
                        value: { 
                            name: user.name,
                            email: user.email,
                            password: user.password
                        }
                    }))
            
    },
    signin(user) {
        return Axios
                .post('/users/auth', JSON.stringify(user))
    }
}