/* eslint-disable no-useless-escape */
import React, {useState} from 'react';
import Payment from './components/Payment'
import characters from './assets/characters.png'
import './App.css';

function App() {
 
  const types_arr = [ {"Mortgage":0}, {"Auto":1}, {"Personal":2}, {"Student":3},{"Others":4}]
  const [userValues, setUserValues] = useState(
    {loan: '',
    loanApr: '',
    loanType: 'Mortgage',
    typeNum:0,
    loanTermYear: '',
    loanTermMonth:'',
  });
  const [isSubmit, setIsSubmit] = useState(false)
  const [isReset, setIsReset] = useState(false)
  const [type_others, setOthers] = useState('')
  
  function handleSubmit(e){
    e.preventDefault()
    
    const {loan_amount, others, loan_type, apr, loan_term_year, loan_term_month}= e.target  
    
    setUserValues({
      loan: loan_amount.value,
      loanApr: apr.value,
      loanType: others? type_others.charAt(0).toUpperCase()+type_others.slice(1) : loan_type.value.split(',')[0],
      typeNum:loan_type.value.split(',')[1],
      loanTermYear: loan_term_year.value,
      loanTermMonth:loan_term_month.value,
    })
    setIsSubmit(true)
    setOthers('')
   
  }
  
  
  return (
    <div>
      <header className="App-header">
      <i data-vi="calculator" data-vi-primary="#939597" data-vi-accent="#393e46" ></i><div className="name">Loan Calculator</div>
      </header>
      <main>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className='section'>
          <label htmlFor='loan_type'>TYPES OF LOANS </label>
          <select type='text' name='loan_type' id='loan_type'
                  onChange={(e)=>{
                    setIsSubmit(false)
                    setIsReset(false)
                    setUserValues({ ...userValues, 'loanType': e.target.value.split(',')[0], 'typeNum': e.target.value.split(',')[1]});}}>
                  {types_arr.map((type, i)=>(
                    <option key={i} value={Object.entries(type)}>{Object.keys(type)}</option>
                  ))}
          </select>
        
        {(((userValues.loanType !== "Mortgage") &&
           (userValues.loanType !== "Auto") && 
           (userValues.loanType !== "Student") &&
           (userValues.loanType !== "Personal"))  
           && !isSubmit && !isReset) && 
           <input type='text' name='others'  placeholder='Type your loan' autoFocus
                onChange={(e)=>{setOthers(e.target.value)}}/>} 
                 

          
        </div>
        <div className='section'>                       
          <label htmlFor='loan_amount'>LOAN BALANCE </label>
          <span className='dollar'>$</span>
          <input type='float' name='loan_amount' id='loan_amount' min="1000" required  onChange={()=>{setIsSubmit(false)}}/> 
                     
        </div>
        <div className='section'>
          <label htmlFor='apr'>ANNUAL INTEREST RATE (APR) </label>
          <input type='float'  name='apr' id='apr' max='99' min="1" required onChange={()=>{setIsSubmit(false)}}/>
          <span className='percent'>%</span>
        </div>
        <div className='section'>
          <label>LOAN TERM </label>  
          <input type='number' className="loan_term" name='loan_term_year' min="1" max='40' placeholder="Year" value={""|| userValues.loanTermYear} required
                  onKeyDown={e => /[\.\,]$/.test(e.key) && e.preventDefault()}
                  onChange={(e)=>{setIsSubmit(false);                
                                  setUserValues({...userValues,
                                                loanTermYear: parseInt(e.target.value),
                                                loanTermMonth: e.target.value*12})}}/>
          <span className="or">y or</span>
          <input type='number' className="loan_term" name='loan_term_month' min="1" max='480' placeholder="Month" value={""|| userValues.loanTermMonth} required
                  onKeyDown={e => /[\.\,]$/.test(e.key) && e.preventDefault()}
                  onChange={(e)=>{setIsSubmit(false);  
                                  setUserValues({...userValues,
                                                  loanTermYear: e.target.value/12,
                                                  loanTermMonth: parseInt(e.target.value)})}}/>
          <span className="or">m</span>  
          </div>
      
        <button type='submit' className="btn send">Calculate</button>   
        <button type='reset' className="btn reset" onClick={()=>{setUserValues({...userValues, loanTermYear: '', loanTermMonth: ''}); setIsReset(true)}}>Reset</button>
                                                            
                                                             
      </form>
      
      {!isSubmit && <img className="characters" src={characters} alt='characters' width='400px'/>}
      
      <Payment  loan= {userValues} isSubmit={isSubmit}/>
      </main>
      <footer>
        <p><span>© Hsin Ling Hu  </span></p>
        <a href="mailto:hsinkava11@gmail.com">hsinkava11@gmail.com</a>
      </footer>
    </div>
  );
}

export default App;
