import React from 'react';
import './style.css';

import images from '../../../assets/pics/pool.jpg'
import out from '../../../assets/pics/out.jpg'
import hotel from '../../../assets/pics/hotel.jpg'
import view from '../../../assets/pics/view.jpg'
import Card from '../../../components/UI/Card';

const RecentPost = () =>{
    return (
        <div style={{width:'70%'}}>
            <Card style={{marginBottom:'20px'}}>
                <div className="postimagewrapper">
                    <img src={hotel} alt="post image" />
                </div>

                <div style={{textAlign:'center'}}>
                <h3>Love Is Always Comes First</h3>
                <span>posted on July 21, 2021</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button>Read More</button>
                </div>
            </Card>
            <Card style={{marginBottom:'20px'}}>
                <div className="postimagewrapper">
                    <img src={hotel} alt="post image" />
                </div>

                <div style={{textAlign:'center'}}>
                <h3>Love Is Always Comes First</h3>
                <span>posted on July 21, 2021</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button>Read More</button>
                </div>
            </Card>
            <Card style={{marginBottom:'20px'}}>
                <div className="postimagewrapper">
                    <img src={hotel} alt="post image" />
                </div>

                <div style={{textAlign:'center'}}>
                <h3>Love Is Always Comes First</h3>
                <span>posted on July 21, 2021</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button>Read More</button>
                </div>
            </Card>
        </div>
    )
}

export default RecentPost
