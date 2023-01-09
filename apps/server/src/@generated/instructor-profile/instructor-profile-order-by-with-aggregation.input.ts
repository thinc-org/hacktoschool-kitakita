import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { InstructorProfileCountOrderByAggregateInput } from './instructor-profile-count-order-by-aggregate.input';
import { InstructorProfileMaxOrderByAggregateInput } from './instructor-profile-max-order-by-aggregate.input';
import { InstructorProfileMinOrderByAggregateInput } from './instructor-profile-min-order-by-aggregate.input';

@InputType()
export class InstructorProfileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => InstructorProfileCountOrderByAggregateInput, {nullable:true})
    _count?: InstructorProfileCountOrderByAggregateInput;

    @Field(() => InstructorProfileMaxOrderByAggregateInput, {nullable:true})
    _max?: InstructorProfileMaxOrderByAggregateInput;

    @Field(() => InstructorProfileMinOrderByAggregateInput, {nullable:true})
    _min?: InstructorProfileMinOrderByAggregateInput;
}
