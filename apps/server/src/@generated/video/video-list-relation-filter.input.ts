import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoWhereInput } from './video-where.input';

@InputType()
export class VideoListRelationFilter {

    @Field(() => VideoWhereInput, {nullable:true})
    every?: VideoWhereInput;

    @Field(() => VideoWhereInput, {nullable:true})
    some?: VideoWhereInput;

    @Field(() => VideoWhereInput, {nullable:true})
    none?: VideoWhereInput;
}
