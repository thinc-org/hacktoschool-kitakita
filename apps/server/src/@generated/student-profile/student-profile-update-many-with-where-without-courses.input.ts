import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentProfileScalarWhereInput } from './student-profile-scalar-where.input';
import { Type } from 'class-transformer';
import { StudentProfileUpdateManyMutationInput } from './student-profile-update-many-mutation.input';

@InputType()
export class StudentProfileUpdateManyWithWhereWithoutCoursesInput {

    @Field(() => StudentProfileScalarWhereInput, {nullable:false})
    @Type(() => StudentProfileScalarWhereInput)
    where!: StudentProfileScalarWhereInput;

    @Field(() => StudentProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => StudentProfileUpdateManyMutationInput)
    data!: StudentProfileUpdateManyMutationInput;
}
