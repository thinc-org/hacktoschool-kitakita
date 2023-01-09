import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseUpdateWithoutVideosInput } from './course-update-without-videos.input';
import { Type } from 'class-transformer';
import { CourseCreateWithoutVideosInput } from './course-create-without-videos.input';

@InputType()
export class CourseUpsertWithoutVideosInput {

    @Field(() => CourseUpdateWithoutVideosInput, {nullable:false})
    @Type(() => CourseUpdateWithoutVideosInput)
    update!: CourseUpdateWithoutVideosInput;

    @Field(() => CourseCreateWithoutVideosInput, {nullable:false})
    @Type(() => CourseCreateWithoutVideosInput)
    create!: CourseCreateWithoutVideosInput;
}
