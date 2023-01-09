import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentProfileCreateWithoutUserInput } from './student-profile-create-without-user.input';
import { Type } from 'class-transformer';
import { StudentProfileCreateOrConnectWithoutUserInput } from './student-profile-create-or-connect-without-user.input';
import { StudentProfileWhereUniqueInput } from './student-profile-where-unique.input';

@InputType()
export class StudentProfileCreateNestedOneWithoutUserInput {

    @Field(() => StudentProfileCreateWithoutUserInput, {nullable:true})
    @Type(() => StudentProfileCreateWithoutUserInput)
    create?: StudentProfileCreateWithoutUserInput;

    @Field(() => StudentProfileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => StudentProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput;

    @Field(() => StudentProfileWhereUniqueInput, {nullable:true})
    @Type(() => StudentProfileWhereUniqueInput)
    connect?: StudentProfileWhereUniqueInput;
}
