import * as Apollo from 'apollo-angular';
import {gql} from 'apollo-angular';
import {Injectable} from '@angular/core';

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
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

export type GameTestType = Node & {
  __typename?: 'GameTestType';
  created: Scalars['DateTime'];
  /** The ID of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
  updated: Scalars['DateTime'];
};

export type GameTestTypeConnection = {
  __typename?: 'GameTestTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<GameTestTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `GameTestType` and its cursor. */
export type GameTestTypeEdge = {
  __typename?: 'GameTestTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<GameTestType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates updates test */
  createUpdateGameQuestion?: Maybe<GameTestType>;
  refreshToken?: Maybe<Refresh>;
  register?: Maybe<UsersNode>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
};


export type MutationCreateUpdateGameQuestionArgs = {
  name?: InputMaybe<Scalars['String']>;
  testId?: InputMaybe<Scalars['ID']>;
};


export type MutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  repeatPassword: Scalars['String'];
  username: Scalars['String'];
};


export type MutationTokenAuthArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars['ID'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  gameTest?: Maybe<GameTestType>;
  gameTests?: Maybe<GameTestTypeConnection>;
};


export type QueryGameTestArgs = {
  id: Scalars['ID'];
};


export type QueryGameTestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type UsersNode = Node & {
  __typename?: 'UsersNode';
  email: Scalars['String'];
  /** The ID of the object */
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type AppComponentTestsLoadQueryVariables = Exact<{ [key: string]: never; }>;


export type AppComponentTestsLoadQuery = {
  __typename?: 'Query',
  gameTests?: {
    __typename?: 'GameTestTypeConnection',
    edges: Array<{
      __typename?: 'GameTestTypeEdge',
      node?: { __typename?: 'GameTestType', id: string, name: string, created: any, updated: any } | null
    } | null>
  } | null
};

export const AppComponentTestsLoadDocument = gql`
  query AppComponentTestsLoad {
    gameTests {
      edges {
        node {
          id
          name
          created
          updated
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class AppComponentTestsLoadGQL extends Apollo.Query<AppComponentTestsLoadQuery, AppComponentTestsLoadQueryVariables> {
  document = AppComponentTestsLoadDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
