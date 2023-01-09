import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class VideoAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;
}
