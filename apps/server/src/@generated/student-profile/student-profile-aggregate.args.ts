import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentProfileWhereInput } from './student-profile-where.input';
import { Type } from 'class-transformer';
import { StudentProfileOrderByWithRelationInput } from './student-profile-order-by-with-relation.input';
import { StudentProfileWhereUniqueInput } from './student-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StudentProfileCountAggregateInput } from './student-profile-count-aggregate.input';
import { StudentProfileMinAggregateInput } from './student-profile-min-aggregate.input';
import { StudentProfileMaxAggregateInput } from './student-profile-max-aggregate.input';

@ArgsType()
export class StudentProfileAggregateArgs {

    @Field(() => StudentProfileWhereInput, {nullable:true})
    @Type(() => StudentProfileWhereInput)
    where?: StudentProfileWhereInput;

    @Field(() => [StudentProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudentProfileOrderByWithRelationInput>;

    @Field(() => StudentProfileWhereUniqueInput, {nullable:true})
    cursor?: StudentProfileWhereUniqueInput;

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
