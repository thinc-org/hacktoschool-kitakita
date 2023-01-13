export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Course = {
  __typename?: 'Course';
  _count: CourseCount;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  instructor: InstructorProfile;
  instructorId: Scalars['String'];
  students?: Maybe<Array<StudentProfile>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  videos?: Maybe<Array<Video>>;
};

export type CourseCount = {
  __typename?: 'CourseCount';
  students: Scalars['Int'];
  videos: Scalars['Int'];
};

export type CourseListRelationFilter = {
  every?: InputMaybe<CourseWhereInput>;
  none?: InputMaybe<CourseWhereInput>;
  some?: InputMaybe<CourseWhereInput>;
};

export type CourseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CourseRelationFilter = {
  is?: InputMaybe<CourseWhereInput>;
  isNot?: InputMaybe<CourseWhereInput>;
};

export type CourseWhereInput = {
  AND?: InputMaybe<Array<CourseWhereInput>>;
  NOT?: InputMaybe<Array<CourseWhereInput>>;
  OR?: InputMaybe<Array<CourseWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  instructor?: InputMaybe<InstructorProfileRelationFilter>;
  instructorId?: InputMaybe<StringFilter>;
  students?: InputMaybe<StudentProfileListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  videos?: InputMaybe<VideoListRelationFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type InstructorProfile = {
  __typename?: 'InstructorProfile';
  _count: InstructorProfileCount;
  courses?: Maybe<Array<Course>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
};

export type InstructorProfileCount = {
  __typename?: 'InstructorProfileCount';
  courses: Scalars['Int'];
};

export type InstructorProfileOrderByWithRelationInput = {
  courses?: InputMaybe<CourseOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type InstructorProfileRelationFilter = {
  is?: InputMaybe<InstructorProfileWhereInput>;
  isNot?: InputMaybe<InstructorProfileWhereInput>;
};

export type InstructorProfileWhereInput = {
  AND?: InputMaybe<Array<InstructorProfileWhereInput>>;
  NOT?: InputMaybe<Array<InstructorProfileWhereInput>>;
  OR?: InputMaybe<Array<InstructorProfileWhereInput>>;
  courses?: InputMaybe<CourseListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  userCount: Scalars['Int'];
  users: Array<User>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StudentProfile = {
  __typename?: 'StudentProfile';
  _count: StudentProfileCount;
  courses?: Maybe<Array<Course>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
};

export type StudentProfileCount = {
  __typename?: 'StudentProfileCount';
  courses: Scalars['Int'];
};

export type StudentProfileListRelationFilter = {
  every?: InputMaybe<StudentProfileWhereInput>;
  none?: InputMaybe<StudentProfileWhereInput>;
  some?: InputMaybe<StudentProfileWhereInput>;
};

export type StudentProfileOrderByWithRelationInput = {
  courses?: InputMaybe<CourseOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type StudentProfileRelationFilter = {
  is?: InputMaybe<StudentProfileWhereInput>;
  isNot?: InputMaybe<StudentProfileWhereInput>;
};

export type StudentProfileWhereInput = {
  AND?: InputMaybe<Array<StudentProfileWhereInput>>;
  NOT?: InputMaybe<Array<StudentProfileWhereInput>>;
  OR?: InputMaybe<Array<StudentProfileWhereInput>>;
  courses?: InputMaybe<CourseListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type User = {
  __typename?: 'User';
  InstructorProfile?: Maybe<InstructorProfile>;
  StudentProfile?: Maybe<StudentProfile>;
  createdAt: Scalars['DateTime'];
  hashedPassword: Scalars['String'];
  id: Scalars['ID'];
  online: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserOrderByWithRelationInput = {
  InstructorProfile?: InputMaybe<InstructorProfileOrderByWithRelationInput>;
  StudentProfile?: InputMaybe<StudentProfileOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  hashedPassword?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  online?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  HashedPassword = 'hashedPassword',
  Id = 'id',
  Online = 'online',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  InstructorProfile?: InputMaybe<InstructorProfileRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  StudentProfile?: InputMaybe<StudentProfileRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  hashedPassword?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  online?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Video = {
  __typename?: 'Video';
  course: Course;
  courseId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  duration: Scalars['Int'];
  id: Scalars['ID'];
  src: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type VideoListRelationFilter = {
  every?: InputMaybe<VideoWhereInput>;
  none?: InputMaybe<VideoWhereInput>;
  some?: InputMaybe<VideoWhereInput>;
};

export type VideoWhereInput = {
  AND?: InputMaybe<Array<VideoWhereInput>>;
  NOT?: InputMaybe<Array<VideoWhereInput>>;
  OR?: InputMaybe<Array<VideoWhereInput>>;
  course?: InputMaybe<CourseRelationFilter>;
  courseId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  duration?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  src?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};
