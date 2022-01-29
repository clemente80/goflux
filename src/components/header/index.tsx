import React from 'react'
import {Content} from './styles'
import truck from './../../assets/truck-icon.png'
import logoflux from './../../assets/goFlux-branco.png'
import userImg from './../../assets/truck-driver.jpg'

const HeaderComponent: React.FC = () => {
    return(
        <Content>
            <img className='truck-bg' src={truck} />
            <img className='logo-main' src={logoflux} />
            <div className='header-right'>
                <span>goTruck</span>
                <div className='user'>
                    <div className='user-id'>
                        <p className='user-name'>Flávio Henrique</p>
                        <p className='user-employer'>Embarcadora</p>
                    </div>
                    <div className='user-img'>
                        <img src={userImg} />
                    </div>
                </div>
            </div>
        </Content>
    )
}

export default HeaderComponent