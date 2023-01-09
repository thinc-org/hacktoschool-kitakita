import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VideoCountOrderByAggregateInput } from './video-count-order-by-aggregate.input';
import { VideoAvgOrderByAggregateInput } from './video-avg-order-by-aggregate.input';
import { VideoMaxOrderByAggregateInput } from './video-max-order-by-aggregate.input';
import { VideoMinOrderByAggregateInput } from './video-min-order-by-aggregate.input';
import { VideoSumOrderByAggregateInput } from './video-sum-order-by-aggregate.input';

@InputType()
export class VideoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    src?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => VideoCountOrderByAggregateInput, {nullable:true})
    _count?: VideoCountOrderByAggregateInput;

    @Field(() => VideoAvgOrderByAggregateInput, {nullable:true})
    _avg?: VideoAvgOrderByAggregateInput;

    @Field(() => VideoMaxOrderByAggregateInput, {nullable:true})
    _max?: VideoMaxOrderByAggregateInput;

    @Field(() => VideoMinOrderByAggregateInput, {nullable:true})
    _min?: VideoMinOrderByAggregateInput;

    @Field(() => VideoSumOrderByAggregateInput, {nullable:true})
    _sum?: VideoSumOrderByAggregateInput;
}
