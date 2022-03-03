import React from 'react';
import classes from './Navbar.module.scss';
import Logo from '../logo/Logo';
const Navbar =()=>{
    return (
        <div className={`container-fluid ${classes.Container}`}>
            <div className={`row ${classes.Navbar}`}>
                <header>
                    <div className="col-12">
                        <Logo/>
                    </div>
                </header>
            </div>
        </div>
        
    )

}
export default Navbar