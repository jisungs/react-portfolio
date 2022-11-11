import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/>I'm
                <img src={LogoTitle} alt="" />
                Jisung
                <br/>
                Web Developer
                </h1>
                <h2> Fullstack Developer / Online business / Blogger </h2>
                <Link to="/contack" className="flat-button">CONTACT ME</Link>

            </div>
        </div>

    );
}

export default Home;