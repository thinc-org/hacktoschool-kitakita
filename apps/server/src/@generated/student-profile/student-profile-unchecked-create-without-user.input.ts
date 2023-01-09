import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseUncheckedCreateNestedManyWithoutStudentsInput } from '../course/course-unchecked-create-nested-many-without-students.input';

@InputType()
export class StudentProfileUncheckedCreateWithoutUserInput {

    @Field(() => CourseUncheckedCreateNestedManyWithoutStudentsInput, {nullable:true})
    courses?: CourseUncheckedCreateNestedManyWithoutStudentsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
