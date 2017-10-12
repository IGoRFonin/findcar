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
                <NavLink to="/">Home</NavLink>
                <NavLink to="/pp">PP</NavLink>
            </header>
        )
    }
}

export default Header;