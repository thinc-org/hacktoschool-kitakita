import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutStudentProfileInput } from './user-create-without-student-profile.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutStudentProfileInput } from './user-create-or-connect-without-student-profile.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutStudentProfileInput {

    @Field(() => UserCreateWithoutStudentProfileInput, {nullable:true})
    @Type(() => UserCreateWithoutStudentProfileInput)
    create?: UserCreateWithoutStudentProfileInput;

    @Field(() => UserCreateOrConnectWithoutStudentProfileInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutStudentProfileInput)
    connectOrCreate?: UserCreateOrConnectWithoutStudentProfileInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
