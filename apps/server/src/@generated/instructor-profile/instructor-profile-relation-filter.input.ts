import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstructorProfileWhereInput } from './instructor-profile-where.input';

@InputType()
export class InstructorProfileRelationFilter {

    @Field(() => InstructorProfileWhereInput, {nullable:true})
    is?: InstructorProfileWhereInput;

    @Field(() => InstructorProfileWhereInput, {nullable:true})
    isNot?: InstructorProfileWhereInput;
}
