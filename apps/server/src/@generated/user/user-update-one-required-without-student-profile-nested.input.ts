import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutStudentProfileInput } from './user-create-without-student-profile.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutStudentProfileInput } from './user-create-or-connect-without-student-profile.input';
import { UserUpsertWithoutStudentProfileInput } from './user-upsert-without-student-profile.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutStudentProfileInput } from './user-update-without-student-profile.input';

@InputType()
export class UserUpdateOneRequiredWithoutStudentProfileNestedInput {

    @Field(() => UserCreateWithoutStudentProfileInput, {nullable:true})
    @Type(() => UserCreateWithoutStudentProfileInput)
    create?: UserCreateWithoutStudentProfileInput;

    @Field(() => UserCreateOrConnectWithoutStudentProfileInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutStudentProfileInput)
    connectOrCreate?: UserCreateOrConnectWithoutStudentProfileInput;

    @Field(() => UserUpsertWithoutStudentProfileInput, {nullable:true})
    @Type(() => UserUpsertWithoutStudentProfileInput)
    upsert?: UserUpsertWithoutStudentProfileInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutStudentProfileInput, {nullable:true})
    @Type(() => UserUpdateWithoutStudentProfileInput)
    update?: UserUpdateWithoutStudentProfileInput;
}
