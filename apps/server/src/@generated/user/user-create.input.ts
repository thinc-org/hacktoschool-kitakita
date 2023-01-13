import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentProfileCreateNestedOneWithoutUserInput } from '../student-profile/student-profile-create-nested-one-without-user.input';
import { InstructorProfileCreateNestedOneWithoutUserInput } from '../instructor-profile/instructor-profile-create-nested-one-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    hashedPassword!: string;

    @Field(() => StudentProfileCreateNestedOneWithoutUserInput, {nullable:true})
    StudentProfile?: StudentProfileCreateNestedOneWithoutUserInput;

    @Field(() => InstructorProfileCreateNestedOneWithoutUserInput, {nullable:true})
    InstructorProfile?: InstructorProfileCreateNestedOneWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
