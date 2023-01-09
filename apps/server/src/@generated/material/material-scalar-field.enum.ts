import { registerEnumType } from '@nestjs/graphql';

export enum MaterialScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    src = "src",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(MaterialScalarFieldEnum, { name: 'MaterialScalarFieldEnum', description: undefined })
