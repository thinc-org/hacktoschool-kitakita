import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { Type } from 'class-transformer';
import { CourseCreateWithoutStudentsInput } from './course-create-without-students.input';

@InputType()
export class CourseCreateOrConnectWithoutStudentsInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    @Type(() => CourseWhereUniqueInput)
    where!: CourseWhereUniqueInput;

    @Field(() => CourseCreateWithoutStudentsInput, {nullable:false})
    @Type(() => CourseCreateWithoutStudentsInput)
    create!: CourseCreateWithoutStudentsInput;
}
