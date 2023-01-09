import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class StudentProfileScalarWhereInput {

    @Field(() => [StudentProfileScalarWhereInput], {nullable:true})
    AND?: Array<StudentProfileScalarWhereInput>;

    @Field(() => [StudentProfileScalarWhereInput], {nullable:true})
    OR?: Array<StudentProfileScalarWhereInput>;

    @Field(() => [StudentProfileScalarWhereInput], {nullable:true})
    NOT?: Array<StudentProfileScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
