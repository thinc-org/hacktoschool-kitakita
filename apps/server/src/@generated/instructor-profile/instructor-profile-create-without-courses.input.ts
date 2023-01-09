import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutInstructorProfileInput } from '../user/user-create-nested-one-without-instructor-profile.input';

@InputType()
export class InstructorProfileCreateWithoutCoursesInput {

    @Field(() => UserCreateNestedOneWithoutInstructorProfileInput, {nullable:false})
    user!: UserCreateNestedOneWithoutInstructorProfileInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
