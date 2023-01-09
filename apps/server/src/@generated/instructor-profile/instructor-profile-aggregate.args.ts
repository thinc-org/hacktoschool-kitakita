import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstructorProfileWhereInput } from './instructor-profile-where.input';
import { Type } from 'class-transformer';
import { InstructorProfileOrderByWithRelationInput } from './instructor-profile-order-by-with-relation.input';
import { InstructorProfileWhereUniqueInput } from './instructor-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InstructorProfileCountAggregateInput } from './instructor-profile-count-aggregate.input';
import { InstructorProfileMinAggregateInput } from './instructor-profile-min-aggregate.input';
import { InstructorProfileMaxAggregateInput } from './instructor-profile-max-aggregate.input';

@ArgsType()
export class InstructorProfileAggregateArgs {

    @Field(() => InstructorProfileWhereInput, {nullable:true})
    @Type(() => InstructorProfileWhereInput)
    where?: InstructorProfileWhereInput;

    @Field(() => [InstructorProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InstructorProfileOrderByWithRelationInput>;

    @Field(() => InstructorProfileWhereUniqueInput, {nullable:true})
    cursor?: InstructorProfileWhereUniqueInput;

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
