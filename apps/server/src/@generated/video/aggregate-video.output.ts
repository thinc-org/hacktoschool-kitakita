import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VideoCountAggregate } from './video-count-aggregate.output';
import { VideoAvgAggregate } from './video-avg-aggregate.output';
import { VideoSumAggregate } from './video-sum-aggregate.output';
import { VideoMinAggregate } from './video-min-aggregate.output';
import { VideoMaxAggregate } from './video-max-aggregate.output';

@ObjectType()
export class AggregateVideo {

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
