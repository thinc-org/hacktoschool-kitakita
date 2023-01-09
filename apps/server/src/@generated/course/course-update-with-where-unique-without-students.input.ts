import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { Type } from 'class-transformer';
import { CourseUpdateWithoutStudentsInput } from './course-update-without-students.input';

@InputType()
export class CourseUpdateWithWhereUniqueWithoutStudentsInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    @Type(() => CourseWhereUniqueInput)
    where!: CourseWhereUniqueInput;

    @Field(() => CourseUpdateWithoutStudentsInput, {nullable:false})
    @Type(() => CourseUpdateWithoutStudentsInput)
    data!: CourseUpdateWithoutStudentsInput;
}
