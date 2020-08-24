import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {
    /*let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount:12},
        {id: 2, message: 'Its my first post', likesCount:20},

    ]*/
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}


export default Profile;