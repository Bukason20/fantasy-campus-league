import React from 'react'
import styles from '../../assets/styles/auth.module.css'

function Login() {
  return (
    <div>
      <form className={styles.authForm}>
         <h1>Welcome Back</h1>
         <p>Enter your credential to access your account</p>

         <div className="input-form">
            <label>Email</label>
            <input type="text" name="" id="" placeholder='John'/>
         </div>

         <div className="input-form">
            <label htmlFor="firstName">Password</label>
            <input type="password" name="" id="firstName" placeholder='John'/>
         </div>

         <div>
            <div className={styles.rememberMe}>
               <input type="checkbox" name="" id="rememberMe" />
               <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="/auth/forgot-password">Forgot Password?</a>
         </div>
         

         <button type="submit">Create Account</button>

         <p>Already have an account? <a href="/auth/signup">Sign up</a> </p>
      </form>
    </div>
  )
}

export default Login