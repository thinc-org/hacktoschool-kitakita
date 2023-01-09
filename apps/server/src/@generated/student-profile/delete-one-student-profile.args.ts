import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentProfileWhereUniqueInput } from './student-profile-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneStudentProfileArgs {

    @Field(() => StudentProfileWhereUniqueInput, {nullable:false})
    @Type(() => StudentProfileWhereUniqueInput)
    where!: StudentProfileWhereUniqueInput;
}
