import React, {Component} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import RightSidebar from '../../components/rightsidebar/RightSidebar';
import Auxiliar  from '../auxiliar/Auxiliar';

class Layout extends Component{

    render(){
        return (
            <Auxiliar>
                <Navbar/>
                <main>{this.props.children}</main>
                <RightSidebar/>
                <Footer/>
            </Auxiliar>
        )
            

        

        
    }
}
export default Layout