import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CourseCountAggregate } from './course-count-aggregate.output';
import { CourseMinAggregate } from './course-min-aggregate.output';
import { CourseMaxAggregate } from './course-max-aggregate.output';

@ObjectType()
export class AggregateCourse {

    @Field(() => CourseCountAggregate, {nullable:true})
    _count?: CourseCountAggregate;

    @Field(() => CourseMinAggregate, {nullable:true})
    _min?: CourseMinAggregate;

    @Field(() => CourseMaxAggregate, {nullable:true})
    _max?: CourseMaxAggregate;
}
