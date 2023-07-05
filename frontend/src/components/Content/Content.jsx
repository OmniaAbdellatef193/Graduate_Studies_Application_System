import React from 'react'
import { useTranslation } from 'react-i18next';
import {HiUserAdd} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import './Content.css'
const Content = () => {


  const [t, i18n] =useTranslation();

  return (

    <div className='Content'>
          
          <img src="assets/mini-logo.png" alt="" className='mini-logo'/>

          <p style={{fontSize:"2rem" , margin :"2rem" ,textAlign: "center"}}>{t('welcome')} </p>
          <div className="icon">
            
          </div>
          <h1 style={{margin :"2rem"}}>{t('New applicant services ')}</h1>
          <div className="options">
          <Link to='/form'><button style={{background:"#AD8700"}}>{t('new')}<HiUserAdd/></button></Link>
          <Link to='/login'><button style={{background:"#003C70" }}>  {t('con')} <HiUserAdd/></button> </Link>
          </div>
        </div>
  )
}

export default Content