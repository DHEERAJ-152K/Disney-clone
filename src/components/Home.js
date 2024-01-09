import Header from "./Header";
import ImageSlider from "./ImageSlider";
import './stylesheets/Home.css'
import Platforms from "./Platforms";
import Media from "./Media";

const Home=(props)=>{
    
    return(
    <div >
        
        <div className="home-page">
            <div className="banner">
            <Header />
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