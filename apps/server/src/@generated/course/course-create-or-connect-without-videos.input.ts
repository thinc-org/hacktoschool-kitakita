import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { Type } from 'class-transformer';
import { CourseCreateWithoutVideosInput } from './course-create-without-videos.input';

@InputType()
export class CourseCreateOrConnectWithoutVideosInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    @Type(() => CourseWhereUniqueInput)
    where!: CourseWhereUniqueInput;

    @Field(() => CourseCreateWithoutVideosInput, {nullable:false})
    @Type(() => CourseCreateWithoutVideosInput)
    create!: CourseCreateWithoutVideosInput;
}
