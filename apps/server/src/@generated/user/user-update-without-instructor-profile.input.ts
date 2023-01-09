import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumUserRoleFieldUpdateOperationsInput } from '../prisma/enum-user-role-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { StudentProfileUpdateOneWithoutUserNestedInput } from '../student-profile/student-profile-update-one-without-user-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UserUpdateWithoutInstructorProfileInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumUserRoleFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    online?: BoolFieldUpdateOperationsInput;

    @Field(() => StudentProfileUpdateOneWithoutUserNestedInput, {nullable:true})
    StudentProfile?: StudentProfileUpdateOneWithoutUserNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
