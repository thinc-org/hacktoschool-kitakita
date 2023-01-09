import { registerEnumType } from '@nestjs/graphql';

export enum VideoScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    src = "src",
    duration = "duration",
    courseId = "courseId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(VideoScalarFieldEnum, { name: 'VideoScalarFieldEnum', description: undefined })
