import React, { Fragment } from 'react';

import Card from './card';


class User extends React.Component {
    render() {
        return (
            <Fragment>
                <h3>New Guy!</h3>
                <Card name={this.props.name} />
            </Fragment>
        )
    }
}

export default User;
