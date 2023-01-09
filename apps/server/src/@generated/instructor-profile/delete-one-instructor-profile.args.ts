import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstructorProfileWhereUniqueInput } from './instructor-profile-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneInstructorProfileArgs {

    @Field(() => InstructorProfileWhereUniqueInput, {nullable:false})
    @Type(() => InstructorProfileWhereUniqueInput)
    where!: InstructorProfileWhereUniqueInput;
}
