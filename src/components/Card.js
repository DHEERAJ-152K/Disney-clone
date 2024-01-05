import './stylesheets/Card.css'

const Card=(props)=>{
    return(
        <div className='recommended-tile'>
            <div className='cardImg'>
                <img src={props.img} alt='/'/>
            </div>
            
        </div>
    )
}

export default Card;