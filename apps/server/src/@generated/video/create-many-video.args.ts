import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoCreateManyInput } from './video-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVideoArgs {

    @Field(() => [VideoCreateManyInput], {nullable:false})
    @Type(() => VideoCreateManyInput)
    data!: Array<VideoCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
