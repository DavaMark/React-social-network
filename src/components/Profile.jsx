import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://images3.alphacoders.com/106/1069102.jpg" />
            </div>
            <div>ava + description</div>
            <div>My posts</div>
            <div>New posts</div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
    );
}

export default Profile;