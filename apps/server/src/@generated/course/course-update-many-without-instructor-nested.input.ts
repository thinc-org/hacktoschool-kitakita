import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutInstructorInput } from './course-create-without-instructor.input';
import { Type } from 'class-transformer';
import { CourseCreateOrConnectWithoutInstructorInput } from './course-create-or-connect-without-instructor.input';
import { CourseUpsertWithWhereUniqueWithoutInstructorInput } from './course-upsert-with-where-unique-without-instructor.input';
import { CourseCreateManyInstructorInputEnvelope } from './course-create-many-instructor-input-envelope.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithWhereUniqueWithoutInstructorInput } from './course-update-with-where-unique-without-instructor.input';
import { CourseUpdateManyWithWhereWithoutInstructorInput } from './course-update-many-with-where-without-instructor.input';
import { CourseScalarWhereInput } from './course-scalar-where.input';

@InputType()
export class CourseUpdateManyWithoutInstructorNestedInput {

    @Field(() => [CourseCreateWithoutInstructorInput], {nullable:true})
    @Type(() => CourseCreateWithoutInstructorInput)
    create?: Array<CourseCreateWithoutInstructorInput>;

    @Field(() => [CourseCreateOrConnectWithoutInstructorInput], {nullable:true})
    @Type(() => CourseCreateOrConnectWithoutInstructorInput)
    connectOrCreate?: Array<CourseCreateOrConnectWithoutInstructorInput>;

    @Field(() => [CourseUpsertWithWhereUniqueWithoutInstructorInput], {nullable:true})
    @Type(() => CourseUpsertWithWhereUniqueWithoutInstructorInput)
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutInstructorInput>;

    @Field(() => CourseCreateManyInstructorInputEnvelope, {nullable:true})
    @Type(() => CourseCreateManyInstructorInputEnvelope)
    createMany?: CourseCreateManyInstructorInputEnvelope;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    @Type(() => CourseWhereUniqueInput)
    set?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    @Type(() => CourseWhereUniqueInput)
    disconnect?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    @Type(() => CourseWhereUniqueInput)
    delete?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    @Type(() => CourseWhereUniqueInput)
    connect?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseUpdateWithWhereUniqueWithoutInstructorInput], {nullable:true})
    @Type(() => CourseUpdateWithWhereUniqueWithoutInstructorInput)
    update?: Array<CourseUpdateWithWhereUniqueWithoutInstructorInput>;

    @Field(() => [CourseUpdateManyWithWhereWithoutInstructorInput], {nullable:true})
    @Type(() => CourseUpdateManyWithWhereWithoutInstructorInput)
    updateMany?: Array<CourseUpdateManyWithWhereWithoutInstructorInput>;

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    @Type(() => CourseScalarWhereInput)
    deleteMany?: Array<CourseScalarWhereInput>;
}
