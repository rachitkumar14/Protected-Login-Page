import { useEffect } from "react"

function SignOut()
{
    useEffect(()=>{
        localStorage.removeItem('login')
        localStorage.removeItem('userName')
    })
    return(
        <div>
            {alert('you are sign out')}
             
        </div>
    )
}
export default SignOut