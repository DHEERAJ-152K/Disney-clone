import './stylesheets/Header.css'
import logo from '../images/logo.svg'

import {getAuth,GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { firebaseApp } from '../Firebase';
const Header=(props)=>{

   const signInWithGoogle=async()=>{
        const auth=getAuth(firebaseApp);
        const provider=new GoogleAuthProvider();

        try{
            const result=await signInWithPopup(auth, provider);
            const user=result.user;
            console.log(user);
        }catch(error){
            console.log(error.message);
        }
    };

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

            <a onClick={signInWithGoogle}><h5>LOGIN</h5></a>
        </div>
    );
}

export default Header;