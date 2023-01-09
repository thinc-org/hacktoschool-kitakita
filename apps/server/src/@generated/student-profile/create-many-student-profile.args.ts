import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudentProfileCreateManyInput } from './student-profile-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyStudentProfileArgs {

    @Field(() => [StudentProfileCreateManyInput], {nullable:false})
    @Type(() => StudentProfileCreateManyInput)
    data!: Array<StudentProfileCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
