import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutStudentProfileInput } from './user-create-without-student-profile.input';

@InputType()
export class UserCreateOrConnectWithoutStudentProfileInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutStudentProfileInput, {nullable:false})
    @Type(() => UserCreateWithoutStudentProfileInput)
    create!: UserCreateWithoutStudentProfileInput;
}
