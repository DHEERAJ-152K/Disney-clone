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
            </div>
            <div className="tile">
                <img src={tile2}/>
            </div>
            <div className="tile">
                <img src={tile3}/>
            </div>
            <div className="tile">
                <img src={tile4}/>
            </div>
            <div className="tile">
                <img src={tile5}/>
            </div>
            
        </div>
    );
}

export default Platforms;