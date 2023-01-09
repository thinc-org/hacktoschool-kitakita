import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentProfileWhereUniqueInput } from './student-profile-where-unique.input';
import { Type } from 'class-transformer';
import { StudentProfileCreateWithoutUserInput } from './student-profile-create-without-user.input';

@InputType()
export class StudentProfileCreateOrConnectWithoutUserInput {

    @Field(() => StudentProfileWhereUniqueInput, {nullable:false})
    @Type(() => StudentProfileWhereUniqueInput)
    where!: StudentProfileWhereUniqueInput;

    @Field(() => StudentProfileCreateWithoutUserInput, {nullable:false})
    @Type(() => StudentProfileCreateWithoutUserInput)
    create!: StudentProfileCreateWithoutUserInput;
}
