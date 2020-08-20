import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.MyPosts}>
            <div className={s.postsBlock}><h3>My posts</h3><div>
                    <div><textarea name="" id="" cols="35" rows="5"></textarea></div>
                    <div>
                        <button className={s.likeBtn}>Add Post</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likecount='20'/>
                <Post message='Its my first post' likecount='30'/>
            </div>
        </div>
    );
}

export default MyPosts;