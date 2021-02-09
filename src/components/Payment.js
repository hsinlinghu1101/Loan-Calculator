import React, {useState, useEffect} from 'react';
import Records from './Records'
export default function Payment(props){
  
  const [record, setRecord] = useState([])
  const [sum, setSum] = useState(0)
  const loan = props.loan
  let principal = loan.loan
  let payments = loan.loanTerm === '1' ? loan.loanTermNum*12 : loan.loanTermNum
  let interest = loan.loanApr/100/12
  let x = Math.pow(1 + interest, payments);
  let monthly = (principal*x*interest)/(x-1);
  let totalInterest = monthly*payments - principal
  let total = parseInt(principal)+totalInterest



  function addRecord(){
    
    let new_record ={
      loanType: loan.loanType,
      loanPayment: monthly,
      principal: principal,
      interest: totalInterest,
      total_amount:total
    }
    let curr = record
    curr.push(new_record)
    setRecord(curr)
    let curr_sum = sum
    curr_sum += parseFloat(monthly.toFixed(2))
    setSum(curr_sum)
    
  }

  
  return(
        <div> 
          
        {props.isSubmit &&  
        <div>
          <h2>{loan.loanType} loans</h2>
          <p>{loan.loanPayment} Payments: {monthly.toFixed(2)}</p>
          <p>Total principal paid: {principal}</p>
          <p>Total interest paid: {totalInterest.toFixed(2)}</p>
          <p>Total amount repaid: {total.toFixed(2)}</p>
          <button onClick={()=> addRecord()} >Save and continue</button>
        </div>
        }
         <Records record = {record} sum={sum}/>
      </div>
  )
}