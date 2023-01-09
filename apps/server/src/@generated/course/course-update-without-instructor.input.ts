import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { StudentProfileUpdateManyWithoutCoursesNestedInput } from '../student-profile/student-profile-update-many-without-courses-nested.input';
import { VideoUpdateManyWithoutCourseNestedInput } from '../video/video-update-many-without-course-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CourseUpdateWithoutInstructorInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StudentProfileUpdateManyWithoutCoursesNestedInput, {nullable:true})
    students?: StudentProfileUpdateManyWithoutCoursesNestedInput;

    @Field(() => VideoUpdateManyWithoutCourseNestedInput, {nullable:true})
    videos?: VideoUpdateManyWithoutCourseNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
