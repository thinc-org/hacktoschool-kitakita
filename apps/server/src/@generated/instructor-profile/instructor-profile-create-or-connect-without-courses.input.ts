import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstructorProfileWhereUniqueInput } from './instructor-profile-where-unique.input';
import { Type } from 'class-transformer';
import { InstructorProfileCreateWithoutCoursesInput } from './instructor-profile-create-without-courses.input';

@InputType()
export class InstructorProfileCreateOrConnectWithoutCoursesInput {

    @Field(() => InstructorProfileWhereUniqueInput, {nullable:false})
    @Type(() => InstructorProfileWhereUniqueInput)
    where!: InstructorProfileWhereUniqueInput;

    @Field(() => InstructorProfileCreateWithoutCoursesInput, {nullable:false})
    @Type(() => InstructorProfileCreateWithoutCoursesInput)
    create!: InstructorProfileCreateWithoutCoursesInput;
}
