import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../Utilities/axiosWithAuth'
import {Link} from 'react-router-dom'


const FriendList = () =>{
    const [friends, setFriends] = useState([])

    useEffect(() =>{
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(response =>{
            console.log(response)
            setFriends(response.data)
        })
        .catch(error=>{
            console.log('THIS IS YOUR ERROR----->', error)
        })
    },[])

    return(
        <div>
            <h4>Check out all my friends!</h4>
            <Link to = '/FriendForm'>Add a New Friend</Link>
            {friends.map(friend =>{
                return(
                    <>
                    <div>
                        <h3>{friend.name}</h3>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                    </>
                )
            })}
        </div>
    )
}

export default FriendList