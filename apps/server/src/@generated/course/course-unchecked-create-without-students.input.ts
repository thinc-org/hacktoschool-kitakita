import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoUncheckedCreateNestedManyWithoutCourseInput } from '../video/video-unchecked-create-nested-many-without-course.input';

@InputType()
export class CourseUncheckedCreateWithoutStudentsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    instructorId!: string;

    @Field(() => VideoUncheckedCreateNestedManyWithoutCourseInput, {nullable:true})
    videos?: VideoUncheckedCreateNestedManyWithoutCourseInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
