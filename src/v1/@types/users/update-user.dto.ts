import { Role } from "@prisma/client";

export interface UpdateUserDTO {
    id: string;
    name: string;
    role: Role;
    isActive: boolean;
}