import React, {useState} from 'react'
import {axiosWithAuth} from '../Utilities/axiosWithAuth'

const FriendForm = (props) =>{
    const [newFriend, setNewFriend] = useState({})

    const handleSubmit = (event) =>{
        event.preventDefault()
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', newFriend)
        .then(response=>{
            console.log(response)
            props.history.push('/protected')
        })
        .catch(error=>{
            console.log('THIS IS YOUR ERROR---->', error)
        })
    }

    const handleChange = (event) =>{
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='name'
                placeholder='Please Enter A Name'
                defaultValue={newFriend.name}
                onChange={handleChange}
                />

                <input
                type='text'
                name='Age'
                placeholder='Please Enter Your Age'
                defaultValue={newFriend.age}
                onChange={handleChange}
                />

                <input
                type='text'
                name='email'
                placeholder='Please Enter Your Email'
                defaultValue={newFriend.email}
                onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default FriendForm