import React from 'react'
import './Form.scss'

export default function Form() {

  const inputField = (event) => {
    let input = document.getElementsByClassName('demo-input')
    console.log(input)
    console.log(event)
  }

    return (
        <div>
       <div className="form">
  <div className="tab-content">
    <div id="signup">   
      <form action="/" method="post">
        <div className="top-row">
          <div className="field-wrap">
            <label>
              First Name<span className="req">*</span>
            </label>
            <input class="demo-input" onInput={inputField()} type="text" required autoComplete="off" />
          </div>
          <div className="field-wrap">
            <label>
              Last Name<span className="req">*</span>
            </label>
            <input class="demo-input" onInput={inputField()} type="text" required autoComplete="off" />
          </div>
        </div>
        <div className="field-wrap">
          <label>
            Email Address<span className="req">*</span>
          </label>
          <input class="demo-input" onInput={inputField()} type="email" required autoComplete="off" />
        </div>
        <div className="field-wrap">
          <label>
            Set A Password<span className="req">*</span>
          </label>
          <input class="demo-input" onInput={inputField()} type="password" required autoComplete="off" />
        </div>
        <button type="submit" className="button button-block">Get Started</button>
      </form>
    </div>
    <div id="login">   
      <h1>Welcome Back!</h1>
      <form action="/" method="post">
        <div className="field-wrap">
          <label>
            Email Address<span className="req">*</span>
          </label>
          <input class="demo-input" onInput={inputField()} type="email" required autoComplete="off" />
        </div>
        <div className="field-wrap">
          <label>
            Password<span className="req">*</span>
          </label>
          <input class="demo-input" onInput={inputField()} type="password" required autoComplete="off" />
        </div>
        <p className="forgot"><a href="#">Forgot Password?</a></p>
        <button className="button button-block">Log In</button>
      </form>
    </div>
  </div>
</div>
        </div>
    )
}
