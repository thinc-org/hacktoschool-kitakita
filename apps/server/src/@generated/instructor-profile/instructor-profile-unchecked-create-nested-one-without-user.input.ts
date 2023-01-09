import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstructorProfileCreateWithoutUserInput } from './instructor-profile-create-without-user.input';
import { Type } from 'class-transformer';
import { InstructorProfileCreateOrConnectWithoutUserInput } from './instructor-profile-create-or-connect-without-user.input';
import { InstructorProfileWhereUniqueInput } from './instructor-profile-where-unique.input';

@InputType()
export class InstructorProfileUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => InstructorProfileCreateWithoutUserInput, {nullable:true})
    @Type(() => InstructorProfileCreateWithoutUserInput)
    create?: InstructorProfileCreateWithoutUserInput;

    @Field(() => InstructorProfileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => InstructorProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutUserInput;

    @Field(() => InstructorProfileWhereUniqueInput, {nullable:true})
    @Type(() => InstructorProfileWhereUniqueInput)
    connect?: InstructorProfileWhereUniqueInput;
}
