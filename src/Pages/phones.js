import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import PhoneItem from './phoneItem'
import AppContext from '../AppContext'


class Phones extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <section className="phones-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.phones.map((phone,index) => 
                                       <PhoneItem phone={phone} key={index}/> )
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
Phones.contextType = AppContext
export default Phones