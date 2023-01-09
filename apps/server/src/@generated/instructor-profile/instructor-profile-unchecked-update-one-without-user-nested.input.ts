import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstructorProfileCreateWithoutUserInput } from './instructor-profile-create-without-user.input';
import { Type } from 'class-transformer';
import { InstructorProfileCreateOrConnectWithoutUserInput } from './instructor-profile-create-or-connect-without-user.input';
import { InstructorProfileUpsertWithoutUserInput } from './instructor-profile-upsert-without-user.input';
import { InstructorProfileWhereUniqueInput } from './instructor-profile-where-unique.input';
import { InstructorProfileUpdateWithoutUserInput } from './instructor-profile-update-without-user.input';

@InputType()
export class InstructorProfileUncheckedUpdateOneWithoutUserNestedInput {

    @Field(() => InstructorProfileCreateWithoutUserInput, {nullable:true})
    @Type(() => InstructorProfileCreateWithoutUserInput)
    create?: InstructorProfileCreateWithoutUserInput;

    @Field(() => InstructorProfileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => InstructorProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutUserInput;

    @Field(() => InstructorProfileUpsertWithoutUserInput, {nullable:true})
    @Type(() => InstructorProfileUpsertWithoutUserInput)
    upsert?: InstructorProfileUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => InstructorProfileWhereUniqueInput, {nullable:true})
    @Type(() => InstructorProfileWhereUniqueInput)
    connect?: InstructorProfileWhereUniqueInput;

    @Field(() => InstructorProfileUpdateWithoutUserInput, {nullable:true})
    @Type(() => InstructorProfileUpdateWithoutUserInput)
    update?: InstructorProfileUpdateWithoutUserInput;
}
