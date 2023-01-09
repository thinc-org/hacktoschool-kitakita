import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstructorProfileCreateNestedOneWithoutCoursesInput } from '../instructor-profile/instructor-profile-create-nested-one-without-courses.input';
import { StudentProfileCreateNestedManyWithoutCoursesInput } from '../student-profile/student-profile-create-nested-many-without-courses.input';

@InputType()
export class CourseCreateWithoutVideosInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => InstructorProfileCreateNestedOneWithoutCoursesInput, {nullable:false})
    instructor!: InstructorProfileCreateNestedOneWithoutCoursesInput;

    @Field(() => StudentProfileCreateNestedManyWithoutCoursesInput, {nullable:true})
    students?: StudentProfileCreateNestedManyWithoutCoursesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
