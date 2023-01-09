import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { InstructorProfileOrderByWithRelationInput } from '../instructor-profile/instructor-profile-order-by-with-relation.input';
import { StudentProfileOrderByRelationAggregateInput } from '../student-profile/student-profile-order-by-relation-aggregate.input';
import { VideoOrderByRelationAggregateInput } from '../video/video-order-by-relation-aggregate.input';

@InputType()
export class CourseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => InstructorProfileOrderByWithRelationInput, {nullable:true})
    instructor?: InstructorProfileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    instructorId?: keyof typeof SortOrder;

    @Field(() => StudentProfileOrderByRelationAggregateInput, {nullable:true})
    students?: StudentProfileOrderByRelationAggregateInput;

    @Field(() => VideoOrderByRelationAggregateInput, {nullable:true})
    videos?: VideoOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
