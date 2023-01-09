import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudentProfileCreateWithoutUserInput } from './student-profile-create-without-user.input';
import { Type } from 'class-transformer';
import { StudentProfileCreateOrConnectWithoutUserInput } from './student-profile-create-or-connect-without-user.input';
import { StudentProfileUpsertWithoutUserInput } from './student-profile-upsert-without-user.input';
import { StudentProfileWhereUniqueInput } from './student-profile-where-unique.input';
import { StudentProfileUpdateWithoutUserInput } from './student-profile-update-without-user.input';

@InputType()
export class StudentProfileUpdateOneWithoutUserNestedInput {

    @Field(() => StudentProfileCreateWithoutUserInput, {nullable:true})
    @Type(() => StudentProfileCreateWithoutUserInput)
    create?: StudentProfileCreateWithoutUserInput;

    @Field(() => StudentProfileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => StudentProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput;

    @Field(() => StudentProfileUpsertWithoutUserInput, {nullable:true})
    @Type(() => StudentProfileUpsertWithoutUserInput)
    upsert?: StudentProfileUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => StudentProfileWhereUniqueInput, {nullable:true})
    @Type(() => StudentProfileWhereUniqueInput)
    connect?: StudentProfileWhereUniqueInput;

    @Field(() => StudentProfileUpdateWithoutUserInput, {nullable:true})
    @Type(() => StudentProfileUpdateWithoutUserInput)
    update?: StudentProfileUpdateWithoutUserInput;
}
