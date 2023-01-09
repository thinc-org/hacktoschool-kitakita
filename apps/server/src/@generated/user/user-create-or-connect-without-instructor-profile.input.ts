import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutInstructorProfileInput } from './user-create-without-instructor-profile.input';

@InputType()
export class UserCreateOrConnectWithoutInstructorProfileInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutInstructorProfileInput, {nullable:false})
    @Type(() => UserCreateWithoutInstructorProfileInput)
    create!: UserCreateWithoutInstructorProfileInput;
}
