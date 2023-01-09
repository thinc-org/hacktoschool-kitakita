import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { Type } from 'class-transformer';
import { VideoUpdateWithoutCourseInput } from './video-update-without-course.input';

@InputType()
export class VideoUpdateWithWhereUniqueWithoutCourseInput {

    @Field(() => VideoWhereUniqueInput, {nullable:false})
    @Type(() => VideoWhereUniqueInput)
    where!: VideoWhereUniqueInput;

    @Field(() => VideoUpdateWithoutCourseInput, {nullable:false})
    @Type(() => VideoUpdateWithoutCourseInput)
    data!: VideoUpdateWithoutCourseInput;
}
