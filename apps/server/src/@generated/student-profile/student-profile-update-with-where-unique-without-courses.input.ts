import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentProfileWhereUniqueInput } from './student-profile-where-unique.input';
import { Type } from 'class-transformer';
import { StudentProfileUpdateWithoutCoursesInput } from './student-profile-update-without-courses.input';

@InputType()
export class StudentProfileUpdateWithWhereUniqueWithoutCoursesInput {

    @Field(() => StudentProfileWhereUniqueInput, {nullable:false})
    @Type(() => StudentProfileWhereUniqueInput)
    where!: StudentProfileWhereUniqueInput;

    @Field(() => StudentProfileUpdateWithoutCoursesInput, {nullable:false})
    @Type(() => StudentProfileUpdateWithoutCoursesInput)
    data!: StudentProfileUpdateWithoutCoursesInput;
}
