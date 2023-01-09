import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { CourseListRelationFilter } from '../course/course-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class StudentProfileWhereInput {

    @Field(() => [StudentProfileWhereInput], {nullable:true})
    AND?: Array<StudentProfileWhereInput>;

    @Field(() => [StudentProfileWhereInput], {nullable:true})
    OR?: Array<StudentProfileWhereInput>;

    @Field(() => [StudentProfileWhereInput], {nullable:true})
    NOT?: Array<StudentProfileWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => CourseListRelationFilter, {nullable:true})
    courses?: CourseListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
