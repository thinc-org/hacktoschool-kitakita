import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstructorProfileUpdateInput } from './instructor-profile-update.input';
import { Type } from 'class-transformer';
import { InstructorProfileWhereUniqueInput } from './instructor-profile-where-unique.input';

@ArgsType()
export class UpdateOneInstructorProfileArgs {

    @Field(() => InstructorProfileUpdateInput, {nullable:false})
    @Type(() => InstructorProfileUpdateInput)
    data!: InstructorProfileUpdateInput;

    @Field(() => InstructorProfileWhereUniqueInput, {nullable:false})
    @Type(() => InstructorProfileWhereUniqueInput)
    where!: InstructorProfileWhereUniqueInput;
}
