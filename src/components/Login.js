import Header from './Header'
import './stylesheets/Login.css'
import ctaLogo from '../images/cta-logo-one.svg'
import ctaLogo2 from '../images/cta-logo-two.png'

const Login=(props)=>{
    return (
        <div>
        
            <Header /> 
            <div className='container'>
                <div className='credentials'>
                    <img className='cta-logo' src={ctaLogo} width='100%'/>
                    <button className='btn'><p><b>GET ALL THERE</b></p></button>

                    <p>Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 03/26/21, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </p>

                    <img className='cta-logo2' src={ctaLogo2} width='100%'/>
                </div>

            
            </div>
        </div>
        
    );
}
export default Login;