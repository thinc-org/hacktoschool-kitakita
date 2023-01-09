import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentProfileCreateInput } from './student-profile-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneStudentProfileArgs {

    @Field(() => StudentProfileCreateInput, {nullable:false})
    @Type(() => StudentProfileCreateInput)
    data!: StudentProfileCreateInput;
}
