import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentProfileWhereUniqueInput } from './student-profile-where-unique.input';
import { Type } from 'class-transformer';
import { StudentProfileCreateWithoutCoursesInput } from './student-profile-create-without-courses.input';

@InputType()
export class StudentProfileCreateOrConnectWithoutCoursesInput {

    @Field(() => StudentProfileWhereUniqueInput, {nullable:false})
    @Type(() => StudentProfileWhereUniqueInput)
    where!: StudentProfileWhereUniqueInput;

    @Field(() => StudentProfileCreateWithoutCoursesInput, {nullable:false})
    @Type(() => StudentProfileCreateWithoutCoursesInput)
    create!: StudentProfileCreateWithoutCoursesInput;
}
