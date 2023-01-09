import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstructorProfileWhereInput } from './instructor-profile-where.input';
import { Type } from 'class-transformer';
import { InstructorProfileOrderByWithAggregationInput } from './instructor-profile-order-by-with-aggregation.input';
import { InstructorProfileScalarFieldEnum } from './instructor-profile-scalar-field.enum';
import { InstructorProfileScalarWhereWithAggregatesInput } from './instructor-profile-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { InstructorProfileCountAggregateInput } from './instructor-profile-count-aggregate.input';
import { InstructorProfileMinAggregateInput } from './instructor-profile-min-aggregate.input';
import { InstructorProfileMaxAggregateInput } from './instructor-profile-max-aggregate.input';

@ArgsType()
export class InstructorProfileGroupByArgs {

    @Field(() => InstructorProfileWhereInput, {nullable:true})
    @Type(() => InstructorProfileWhereInput)
    where?: InstructorProfileWhereInput;

    @Field(() => [InstructorProfileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<InstructorProfileOrderByWithAggregationInput>;

    @Field(() => [InstructorProfileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof InstructorProfileScalarFieldEnum>;

    @Field(() => InstructorProfileScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstructorProfileScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => InstructorProfileCountAggregateInput, {nullable:true})
    _count?: InstructorProfileCountAggregateInput;

    @Field(() => InstructorProfileMinAggregateInput, {nullable:true})
    _min?: InstructorProfileMinAggregateInput;

    @Field(() => InstructorProfileMaxAggregateInput, {nullable:true})
    _max?: InstructorProfileMaxAggregateInput;
}
