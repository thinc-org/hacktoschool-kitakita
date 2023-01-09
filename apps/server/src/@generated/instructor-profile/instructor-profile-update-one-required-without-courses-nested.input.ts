import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstructorProfileCreateWithoutCoursesInput } from './instructor-profile-create-without-courses.input';
import { Type } from 'class-transformer';
import { InstructorProfileCreateOrConnectWithoutCoursesInput } from './instructor-profile-create-or-connect-without-courses.input';
import { InstructorProfileUpsertWithoutCoursesInput } from './instructor-profile-upsert-without-courses.input';
import { InstructorProfileWhereUniqueInput } from './instructor-profile-where-unique.input';
import { InstructorProfileUpdateWithoutCoursesInput } from './instructor-profile-update-without-courses.input';

@InputType()
export class InstructorProfileUpdateOneRequiredWithoutCoursesNestedInput {

    @Field(() => InstructorProfileCreateWithoutCoursesInput, {nullable:true})
    @Type(() => InstructorProfileCreateWithoutCoursesInput)
    create?: InstructorProfileCreateWithoutCoursesInput;

    @Field(() => InstructorProfileCreateOrConnectWithoutCoursesInput, {nullable:true})
    @Type(() => InstructorProfileCreateOrConnectWithoutCoursesInput)
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutCoursesInput;

    @Field(() => InstructorProfileUpsertWithoutCoursesInput, {nullable:true})
    @Type(() => InstructorProfileUpsertWithoutCoursesInput)
    upsert?: InstructorProfileUpsertWithoutCoursesInput;

    @Field(() => InstructorProfileWhereUniqueInput, {nullable:true})
    @Type(() => InstructorProfileWhereUniqueInput)
    connect?: InstructorProfileWhereUniqueInput;

    @Field(() => InstructorProfileUpdateWithoutCoursesInput, {nullable:true})
    @Type(() => InstructorProfileUpdateWithoutCoursesInput)
    update?: InstructorProfileUpdateWithoutCoursesInput;
}
