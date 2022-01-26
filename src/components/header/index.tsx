import React from 'react'
import {Content} from './styles'
import logo from './../../assets/truck-icon.png'

const HeaderComponent: React.FC = () => {
    return(
        <Content>
            <div>
                <img id='logo-SC' src={logo} />
            </div>
        </Content>
    )
}

export default HeaderComponent