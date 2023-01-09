import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstructorProfileUpdateWithoutUserInput } from './instructor-profile-update-without-user.input';
import { Type } from 'class-transformer';
import { InstructorProfileCreateWithoutUserInput } from './instructor-profile-create-without-user.input';

@InputType()
export class InstructorProfileUpsertWithoutUserInput {

    @Field(() => InstructorProfileUpdateWithoutUserInput, {nullable:false})
    @Type(() => InstructorProfileUpdateWithoutUserInput)
    update!: InstructorProfileUpdateWithoutUserInput;

    @Field(() => InstructorProfileCreateWithoutUserInput, {nullable:false})
    @Type(() => InstructorProfileCreateWithoutUserInput)
    create!: InstructorProfileCreateWithoutUserInput;
}
