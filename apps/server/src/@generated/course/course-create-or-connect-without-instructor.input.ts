import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { Type } from 'class-transformer';
import { CourseCreateWithoutInstructorInput } from './course-create-without-instructor.input';

@InputType()
export class CourseCreateOrConnectWithoutInstructorInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    @Type(() => CourseWhereUniqueInput)
    where!: CourseWhereUniqueInput;

    @Field(() => CourseCreateWithoutInstructorInput, {nullable:false})
    @Type(() => CourseCreateWithoutInstructorInput)
    create!: CourseCreateWithoutInstructorInput;
}
