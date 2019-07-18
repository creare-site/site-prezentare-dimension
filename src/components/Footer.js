import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; <a href="https://websitemarket.ro">WebsiteMarket</a>. 
            <br />
            <a href="https://websitemarket.ro">
                <span className="icon fa-rocket fa-2x"></span>
            </a> 
            {'     '} 
            <a href="https://blog.websitemarket.ro">
                <span className="icon fa-rss-square fa-2x"></span>
            </a> 
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
