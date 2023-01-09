import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstructorProfileUpdateManyMutationInput } from './instructor-profile-update-many-mutation.input';
import { Type } from 'class-transformer';
import { InstructorProfileWhereInput } from './instructor-profile-where.input';

@ArgsType()
export class UpdateManyInstructorProfileArgs {

    @Field(() => InstructorProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => InstructorProfileUpdateManyMutationInput)
    data!: InstructorProfileUpdateManyMutationInput;

    @Field(() => InstructorProfileWhereInput, {nullable:true})
    @Type(() => InstructorProfileWhereInput)
    where?: InstructorProfileWhereInput;
}
