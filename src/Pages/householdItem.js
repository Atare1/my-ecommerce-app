import React from 'react'
import AppContext from '../AppContext'



class HouseholdItem extends React.Component{
    render(){
        let {household} = this.props
        return(
            <div className="col-sm-4 mb-4">
                <div className="card p-3">
                  <div className="text-center">
                      <img className="img-fluid" src={household.imageUrl} alt="" />
                  </div>
                  <hr/>
                        <h4 className="card-title">{household.name}</h4>
                    <p className="card-text">{household.description}</p>
                        <h5 className="card-text"> Price: <small>${household.price}</small></h5>
                    <span className="card-text"><small>Available Quantity: </small>{household.available_quantity}</span>
                    <div>
                        <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(household, 1)}}>cart</button>
                    </div>
                    
                 </div>
           
            </div>
        )
    }
}
HouseholdItem.contextType = AppContext
export default HouseholdItem