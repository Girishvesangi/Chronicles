import { signupInput } from "@girishvesangi/common-app";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Auth=({type}:{type:"signup" | "signin"})=>{
  const Navigate=useNavigate();
  const [signupinputs,setsignupinputs]=useState<signupInput>({
    name:"",
    email:"",
    password:""
  });
  async function sendRequest(){
    const response =await axios.post(`${BACKEND_URL}/api/v1/user/${type=== "signup"?"signup":"signin"}`,signupinputs);
    const jwt=response.data.jwt;
    console.log(jwt);
    localStorage.setItem("token",jwt);
   Navigate("/");

    

  }
   return  <div className=" h-screen flex justify-center flex-col">
    <div className="flex justify-center">
    <div className=" justify-center">
        <div>
            <div className="text-3xl font-extrabold">
                 Create an account
            </div>
            <div className="text-slate-500">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                        <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Sign up" : "Sign in"}
                        </Link>
                    </div>

        </div>
        <div>
        {type === "signup" ? <LabelledInput label="Name" placeholder="ex:Steve rogers" onChange={(e) => {
                        setsignupinputs({
                            ...signupinputs,
                            name: e.target.value
                        })
                    }} /> : null}
          <LabelledInput label="email" placeholder="xyz@gmail.com" onChange={(e)=>{
            setsignupinputs({
              ...signupinputs,
              email:e.target.value
            })
            
          }}/>
          <LabelledInput label="password" type={"password"}  placeholder="ex:123456" onChange={(e)=>{
            setsignupinputs({
              ...signupinputs,
              password:e.target.value
            })
            
          }}/>
          <div>
          <button type="button" onClick={sendRequest} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-3 me-2 mb-2 m-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type=== "signup"?"Signup":"Signin"}</button>
</div>
          
        </div>

    
  
  
</div>
</div>

    </div>

}
interface LabelledInputType{
  label:string;
  placeholder:string;
 onChange:(e: ChangeEvent<HTMLInputElement>) => void;
type?:string;

}
function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
  return <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
      <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
  </div>
}