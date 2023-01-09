import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateManyInstructorInput } from './course-create-many-instructor.input';
import { Type } from 'class-transformer';

@InputType()
export class CourseCreateManyInstructorInputEnvelope {

    @Field(() => [CourseCreateManyInstructorInput], {nullable:false})
    @Type(() => CourseCreateManyInstructorInput)
    data!: Array<CourseCreateManyInstructorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
