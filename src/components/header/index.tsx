import React from 'react'
import {Content} from './styles'
import logo from './../../assets/photo.jpg'
import {FaChild} from 'react-icons/fa'
import {AiOutlineGift} from 'react-icons/ai'
import {BiBell} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'

// var sectionStyle = {
//     backgroundImage: 'url('+logo+');'
// }

const HeaderComponent: React.FC = () => {
    return(
        <Content>
            <div>
                <span>Free</span>
                <span>BUSTER</span>

            </div>
            <div>
                <p>Início</p>
                <p>Séries</p>
                <p>Filmes</p>
                <p>Mais recentes</p>
                <p>Minha lista</p>
            </div>
            <div>
                <p><BsSearch /></p>
                <p><FaChild /></p>
                <p><AiOutlineGift /></p>
                <p><BiBell /></p>
                <p><CgProfile /></p>
                <p className='imgProfile' style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg)`}}></p>
                {/* <p style={sectionStyle}></p> */}
                {/* <p style={{backgroundImage: `url(${logo})`}}></p> */}
            </div>
        </Content>
    )
}

export default HeaderComponent