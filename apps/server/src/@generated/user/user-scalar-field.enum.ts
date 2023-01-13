import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    username = "username",
    hashedPassword = "hashedPassword",
    online = "online",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
