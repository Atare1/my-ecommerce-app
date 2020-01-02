import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import HouseholdItem from './householdItem'
import AppContext from '../AppContext'


class Households extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <section className="households-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    {
                                        this.context.households.map((household,index) => 
                                       <HouseholdItem household={household} key={index}/> )
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
Households.contextType = AppContext
export default Households