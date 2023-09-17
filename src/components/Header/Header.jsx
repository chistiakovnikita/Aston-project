import { Link } from 'react-router-dom'
import Logo from '../Logo'

import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link className="header__logo" to={'/'}>
                        <Logo />
                    </Link>

                    <div className="header__links">
                        <Link className="header__link" to={'auth/login'}>
                            Войти
                        </Link>
                        <Link className="header__link" to={'auth/registration'}>
                            Создать аккаунт
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
