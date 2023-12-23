import './stylesheets/Header.css'
import logo from '../images/logo.svg'

const Header=(props)=>{
    return(
        <div className="header-sec">
        <div className='toolbar'>
            <img className='logo' src={logo} alt='logo'/>

            
                <span>
                <i class="fa-solid fa-house"></i>
                <h5>HOME</h5>
                </span>
                <span>
                <i class="fa-solid fa-magnifying-glass"></i>
                <h5>SEARCH</h5>
                </span>
                <span>
                <i class="fa-solid fa-plus"></i>
                <h5>WATCHLIST</h5>
                </span>
                <span>
                <i class="fa-solid fa-star"></i>
                <h5>ORIGINALS</h5>
                </span>
                <span>
                <i class="fa-solid fa-tv"></i>
                <h5>MOVIES</h5>
                </span>
                <span>
                <i class="fa-solid fa-film"></i>
                <h5>SERIES</h5>
                </span>
            </div>

            <a><h5>SIGN UP</h5></a>
        </div>
    );
}

export default Header;