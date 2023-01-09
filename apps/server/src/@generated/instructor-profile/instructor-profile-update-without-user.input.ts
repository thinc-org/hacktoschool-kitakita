import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseUpdateManyWithoutInstructorNestedInput } from '../course/course-update-many-without-instructor-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class InstructorProfileUpdateWithoutUserInput {

    @Field(() => CourseUpdateManyWithoutInstructorNestedInput, {nullable:true})
    courses?: CourseUpdateManyWithoutInstructorNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
