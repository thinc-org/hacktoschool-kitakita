import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { InstructorProfile } from '../instructor-profile/instructor-profile.model';
import { StudentProfile } from '../student-profile/student-profile.model';
import { Video } from '../video/video.model';
import { CourseCount } from './course-count.output';

@ObjectType()
export class Course {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => InstructorProfile, {nullable:false})
    instructor?: InstructorProfile;

    @Field(() => String, {nullable:false})
    instructorId!: string;

    @Field(() => [StudentProfile], {nullable:true})
    students?: Array<StudentProfile>;

    @Field(() => [Video], {nullable:true})
    videos?: Array<Video>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => CourseCount, {nullable:false})
    _count?: CourseCount;
}
