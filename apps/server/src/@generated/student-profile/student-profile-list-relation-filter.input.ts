import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentProfileWhereInput } from './student-profile-where.input';

@InputType()
export class StudentProfileListRelationFilter {

    @Field(() => StudentProfileWhereInput, {nullable:true})
    every?: StudentProfileWhereInput;

    @Field(() => StudentProfileWhereInput, {nullable:true})
    some?: StudentProfileWhereInput;

    @Field(() => StudentProfileWhereInput, {nullable:true})
    none?: StudentProfileWhereInput;
}
