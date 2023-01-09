import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialCreateInput } from './material-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMaterialArgs {

    @Field(() => MaterialCreateInput, {nullable:false})
    @Type(() => MaterialCreateInput)
    data!: MaterialCreateInput;
}
