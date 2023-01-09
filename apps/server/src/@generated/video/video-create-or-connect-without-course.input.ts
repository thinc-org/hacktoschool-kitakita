import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { Type } from 'class-transformer';
import { VideoCreateWithoutCourseInput } from './video-create-without-course.input';

@InputType()
export class VideoCreateOrConnectWithoutCourseInput {

    @Field(() => VideoWhereUniqueInput, {nullable:false})
    @Type(() => VideoWhereUniqueInput)
    where!: VideoWhereUniqueInput;

    @Field(() => VideoCreateWithoutCourseInput, {nullable:false})
    @Type(() => VideoCreateWithoutCourseInput)
    create!: VideoCreateWithoutCourseInput;
}
