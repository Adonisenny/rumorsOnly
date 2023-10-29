import { CommentscommentsContext } from "../Context/commentcommentcontext";
import { useContext } from "react";

export const useCommentCommentContext = () => {
    const mycommentcommentcontext = useContext(CommentscommentsContext)
    if(!mycommentcommentcontext) {
        throw Error('wrong context used')
    }
    return mycommentcommentcontext
}