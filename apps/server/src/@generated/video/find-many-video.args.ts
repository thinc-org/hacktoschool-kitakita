import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoWhereInput } from './video-where.input';
import { Type } from 'class-transformer';
import { VideoOrderByWithRelationInput } from './video-order-by-with-relation.input';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VideoScalarFieldEnum } from './video-scalar-field.enum';

@ArgsType()
export class FindManyVideoArgs {

    @Field(() => VideoWhereInput, {nullable:true})
    @Type(() => VideoWhereInput)
    where?: VideoWhereInput;

    @Field(() => [VideoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VideoOrderByWithRelationInput>;

    @Field(() => VideoWhereUniqueInput, {nullable:true})
    cursor?: VideoWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VideoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VideoScalarFieldEnum>;
}
