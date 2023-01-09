import { registerEnumType } from '@nestjs/graphql';

export enum CourseScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    instructorId = "instructorId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CourseScalarFieldEnum, { name: 'CourseScalarFieldEnum', description: undefined })
