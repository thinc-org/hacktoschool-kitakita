import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoUpdateInput } from './video-update.input';
import { Type } from 'class-transformer';
import { VideoWhereUniqueInput } from './video-where-unique.input';

@ArgsType()
export class UpdateOneVideoArgs {

    @Field(() => VideoUpdateInput, {nullable:false})
    @Type(() => VideoUpdateInput)
    data!: VideoUpdateInput;

    @Field(() => VideoWhereUniqueInput, {nullable:false})
    @Type(() => VideoWhereUniqueInput)
    where!: VideoWhereUniqueInput;
}
