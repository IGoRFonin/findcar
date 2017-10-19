import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

interface Props {}
interface State {}

class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <div className="header__top">
                    <img src="/img/logo.png" alt="" className="header__logo"/>
                </div>
                <div className="header__bottom">
                    <ul className="header__menu">
                        <li className="header__list"><NavLink to="/mysearch" className="header__link">Мой поиск</NavLink></li>
                        <li className="header__list"><NavLink to="/description" className="header__link">Описание</NavLink></li>
                        <li className="header__list"><NavLink to="/personal" className="header__link">Личный кабинет</NavLink></li>
                    </ul>
                </div>

            </header>
        )
    }
}

export default Header;