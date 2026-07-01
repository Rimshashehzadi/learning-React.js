import { useState } from "react"

const InputField = () =>{
    const [name,setNmae] = useState('Ali')
    const [name1,setname1] = useState()
    const [password,setpassword] = useState()
    const [email,setemail] = useState()
    return(
        <div>
            <h1>Get input field value</h1>
            <br/>
            <input type="text"  value={name} onChange={(event)=>setNmae(event.target.value)} placeholder="Enter you text" />
        <h1>{name}</h1>
       
        <button className="p-4 bg-amber-600 text-amber-50" onClick={()=>setNmae("")}>clear value</button>
        <br/> <br/>
        <form>
            <input className="border rounded-lg p-2" value={name1} type="text" onChange={(event)=>setname1(event.target.value)} placeholder="Enter your name"/>
            
            {/* <h1>{name1}</h1> */}
            <br/> <br/>
            <input className="border rounded-lg p-2" value={password} type="password" onChange={(event)=>setpassword(event.target.value)} placeholder="Enter your password"/>
            <br/> <br/>
            <input className="border rounded-lg p-2" value={email} type="email" onChange={(event)=>setemail(event.target.value)} placeholder="Enter your email"/>
            <br/> <br/>
            <button className="p-3 bg-amber-600 text-amber-50">submit</button>
            <button className="p-3 ml-8 bg-blue-700 text-amber-50" onClick={()=>{setname1(""); setpassword(''); setemail('')}}>clear</button>
            <h1>{name1}</h1>
            <h1>{password}</h1>
            <h1>{email}</h1>
        </form>
        </div>
    )
}
export default InputField