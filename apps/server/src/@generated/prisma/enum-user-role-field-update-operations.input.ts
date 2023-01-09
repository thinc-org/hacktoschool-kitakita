import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRole } from './user-role.enum';

@InputType()
export class EnumUserRoleFieldUpdateOperationsInput {

    @Field(() => UserRole, {nullable:true})
    set?: keyof typeof UserRole;
}
