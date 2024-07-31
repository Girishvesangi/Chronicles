import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
 export interface Blog{
    "content":string;
    "title":string;
    "id":string;
    "author":{
        "name":string
    }

}

export const useBlog=({id}:{id:string})=>{
    const [loading,setloading]=useState(true);
        const [blog,setblog]=useState<Blog>();
        useEffect(()=>{
            axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then(response=>{
                console.log(response.data)
                setblog(response.data);
                setloading(false);
            })


        },[id])
        return{
            loading,
            blog
        }


}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => {
                setBlogs(response.data);
                console.log(response.data)
                setLoading(false);
            })
    }, [])

    return {
        loading,
        blogs
    }
}
