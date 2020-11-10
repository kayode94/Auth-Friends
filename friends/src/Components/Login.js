import React from 'react'
import {axiosWithAuth} from '../Utilities/axiosWithAuth'

class Login extends React.Component{
    state={
        credentials: {
            username:'',
            password:''
        }
    }

    handleChange = (event)=>{
        this.setState({
            credentials:{
                ...this.state.credentials,
                [event.target.name]:event.target.value
            }
        })

        console.log(this.state.credentials)
    }

    login = (event) =>{
        event.preventDefault()
        axiosWithAuth()
        .post('/login', this.state.credentials)
        .then(response=>{
            localStorage.setItem('token', response.data.payload)
            this.props.history.push('/protected')
        })
        .catch(error=>{
            console.log('THIS IS YOUR ERROR------->', error)
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.login}>
                    <input
                    type='text'
                    name='username'
                    placeholder='Please Enter Username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />

                    <input
                    type='password'
                    name='password'
                    placeholder='Please Enter Password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />

                    <button>Log In</button>
                </form>
            </div>
        )
    }

}

export default Login 