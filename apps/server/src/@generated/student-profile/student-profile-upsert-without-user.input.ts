import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentProfileUpdateWithoutUserInput } from './student-profile-update-without-user.input';
import { Type } from 'class-transformer';
import { StudentProfileCreateWithoutUserInput } from './student-profile-create-without-user.input';

@InputType()
export class StudentProfileUpsertWithoutUserInput {

    @Field(() => StudentProfileUpdateWithoutUserInput, {nullable:false})
    @Type(() => StudentProfileUpdateWithoutUserInput)
    update!: StudentProfileUpdateWithoutUserInput;

    @Field(() => StudentProfileCreateWithoutUserInput, {nullable:false})
    @Type(() => StudentProfileCreateWithoutUserInput)
    create!: StudentProfileCreateWithoutUserInput;
}
