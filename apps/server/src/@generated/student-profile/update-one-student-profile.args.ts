import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentProfileUpdateInput } from './student-profile-update.input';
import { Type } from 'class-transformer';
import { StudentProfileWhereUniqueInput } from './student-profile-where-unique.input';

@ArgsType()
export class UpdateOneStudentProfileArgs {

    @Field(() => StudentProfileUpdateInput, {nullable:false})
    @Type(() => StudentProfileUpdateInput)
    data!: StudentProfileUpdateInput;

    @Field(() => StudentProfileWhereUniqueInput, {nullable:false})
    @Type(() => StudentProfileWhereUniqueInput)
    where!: StudentProfileWhereUniqueInput;
}
