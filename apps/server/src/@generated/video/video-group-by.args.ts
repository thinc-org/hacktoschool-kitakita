import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoWhereInput } from './video-where.input';
import { Type } from 'class-transformer';
import { VideoOrderByWithAggregationInput } from './video-order-by-with-aggregation.input';
import { VideoScalarFieldEnum } from './video-scalar-field.enum';
import { VideoScalarWhereWithAggregatesInput } from './video-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VideoCountAggregateInput } from './video-count-aggregate.input';
import { VideoAvgAggregateInput } from './video-avg-aggregate.input';
import { VideoSumAggregateInput } from './video-sum-aggregate.input';
import { VideoMinAggregateInput } from './video-min-aggregate.input';
import { VideoMaxAggregateInput } from './video-max-aggregate.input';

@ArgsType()
export class VideoGroupByArgs {

    @Field(() => VideoWhereInput, {nullable:true})
    @Type(() => VideoWhereInput)
    where?: VideoWhereInput;

    @Field(() => [VideoOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VideoOrderByWithAggregationInput>;

    @Field(() => [VideoScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof VideoScalarFieldEnum>;

    @Field(() => VideoScalarWhereWithAggregatesInput, {nullable:true})
    having?: VideoScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VideoCountAggregateInput, {nullable:true})
    _count?: VideoCountAggregateInput;

    @Field(() => VideoAvgAggregateInput, {nullable:true})
    _avg?: VideoAvgAggregateInput;

    @Field(() => VideoSumAggregateInput, {nullable:true})
    _sum?: VideoSumAggregateInput;

    @Field(() => VideoMinAggregateInput, {nullable:true})
    _min?: VideoMinAggregateInput;

    @Field(() => VideoMaxAggregateInput, {nullable:true})
    _max?: VideoMaxAggregateInput;
}
