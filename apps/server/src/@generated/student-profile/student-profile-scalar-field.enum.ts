import { registerEnumType } from '@nestjs/graphql';

export enum StudentProfileScalarFieldEnum {
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(StudentProfileScalarFieldEnum, { name: 'StudentProfileScalarFieldEnum', description: undefined })
