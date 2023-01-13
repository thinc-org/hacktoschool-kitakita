import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StudentProfileOrderByWithRelationInput } from '../student-profile/student-profile-order-by-with-relation.input';
import { InstructorProfileOrderByWithRelationInput } from '../instructor-profile/instructor-profile-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hashedPassword?: keyof typeof SortOrder;

    @Field(() => StudentProfileOrderByWithRelationInput, {nullable:true})
    StudentProfile?: StudentProfileOrderByWithRelationInput;

    @Field(() => InstructorProfileOrderByWithRelationInput, {nullable:true})
    InstructorProfile?: InstructorProfileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
