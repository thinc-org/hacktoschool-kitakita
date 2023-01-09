import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRole } from './user-role.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUserRoleFilter } from './nested-enum-user-role-filter.input';

@InputType()
export class NestedEnumUserRoleWithAggregatesFilter {

    @Field(() => UserRole, {nullable:true})
    equals?: keyof typeof UserRole;

    @Field(() => [UserRole], {nullable:true})
    in?: Array<keyof typeof UserRole>;

    @Field(() => [UserRole], {nullable:true})
    notIn?: Array<keyof typeof UserRole>;

    @Field(() => NestedEnumUserRoleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserRoleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumUserRoleFilter, {nullable:true})
    _min?: NestedEnumUserRoleFilter;

    @Field(() => NestedEnumUserRoleFilter, {nullable:true})
    _max?: NestedEnumUserRoleFilter;
}
