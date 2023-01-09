import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { Type } from 'class-transformer';
import { CourseUpdateWithoutInstructorInput } from './course-update-without-instructor.input';

@InputType()
export class CourseUpdateWithWhereUniqueWithoutInstructorInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    @Type(() => CourseWhereUniqueInput)
    where!: CourseWhereUniqueInput;

    @Field(() => CourseUpdateWithoutInstructorInput, {nullable:false})
    @Type(() => CourseUpdateWithoutInstructorInput)
    data!: CourseUpdateWithoutInstructorInput;
}
