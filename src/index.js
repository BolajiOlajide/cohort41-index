import React from 'react';
import { render } from 'react-dom';

import User from './user';
import Repo from './repo';

const Main = () => {
    return (
        <Repo />
    )
}

render(<Main />, document.getElementById('app'));
