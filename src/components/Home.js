import Header from "./Header";
import ImageSlider from "./ImageSlider";
import './stylesheets/Home.css'
import Platforms from "./Platforms";

const Home=(props)=>{
    return(
    <div >
        <Header />
        <div className="home-page">
            <div className="banner">
            <ImageSlider />
            </div>
            <div>
                <Platforms />
            </div>
            
           

        </div>
    </div>
    );
}

export default Home;