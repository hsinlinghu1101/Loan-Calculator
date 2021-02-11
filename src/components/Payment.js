import React, {useState, useEffect} from 'react';
import NumberFormat from 'react-number-format';
import Records from './Records'
import '../style/Payment.css'
import mortgage from '../assets/Mortgage.jpg'
export default function Payment(props){
  
  const [record, setRecord] = useState([])
  const [sum, setSum] = useState(0)
  const [isDisable, setIsDisable] = useState(false)
  const loan = props.loan
  let principal = parseInt(loan.loan)
  let payments = loan.loanTermMonth 
  let interest = loan.loanApr/100/12
  let x = Math.pow(1 + interest, payments);
  let monthly = (principal*x*interest)/(x-1);
  let totalInterest = monthly*payments - principal
  let total = principal+totalInterest
  let biweekly = monthly/2
  let bi_apr = loan.loanApr/100/26

   useEffect(() => {
     props.isSubmit && setIsDisable(false)
    
   },[props.isSubmit])


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
    setIsDisable(true)
  }

  function get_interest_biweekly(){
      let curr = principal
      let num= 0
      while (curr >0){
        num++
        curr = curr + (curr*bi_apr) - biweekly   
      }
      let total_interest = biweekly*num + curr
      return parseFloat(total_interest.toFixed(2))-principal
      
  }

  
  return(
        <div> 
          
        {props.isSubmit && 
        <div className='payment'> 
          <div className='section'>
            <h2>{loan.loanType === ''? 'Others': loan.loanType} loans</h2>
            <p>Monthly Payments: <NumberFormat value={monthly.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
            <p>Total principal paid: <NumberFormat value={principal} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
            <p>Total interest paid: <NumberFormat value={totalInterest.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
            <p>Total amount repaid: <NumberFormat value={total.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
            <button className="btn send" onClick={()=> addRecord()} disabled={isDisable}>Save and continue</button>
          </div>
          <div className='section img'>
            <img src={mortgage} alt={loan.loanType}/>
          </div>
          
        </div>
        
        }
        {record.length >0 && <Records record = {record} sum={sum} get_interest_biweekly={get_interest_biweekly}/>}
      </div>
  )
}