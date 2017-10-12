import * as React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import './app.css';

interface Prop {
    brands: Array<object>
}
interface State {}

class App extends React.Component<Prop, State> {
    render() {
        return (
            <div className="app">
                <Header />
                Hello its working sometimes :))
            </div>
        );
    }
}

export default connect(state => {
    return {
        brands: state.brands,
    }
})(App);