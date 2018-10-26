import React, { Component, Fragment } from 'react';

import User from './user';


class Repo extends Component {
    state={ users: [] }
    async componentDidMount() {
        const _data = await fetch('http://localhost:3004/users', {
            method: 'GET'
        });
        const data = await _data.json();
        this.setState({ users: data })
    }

    render() {
        return (
            <Fragment>
                <h1>Something good!</h1>
                {
                    this.state.users.length > 0 ? this.state.users.map((user, index) => <User name={user} key={index} />) : <h1>No user found!</h1>
                }
            </Fragment>
        )
    }
}

export default Repo;