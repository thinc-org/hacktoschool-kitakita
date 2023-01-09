import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoCreateWithoutCourseInput } from './video-create-without-course.input';
import { Type } from 'class-transformer';
import { VideoCreateOrConnectWithoutCourseInput } from './video-create-or-connect-without-course.input';
import { VideoCreateManyCourseInputEnvelope } from './video-create-many-course-input-envelope.input';
import { VideoWhereUniqueInput } from './video-where-unique.input';

@InputType()
export class VideoUncheckedCreateNestedManyWithoutCourseInput {

    @Field(() => [VideoCreateWithoutCourseInput], {nullable:true})
    @Type(() => VideoCreateWithoutCourseInput)
    create?: Array<VideoCreateWithoutCourseInput>;

    @Field(() => [VideoCreateOrConnectWithoutCourseInput], {nullable:true})
    @Type(() => VideoCreateOrConnectWithoutCourseInput)
    connectOrCreate?: Array<VideoCreateOrConnectWithoutCourseInput>;

    @Field(() => VideoCreateManyCourseInputEnvelope, {nullable:true})
    @Type(() => VideoCreateManyCourseInputEnvelope)
    createMany?: VideoCreateManyCourseInputEnvelope;

    @Field(() => [VideoWhereUniqueInput], {nullable:true})
    @Type(() => VideoWhereUniqueInput)
    connect?: Array<VideoWhereUniqueInput>;
}
