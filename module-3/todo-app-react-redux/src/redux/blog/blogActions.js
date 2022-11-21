import { GETBLOG } from "./blogActionType"

export const getBlogs = (blog) => {
    return{
        type: GETBLOG,
        payload:{
            ...blog
        }
    }
}