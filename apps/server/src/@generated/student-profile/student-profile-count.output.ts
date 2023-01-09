import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StudentProfileCount {

    @Field(() => Int, {nullable:false})
    courses?: number;
}
