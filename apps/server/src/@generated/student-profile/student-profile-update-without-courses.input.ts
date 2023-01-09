import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutStudentProfileNestedInput } from '../user/user-update-one-required-without-student-profile-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class StudentProfileUpdateWithoutCoursesInput {

    @Field(() => UserUpdateOneRequiredWithoutStudentProfileNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
