import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { Type } from 'class-transformer';
import { CourseUpdateWithoutStudentsInput } from './course-update-without-students.input';
import { CourseCreateWithoutStudentsInput } from './course-create-without-students.input';

@InputType()
export class CourseUpsertWithWhereUniqueWithoutStudentsInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    @Type(() => CourseWhereUniqueInput)
    where!: CourseWhereUniqueInput;

    @Field(() => CourseUpdateWithoutStudentsInput, {nullable:false})
    @Type(() => CourseUpdateWithoutStudentsInput)
    update!: CourseUpdateWithoutStudentsInput;

    @Field(() => CourseCreateWithoutStudentsInput, {nullable:false})
    @Type(() => CourseCreateWithoutStudentsInput)
    create!: CourseCreateWithoutStudentsInput;
}
