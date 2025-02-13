import './ShareComponent.css'
import FacebookImage from './images/icon-facebook.svg';
import TwitterImage from './images/icon-twitter.svg';
import PinterestImage from './images/icon-pinterest.svg';

export default function ShareComponent() {
    return (
        <>
            <div className='share-main'>
                <p>SHARE</p>
                <img className="social-logo" src={FacebookImage} />
                <img className="social-logo" src={TwitterImage} />
                <img className="social-logo" src={PinterestImage} />
            </div>
        </>
    )
}