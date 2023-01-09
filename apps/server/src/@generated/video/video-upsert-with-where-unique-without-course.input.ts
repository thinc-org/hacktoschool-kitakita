import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { Type } from 'class-transformer';
import { VideoUpdateWithoutCourseInput } from './video-update-without-course.input';
import { VideoCreateWithoutCourseInput } from './video-create-without-course.input';

@InputType()
export class VideoUpsertWithWhereUniqueWithoutCourseInput {

    @Field(() => VideoWhereUniqueInput, {nullable:false})
    @Type(() => VideoWhereUniqueInput)
    where!: VideoWhereUniqueInput;

    @Field(() => VideoUpdateWithoutCourseInput, {nullable:false})
    @Type(() => VideoUpdateWithoutCourseInput)
    update!: VideoUpdateWithoutCourseInput;

    @Field(() => VideoCreateWithoutCourseInput, {nullable:false})
    @Type(() => VideoCreateWithoutCourseInput)
    create!: VideoCreateWithoutCourseInput;
}
