import './App.css';
import { useState } from "react";

function App() {
  // btn style
  const btnstyle = {
    padding: "10px",
    border: "1px solid rgb(255, 0, 85)", borderRadius: "5px", backgroundColor: "black", color: "white",
    width: "140px", margin: "10px"
  }
  // state 
  const [textInput, setTextInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  // validation state
  const [textIsValid, setTextIsValid] = useState(true)
  const [pswIsValid, setPswIsValid] = useState(true)

  // validt fun
  const validt = (e) => {
    const { value, name } = e.target
    if (name === "emale") {
      if (value.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/)) {
        setTextInput(value)
        setTextIsValid(true)
      } else {
        setTextInput(value)
        setTextIsValid(false)
      }
    } else if (name === "password") {
      if (value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        setPasswordInput(value)
        setPswIsValid(true)
      } else {
        setPasswordInput(value)
        setPswIsValid(false)
      }

    }
  }

  // btn fun
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!textInput || !passwordInput) {
      alert("Please Fill the from!!")
    } else if (textInput.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/) && passwordInput.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
      alert(` Email Address : ${textInput}
      Password : ${passwordInput}`)
    } else {
      alert("Invalid!!")
    }
  }

  // jsx code
  return (
    // background div
    <div style={{ height: "100vh" }} className="mainDiv w-100 bg-black d-flex">

      <div className='row container'>
        {/* heading div */}
        <div className='col-1'></div>
        <div className='col-7'>
          <div style={{ marginTop: "100px" }}>
            <h1 className='fs-1 text-light pt-5 ms-5' >Welcome <span style={{ color: "rgb(246, 0, 82)", fontSize: "50px" }}>Back</span>..</h1>
            <h3 className='fs-4 text-light ms-5'>Get Ready For Your Life with Us!</h3>
            <p className=' text-light ms-5 me-5'>If you use pixels, you can still use the zoom tool to resize the entire page</p>
            {/* <!-- icons --> */}
            <div class="icons-set">

              <div class="icons">
                <a href="https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </div>

              <div class="icons">
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Den">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </div>


              <div class="icons">
                <a href="https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>

              <div class="icons">
                <a href="https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>


            </div>

          </div>
        </div>
        {/* ceneter postion */}
        <div className='col-4'>
          <div className="d-flex mt-5">

            <div style={{ height: "60vh", borderInline: " 1px solid rgb(255, 0, 85)" }} className='flex-column rounded text-light p-5  mt-5 shadow'>
              {/* form */}
              <div>
                <form onSubmit={handleSubmit}>
                  <h1 className='text-center'>Sign In</h1>
                  {/* email text box */}
                  <div style={{ marginBottom: "10px", marginTop: "20px" }}>
                    <label htmlFor="emale">Email Address :
                      <input className='bg-light bg-opacity-10 text-light' style={{ margin: "5px", padding: "10px", border: "none", borderBottom: "1px solid rgb(246, 0, 82)", width: "350px", borderRadius: "5px" }} placeholder='Enter your Name' id='emale' type="email" name='emale' value={textInput || ""} onChange={(e) => { validt(e) }} />
                    </label>
                  </div>
                  {/* validation command */}
                  {!textIsValid &&
                    <div className='mt-2 text-danger' >*Invalid Input</div>
                  }
                  {/* psw text box */}
                  <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="password"> Password :
                      <input className='bg-light bg-opacity-10' style={{ margin: "5px", padding: "10px", border: "none", borderBottom: "1px solid rgb(246, 0, 82)", width: "350px", borderRadius: "5px" }} placeholder='Password' id='password' type="password" name='password' value={passwordInput || ""} onChange={(e) => { validt(e) }} />
                    </label>

                    {/* validation command */}
                    {!pswIsValid &&
                      <div className='mt-2 text-danger' >*Invalid Input</div>
                    }
                    {/* checkBox */}
                    <div style={{ marginBottom: "10px" }}>
                      <label style={{ margin: "5px", accentColor: "rgb(246, 0, 82)" }} htmlFor="checkBox">
                        <input type="checkbox" name="checkBox" id="checkBox" value={"checkBox"} /> <span style={{ color: "rgb(246, 0, 82)" }}>Remember Me</span>
                      </label>
                    </div>

                    {/* last btn and link div */}
                    <div className='d-flex flex-column  justify-content-center align-items-center'>
                      {/* btn */}
                      <input style={btnstyle} type="submit" value="Sumbit"  />
                      {/* link */}
                      <a className='d-flex' style={{ color: "white" }} href='https://www.linkedin.com/in/ann-treesa-biju-682a60284/'>Forgot Password?</a>
                    </div>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
