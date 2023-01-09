import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoWhereInput } from './video-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyVideoArgs {

    @Field(() => VideoWhereInput, {nullable:true})
    @Type(() => VideoWhereInput)
    where?: VideoWhereInput;
}
