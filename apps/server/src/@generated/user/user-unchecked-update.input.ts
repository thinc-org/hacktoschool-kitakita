import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { StudentProfileUncheckedUpdateOneWithoutUserNestedInput } from '../student-profile/student-profile-unchecked-update-one-without-user-nested.input';
import { InstructorProfileUncheckedUpdateOneWithoutUserNestedInput } from '../instructor-profile/instructor-profile-unchecked-update-one-without-user-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    hashedPassword?: StringFieldUpdateOperationsInput;

    @Field(() => StudentProfileUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    StudentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => InstructorProfileUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    InstructorProfile?: InstructorProfileUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
