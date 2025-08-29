import React from 'react'
import styles from '../../assets/styles/auth.module.css'

function SignUp() {
  return (
    <div>
      <form className={styles.authForm}>
         <h1>Create Account</h1>
         <p>Join the Fantasy Leage</p>

         <div className={styles.inputs}>
            <div className="">
               <label htmlFor="firstName">First Name</label>
               <input type="text" name="" id="firstName" placeholder='John'/>
            </div>

            <div className="input-form">
               <label>Email</label>
               <input type="text" name="" id="" placeholder='John'/>
            </div>
   
         </div>
         
         <div className="input-form">
            <label>Matric No</label>
            <input type="text" name="" id="" placeholder='John'/>
         </div>
         
         <div className="input-form">
            <label>Level</label>
            <select name="" id="">
               <option value="Computer Engineering">100 Level</option>
               <option value="Computer Engineering">200 Level</option>
               <option value="Computer Engineering">300 Level</option>
            </select>
         </div>

         <div className="input-form">
            <label>Department</label>
            <select name="" id="">
               <option value="Computer Engineering">Computer Engineering</option>
               <option value="Computer Engineering">Computer Engineering</option>
               <option value="Computer Engineering">Computer Engineering</option>
            </select>
         </div>

         <div className={styles.inputs}>
            <div className="input-form">
               <label htmlFor="firstName">Password</label>
               <input type="password" name="" id="firstName" placeholder='John'/>
            </div>

            <div className="input-form">
               <label>Confirm Password</label>
               <input type="password" name="" id="" placeholder='John'/>
            </div>
   
         </div>

         <button type="submit">Create Account</button>

         <p>Already have an account? <a href="/auth/login">Sign In</a> </p>
      </form>
    </div>
  )
}

export default SignUp