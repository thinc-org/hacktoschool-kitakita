import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { InstructorProfileUpdateOneRequiredWithoutCoursesNestedInput } from '../instructor-profile/instructor-profile-update-one-required-without-courses-nested.input';
import { StudentProfileUpdateManyWithoutCoursesNestedInput } from '../student-profile/student-profile-update-many-without-courses-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CourseUpdateWithoutVideosInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => InstructorProfileUpdateOneRequiredWithoutCoursesNestedInput, {nullable:true})
    instructor?: InstructorProfileUpdateOneRequiredWithoutCoursesNestedInput;

    @Field(() => StudentProfileUpdateManyWithoutCoursesNestedInput, {nullable:true})
    students?: StudentProfileUpdateManyWithoutCoursesNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
