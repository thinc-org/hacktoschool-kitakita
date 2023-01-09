import { registerEnumType } from '@nestjs/graphql';

export enum InstructorProfileScalarFieldEnum {
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(InstructorProfileScalarFieldEnum, { name: 'InstructorProfileScalarFieldEnum', description: undefined })
