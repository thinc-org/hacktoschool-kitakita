import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VideoSumAggregate {

    @Field(() => Int, {nullable:true})
    duration?: number;
}
