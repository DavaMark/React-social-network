import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';




/*let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount:12},
    {id: 2, message: 'Its my first post', likesCount:20},

]*/



const MyPosts = (props) => {
    let postsElements = props.postsData.map( posts => <Post message={posts.message} likesCount={posts.likesCount} /> )
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
                {postsElements}

            </div>
        </div>
    );
}

export default MyPosts;