import React from 'react'
import Card from '../../components/UI/Card';
import Sidebar from '../../components/SideBar'
// import images from 
import images from '../../assets/pics/pool.jpg'
import out from '../../assets/pics/out.jpg'
import hotel from '../../assets/pics/hotel.jpg'
import view from '../../assets/pics/view.jpg'
import './style.css'
import RecentPost from './RecentPost';


const SideImage = (props)=> {
    return (
        <div style={{height:`${props.height}px`}}>
        <img src={props.src} alt="mages"/>
        </div>
        )
    }

    const ImageGallery = props => (<div className="galleryPost" style={props.galleryStyle}>
    <section style={{width:'70%'}}> 
        <div>
            <img src={images} alt="mages"/>
        </div>
    </section>
    <section className={"sideImageWrapper"} style={{width:'30%'}}> 
        <SideImage 
            height={props.sideImageHeight}
            src={out}
        />
        <SideImage 
            height={props.sideImageHeight}
            src={view}
        />
        <SideImage 
            height={props.sideImageHeight}
            src={hotel}
        />
</section>
</div>);
     
    const Home = props => {
        
        const galleryHeight = 450;
        const galleryStyle = {
            height:galleryHeight+'px',
            overflow:'hidden'
        }
        
    const sideImageHeight= galleryHeight/3;

    return (
        <div>
            <Card>
            <ImageGallery 
                largeWidth="70%"
                smallWidth="30%"
                sideImageHeight={sideImageHeight}
                galleryStyle={galleryStyle}
                imageArray={[images, out, view,hotel]}
            />
                
                </Card>
                <section className="homeContainer">
                    <RecentPost />
                    <Sidebar />
                </section>
               
        </div>
    )
}

export default Home 
