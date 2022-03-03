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
                <div className="container">
                    <div className="row">
                        <main>
                            {this.props.children}
                        </main>
                        <RightSidebar/>
                        
                    </div>
                </div>
                <Footer/>
            </Auxiliar>
        )
            

        

        
    }
}
export default Layout