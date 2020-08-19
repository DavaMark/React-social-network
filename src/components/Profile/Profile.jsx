import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://images.squarespace-cdn.com/content/v1/535b1632e4b0ab57db46e48b/1574021027737-XPLYJFCIJRU18KP7L6NV/ke17ZwdGBToddI8pDm48kN81e1Vehv44dLGKecSkzRgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dnkZMsAGXOcv0s_GIyaNaL9EPIgglMGw881zwNR3-5ekpC969RuPXvt2ZwyzUXQf7Q/00.jpg?format=2500w" className={s.topimg}/>
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    );
}

export default Profile;