import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstructorProfileWhereInput } from './instructor-profile-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyInstructorProfileArgs {

    @Field(() => InstructorProfileWhereInput, {nullable:true})
    @Type(() => InstructorProfileWhereInput)
    where?: InstructorProfileWhereInput;
}
