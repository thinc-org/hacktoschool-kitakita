import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { InstructorProfileCountAggregate } from './instructor-profile-count-aggregate.output';
import { InstructorProfileMinAggregate } from './instructor-profile-min-aggregate.output';
import { InstructorProfileMaxAggregate } from './instructor-profile-max-aggregate.output';

@ObjectType()
export class AggregateInstructorProfile {

    @Field(() => InstructorProfileCountAggregate, {nullable:true})
    _count?: InstructorProfileCountAggregate;

    @Field(() => InstructorProfileMinAggregate, {nullable:true})
    _min?: InstructorProfileMinAggregate;

    @Field(() => InstructorProfileMaxAggregate, {nullable:true})
    _max?: InstructorProfileMaxAggregate;
}
