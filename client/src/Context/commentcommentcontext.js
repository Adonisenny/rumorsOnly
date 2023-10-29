import { createContext, useReducer } from "react";

export const CommentscommentsContext = createContext()

export const commentcommentReducer =(state,action) => {
switch(action.type){
    case 'SET_COMMENTSCOMMENTS':
        return {
            commentscomments:action.payload
        }
    case'CREATE_COMMENTSCOMMENTS':
        return{
            commentscomments:[action.payload, ...state.commentscomments]
        }
        case'DELETE_COMMENTSCOMMENTS':
        return{
            commentscomments:state?.commentscomments.filter(c => c?._id !== action.payload?._id)
        }
        default:
            return state
}
}
export const CommentscommentsContextProvider = ({children}) => {

const [state,dispatch3] =useReducer(commentcommentReducer,{
commentscomments:null
})

    return (
        <CommentscommentsContext.Provider value={{...state,dispatch3}}>

        {children}

        </CommentscommentsContext.Provider>
    )
}