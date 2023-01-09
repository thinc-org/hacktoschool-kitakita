import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Course } from '../course/course.model';
import { InstructorProfileCount } from './instructor-profile-count.output';

@ObjectType()
export class InstructorProfile {

    @Field(() => ID, {nullable:false})
    userId!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [Course], {nullable:true})
    courses?: Array<Course>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => InstructorProfileCount, {nullable:false})
    _count?: InstructorProfileCount;
}
