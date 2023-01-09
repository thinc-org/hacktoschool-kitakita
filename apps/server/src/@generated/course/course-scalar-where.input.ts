import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CourseScalarWhereInput {

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    AND?: Array<CourseScalarWhereInput>;

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    OR?: Array<CourseScalarWhereInput>;

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    NOT?: Array<CourseScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    instructorId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
