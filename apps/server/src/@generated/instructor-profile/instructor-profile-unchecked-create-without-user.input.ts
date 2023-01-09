import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseUncheckedCreateNestedManyWithoutInstructorInput } from '../course/course-unchecked-create-nested-many-without-instructor.input';

@InputType()
export class InstructorProfileUncheckedCreateWithoutUserInput {

    @Field(() => CourseUncheckedCreateNestedManyWithoutInstructorInput, {nullable:true})
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
