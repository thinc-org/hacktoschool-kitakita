import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialUpdateManyMutationInput } from './material-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MaterialWhereInput } from './material-where.input';

@ArgsType()
export class UpdateManyMaterialArgs {

    @Field(() => MaterialUpdateManyMutationInput, {nullable:false})
    @Type(() => MaterialUpdateManyMutationInput)
    data!: MaterialUpdateManyMutationInput;

    @Field(() => MaterialWhereInput, {nullable:true})
    @Type(() => MaterialWhereInput)
    where?: MaterialWhereInput;
}
