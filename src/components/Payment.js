import React, {useState} from 'react';

export default function Payment(props){
    let principal = props.loan
    let interest = props.apr/100/12
    let payments = props.termNum*12
    if(props.term === '2'){
        payments = payments/12
    }
    let x = Math.pow(1 + interest, payments);
    let monthly = (principal*x*interest)/(x-1);
    let totalInterest = monthly*payments - principal
    
    

  return(
      <div>
          <p>{props.payments} Payments: {props.isSubmit && monthly.toFixed(2)}</p>
          <p>Total Principal Paid: {principal}</p>
          <p>Total Interest Paid: {props.isSubmit && totalInterest.toFixed(2)}</p>
      </div>
  )
}