import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstructorProfileCreateInput } from './instructor-profile-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneInstructorProfileArgs {

    @Field(() => InstructorProfileCreateInput, {nullable:false})
    @Type(() => InstructorProfileCreateInput)
    data!: InstructorProfileCreateInput;
}
