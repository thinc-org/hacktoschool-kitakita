import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MaterialCountOrderByAggregateInput } from './material-count-order-by-aggregate.input';
import { MaterialMaxOrderByAggregateInput } from './material-max-order-by-aggregate.input';
import { MaterialMinOrderByAggregateInput } from './material-min-order-by-aggregate.input';

@InputType()
export class MaterialOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    src?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => MaterialCountOrderByAggregateInput, {nullable:true})
    _count?: MaterialCountOrderByAggregateInput;

    @Field(() => MaterialMaxOrderByAggregateInput, {nullable:true})
    _max?: MaterialMaxOrderByAggregateInput;

    @Field(() => MaterialMinOrderByAggregateInput, {nullable:true})
    _min?: MaterialMinOrderByAggregateInput;
}
