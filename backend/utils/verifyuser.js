import { ErrorHandler } from "./errorHandler";
import jwt from 'jsonwebtoken'

export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token
    if(!token){
        return next(ErrorHandler(401, 'User not authenticated'))

    }else{
        jwt.verify(token,process.env.mystash, (err,user) => {
            if(err){
                return(ErrorHandler(403, 'There is a token but it is not valid'))
            }
            else{
                req.user =user
                next()
            }
        })
    }
}

export const verifyUser = (req,res,next) => {
    verifyToken(req,res,next, () => {
        if(req.user.id =req.params.id || req.user.isAdmin){
            next()
        }else{
            next(ErrorHandler(403, "Token not valid"))
        }
    })
}

export const verifyAdmin = (req,res,next) => {
    verifyToken(req,res,next, () => {
        if(req.user.isAdmin){
            next()
        }else{
            next(ErrorHandler(403, 'Token is not valid'))
        }
    })

    }

