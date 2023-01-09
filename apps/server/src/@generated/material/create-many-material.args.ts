import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialCreateManyInput } from './material-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMaterialArgs {

    @Field(() => [MaterialCreateManyInput], {nullable:false})
    @Type(() => MaterialCreateManyInput)
    data!: Array<MaterialCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
