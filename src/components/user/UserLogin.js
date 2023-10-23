import React from "react";
import './Login.css'


const UserLogin = () => {

 

return(
    <>
    <div>
  <div className="img-fix" />
  <div style={{width: '100%'}}>
    <div className="m-auto wrapper">
      <div className="side right">
        <button className="arrow-submit display-3" type="submit">
          <div className="text-white" style={{marginTop:'-23px',marginLeft:'4px'}}>
          &#8227;
          </div>
        </button>
      </div>
      <div className="mainn left">
        <div style={{height: 120, textAlign: 'center'}}>
          <img className="img-circle" src="https://images.unsplash.com/photo-1682687981922-7b55dbb30892?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <form>
          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="password" placeholder="Enter Password" />
        </form>
      </div>
    </div>
  </div>
</div>



    
    </>
)
}
export default UserLogin