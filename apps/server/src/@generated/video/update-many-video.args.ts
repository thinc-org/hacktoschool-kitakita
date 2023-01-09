import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoUpdateManyMutationInput } from './video-update-many-mutation.input';
import { Type } from 'class-transformer';
import { VideoWhereInput } from './video-where.input';

@ArgsType()
export class UpdateManyVideoArgs {

    @Field(() => VideoUpdateManyMutationInput, {nullable:false})
    @Type(() => VideoUpdateManyMutationInput)
    data!: VideoUpdateManyMutationInput;

    @Field(() => VideoWhereInput, {nullable:true})
    @Type(() => VideoWhereInput)
    where?: VideoWhereInput;
}
