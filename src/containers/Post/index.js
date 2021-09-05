import React from 'react'
import BlogPost from '../../components/BlogPost'
import SideBar from '../../components/SideBar'
import './style.css';

const Post = (props) =>{
    console.log(props)
    return (
        <section className="container">
            <BlogPost />
            <SideBar />
        </section>
    )
}

export default Post;
