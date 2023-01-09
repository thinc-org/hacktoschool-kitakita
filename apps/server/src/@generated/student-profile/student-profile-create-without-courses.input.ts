import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutStudentProfileInput } from '../user/user-create-nested-one-without-student-profile.input';

@InputType()
export class StudentProfileCreateWithoutCoursesInput {

    @Field(() => UserCreateNestedOneWithoutStudentProfileInput, {nullable:false})
    user!: UserCreateNestedOneWithoutStudentProfileInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
