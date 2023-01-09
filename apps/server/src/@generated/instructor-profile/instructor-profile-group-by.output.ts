import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { InstructorProfileCountAggregate } from './instructor-profile-count-aggregate.output';
import { InstructorProfileMinAggregate } from './instructor-profile-min-aggregate.output';
import { InstructorProfileMaxAggregate } from './instructor-profile-max-aggregate.output';

@ObjectType()
export class InstructorProfileGroupBy {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => InstructorProfileCountAggregate, {nullable:true})
    _count?: InstructorProfileCountAggregate;

    @Field(() => InstructorProfileMinAggregate, {nullable:true})
    _min?: InstructorProfileMinAggregate;

    @Field(() => InstructorProfileMaxAggregate, {nullable:true})
    _max?: InstructorProfileMaxAggregate;
}
