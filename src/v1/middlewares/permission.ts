import { NextFunction, Request, Response } from "express";
import { decode, JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
    role?: string;
}

export function is(roles: string[]) {
    return (request: Request, response: Response, next: NextFunction) => {
        const token = request.headers.authorization?.split(" ")[1];

        if (!token) {
            response.status(401).json({ ['message-error-401']: "unauthorized" });
            return;
        }

        const decoded = decode(token) as CustomJwtPayload | null;

        if (!decoded || !decoded.role) {
            response.status(401).json({ ['message-error-401']: "unauthorized" });
            return;
        }


        if (!roles.includes(decoded.role)) {
             response.status(403).json({ ['message-error-401']: "unauthorized" });
             return;
        }

        next(); 
    };
}
