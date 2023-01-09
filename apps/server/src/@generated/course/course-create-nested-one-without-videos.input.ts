import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutVideosInput } from './course-create-without-videos.input';
import { Type } from 'class-transformer';
import { CourseCreateOrConnectWithoutVideosInput } from './course-create-or-connect-without-videos.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';

@InputType()
export class CourseCreateNestedOneWithoutVideosInput {

    @Field(() => CourseCreateWithoutVideosInput, {nullable:true})
    @Type(() => CourseCreateWithoutVideosInput)
    create?: CourseCreateWithoutVideosInput;

    @Field(() => CourseCreateOrConnectWithoutVideosInput, {nullable:true})
    @Type(() => CourseCreateOrConnectWithoutVideosInput)
    connectOrCreate?: CourseCreateOrConnectWithoutVideosInput;

    @Field(() => CourseWhereUniqueInput, {nullable:true})
    @Type(() => CourseWhereUniqueInput)
    connect?: CourseWhereUniqueInput;
}
