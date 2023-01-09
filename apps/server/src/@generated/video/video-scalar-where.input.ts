import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class VideoScalarWhereInput {

    @Field(() => [VideoScalarWhereInput], {nullable:true})
    AND?: Array<VideoScalarWhereInput>;

    @Field(() => [VideoScalarWhereInput], {nullable:true})
    OR?: Array<VideoScalarWhereInput>;

    @Field(() => [VideoScalarWhereInput], {nullable:true})
    NOT?: Array<VideoScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    src?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    duration?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    courseId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
