import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseUpdateManyWithoutStudentsNestedInput } from '../course/course-update-many-without-students-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class StudentProfileUpdateWithoutUserInput {

    @Field(() => CourseUpdateManyWithoutStudentsNestedInput, {nullable:true})
    courses?: CourseUpdateManyWithoutStudentsNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
