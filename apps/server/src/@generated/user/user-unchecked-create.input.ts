import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { StudentProfileUncheckedCreateNestedOneWithoutUserInput } from '../student-profile/student-profile-unchecked-create-nested-one-without-user.input';
import { InstructorProfileUncheckedCreateNestedOneWithoutUserInput } from '../instructor-profile/instructor-profile-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => UserRole, {nullable:false})
    role!: keyof typeof UserRole;

    @Field(() => Boolean, {nullable:true})
    online?: boolean;

    @Field(() => StudentProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    StudentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => InstructorProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    InstructorProfile?: InstructorProfileUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
