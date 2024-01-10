import './stylesheets/Header.css';
import logo from '../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { firebaseApp } from '../Firebase';
import { useEffect, useState, useRef } from 'react';

const Header = (props) => {
  const [user, setUser] = useState(null);
  const userHasRedirected = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user && !userHasRedirected.current) {
        userHasRedirected.current = true;
        
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const signInWithGoogle = async () => {
    const auth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);

      if (user && userHasRedirected.current) {
        
        navigate('/home');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOutWithGoogle = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setUser(null);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    };
  };
    
    return(
        <div className="header-sec">
            {!user? (<img className='logo' src={logo} alt='logo'/>):<></>}
                
            {user ? (
                <>
                    <div className='toolbar'>
                        <img className='logo' src={logo} alt='logo'/>

                        <span className='tools' >
                        
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
                    <button className='loginbtn' onClick={signInWithGoogle}>LOGIN</button>
                </>
            )}
            
        </div>
    );
}

export default Header;