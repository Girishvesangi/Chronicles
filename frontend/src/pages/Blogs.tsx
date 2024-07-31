
import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { Spinner } from "../components/spinner";
import { useBlogs } from "../hooks"

export const Blogs=()=>{
    const {loading, blogs}=useBlogs();

    if(loading)
    {
        return <div>
            <Appbar/>
            <div className="flex justify-center">
        
        <div>
           <Spinner/>
        </div>
        </div>
        </div>
    }

    return <div>
    <Appbar />
    <div  className="flex justify-center">
        <div>
        {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorname={ "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Feb 2024"}
                />)}
            </div>
            
        </div>
    </div>



}