import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StudentProfileCountAggregate } from './student-profile-count-aggregate.output';
import { StudentProfileMinAggregate } from './student-profile-min-aggregate.output';
import { StudentProfileMaxAggregate } from './student-profile-max-aggregate.output';

@ObjectType()
export class StudentProfileGroupBy {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => StudentProfileCountAggregate, {nullable:true})
    _count?: StudentProfileCountAggregate;

    @Field(() => StudentProfileMinAggregate, {nullable:true})
    _min?: StudentProfileMinAggregate;

    @Field(() => StudentProfileMaxAggregate, {nullable:true})
    _max?: StudentProfileMaxAggregate;
}
