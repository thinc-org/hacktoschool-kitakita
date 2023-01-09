import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutInstructorProfileInput } from '../user/user-create-nested-one-without-instructor-profile.input';
import { CourseCreateNestedManyWithoutInstructorInput } from '../course/course-create-nested-many-without-instructor.input';

@InputType()
export class InstructorProfileCreateInput {

    @Field(() => UserCreateNestedOneWithoutInstructorProfileInput, {nullable:false})
    user!: UserCreateNestedOneWithoutInstructorProfileInput;

    @Field(() => CourseCreateNestedManyWithoutInstructorInput, {nullable:true})
    courses?: CourseCreateNestedManyWithoutInstructorInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
