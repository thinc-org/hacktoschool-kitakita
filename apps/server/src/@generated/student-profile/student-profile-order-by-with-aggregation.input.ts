import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StudentProfileCountOrderByAggregateInput } from './student-profile-count-order-by-aggregate.input';
import { StudentProfileMaxOrderByAggregateInput } from './student-profile-max-order-by-aggregate.input';
import { StudentProfileMinOrderByAggregateInput } from './student-profile-min-order-by-aggregate.input';

@InputType()
export class StudentProfileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => StudentProfileCountOrderByAggregateInput, {nullable:true})
    _count?: StudentProfileCountOrderByAggregateInput;

    @Field(() => StudentProfileMaxOrderByAggregateInput, {nullable:true})
    _max?: StudentProfileMaxOrderByAggregateInput;

    @Field(() => StudentProfileMinOrderByAggregateInput, {nullable:true})
    _min?: StudentProfileMinOrderByAggregateInput;
}
