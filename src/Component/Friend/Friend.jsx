import React from 'react';
import "./Friend.css"
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    console.log(friend)

    const {name,email,username,website,phone,id} = friend
    return (
        <div className='friend'>
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
            <p>UserName : {username}</p>
            <p>Website : {website}</p>
            <p>Phone : {phone}</p>

            <p><Link to = {`/friend/${id}`}>Show Details</Link></p>

           
            
        </div>
    );
};

export default Friend;