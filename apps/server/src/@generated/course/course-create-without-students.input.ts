import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstructorProfileCreateNestedOneWithoutCoursesInput } from '../instructor-profile/instructor-profile-create-nested-one-without-courses.input';
import { VideoCreateNestedManyWithoutCourseInput } from '../video/video-create-nested-many-without-course.input';

@InputType()
export class CourseCreateWithoutStudentsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => InstructorProfileCreateNestedOneWithoutCoursesInput, {nullable:false})
    instructor!: InstructorProfileCreateNestedOneWithoutCoursesInput;

    @Field(() => VideoCreateNestedManyWithoutCourseInput, {nullable:true})
    videos?: VideoCreateNestedManyWithoutCourseInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
