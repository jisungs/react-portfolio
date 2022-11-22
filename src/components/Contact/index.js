import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer,TileLayer, Marker, Popup } from 'react-leaflet';



const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 4000)
     }, [])
    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs
        .sendForm(
            'gmail',
            'template_',
            form.current,
            'token'
        )
        .then(
            () => {
                alert('Message successfully sent')
                window.location.reload(false)
            },
            ()=>{
                alert('Failed to send the message, please try again')
            }
        )
    }



    return (
        <>
            <div className='container contact-page'>
                 <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                    I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                 </div>

            </div>

            <div className='info-map'>
                Jisung Kim,
                <br />
                South Korea,
                <br />
                Busan haeundae 11, 2939
                <br />
                Raemian APT 
                <br />
                <span>jisungswork@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[35.1631,129.1636]} zoom={15}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                     <Marker position={[35.1631, 129.1636]}>
                         <Popup>Jisun lives here, come over for a cup of coffee;</Popup>
                     </Marker>
                </MapContainer>


            </div>

            <Loader type='pacman'/>

        </>
    )
}

export default Contact