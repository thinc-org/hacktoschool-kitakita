import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentProfileWhereInput } from './student-profile-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyStudentProfileArgs {

    @Field(() => StudentProfileWhereInput, {nullable:true})
    @Type(() => StudentProfileWhereInput)
    where?: StudentProfileWhereInput;
}
