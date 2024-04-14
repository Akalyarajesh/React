import React from 'react'

const Login = () => {
  return (
   <>
       <div class="background">
      <img src="image/blue_purple_abstract_hd.jpg" alt="" />

      <div class="login-background">
        <div class="form-box">
          <form action="" class="login-box">
            <div class="title">
              <h2>Login</h2>
              <p>
                Doesn't have an account yet? <a href="register.htm"> Sign Up</a>
              </p>
            </div>
            <label for="email" class="email">Email Address</label><br />
            <input
              type="email"
              id="email"
              name="email"
              class="message-inputs"
              placeholder="you@example.com"
            />
            <br />
            <br />
            <label for="pwd" class="pwd"
              >Password <a href="/">Forget Password?</a></label
            ><br />
            <input
              type="password"
              id="pwd"
              name="pwd"
              value=""
              class="message-inputs1"
              placeholder="Enter 6 character or more"
            />
            <br />.
            <input
              type="checkbox"
              id="remember"
              name="remember"
              value=""
              class="remember"
            /><label for="remember" class="rem">Remember me</label><br />
            <button type="submit" class="bt" onclick="clickhandler()">
              <a href="/"> LOGIN</a>
            </button>
          </form>
          <h1><span>or login with</span></h1>
          <div class="gf-bt">
            <a href="/">
              <button class="g-bt1">
                <img src="image/Logo-google-icon-PNG.png" alt="" />
                <span>Google</span>
              </button></a
            >
            <a href="/">
              <button class="g-bt2">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <span>Facebook</span>
              </button></a
            >
          </div>
        </div>
        <div class="girl-image">
          <img
            src="image/114712205-woman-at-computer-vector-illustration-of-girl-in-office-or-home-texting-chat-message-on-laptop-with.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
   </>
  )
}

export default Login;