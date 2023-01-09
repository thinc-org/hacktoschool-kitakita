import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { StudentProfileUncheckedUpdateManyWithoutCoursesNestedInput } from '../student-profile/student-profile-unchecked-update-many-without-courses-nested.input';
import { VideoUncheckedUpdateManyWithoutCourseNestedInput } from '../video/video-unchecked-update-many-without-course-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CourseUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    instructorId?: StringFieldUpdateOperationsInput;

    @Field(() => StudentProfileUncheckedUpdateManyWithoutCoursesNestedInput, {nullable:true})
    students?: StudentProfileUncheckedUpdateManyWithoutCoursesNestedInput;

    @Field(() => VideoUncheckedUpdateManyWithoutCourseNestedInput, {nullable:true})
    videos?: VideoUncheckedUpdateManyWithoutCourseNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
