import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutInstructorInput } from './course-create-without-instructor.input';
import { Type } from 'class-transformer';
import { CourseCreateOrConnectWithoutInstructorInput } from './course-create-or-connect-without-instructor.input';
import { CourseCreateManyInstructorInputEnvelope } from './course-create-many-instructor-input-envelope.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';

@InputType()
export class CourseCreateNestedManyWithoutInstructorInput {

    @Field(() => [CourseCreateWithoutInstructorInput], {nullable:true})
    @Type(() => CourseCreateWithoutInstructorInput)
    create?: Array<CourseCreateWithoutInstructorInput>;

    @Field(() => [CourseCreateOrConnectWithoutInstructorInput], {nullable:true})
    @Type(() => CourseCreateOrConnectWithoutInstructorInput)
    connectOrCreate?: Array<CourseCreateOrConnectWithoutInstructorInput>;

    @Field(() => CourseCreateManyInstructorInputEnvelope, {nullable:true})
    @Type(() => CourseCreateManyInstructorInputEnvelope)
    createMany?: CourseCreateManyInstructorInputEnvelope;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    @Type(() => CourseWhereUniqueInput)
    connect?: Array<CourseWhereUniqueInput>;
}
