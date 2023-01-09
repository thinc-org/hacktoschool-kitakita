import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentProfileCreateWithoutCoursesInput } from './student-profile-create-without-courses.input';
import { Type } from 'class-transformer';
import { StudentProfileCreateOrConnectWithoutCoursesInput } from './student-profile-create-or-connect-without-courses.input';
import { StudentProfileUpsertWithWhereUniqueWithoutCoursesInput } from './student-profile-upsert-with-where-unique-without-courses.input';
import { StudentProfileWhereUniqueInput } from './student-profile-where-unique.input';
import { StudentProfileUpdateWithWhereUniqueWithoutCoursesInput } from './student-profile-update-with-where-unique-without-courses.input';
import { StudentProfileUpdateManyWithWhereWithoutCoursesInput } from './student-profile-update-many-with-where-without-courses.input';
import { StudentProfileScalarWhereInput } from './student-profile-scalar-where.input';

@InputType()
export class StudentProfileUpdateManyWithoutCoursesNestedInput {

    @Field(() => [StudentProfileCreateWithoutCoursesInput], {nullable:true})
    @Type(() => StudentProfileCreateWithoutCoursesInput)
    create?: Array<StudentProfileCreateWithoutCoursesInput>;

    @Field(() => [StudentProfileCreateOrConnectWithoutCoursesInput], {nullable:true})
    @Type(() => StudentProfileCreateOrConnectWithoutCoursesInput)
    connectOrCreate?: Array<StudentProfileCreateOrConnectWithoutCoursesInput>;

    @Field(() => [StudentProfileUpsertWithWhereUniqueWithoutCoursesInput], {nullable:true})
    @Type(() => StudentProfileUpsertWithWhereUniqueWithoutCoursesInput)
    upsert?: Array<StudentProfileUpsertWithWhereUniqueWithoutCoursesInput>;

    @Field(() => [StudentProfileWhereUniqueInput], {nullable:true})
    @Type(() => StudentProfileWhereUniqueInput)
    set?: Array<StudentProfileWhereUniqueInput>;

    @Field(() => [StudentProfileWhereUniqueInput], {nullable:true})
    @Type(() => StudentProfileWhereUniqueInput)
    disconnect?: Array<StudentProfileWhereUniqueInput>;

    @Field(() => [StudentProfileWhereUniqueInput], {nullable:true})
    @Type(() => StudentProfileWhereUniqueInput)
    delete?: Array<StudentProfileWhereUniqueInput>;

    @Field(() => [StudentProfileWhereUniqueInput], {nullable:true})
    @Type(() => StudentProfileWhereUniqueInput)
    connect?: Array<StudentProfileWhereUniqueInput>;

    @Field(() => [StudentProfileUpdateWithWhereUniqueWithoutCoursesInput], {nullable:true})
    @Type(() => StudentProfileUpdateWithWhereUniqueWithoutCoursesInput)
    update?: Array<StudentProfileUpdateWithWhereUniqueWithoutCoursesInput>;

    @Field(() => [StudentProfileUpdateManyWithWhereWithoutCoursesInput], {nullable:true})
    @Type(() => StudentProfileUpdateManyWithWhereWithoutCoursesInput)
    updateMany?: Array<StudentProfileUpdateManyWithWhereWithoutCoursesInput>;

    @Field(() => [StudentProfileScalarWhereInput], {nullable:true})
    @Type(() => StudentProfileScalarWhereInput)
    deleteMany?: Array<StudentProfileScalarWhereInput>;
}
