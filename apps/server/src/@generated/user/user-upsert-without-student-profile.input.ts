import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutStudentProfileInput } from './user-update-without-student-profile.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutStudentProfileInput } from './user-create-without-student-profile.input';

@InputType()
export class UserUpsertWithoutStudentProfileInput {

    @Field(() => UserUpdateWithoutStudentProfileInput, {nullable:false})
    @Type(() => UserUpdateWithoutStudentProfileInput)
    update!: UserUpdateWithoutStudentProfileInput;

    @Field(() => UserCreateWithoutStudentProfileInput, {nullable:false})
    @Type(() => UserCreateWithoutStudentProfileInput)
    create!: UserCreateWithoutStudentProfileInput;
}
