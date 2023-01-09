import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstructorProfileCreateWithoutCoursesInput } from './instructor-profile-create-without-courses.input';
import { Type } from 'class-transformer';
import { InstructorProfileCreateOrConnectWithoutCoursesInput } from './instructor-profile-create-or-connect-without-courses.input';
import { InstructorProfileWhereUniqueInput } from './instructor-profile-where-unique.input';

@InputType()
export class InstructorProfileCreateNestedOneWithoutCoursesInput {

    @Field(() => InstructorProfileCreateWithoutCoursesInput, {nullable:true})
    @Type(() => InstructorProfileCreateWithoutCoursesInput)
    create?: InstructorProfileCreateWithoutCoursesInput;

    @Field(() => InstructorProfileCreateOrConnectWithoutCoursesInput, {nullable:true})
    @Type(() => InstructorProfileCreateOrConnectWithoutCoursesInput)
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutCoursesInput;

    @Field(() => InstructorProfileWhereUniqueInput, {nullable:true})
    @Type(() => InstructorProfileWhereUniqueInput)
    connect?: InstructorProfileWhereUniqueInput;
}
