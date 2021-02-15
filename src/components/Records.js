import React, {useState} from 'react'
import NumberFormat from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCarSide, faUser,  faGraduationCap, faHandHoldingUsd, faTrash} from '@fortawesome/free-solid-svg-icons'

import  '../style/Records.css'
export default function Records(props) {

const [isShow, setIsShow] = useState(false)
const [total, setTotal] = useState("monthly")
const icons = [faHome, faCarSide, faUser,  faGraduationCap, faHandHoldingUsd]


    return (
        <div className='list'>
         
            {props.record.map((elem, index)=>(
            <div key={index}> 
            
            {isShow ? 
                <div className= 'list1'>
                <div className='list2'><span>Type of loans:</span><b><span>{elem.loanType=== ''? 'Others':elem.loanType} </span></b></div>
                <div className='list2'><span>Principal: </span><b><span><NumberFormat value={elem.principal} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></b></div>
                <div className='list2'><span>Monthly payments: </span><b><span><NumberFormat value={elem.loanPayment.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></b></div>
                <div className='list2'><span>Accelerated bi-weekly payments: </span><b><span><NumberFormat value={(parseFloat(elem.loanPayment.toFixed(2))/2).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></b></div>
                <div className='list2'><span>Total interest using monthly payments: </span><b><span><NumberFormat value={elem.interestM.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></b></div>
                <div className='list2'><span>Total interest using accelerated bi-weekly payments: </span><b><span><NumberFormat value={elem.interestBi.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></b></div>
                <div className='list2'><span>Bi-weekly payment interest savings: </span><b><span><NumberFormat value={(elem.interestM - elem.interestBi).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></b></div>
                <hr/></div>
                
                :<div className= 'list1'>
                    <FontAwesomeIcon icon={icons[elem.typeNum]} color="#f5df4d" size="lg"/>
                       {elem.loanType=== ''? 'Others':elem.loanType} loans --- <NumberFormat value={elem.principal} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                       <button type='button'className='remove' aria-label="remove" onClick={()=>{props.handleRemove(index)}}><FontAwesomeIcon icon={faTrash} size="lg"/></button>

                </div>}
                
            </div>
            
            ))}
           
                
          
            <div className='list_btn'>
              <button className='btn send' onClick={()=>{setIsShow(!isShow)}}>{isShow? 'Close':'Show Details'}</button>
            </div>
            <form>
            <div className='section '>
                <label htmlFor='payment_type'>Payment Frequency: </label>
                <select type='number' name='payment_type' onChange={(e)=>setTotal(e.target.value)}>
                    <option value="monthly">Monthly</option>
                    <option value="bi-weekly">Bi-Weekly</option> 
                </select>
            </div>
            <p className='section'>Total {total} payment: <NumberFormat value={total==='monthly'? props.all_month.reduce((a,b)=> a+b, 0).toFixed(2): (props.all_month.reduce((a,b)=> a+b, 0)/2).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </p>
            </form>
        </div>
    )
}
