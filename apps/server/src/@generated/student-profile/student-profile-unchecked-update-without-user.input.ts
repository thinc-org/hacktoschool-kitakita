import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseUncheckedUpdateManyWithoutStudentsNestedInput } from '../course/course-unchecked-update-many-without-students-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class StudentProfileUncheckedUpdateWithoutUserInput {

    @Field(() => CourseUncheckedUpdateManyWithoutStudentsNestedInput, {nullable:true})
    courses?: CourseUncheckedUpdateManyWithoutStudentsNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
