import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutInstructorProfileInput } from './user-create-without-instructor-profile.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutInstructorProfileInput } from './user-create-or-connect-without-instructor-profile.input';
import { UserUpsertWithoutInstructorProfileInput } from './user-upsert-without-instructor-profile.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutInstructorProfileInput } from './user-update-without-instructor-profile.input';

@InputType()
export class UserUpdateOneRequiredWithoutInstructorProfileNestedInput {

    @Field(() => UserCreateWithoutInstructorProfileInput, {nullable:true})
    @Type(() => UserCreateWithoutInstructorProfileInput)
    create?: UserCreateWithoutInstructorProfileInput;

    @Field(() => UserCreateOrConnectWithoutInstructorProfileInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutInstructorProfileInput)
    connectOrCreate?: UserCreateOrConnectWithoutInstructorProfileInput;

    @Field(() => UserUpsertWithoutInstructorProfileInput, {nullable:true})
    @Type(() => UserUpsertWithoutInstructorProfileInput)
    upsert?: UserUpsertWithoutInstructorProfileInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutInstructorProfileInput, {nullable:true})
    @Type(() => UserUpdateWithoutInstructorProfileInput)
    update?: UserUpdateWithoutInstructorProfileInput;
}
