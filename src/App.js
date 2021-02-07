import React, {useState} from 'react';
import Payment from './components/Payment'
import './App.css';

function App() {
  const [loan, setLoan] = useState('')
  const [loanApr, setLoanApr] = useState('')
  const [loanTermNum, setLoanTermNum] = useState('')
  const [loanTerm, setLoanTerm] = useState('1')
  const [loanPayment, setLoanPayment] = useState("monthly")
  const [isSubmit, setIsSubmit] = useState(false)
  

  function submitForm(e){
    e.preventDefault()
    const {loan_amount, apr, loan_term_num, loan_term, payment_type}= e.target
    setLoan(loan_amount.value)
    setLoanApr(apr.value)
    setLoanTerm(loan_term.value)
    setLoanTermNum(loan_term_num.value)
    setLoanPayment(payment_type.value)
    setIsSubmit(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        Loan Calculator
      </header>
      <form onSubmit={(e)=>submitForm(e)}>
        <label htmlFor='loan_amount'>Loan Amount</label>
        <input type='number' name='loan_amount' required/><br/>
        <label>Annual Interest Rate (APR)</label>
        <input type='float' name='apr' max='99' min="1" required/>%<br/>
        <label>Loan Term </label>  
          <input type='number' id='num' name='loan_term_num' required/>
          <input type='radio' id='year' name='loan_term' value='1' defaultChecked="checked" />
          <label htmlFor="year">Years</label>
          <input type='radio' id='month' name='loan_term' value='2'/>
          <label htmlFor="month">Months</label>
          <br/>
        <label>Payment Type</label>
        <select type='number' name='payment_type'>
            <option value="monthly">Monthly</option>
            <option value="bi-weekly">Bi-Weekly</option> 
            <option value="quartly">Quartly</option>
            <option value="annually">Annually</option>
        </select><br/>
        <button type='submit'>Calculate</button>
        <button type='button'>Reset</button>
      </form>
      
      <Payment loan = {loan} apr={loanApr} termNum={loanTermNum} term={loanTerm} payment={loanPayment} isSubmit={isSubmit}/>
    </div>
  );
}

export default App;
