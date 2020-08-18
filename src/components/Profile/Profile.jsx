import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://images3.alphacoders.com/106/1069102.jpg" />
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    );
}

export default Profile;