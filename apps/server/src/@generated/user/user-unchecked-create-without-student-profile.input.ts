import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstructorProfileUncheckedCreateNestedOneWithoutUserInput } from '../instructor-profile/instructor-profile-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutStudentProfileInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    hashedPassword!: string;

    @Field(() => Boolean, {nullable:true})
    online?: boolean;

    @Field(() => InstructorProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    InstructorProfile?: InstructorProfileUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
