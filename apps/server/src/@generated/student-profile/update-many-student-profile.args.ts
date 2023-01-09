import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentProfileUpdateManyMutationInput } from './student-profile-update-many-mutation.input';
import { Type } from 'class-transformer';
import { StudentProfileWhereInput } from './student-profile-where.input';

@ArgsType()
export class UpdateManyStudentProfileArgs {

    @Field(() => StudentProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => StudentProfileUpdateManyMutationInput)
    data!: StudentProfileUpdateManyMutationInput;

    @Field(() => StudentProfileWhereInput, {nullable:true})
    @Type(() => StudentProfileWhereInput)
    where?: StudentProfileWhereInput;
}
