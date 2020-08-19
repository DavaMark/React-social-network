import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="http://www.natalielord.com/wp-content/uploads/2014/12/3D-Wather-Drops-Wallpaper-Hd-1920x500.jpg" className={s.topimg}/>
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    );
}

export default Profile;