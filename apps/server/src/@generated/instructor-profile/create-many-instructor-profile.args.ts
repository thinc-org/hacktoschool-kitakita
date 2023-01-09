import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstructorProfileCreateManyInput } from './instructor-profile-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyInstructorProfileArgs {

    @Field(() => [InstructorProfileCreateManyInput], {nullable:false})
    @Type(() => InstructorProfileCreateManyInput)
    data!: Array<InstructorProfileCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
