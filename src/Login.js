
import NavBar from "./NavBar";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
function Login()
{
    const navigate = useNavigate();
    const [userName,setUserName]=useState('')
    const [name , setName] = useState('')
    const [password,setPassword] = useState('')
    const [login , setLogin]=useState(false)
    useEffect(()=>{
        let userName=localStorage.getItem('userName')
      if(localStorage.getItem('login'))
      {
        setLogin(true);
        
       
      }
      if(userName)
      {
        setUserName(userName)
      }
    },[login])
   function submitLogin(e){
           e.preventDefault();
             if(name==='' || password==='')
            {
                alert('Please fill the credentials')
                
            }
           else if(name.length<=3 || password.length<=3)
            {
                alert('Please use more than 3 characters')
            }
            else {
                localStorage.setItem('login',true);
                localStorage.setItem('userName',name)
               setUserName(name);
               console.log(name);
                //  setLogin(true);
                // console.log(login);
                  navigate('/')
             
                
            }
    }


    return(
        <div>
            <NavBar/>
           {
            login?<h1>You are logged in {userName}</h1>: <form onSubmit={submitLogin}>
                <h1>Login Form</h1>
             <div className="loginForm">
             <span> <label for="name">Name</label> <input type="text" id="name" onChange={(e)=>setName(e.target.value)}></input></span>
               <span><label for="password">Password</label> <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)}></input></span> <br/>
               <button >Login</button>
             </div>
            </form>
           }
        </div>
    )
}
export default Login;