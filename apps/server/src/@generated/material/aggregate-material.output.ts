import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MaterialCountAggregate } from './material-count-aggregate.output';
import { MaterialMinAggregate } from './material-min-aggregate.output';
import { MaterialMaxAggregate } from './material-max-aggregate.output';

@ObjectType()
export class AggregateMaterial {

    @Field(() => MaterialCountAggregate, {nullable:true})
    _count?: MaterialCountAggregate;

    @Field(() => MaterialMinAggregate, {nullable:true})
    _min?: MaterialMinAggregate;

    @Field(() => MaterialMaxAggregate, {nullable:true})
    _max?: MaterialMaxAggregate;
}
