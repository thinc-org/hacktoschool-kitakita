import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstructorProfileWhereUniqueInput } from './instructor-profile-where-unique.input';
import { Type } from 'class-transformer';
import { InstructorProfileCreateWithoutUserInput } from './instructor-profile-create-without-user.input';

@InputType()
export class InstructorProfileCreateOrConnectWithoutUserInput {

    @Field(() => InstructorProfileWhereUniqueInput, {nullable:false})
    @Type(() => InstructorProfileWhereUniqueInput)
    where!: InstructorProfileWhereUniqueInput;

    @Field(() => InstructorProfileCreateWithoutUserInput, {nullable:false})
    @Type(() => InstructorProfileCreateWithoutUserInput)
    create!: InstructorProfileCreateWithoutUserInput;
}
