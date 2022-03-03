import React from 'react';

import logotipo from '../../assets/images/logo.png';
import classes from './Logo.module.scss';

const logo = () => (
    <div className={classes.Logo} >
        <img src={logotipo} alt="logo" />
    </div>
);

export default logo;