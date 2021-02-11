/* eslint-disable no-useless-escape */
import React, {useState, useEffect} from 'react';
import Payment from './components/Payment'
import './App.css';

function App() {
  
  useEffect(() => {
    console.log(isSubmit)
    console.log(userValues.loanType)
    
  })
  const types_arr = ["Mortgage", "Auto", "Personal", "Student", "Others"]
  const [userValues, setUserValues] = useState(
    {loan: '',
    loanApr: '',
    loanType: 'Mortgage',
    loanTermYear: '',
    loanTermMonth:'',
  });
  const [isSubmit, setIsSubmit] = useState(false)
  const [type_others, setOthers] = useState('')
  
  function handleSubmit(e){
    e.preventDefault()
    
    const {loan_amount, others, loan_type, apr, loan_term_year, loan_term_month}= e.target  
    
    setUserValues({
      loan: loan_amount.value,
      loanApr: apr.value,
      loanType: others? type_others.charAt(0).toUpperCase()+type_others.slice(1) : loan_type.value,
      loanTermYear: loan_term_year.value,
      loanTermMonth:loan_term_month.value,
    })
    setIsSubmit(true)
    setOthers('')
   
  }
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        Loan Calculator
      </header>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className='section'>
          <label>LOAN TYPE: </label>
          <select type='text' name='loan_type' 
                  onChange={(e)=>{
                    setIsSubmit(false)
                    setUserValues({ ...userValues, 'loanType': e.target.value });}}>
                  {types_arr.map((type, i)=>(
                    <option key={i} value={type}>{type}</option>
                  ))}
          </select>
        
        {(((userValues.loanType !== "Mortgage") &&
           (userValues.loanType !== "Auto") && 
           (userValues.loanType !== "Student") &&
           (userValues.loanType !== "Personal"))  
           && !isSubmit) && 
           <input type='text' name='others'  placeholder='Type your loan'
                onChange={(e)=>{setOthers(e.target.value)}}/>} 
        
        </div>
        <div className='section'>                       
          <label htmlFor='loan_amount'>LOAN AMOUNT </label>
          <span className='dollar'>$</span>
          <input type='number' name='loan_amount' min="1000" required  onChange={()=>{setIsSubmit(false)}}/>            
        </div>
        <div className='section'>
          <label>ANNUAL INTEREST RATE (APR) </label>
          <input type='float'  name='apr' max='99' min="1" required onChange={()=>{setIsSubmit(false)}}/>
          <span className='percent'>%</span>
        </div>
        <div className='section'>
          <label>Loan term </label>  
          <input type='number' className="loan_term" name='loan_term_year' min="1" max='40' placeholder="Year" value={""|| userValues.loanTermYear} required
                  onKeyDown={e => /[\.\,]$/.test(e.key) && e.preventDefault()}
                  onChange={(e)=>{setIsSubmit(false);                
                                  setUserValues({...userValues,
                                                loanTermYear: parseInt(e.target.value),
                                                loanTermMonth: e.target.value*12})}}/>
          <span className="or">or</span>
          <input type='number' className="loan_term" name='loan_term_month' min="1" max='480' placeholder="Month" value={""|| userValues.loanTermMonth} required
                  onKeyDown={e => /[\.\,]$/.test(e.key) && e.preventDefault()}
                  onChange={(e)=>{setIsSubmit(false);  
                                  setUserValues({...userValues,
                                                  loanTermYear: e.target.value/12,
                                                  loanTermMonth: parseInt(e.target.value)})}}/>
            
          </div>
      
        <button type='submit' className="btn send">Calculate</button>   
        <button type='reset' className="btn reset">Reset</button> 
      </form>
      
      <Payment  loan= {userValues} isSubmit={isSubmit}/>
    </div>
  );
}

export default App;
