// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace AccountsTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  getAccount?: Maybe<Account>;
};


export type QuerygetAccountArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type Account = {
  id: Scalars['String'];
};

export type Mutation = {
  login?: Maybe<Session>;
};


export type MutationloginArgs = {
  input?: InputMaybe<LoginInput_Input>;
};

export type Session = {
  access_token: Scalars['String'];
  refresh_token: Scalars['String'];
};

export type LoginInput_Input = {
  email: Scalars['String'];
  password: Scalars['String'];
};

  export type QuerySdk = {
      /** undefined **/
  getAccount: InContextSdkMethod<Query['getAccount'], QuerygetAccountArgs, MeshContext>
  };

  export type MutationSdk = {
      /** undefined **/
  login: InContextSdkMethod<Mutation['login'], MutationloginArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Accounts"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
