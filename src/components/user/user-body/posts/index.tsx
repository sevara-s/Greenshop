import type {BlogTypeApi} from "../../../../@types"
import {useSearchParamsHandler} from "../../../../hooks/useSearchParams"
import BlogCard from "../../../blog/blog-card"
import Loader from "../../../../generic/loader"
import {useParams} from "react-router-dom"
import UseQueryHandler from "../../../../hooks/useQueryHandler"

const Posts = () => {
    const {getParam} = useSearchParamsHandler()

    const {post_user_id} = useParams()

    const {data, isError, isLoading}: BlogTypeApi = UseQueryHandler({
        pathname: `blog?search=${getParam("search")}`,
        url: "user/blog",
        params: {
            search: getParam("search") || "",
        },
    })

    const {blog_loader} = Loader()

    const user_post = data?.filter((value) => value.created_by === post_user_id)

    return (
        <div className="grid grid-cols-3 gap-5 max-[1000px]:grid-cols-2 max-[630px]:grid-cols-1">
            {isLoading || isError
                ? blog_loader()
                : user_post?.map((value) => (
                      <BlogCard key={value._id} {...value} />
                  ))}
        </div>
    )
}

export default Posts
