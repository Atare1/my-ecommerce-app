import React from 'react'
import AppContext from '../AppContext'



class PhoneItem extends React.Component{
    render(){
        let {phone} = this.props
        return(
            <div className="col-sm-4 mb-4">
                <div className="card p-3">
                  <div className="text-center">
                      <img className="img-fluid" src={phone.imageUrl} alt="" />
                  </div>
                  <hr/>
                        <h4 className="card-title">{phone.name}</h4>
                    <p className="card-text">{phone.description}</p>
                        <h5 className="card-text"> Price: <small>${phone.price}</small></h5>
                    <span className="card-text"><small>Available Quantity: </small>{phone.available_quantity}</span>
                    <div>
                        <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(phone, 1)}}>cart</button>
                    </div>
                    
                 </div>
           
            </div>
        )
    }
}
PhoneItem.contextType = AppContext
export default PhoneItem