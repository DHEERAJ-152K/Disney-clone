import './stylesheets/Header.css'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom';
import {getAuth,GoogleAuthProvider, signInWithPopup,signOut} from 'firebase/auth';
import { firebaseApp } from '../Firebase';
import { useEffect,useState } from 'react';


const Header=(props)=>{

    const signInWithGoogle=async()=>{            //Signing-In with firebase's google authentication with popup method.
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

    const signOutWithGoogle=async()=>{
        const auth=getAuth();
        try{
            signOut(auth);
        }catch(error){
            console.log(error.message);
        };
    }
    //Fetching data of user and showing it on navbar .
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
        // Update user state when authentication state changes
        setUser(user);
        });

        // Cleanup function to unsubscribe when the component unmounts
        return () => unsubscribe();
    }, [auth]);
    

    return(
        <div className="header-sec">
            {!user? (<img className='logo' src={logo} alt='logo'/>):<></>}
                
            {user ? (
                <>
                    <div className='toolbar'>
                        <img className='logo' src={logo} alt='logo'/>

                        <span >
                        
                        <i class="fa-solid fa-house"></i>
                        <Link className='links' to="/home"><h5>HOME</h5></Link>
                        </span>

                        <span>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <Link className='links' to="/home"><h5>SEARCH</h5></Link>
                        </span>

                        <span>
                        <i class="fa-solid fa-plus"></i>
                        <Link className='links' to="/home"><h5>WATCH-LIST</h5></Link>
                        </span>

                        <span>
                        <i class="fa-solid fa-star"></i>
                        <Link className='links' to="/home"><h5>FAVORITES</h5></Link>
                        </span>

                        <span>
                        <i class="fa-solid fa-tv"></i>
                        <Link className='links' to="/home"><h5>MOVIES</h5></Link>
                        </span>

                        <span>
                        <i class="fa-solid fa-film"></i>
                        <Link className='links' to="/home"><h5>SERIES</h5></Link>
                        </span>
                        
                    </div>

                    <div className='user-data'>
                    
                        <h5>Hey, {user.displayName}</h5>
                        <i class="fa-solid fa-right-from-bracket" onClick={signOutWithGoogle}></i>
                        <img className='profile-picture' src={user.photoURL} alt='/' />
                    </div>
                </>
            ) : (
                // Display login/signup links when not logged in
                <>
                    <a onClick={signInWithGoogle}><h5>LOGIN</h5></a>
                </>
            )}
            
        </div>
    );
}

export default Header;