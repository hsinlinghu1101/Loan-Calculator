import React, {useState} from 'react'
import NumberFormat from 'react-number-format';
import  '../style/Records.css'
export default function Records(props) {
  
const [showDetails, setShowDetails] = useState(false)
    return (
        <div className='list'>
            <ul>
                
                {props.record.map((elem, index)=>(<li key={index}>
                    <span>{elem.loanType} loans </span>
                    <span>Monthly payments <NumberFormat value={elem.loanPayment.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
                    
                    <button type='button' onClick={()=> setShowDetails(!showDetails)}>Details</button>
                    {showDetails && 
                    <div>
                    <p>Principal:  <NumberFormat value={elem.principal} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                    <p>Total interest using monthly payments: <NumberFormat value={elem.interest.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                    <p>Accelerated bi-weekly payments <NumberFormat value={parseFloat(elem.loanPayment.toFixed(2))/2} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                    <p>Total interest using accelerated bi-weekly payments: <NumberFormat value={props.get_interest_biweekly().toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                    <p>Bi-weekly payment interest savings: <NumberFormat value={(elem.interest - props.get_interest_biweekly()).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                    </div>}
                </li>))}
            </ul>
            
            
            <div className='p-fre'>
                <label>Payment Frequency: </label>
                <select type='number' name='payment_type'>
                    <option value="Monthly">Monthly</option>
                    <option value="Bi-weekly">Bi-Weekly</option> 
                </select>
            </div>
            <p className='total'>Total monthly payment: ${props.sum}</p>
        </div>
    )
}
