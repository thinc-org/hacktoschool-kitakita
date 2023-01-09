import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutStudentsInput } from './course-create-without-students.input';
import { Type } from 'class-transformer';
import { CourseCreateOrConnectWithoutStudentsInput } from './course-create-or-connect-without-students.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';

@InputType()
export class CourseUncheckedCreateNestedManyWithoutStudentsInput {

    @Field(() => [CourseCreateWithoutStudentsInput], {nullable:true})
    @Type(() => CourseCreateWithoutStudentsInput)
    create?: Array<CourseCreateWithoutStudentsInput>;

    @Field(() => [CourseCreateOrConnectWithoutStudentsInput], {nullable:true})
    @Type(() => CourseCreateOrConnectWithoutStudentsInput)
    connectOrCreate?: Array<CourseCreateOrConnectWithoutStudentsInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    @Type(() => CourseWhereUniqueInput)
    connect?: Array<CourseWhereUniqueInput>;
}
