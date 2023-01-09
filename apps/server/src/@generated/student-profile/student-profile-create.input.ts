import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutStudentProfileInput } from '../user/user-create-nested-one-without-student-profile.input';
import { CourseCreateNestedManyWithoutStudentsInput } from '../course/course-create-nested-many-without-students.input';

@InputType()
export class StudentProfileCreateInput {

    @Field(() => UserCreateNestedOneWithoutStudentProfileInput, {nullable:false})
    user!: UserCreateNestedOneWithoutStudentProfileInput;

    @Field(() => CourseCreateNestedManyWithoutStudentsInput, {nullable:true})
    courses?: CourseCreateNestedManyWithoutStudentsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
