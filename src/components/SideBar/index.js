import React from 'react'
import Card from '../UI/Card'
import profile from '../../assets/pics/ami.png'
import './style.css'
const SideBar = ()  =>{
    return (
        <div className="sidebardContainer">
            <Card style={{marginBottom:"20px", padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">About Us</div>
                <div className="profileimageContainer">
                    <img src={profile} alt="profile"/>
                </div>
                <div className="cardBody">
                <p>My names is Ami des jeunes</p>
                <p className="personalBio">I am a full-stack software developer, and I am passionate about identifying, analyzing, and defining the problems and working with others to provide efficient solutions. I love to work in an environment where I am challenged to produce excellent solutions and to be innovative in solving problems.</p>
                </div>
            </Card>
            <Card style={{marginBottom:"20px", padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">social network</div>
            </Card>
            <Card style={{marginBottom:"20px", padding:'20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                <span>Recent Posts</span>
                </div>
                <div className="recentPosts">
                <div className="recentPost">
                    <h3>Post Title</h3>
                    <span>July 20, 2021</span>
                </div>
                <div className="recentPost">
                    <h3>Post Title</h3>
                    <span>July 19, 2021</span>
                </div>
                <div className="recentPost">
                    <h3>Post Title</h3>
                    <span>July 17, 2021</span>
                </div>
                </div>
            </Card>
        </div>
    )
}

export default SideBar
