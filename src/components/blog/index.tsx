import {useSearchParamsHandler} from "../../hooks/useSearchParams"

import BlogCard from "./blog-card"
import BlogHeader from "./blog-showcase"
import BlogSearch from "./blog-searchParam"
import Loader from "../../generic/loader"
import CookieUserInfo from "../../generic/cookies"
import { BlogTypeApi } from "../../@types"
import UseQueryHandler from "../../hooks/useQueryHandler"

const BlogComponent = () => {
    const {isAuthorization} = CookieUserInfo()

    const {getParam} = useSearchParamsHandler()

    const {data, isError, isLoading}: BlogTypeApi = UseQueryHandler({
        pathname: `blog?search=${getParam("search")}`,
        url: "user/blog",
        params: {
            search: getParam("search") || "",
        },
    })

    const {blog_loader} = Loader()

    return (
        <section className="py-[20px]">
            <div className="container2">
                {isAuthorization ? <BlogSearch /> : <BlogHeader />}

                <div className="grid grid-cols-3 gap-5 my-10 max-[1000px]:grid-cols-2 max-[630px]:grid-cols-1">
                    {isLoading || isError
                        ? blog_loader()
                        : data?.map((value) => (
                              <BlogCard
                                  key={value?._id || Date.now()}
                                  {...value}
                              />
                          ))}
                </div>
            </div>
        </section>
    )
}

export default BlogComponent
