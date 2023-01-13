import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { StudentProfile } from '../student-profile/student-profile.model';
import { InstructorProfile } from '../instructor-profile/instructor-profile.model';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    hashedPassword!: string;

    @Field(() => StudentProfile, {nullable:true})
    StudentProfile?: StudentProfile | null;

    @Field(() => InstructorProfile, {nullable:true})
    InstructorProfile?: InstructorProfile | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
