import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CourseCreateNestedOneWithoutVideosInput } from '../course/course-create-nested-one-without-videos.input';

@InputType()
export class VideoCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    src!: string;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => CourseCreateNestedOneWithoutVideosInput, {nullable:false})
    course!: CourseCreateNestedOneWithoutVideosInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
