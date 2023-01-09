import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CourseCountAggregate } from './course-count-aggregate.output';
import { CourseMinAggregate } from './course-min-aggregate.output';
import { CourseMaxAggregate } from './course-max-aggregate.output';

@ObjectType()
export class CourseGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    instructorId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => CourseCountAggregate, {nullable:true})
    _count?: CourseCountAggregate;

    @Field(() => CourseMinAggregate, {nullable:true})
    _min?: CourseMinAggregate;

    @Field(() => CourseMaxAggregate, {nullable:true})
    _max?: CourseMaxAggregate;
}
