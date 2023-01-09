import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstructorProfileUpdateWithoutCoursesInput } from './instructor-profile-update-without-courses.input';
import { Type } from 'class-transformer';
import { InstructorProfileCreateWithoutCoursesInput } from './instructor-profile-create-without-courses.input';

@InputType()
export class InstructorProfileUpsertWithoutCoursesInput {

    @Field(() => InstructorProfileUpdateWithoutCoursesInput, {nullable:false})
    @Type(() => InstructorProfileUpdateWithoutCoursesInput)
    update!: InstructorProfileUpdateWithoutCoursesInput;

    @Field(() => InstructorProfileCreateWithoutCoursesInput, {nullable:false})
    @Type(() => InstructorProfileCreateWithoutCoursesInput)
    create!: InstructorProfileCreateWithoutCoursesInput;
}
