import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { Type } from 'class-transformer';
import { CourseUpdateWithoutInstructorInput } from './course-update-without-instructor.input';
import { CourseCreateWithoutInstructorInput } from './course-create-without-instructor.input';

@InputType()
export class CourseUpsertWithWhereUniqueWithoutInstructorInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    @Type(() => CourseWhereUniqueInput)
    where!: CourseWhereUniqueInput;

    @Field(() => CourseUpdateWithoutInstructorInput, {nullable:false})
    @Type(() => CourseUpdateWithoutInstructorInput)
    update!: CourseUpdateWithoutInstructorInput;

    @Field(() => CourseCreateWithoutInstructorInput, {nullable:false})
    @Type(() => CourseCreateWithoutInstructorInput)
    create!: CourseCreateWithoutInstructorInput;
}
