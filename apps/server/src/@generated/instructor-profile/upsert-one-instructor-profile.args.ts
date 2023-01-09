import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstructorProfileWhereUniqueInput } from './instructor-profile-where-unique.input';
import { Type } from 'class-transformer';
import { InstructorProfileCreateInput } from './instructor-profile-create.input';
import { InstructorProfileUpdateInput } from './instructor-profile-update.input';

@ArgsType()
export class UpsertOneInstructorProfileArgs {

    @Field(() => InstructorProfileWhereUniqueInput, {nullable:false})
    @Type(() => InstructorProfileWhereUniqueInput)
    where!: InstructorProfileWhereUniqueInput;

    @Field(() => InstructorProfileCreateInput, {nullable:false})
    @Type(() => InstructorProfileCreateInput)
    create!: InstructorProfileCreateInput;

    @Field(() => InstructorProfileUpdateInput, {nullable:false})
    @Type(() => InstructorProfileUpdateInput)
    update!: InstructorProfileUpdateInput;
}
