import React, {useState, useEffect} from 'react';
import NumberFormat from 'react-number-format';
import Records from './Records'
import '../style/Payment.css'
import Mortgage from '../assets/Mortgage.png'
import Auto from '../assets/Auto.png'
import Others from '../assets/Others.png'
import Personal from '../assets/Personal.png'
import Student from '../assets/Student.png'

export default function Payment(props){
  
  const [record, setRecord] = useState([])
  const [all_month, setAllMonth]= useState([])
  const [isDisable, setIsDisable] = useState(false)
  const [isRemove, setIsRemove] = useState(false)
  const bgImg = [Mortgage, Auto, Personal, Student, Others]
  const loan = props.loan
  let principal = parseFloat(loan.loan)
  let payments = loan.loanTermMonth 
  let interest = loan.loanApr/100/12
  let x = Math.pow(1 + interest, payments);
  let monthly = (principal*x*interest)/(x-1);
  let totalMInterest = monthly*payments - principal
  let total = principal+totalMInterest
  let biweekly = monthly/2
  let bi_apr = loan.loanApr/100/26

   useEffect(() => {
     props.isSubmit && setIsDisable(false); 
   },[props.isSubmit])

   useEffect(() => {
    setIsRemove(false)
  })

  function addRecord(){  
    let new_record ={
      loanType: loan.loanType,
      loanPayment: monthly,
      typeNum:loan.typeNum,
      principal: principal,
      interestM: totalMInterest,
      interestBi: get_interest_biweekly(),
      total_amount:total
    }
    let curr = record
    curr.push(new_record)
    setRecord(curr)
    let curr_all_month = all_month
    curr_all_month.push(monthly)
    setAllMonth(curr_all_month)
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
      return total_interest-principal
      
  }

  

  function removeLoan(id){
    let revised = record
    revised.splice(id, 1)
    setRecord(revised)
    let curr_all_month = all_month
    curr_all_month.splice(id, 1)
    setAllMonth(curr_all_month)
    setIsRemove(true)
  }
 
  
  return(
        <div > 
            
        {(props.isSubmit && !isDisable) && 
        
        <div className='record'  > 
          <div className='info list1'>
            <h2> {loan.loanType === ''? 'Others': loan.loanType} loans</h2>
            <div className='list2'><span>Monthly Payments:</span><span> <NumberFormat value={monthly.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></div>
            <div className='list2'><span>Total principal paid:</span><span> <NumberFormat value={principal.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></div>
            <div className='list2'><span>Total interest paid:</span><span> <NumberFormat value={totalMInterest.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></div>
            <div className='list2'><span>Total amount repaid:</span><span> <NumberFormat value={total.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></div>
            <button className="btn send" onClick={()=> addRecord()} disabled={isDisable}>Save and continue</button>
        </div>
          <img src={bgImg[Number(loan.typeNum)]} alt={loan.loanType}/>  
               
        </div>  
        }
          
        {(record.length >0 && isDisable) && <Records record={record} handleRemove ={removeLoan} all_month={all_month}/> }
                                            
      </div>
  )
}