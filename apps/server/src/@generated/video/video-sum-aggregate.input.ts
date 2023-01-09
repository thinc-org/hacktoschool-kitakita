import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VideoSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    duration?: true;
}
