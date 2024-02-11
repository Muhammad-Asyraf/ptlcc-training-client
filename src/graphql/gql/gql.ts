/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation CreateParticipant($data: ParticipantInput!) {\n        createParticipant(data: $data) {\n            data {\n                id\n            }\n        }\n    }\n": types.CreateParticipantDocument,
    "\n    mutation Login($input: UsersPermissionsLoginInput!) {\n        login(input: $input) {\n            jwt\n            user {\n                id\n                email\n                username\n            }\n        }\n    }\n": types.LoginDocument,
    "\n    mutation Register($customRegisterInput: UsersPermissionsRegisterInput!) {\n        customRegister(input: $customRegisterInput) {\n            jwt\n            user {\n                username\n                email\n                id\n            }\n        }\n    }\n": types.RegisterDocument,
    "\n    query CheckEmailExists($email: String!) {\n        usersPermissionsUsers(filters: { email: { eq: $email } }) {\n            data {\n                attributes {\n                    email\n                }\n            }\n        }\n    }\n": types.CheckEmailExistsDocument,
    "\n    query GetProfile($usersPermissionsUserId: ID) {\n        usersPermissionsUser(id: $usersPermissionsUserId) {\n            data {\n                attributes {\n                    participant {\n                        data {\n                            attributes {\n                                personalDetails {\n                                    firstName\n                                    lastName\n                                    fullName\n                                    gender\n                                    dob\n                                    residentialAddress {\n                                        addressLine1\n                                        addressLine2\n                                        postalCode\n                                        city\n                                        state\n                                    }\n                                    homeNumber\n                                    phoneNumber\n                                }\n                                jobInformation {\n                                    titlePosition\n                                    company\n                                    workEmail\n                                    workAddress {\n                                        addressLine1\n                                        addressLine2\n                                        postalCode\n                                        city\n                                        state\n                                    }\n                                    workPhone\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n": types.GetProfileDocument,
    "\n    query GetUserTraining($usersPermissionsUserId: ID) {\n        usersPermissionsUser(id: $usersPermissionsUserId) {\n            data {\n                attributes {\n                    participant {\n                        data {\n                            attributes {\n                                trainings {\n                                    training {\n                                        data {\n                                            attributes {\n                                                code\n                                                name\n                                                dateValidity\n                                                type\n                                            }\n                                        }\n                                    }\n                                    certificate {\n                                        data {\n                                            attributes {\n                                                name\n                                                size\n                                                url\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n": types.GetUserTrainingDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateParticipant($data: ParticipantInput!) {\n        createParticipant(data: $data) {\n            data {\n                id\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CreateParticipant($data: ParticipantInput!) {\n        createParticipant(data: $data) {\n            data {\n                id\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation Login($input: UsersPermissionsLoginInput!) {\n        login(input: $input) {\n            jwt\n            user {\n                id\n                email\n                username\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation Login($input: UsersPermissionsLoginInput!) {\n        login(input: $input) {\n            jwt\n            user {\n                id\n                email\n                username\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation Register($customRegisterInput: UsersPermissionsRegisterInput!) {\n        customRegister(input: $customRegisterInput) {\n            jwt\n            user {\n                username\n                email\n                id\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation Register($customRegisterInput: UsersPermissionsRegisterInput!) {\n        customRegister(input: $customRegisterInput) {\n            jwt\n            user {\n                username\n                email\n                id\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query CheckEmailExists($email: String!) {\n        usersPermissionsUsers(filters: { email: { eq: $email } }) {\n            data {\n                attributes {\n                    email\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query CheckEmailExists($email: String!) {\n        usersPermissionsUsers(filters: { email: { eq: $email } }) {\n            data {\n                attributes {\n                    email\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetProfile($usersPermissionsUserId: ID) {\n        usersPermissionsUser(id: $usersPermissionsUserId) {\n            data {\n                attributes {\n                    participant {\n                        data {\n                            attributes {\n                                personalDetails {\n                                    firstName\n                                    lastName\n                                    fullName\n                                    gender\n                                    dob\n                                    residentialAddress {\n                                        addressLine1\n                                        addressLine2\n                                        postalCode\n                                        city\n                                        state\n                                    }\n                                    homeNumber\n                                    phoneNumber\n                                }\n                                jobInformation {\n                                    titlePosition\n                                    company\n                                    workEmail\n                                    workAddress {\n                                        addressLine1\n                                        addressLine2\n                                        postalCode\n                                        city\n                                        state\n                                    }\n                                    workPhone\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetProfile($usersPermissionsUserId: ID) {\n        usersPermissionsUser(id: $usersPermissionsUserId) {\n            data {\n                attributes {\n                    participant {\n                        data {\n                            attributes {\n                                personalDetails {\n                                    firstName\n                                    lastName\n                                    fullName\n                                    gender\n                                    dob\n                                    residentialAddress {\n                                        addressLine1\n                                        addressLine2\n                                        postalCode\n                                        city\n                                        state\n                                    }\n                                    homeNumber\n                                    phoneNumber\n                                }\n                                jobInformation {\n                                    titlePosition\n                                    company\n                                    workEmail\n                                    workAddress {\n                                        addressLine1\n                                        addressLine2\n                                        postalCode\n                                        city\n                                        state\n                                    }\n                                    workPhone\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetUserTraining($usersPermissionsUserId: ID) {\n        usersPermissionsUser(id: $usersPermissionsUserId) {\n            data {\n                attributes {\n                    participant {\n                        data {\n                            attributes {\n                                trainings {\n                                    training {\n                                        data {\n                                            attributes {\n                                                code\n                                                name\n                                                dateValidity\n                                                type\n                                            }\n                                        }\n                                    }\n                                    certificate {\n                                        data {\n                                            attributes {\n                                                name\n                                                size\n                                                url\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetUserTraining($usersPermissionsUserId: ID) {\n        usersPermissionsUser(id: $usersPermissionsUserId) {\n            data {\n                attributes {\n                    participant {\n                        data {\n                            attributes {\n                                trainings {\n                                    training {\n                                        data {\n                                            attributes {\n                                                code\n                                                name\n                                                dateValidity\n                                                type\n                                            }\n                                        }\n                                    }\n                                    certificate {\n                                        data {\n                                            attributes {\n                                                name\n                                                size\n                                                url\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;