import jwt from "jsonwebtoken";
import {logger } from "winston";

const JWT_SECRET = process.env.JWT_SECRET || 'change-in-production'
const JWT_EXPIRES_IN = '1d'

export const jwttoken = {
    sign: (payload) => {
        try{
            return jwt.sign(payload, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN})

        }
        catch{
            logger.error('Failed to authenticate token', error)
            throw new Error('Failed to authenticate token')
        }
    },
    verify: (token) => {
        try {return jwt.verify(token, JWT_SECRET)}
        catch (e){
            logger.error('FAILED to authenticate token', e)
            throw new Error('Failed to authenticate token')
        }
    }
}