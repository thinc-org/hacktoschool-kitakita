import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VideoCountAggregate } from './video-count-aggregate.output';
import { VideoAvgAggregate } from './video-avg-aggregate.output';
import { VideoSumAggregate } from './video-sum-aggregate.output';
import { VideoMinAggregate } from './video-min-aggregate.output';
import { VideoMaxAggregate } from './video-max-aggregate.output';

@ObjectType()
export class VideoGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    src!: string;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => String, {nullable:false})
    courseId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => VideoCountAggregate, {nullable:true})
    _count?: VideoCountAggregate;

    @Field(() => VideoAvgAggregate, {nullable:true})
    _avg?: VideoAvgAggregate;

    @Field(() => VideoSumAggregate, {nullable:true})
    _sum?: VideoSumAggregate;

    @Field(() => VideoMinAggregate, {nullable:true})
    _min?: VideoMinAggregate;

    @Field(() => VideoMaxAggregate, {nullable:true})
    _max?: VideoMaxAggregate;
}
