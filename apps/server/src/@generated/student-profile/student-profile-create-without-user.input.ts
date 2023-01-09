import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateNestedManyWithoutStudentsInput } from '../course/course-create-nested-many-without-students.input';

@InputType()
export class StudentProfileCreateWithoutUserInput {

    @Field(() => CourseCreateNestedManyWithoutStudentsInput, {nullable:true})
    courses?: CourseCreateNestedManyWithoutStudentsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
