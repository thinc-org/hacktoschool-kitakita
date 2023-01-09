import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneMaterialArgs {

    @Field(() => MaterialWhereUniqueInput, {nullable:false})
    @Type(() => MaterialWhereUniqueInput)
    where!: MaterialWhereUniqueInput;
}
