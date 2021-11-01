import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const links = [
    {
      title: 'Help',
      url: '/help'
    }
  ]

  return (
    <div className="footer">
      <div className="footer__container">
        <p className="footer__copy">Powered by Nuvo Cargo</p>
        <ul className="footer__links">
          {links.map((link) => (
            <li key={link.title}>
              <Link to={link.url} className="footer__links-item">{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer

