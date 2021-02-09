import React from 'react'

export default function Records(props) {
  
   
    return (
        <div>
            <ul>
                
                {props.record.map((elem, index)=>(<li key={index}>
                    <span>{elem.loanType} loans </span>
                    <span>Monthly payments {elem.loanPayment.toFixed(2)}</span>
                    <span>Principal {elem.principal} </span>
                    <span>Total interest {elem.interest.toFixed(2)}</span>
                    <span>Total amount {elem.total_amount.toFixed(2)} </span>
                    
                </li>))}
            </ul>
            <p>Total monthly payment: ${props.sum}</p>
        </div>
    )
}
