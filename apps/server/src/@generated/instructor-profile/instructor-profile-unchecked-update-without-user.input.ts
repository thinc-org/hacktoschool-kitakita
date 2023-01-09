import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseUncheckedUpdateManyWithoutInstructorNestedInput } from '../course/course-unchecked-update-many-without-instructor-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class InstructorProfileUncheckedUpdateWithoutUserInput {

    @Field(() => CourseUncheckedUpdateManyWithoutInstructorNestedInput, {nullable:true})
    courses?: CourseUncheckedUpdateManyWithoutInstructorNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
