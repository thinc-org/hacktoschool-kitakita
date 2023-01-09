import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutInstructorProfileInput } from './user-update-without-instructor-profile.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutInstructorProfileInput } from './user-create-without-instructor-profile.input';

@InputType()
export class UserUpsertWithoutInstructorProfileInput {

    @Field(() => UserUpdateWithoutInstructorProfileInput, {nullable:false})
    @Type(() => UserUpdateWithoutInstructorProfileInput)
    update!: UserUpdateWithoutInstructorProfileInput;

    @Field(() => UserCreateWithoutInstructorProfileInput, {nullable:false})
    @Type(() => UserCreateWithoutInstructorProfileInput)
    create!: UserCreateWithoutInstructorProfileInput;
}
