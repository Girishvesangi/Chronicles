import { Appbar } from "../components/Appbar"
import { Auth } from "../components/Auth"
import { Qoute } from "../components/Quote"

export const Signup=()=>{
    return (
        <div>
            <Appbar/>
            <div className="grid grid-cols-2">
                
                <div>
                    <Auth type="signup"/>
                </div>
                <div className="invisible lg:visible">
                    <Qoute/>
                </div>
            </div>
          
        </div>
    )
}