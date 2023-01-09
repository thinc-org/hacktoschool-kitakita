import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereInput } from './course-where.input';

@InputType()
export class CourseRelationFilter {

    @Field(() => CourseWhereInput, {nullable:true})
    is?: CourseWhereInput;

    @Field(() => CourseWhereInput, {nullable:true})
    isNot?: CourseWhereInput;
}
