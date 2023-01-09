import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class StudentProfileScalarWhereWithAggregatesInput {

    @Field(() => [StudentProfileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StudentProfileScalarWhereWithAggregatesInput>;

    @Field(() => [StudentProfileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StudentProfileScalarWhereWithAggregatesInput>;

    @Field(() => [StudentProfileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StudentProfileScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
