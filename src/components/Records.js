import React from 'react'
import NumberFormat from 'react-number-format';
export default function Records(props) {
  
   
    return (
        <div>
            <ul>
                
                {props.record.map((elem, index)=>(<li key={index}>
                    <span>{elem.loanType} loans </span>
                    <span>Monthly payments <NumberFormat value={elem.loanPayment.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
                    <span>Principal  <NumberFormat value={elem.principal} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
                    <span>Total interest <NumberFormat value={elem.interest.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
                    <span>Total amount  <NumberFormat value={elem.total_amount.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
                    
                </li>))}
            </ul>
            <p>Total monthly payment: ${props.sum}</p>
            <ul>
                
                {props.record.map((elem, index)=>(<li key={index}>
                    <span>{elem.loanType} loans </span>
                    <span>Biweekly payments {parseFloat(elem.loanPayment.toFixed(2))/2}</span>
                    <span>Principal {elem.principal} </span>
                    <span>Total interest {props.get_interest_biweekly()}</span>
                    <span>Total amount {elem.total_amount.toFixed(2)} </span>
                    
                </li>))}
            </ul>
            <p>Total biweekly payment: ${props.sum}</p>
            <label>Payment Frequency: </label>
            <select type='number' name='payment_type'>
                <option value="Monthly">Monthly</option>
                <option value="Bi-weekly">Bi-Weekly</option> 
            </select><br/>
        </div>
    )
}
