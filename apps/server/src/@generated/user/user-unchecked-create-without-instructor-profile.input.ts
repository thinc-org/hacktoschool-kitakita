import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentProfileUncheckedCreateNestedOneWithoutUserInput } from '../student-profile/student-profile-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutInstructorProfileInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    hashedPassword!: string;

    @Field(() => Boolean, {nullable:true})
    online?: boolean;

    @Field(() => StudentProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    StudentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
