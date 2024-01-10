import Header from "./Header";
import ImageSlider from "./ImageSlider";
import './stylesheets/Home.css'
import Platforms from "./Platforms";
import Media from "./Media";

const Home=(props)=>{
    
    return(
    <div >
        
        <div className="home-page">
            <Header />
            <div className="banner">
                <ImageSlider />
            </div>
            <div>
                <Platforms />
            </div>
            <div>
                <Media />
            </div>
        </div>
    </div>
    );
}
export default Home;