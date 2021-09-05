import React from 'react'
import Card from '../UI/Card'
import './style.css'
import room from "../../assets/pics/room.jpg"
const BlogPost = () => {
    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h2 className="postTitle">Love is always comes first</h2>
                    <span className="postedBy">posted on July 21, 2021 by Ami</span>
                </div>
                <div className="postImageContainer">
                    <img src={room} alt="post"/>
                </div>
                <div className="postContent"> 
                    <h4>Post Title</h4>
                    <p>Lorem*100</p>
                </div>
            </Card> 
        </div>
    )
}

export default BlogPost 
