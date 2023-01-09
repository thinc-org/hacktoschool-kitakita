import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutStudentsInput } from './course-create-without-students.input';
import { Type } from 'class-transformer';
import { CourseCreateOrConnectWithoutStudentsInput } from './course-create-or-connect-without-students.input';
import { CourseUpsertWithWhereUniqueWithoutStudentsInput } from './course-upsert-with-where-unique-without-students.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithWhereUniqueWithoutStudentsInput } from './course-update-with-where-unique-without-students.input';
import { CourseUpdateManyWithWhereWithoutStudentsInput } from './course-update-many-with-where-without-students.input';
import { CourseScalarWhereInput } from './course-scalar-where.input';

@InputType()
export class CourseUpdateManyWithoutStudentsNestedInput {

    @Field(() => [CourseCreateWithoutStudentsInput], {nullable:true})
    @Type(() => CourseCreateWithoutStudentsInput)
    create?: Array<CourseCreateWithoutStudentsInput>;

    @Field(() => [CourseCreateOrConnectWithoutStudentsInput], {nullable:true})
    @Type(() => CourseCreateOrConnectWithoutStudentsInput)
    connectOrCreate?: Array<CourseCreateOrConnectWithoutStudentsInput>;

    @Field(() => [CourseUpsertWithWhereUniqueWithoutStudentsInput], {nullable:true})
    @Type(() => CourseUpsertWithWhereUniqueWithoutStudentsInput)
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutStudentsInput>;

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

    @Field(() => [CourseUpdateWithWhereUniqueWithoutStudentsInput], {nullable:true})
    @Type(() => CourseUpdateWithWhereUniqueWithoutStudentsInput)
    update?: Array<CourseUpdateWithWhereUniqueWithoutStudentsInput>;

    @Field(() => [CourseUpdateManyWithWhereWithoutStudentsInput], {nullable:true})
    @Type(() => CourseUpdateManyWithWhereWithoutStudentsInput)
    updateMany?: Array<CourseUpdateManyWithWhereWithoutStudentsInput>;

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    @Type(() => CourseScalarWhereInput)
    deleteMany?: Array<CourseScalarWhereInput>;
}
