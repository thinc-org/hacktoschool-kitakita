import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { InstructorProfileRelationFilter } from '../instructor-profile/instructor-profile-relation-filter.input';
import { StudentProfileListRelationFilter } from '../student-profile/student-profile-list-relation-filter.input';
import { VideoListRelationFilter } from '../video/video-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CourseWhereInput {

    @Field(() => [CourseWhereInput], {nullable:true})
    AND?: Array<CourseWhereInput>;

    @Field(() => [CourseWhereInput], {nullable:true})
    OR?: Array<CourseWhereInput>;

    @Field(() => [CourseWhereInput], {nullable:true})
    NOT?: Array<CourseWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => InstructorProfileRelationFilter, {nullable:true})
    instructor?: InstructorProfileRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    instructorId?: StringFilter;

    @Field(() => StudentProfileListRelationFilter, {nullable:true})
    students?: StudentProfileListRelationFilter;

    @Field(() => VideoListRelationFilter, {nullable:true})
    videos?: VideoListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
