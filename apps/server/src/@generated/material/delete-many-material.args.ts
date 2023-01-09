import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialWhereInput } from './material-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMaterialArgs {

    @Field(() => MaterialWhereInput, {nullable:true})
    @Type(() => MaterialWhereInput)
    where?: MaterialWhereInput;
}
