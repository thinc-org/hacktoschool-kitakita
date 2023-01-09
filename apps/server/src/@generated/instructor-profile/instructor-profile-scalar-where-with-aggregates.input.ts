import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class InstructorProfileScalarWhereWithAggregatesInput {

    @Field(() => [InstructorProfileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<InstructorProfileScalarWhereWithAggregatesInput>;

    @Field(() => [InstructorProfileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<InstructorProfileScalarWhereWithAggregatesInput>;

    @Field(() => [InstructorProfileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<InstructorProfileScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
