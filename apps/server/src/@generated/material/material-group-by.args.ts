import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialWhereInput } from './material-where.input';
import { Type } from 'class-transformer';
import { MaterialOrderByWithAggregationInput } from './material-order-by-with-aggregation.input';
import { MaterialScalarFieldEnum } from './material-scalar-field.enum';
import { MaterialScalarWhereWithAggregatesInput } from './material-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MaterialCountAggregateInput } from './material-count-aggregate.input';
import { MaterialMinAggregateInput } from './material-min-aggregate.input';
import { MaterialMaxAggregateInput } from './material-max-aggregate.input';

@ArgsType()
export class MaterialGroupByArgs {

    @Field(() => MaterialWhereInput, {nullable:true})
    @Type(() => MaterialWhereInput)
    where?: MaterialWhereInput;

    @Field(() => [MaterialOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MaterialOrderByWithAggregationInput>;

    @Field(() => [MaterialScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MaterialScalarFieldEnum>;

    @Field(() => MaterialScalarWhereWithAggregatesInput, {nullable:true})
    having?: MaterialScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MaterialCountAggregateInput, {nullable:true})
    _count?: MaterialCountAggregateInput;

    @Field(() => MaterialMinAggregateInput, {nullable:true})
    _min?: MaterialMinAggregateInput;

    @Field(() => MaterialMaxAggregateInput, {nullable:true})
    _max?: MaterialMaxAggregateInput;
}
