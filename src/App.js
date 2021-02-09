import React, {useState} from 'react';
import Payment from './components/Payment'
import './App.css';

function App() {

  const [userValues, setUserValues] = useState({
    loan: '',
    loanApr: '',
    loanType: 'Mortgage',
    loanTermNum: '',
    loanTerm:'1',
    loanPayment:'"Monthly"'
  });
  const [isSubmit, setIsSubmit] = useState(false)
  const [type_others, setOthers] = useState('')
  
  function submitForm(e){
    e.preventDefault()
    
    const {loan_amount, others, loan_type, apr, loan_term_num, loan_term, payment_type}= e.target  
    setUserValues({
      loan: loan_amount.value,
      loanApr: apr.value,
      loanType: others? type_others.charAt(0).toUpperCase()+type_others.slice(1) : loan_type.value,
      loanTermNum: loan_term_num.value,
      loanTerm:loan_term.value,
      loanPayment:payment_type.value
    })
    setIsSubmit(true)
  }
  return (
    <div className="App">
      <header className="App-header">
        Loan Calculator
      </header>
      <form onSubmit={(e)=>submitForm(e)}>
       <label>Types of Loans: </label>
        <select type='text' name='loan_type' 
                onChange={(e)=>{
                  e.preventDefault();
                  setIsSubmit(false)
                  setUserValues({ ...userValues, 'loanType': e.target.value });}}>
            <option value="Mortgage">Mortgage</option>
            <option value="Auto">Auto</option> 
            <option value="Student">Student</option>
            <option value="Personal">Personal</option>
            <option value="Others">Others</option>
        </select><br/>
        {(userValues['loanType'] === "Others"|| (type_others&&isSubmit))  && <input type='text' name='others'  
          onChange={(e)=>{
                  e.preventDefault();
                  setOthers(e.target.value)}}/>}    
        <br/>                       
        <label htmlFor='loan_amount'>Loan Amount: </label>
        <input type='number' name='loan_amount' min="100" required/><br/>
        <label>Annual Interest Rate (APR): </label>
        <input type='float' name='apr' max='99' min="1" required/>%<br/>
        <label>Loan Term: </label>  
          <input type='number' id='num' name='loan_term_num' min="1" required/>
          <input type='radio' id='year' name='loan_term' value='1' defaultChecked="checked" />
          <label htmlFor="year">Years</label>
          <input type='radio' id='month' name='loan_term' value='2'/>
          <label htmlFor="month">Months</label>
          <br/>
        <label>Payment Frequency: </label>
        <select type='number' name='payment_type'>
            <option value="Monthly">Monthly</option>
            <option value="Bi-weekly">Bi-Weekly</option> 
        </select><br/>
        <button type='submit'>Calculate</button>
        <input type="reset" defaultValue="Reset" />
      </form>
      
      <Payment  loan= {userValues} isSubmit={isSubmit}/>
    </div>
  );
}

export default App;
