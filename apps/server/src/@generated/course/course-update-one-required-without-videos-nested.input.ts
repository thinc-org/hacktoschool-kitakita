import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutVideosInput } from './course-create-without-videos.input';
import { Type } from 'class-transformer';
import { CourseCreateOrConnectWithoutVideosInput } from './course-create-or-connect-without-videos.input';
import { CourseUpsertWithoutVideosInput } from './course-upsert-without-videos.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithoutVideosInput } from './course-update-without-videos.input';

@InputType()
export class CourseUpdateOneRequiredWithoutVideosNestedInput {

    @Field(() => CourseCreateWithoutVideosInput, {nullable:true})
    @Type(() => CourseCreateWithoutVideosInput)
    create?: CourseCreateWithoutVideosInput;

    @Field(() => CourseCreateOrConnectWithoutVideosInput, {nullable:true})
    @Type(() => CourseCreateOrConnectWithoutVideosInput)
    connectOrCreate?: CourseCreateOrConnectWithoutVideosInput;

    @Field(() => CourseUpsertWithoutVideosInput, {nullable:true})
    @Type(() => CourseUpsertWithoutVideosInput)
    upsert?: CourseUpsertWithoutVideosInput;

    @Field(() => CourseWhereUniqueInput, {nullable:true})
    @Type(() => CourseWhereUniqueInput)
    connect?: CourseWhereUniqueInput;

    @Field(() => CourseUpdateWithoutVideosInput, {nullable:true})
    @Type(() => CourseUpdateWithoutVideosInput)
    update?: CourseUpdateWithoutVideosInput;
}
