import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentProfileWhereInput } from './student-profile-where.input';
import { Type } from 'class-transformer';
import { StudentProfileOrderByWithRelationInput } from './student-profile-order-by-with-relation.input';
import { StudentProfileWhereUniqueInput } from './student-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StudentProfileScalarFieldEnum } from './student-profile-scalar-field.enum';

@ArgsType()
export class FindManyStudentProfileArgs {

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

    @Field(() => [StudentProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudentProfileScalarFieldEnum>;
}
