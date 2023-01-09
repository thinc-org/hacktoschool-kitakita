import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';

@ObjectType()
export class UserMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => UserRole, {nullable:true})
    role?: keyof typeof UserRole;

    @Field(() => Boolean, {nullable:true})
    online?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
