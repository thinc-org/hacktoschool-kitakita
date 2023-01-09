import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutInstructorProfileInput } from './user-create-without-instructor-profile.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutInstructorProfileInput } from './user-create-or-connect-without-instructor-profile.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutInstructorProfileInput {

    @Field(() => UserCreateWithoutInstructorProfileInput, {nullable:true})
    @Type(() => UserCreateWithoutInstructorProfileInput)
    create?: UserCreateWithoutInstructorProfileInput;

    @Field(() => UserCreateOrConnectWithoutInstructorProfileInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutInstructorProfileInput)
    connectOrCreate?: UserCreateOrConnectWithoutInstructorProfileInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
