import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { StudentProfileUpdateOneWithoutUserNestedInput } from '../student-profile/student-profile-update-one-without-user-nested.input';
import { InstructorProfileUpdateOneWithoutUserNestedInput } from '../instructor-profile/instructor-profile-update-one-without-user-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    hashedPassword?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    online?: BoolFieldUpdateOperationsInput;

    @Field(() => StudentProfileUpdateOneWithoutUserNestedInput, {nullable:true})
    StudentProfile?: StudentProfileUpdateOneWithoutUserNestedInput;

    @Field(() => InstructorProfileUpdateOneWithoutUserNestedInput, {nullable:true})
    InstructorProfile?: InstructorProfileUpdateOneWithoutUserNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
