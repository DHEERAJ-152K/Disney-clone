import './stylesheets/Platforms.css';

import tile1 from '../images/viewers-disney.png';
import tile2 from '../images/viewers-marvel.png';
import tile3 from '../images/viewers-national.png';
import tile4 from '../images/viewers-pixar.png';
import tile5 from '../images/viewers-starwars.png';



const Platforms=()=>{
    return(
        <div className='tiles'>

            <div className="tile">
                <img src={tile1}/>
                <video autoPlay loop muted playsInline>
                    <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="tile">  
                <img src={tile2}/>
                <video autoPlay loop muted playsInline>
                    <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="tile"> 
                <img src={tile3}/>
                <video autoPlay loop muted playsInline>
                    <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="tile"> 
                <img src={tile4}/>
                <video autoPlay loop muted playsInline>
                    <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="tile"> 
                <img src={tile5}/>
                <video autoPlay loop muted playsInline>
                    <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
                </video>
            </div>
            
        </div>
    );
}

export default Platforms;