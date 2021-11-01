import React from 'react'
import { Link } from 'react-router-dom'
import Icons from '../../images/icons.svg'

const Header = () => (
    <div className="header">
      <div className="header__container">
        <Link to="/shipments" className="header__logo">
          <h1 className="header__logo-text">Dronocargo</h1>
        </Link>
        <div className="header__user">
          <p className="header__user-name">Regina Zepeda</p>
          <svg viewBox="0 0 20 20" className="header__user-icon">
            <use xlinkHref={`${Icons}#avatar`} />
          </svg>
        </div>
      </div>
    </div>
  )

export default Header

