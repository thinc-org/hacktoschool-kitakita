import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { Type } from 'class-transformer';
import { VideoCreateInput } from './video-create.input';
import { VideoUpdateInput } from './video-update.input';

@ArgsType()
export class UpsertOneVideoArgs {

    @Field(() => VideoWhereUniqueInput, {nullable:false})
    @Type(() => VideoWhereUniqueInput)
    where!: VideoWhereUniqueInput;

    @Field(() => VideoCreateInput, {nullable:false})
    @Type(() => VideoCreateInput)
    create!: VideoCreateInput;

    @Field(() => VideoUpdateInput, {nullable:false})
    @Type(() => VideoUpdateInput)
    update!: VideoUpdateInput;
}
