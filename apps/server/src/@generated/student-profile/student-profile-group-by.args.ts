import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentProfileWhereInput } from './student-profile-where.input';
import { Type } from 'class-transformer';
import { StudentProfileOrderByWithAggregationInput } from './student-profile-order-by-with-aggregation.input';
import { StudentProfileScalarFieldEnum } from './student-profile-scalar-field.enum';
import { StudentProfileScalarWhereWithAggregatesInput } from './student-profile-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { StudentProfileCountAggregateInput } from './student-profile-count-aggregate.input';
import { StudentProfileMinAggregateInput } from './student-profile-min-aggregate.input';
import { StudentProfileMaxAggregateInput } from './student-profile-max-aggregate.input';

@ArgsType()
export class StudentProfileGroupByArgs {

    @Field(() => StudentProfileWhereInput, {nullable:true})
    @Type(() => StudentProfileWhereInput)
    where?: StudentProfileWhereInput;

    @Field(() => [StudentProfileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StudentProfileOrderByWithAggregationInput>;

    @Field(() => [StudentProfileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StudentProfileScalarFieldEnum>;

    @Field(() => StudentProfileScalarWhereWithAggregatesInput, {nullable:true})
    having?: StudentProfileScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StudentProfileCountAggregateInput, {nullable:true})
    _count?: StudentProfileCountAggregateInput;

    @Field(() => StudentProfileMinAggregateInput, {nullable:true})
    _min?: StudentProfileMinAggregateInput;

    @Field(() => StudentProfileMaxAggregateInput, {nullable:true})
    _max?: StudentProfileMaxAggregateInput;
}
