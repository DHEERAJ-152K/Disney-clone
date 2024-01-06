import { Link } from 'react-router-dom';
import './stylesheets/Card.css'

const Card=(props)=>{
    const { id, img, title } = props;
    return(
        <div className='recommended-tile'>
            <div className='cardImg'>
                <Link className='link' to={`/detail/${id}`}>
                    <img src={img} alt={title}/>
                </Link>
                
            </div>
            
        </div>
    )
}

export default Card;