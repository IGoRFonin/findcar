import * as React from 'react';

interface Props {}
interface State {}

class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>Header</div>
        )
    }
}

export default Header;