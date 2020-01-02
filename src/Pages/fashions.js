import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import FashionItem from './fashionItem'
import AppContext from '../AppContext'


class Fashions extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <section className="fashions-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.fashions.map((fashion,index) => 
                                       <FashionItem fashion={fashion} key={index}/> )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}
Fashions.contextType = AppContext
export default Fashions