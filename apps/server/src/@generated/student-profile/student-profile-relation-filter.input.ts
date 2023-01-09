import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentProfileWhereInput } from './student-profile-where.input';

@InputType()
export class StudentProfileRelationFilter {

    @Field(() => StudentProfileWhereInput, {nullable:true})
    is?: StudentProfileWhereInput;

    @Field(() => StudentProfileWhereInput, {nullable:true})
    isNot?: StudentProfileWhereInput;
}
