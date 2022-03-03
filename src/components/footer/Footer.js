import React from 'react';
import classes from './Footer.module.scss';

const Footer = ()=>{
    return (
        <div className={`container-fluid mt-auto`}>
            <div className={`row ${classes.Footer}`}>
                <footer>
                    <div className="col-12">
                        <span>&copy;Colab Pub Inc. Todos direitos reservados</span>
                    </div>
                </footer>
            </div>
        </div>
    );

}
export default Footer;