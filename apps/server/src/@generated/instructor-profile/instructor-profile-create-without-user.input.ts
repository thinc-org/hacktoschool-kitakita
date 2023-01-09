import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateNestedManyWithoutInstructorInput } from '../course/course-create-nested-many-without-instructor.input';

@InputType()
export class InstructorProfileCreateWithoutUserInput {

    @Field(() => CourseCreateNestedManyWithoutInstructorInput, {nullable:true})
    courses?: CourseCreateNestedManyWithoutInstructorInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
