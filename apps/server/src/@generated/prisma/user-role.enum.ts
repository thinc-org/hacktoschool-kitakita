import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
    Student = "Student",
    Instructor = "Instructor",
    Admin = "Admin"
}


registerEnumType(UserRole, { name: 'UserRole', description: undefined })
