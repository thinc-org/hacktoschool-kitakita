import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoCreateManyCourseInput } from './video-create-many-course.input';
import { Type } from 'class-transformer';

@InputType()
export class VideoCreateManyCourseInputEnvelope {

    @Field(() => [VideoCreateManyCourseInput], {nullable:false})
    @Type(() => VideoCreateManyCourseInput)
    data!: Array<VideoCreateManyCourseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
