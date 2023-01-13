import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentProfileCreateNestedOneWithoutUserInput } from '../student-profile/student-profile-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutInstructorProfileInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    hashedPassword!: string;

    @Field(() => StudentProfileCreateNestedOneWithoutUserInput, {nullable:true})
    StudentProfile?: StudentProfileCreateNestedOneWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
