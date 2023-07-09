import React, { useEffect, useState } from 'react'
import './login.css'
import { GrMail } from 'react-icons/gr'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        password: '',
        email: '',
    })

    const [t, i18n] = useTranslation();
    const [toggle, setToggle] = React.useState(true);

    const handleClick = () => {
        i18n.changeLanguage(toggle ? 'ar' : 'en')
        setToggle(!toggle);
    };
    axios.defaults.withCredentials = true

    const handleLogin = (e) => {
        e.preventDefault()
        try {
            axios.post('http://localhost:5000/login', loginData ,{ withCredentials: true })
                .then((res) => {
                    console.log(res)
                    navigate('/profile')
                }).catch((error) => { console.log(error); })

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
        <div className="home">
        <div className="uni-logo">
        </div>
        

            <section className='subCon'>

                <img src="assets/mini-logo.png" alt="" className='mini-logo' />

                <div className="body">
                    <div className="top">
                        <h2>
                        {t('login')}
                        </h2>
                    </div>
                    <div className="content" style={{ marginTop: "6rem", gap: "3rem" }}>
                        <div className="input-container" style={{ gap: "2rem", }}>
                            <GrMail className='Icon' style={{ fontSize: "3.5rem" }} />
                            <input
                                type="text"
                                placeholder={t('email')}
                                className='inputIN'
                                style={{ cursor: "text", height: "4rem" }}
                                value={loginData.email} onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }}
                            />
                        </div>
                        <div className="input-container" style={{ gap: "2rem", }}>
                            <RiLockPasswordFill className='Icon' style={{ fontSize: "3.5rem" }} />
                            <input
                                type="password"
                                placeholder={t('password')}
                                className='inputIN'
                                style={{ cursor: "text", height: "4rem" }}
                                value={loginData.password} onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
                            />
                        </div>
                        <div className="actions">
                            <button onClick={handleLogin}> {t('login')}</button>
                            <a href='/' style={{ color: "#003C70", marginTop: "1rem" }}>{t('new-app-question')}  </a>
                        </div>
                    </div>

                </div>
                <button onClick={handleClick} className='lan-btn'>{localStorage.getItem('i18nextLng') == "en" ? ("عربي") : ("English")}</button>


            </section>
            </div>
        </>
    )
}

export default Login 