import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-rocket"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Creare Site</h1> 
                <p>
                Site Prezentare Dimension. <a href="https://websitemarket.ro/?ref=dimension">Comanda Site</a>
                </p> 
                <p>
                 {' '}
                </p>
                Informatii produs:
                <p>
                Site de prezentare simplu si rapid, construit pe tehnologii moderne.
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about-gatsbyjs')}}>WebsiteMarket</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('appseed-app-generator')}}>Companie</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('resources')}}>Resurse</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('support')}}>Suport</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
