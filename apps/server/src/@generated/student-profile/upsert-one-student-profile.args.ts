import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentProfileWhereUniqueInput } from './student-profile-where-unique.input';
import { Type } from 'class-transformer';
import { StudentProfileCreateInput } from './student-profile-create.input';
import { StudentProfileUpdateInput } from './student-profile-update.input';

@ArgsType()
export class UpsertOneStudentProfileArgs {

    @Field(() => StudentProfileWhereUniqueInput, {nullable:false})
    @Type(() => StudentProfileWhereUniqueInput)
    where!: StudentProfileWhereUniqueInput;

    @Field(() => StudentProfileCreateInput, {nullable:false})
    @Type(() => StudentProfileCreateInput)
    create!: StudentProfileCreateInput;

    @Field(() => StudentProfileUpdateInput, {nullable:false})
    @Type(() => StudentProfileUpdateInput)
    update!: StudentProfileUpdateInput;
}
