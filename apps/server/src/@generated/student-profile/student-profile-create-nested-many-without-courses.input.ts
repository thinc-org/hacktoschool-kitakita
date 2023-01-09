import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentProfileCreateWithoutCoursesInput } from './student-profile-create-without-courses.input';
import { Type } from 'class-transformer';
import { StudentProfileCreateOrConnectWithoutCoursesInput } from './student-profile-create-or-connect-without-courses.input';
import { StudentProfileWhereUniqueInput } from './student-profile-where-unique.input';

@InputType()
export class StudentProfileCreateNestedManyWithoutCoursesInput {

    @Field(() => [StudentProfileCreateWithoutCoursesInput], {nullable:true})
    @Type(() => StudentProfileCreateWithoutCoursesInput)
    create?: Array<StudentProfileCreateWithoutCoursesInput>;

    @Field(() => [StudentProfileCreateOrConnectWithoutCoursesInput], {nullable:true})
    @Type(() => StudentProfileCreateOrConnectWithoutCoursesInput)
    connectOrCreate?: Array<StudentProfileCreateOrConnectWithoutCoursesInput>;

    @Field(() => [StudentProfileWhereUniqueInput], {nullable:true})
    @Type(() => StudentProfileWhereUniqueInput)
    connect?: Array<StudentProfileWhereUniqueInput>;
}
