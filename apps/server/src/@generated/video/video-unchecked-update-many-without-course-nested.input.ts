import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoCreateWithoutCourseInput } from './video-create-without-course.input';
import { Type } from 'class-transformer';
import { VideoCreateOrConnectWithoutCourseInput } from './video-create-or-connect-without-course.input';
import { VideoUpsertWithWhereUniqueWithoutCourseInput } from './video-upsert-with-where-unique-without-course.input';
import { VideoCreateManyCourseInputEnvelope } from './video-create-many-course-input-envelope.input';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { VideoUpdateWithWhereUniqueWithoutCourseInput } from './video-update-with-where-unique-without-course.input';
import { VideoUpdateManyWithWhereWithoutCourseInput } from './video-update-many-with-where-without-course.input';
import { VideoScalarWhereInput } from './video-scalar-where.input';

@InputType()
export class VideoUncheckedUpdateManyWithoutCourseNestedInput {

    @Field(() => [VideoCreateWithoutCourseInput], {nullable:true})
    @Type(() => VideoCreateWithoutCourseInput)
    create?: Array<VideoCreateWithoutCourseInput>;

    @Field(() => [VideoCreateOrConnectWithoutCourseInput], {nullable:true})
    @Type(() => VideoCreateOrConnectWithoutCourseInput)
    connectOrCreate?: Array<VideoCreateOrConnectWithoutCourseInput>;

    @Field(() => [VideoUpsertWithWhereUniqueWithoutCourseInput], {nullable:true})
    @Type(() => VideoUpsertWithWhereUniqueWithoutCourseInput)
    upsert?: Array<VideoUpsertWithWhereUniqueWithoutCourseInput>;

    @Field(() => VideoCreateManyCourseInputEnvelope, {nullable:true})
    @Type(() => VideoCreateManyCourseInputEnvelope)
    createMany?: VideoCreateManyCourseInputEnvelope;

    @Field(() => [VideoWhereUniqueInput], {nullable:true})
    @Type(() => VideoWhereUniqueInput)
    set?: Array<VideoWhereUniqueInput>;

    @Field(() => [VideoWhereUniqueInput], {nullable:true})
    @Type(() => VideoWhereUniqueInput)
    disconnect?: Array<VideoWhereUniqueInput>;

    @Field(() => [VideoWhereUniqueInput], {nullable:true})
    @Type(() => VideoWhereUniqueInput)
    delete?: Array<VideoWhereUniqueInput>;

    @Field(() => [VideoWhereUniqueInput], {nullable:true})
    @Type(() => VideoWhereUniqueInput)
    connect?: Array<VideoWhereUniqueInput>;

    @Field(() => [VideoUpdateWithWhereUniqueWithoutCourseInput], {nullable:true})
    @Type(() => VideoUpdateWithWhereUniqueWithoutCourseInput)
    update?: Array<VideoUpdateWithWhereUniqueWithoutCourseInput>;

    @Field(() => [VideoUpdateManyWithWhereWithoutCourseInput], {nullable:true})
    @Type(() => VideoUpdateManyWithWhereWithoutCourseInput)
    updateMany?: Array<VideoUpdateManyWithWhereWithoutCourseInput>;

    @Field(() => [VideoScalarWhereInput], {nullable:true})
    @Type(() => VideoScalarWhereInput)
    deleteMany?: Array<VideoScalarWhereInput>;
}
