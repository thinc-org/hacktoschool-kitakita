import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstructorProfileWhereInput } from './instructor-profile-where.input';
import { Type } from 'class-transformer';
import { InstructorProfileOrderByWithRelationInput } from './instructor-profile-order-by-with-relation.input';
import { InstructorProfileWhereUniqueInput } from './instructor-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InstructorProfileScalarFieldEnum } from './instructor-profile-scalar-field.enum';

@ArgsType()
export class FindFirstInstructorProfileOrThrowArgs {

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

    @Field(() => [InstructorProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof InstructorProfileScalarFieldEnum>;
}
