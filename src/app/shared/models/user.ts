import { User as APIUser } from "@cloud-9/iam";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  displayImageURL: string;
  email: string;
  created: Date;
  updated: Date;
}

export function fromAPIUser(apiUser: APIUser): User {
  return {
    id: apiUser?.id ?? "",
    firstName: apiUser?.firstName ?? "",
    lastName: apiUser?.lastName ?? "",
    displayName: apiUser?.displayName ?? "",
    displayImageURL: apiUser?.displayImageURL ?? "",
    email: apiUser?.email ?? "",
    created: apiUser?.created ? new Date(apiUser.created) : new Date(),
    updated: apiUser?.updated ? new Date(apiUser.updated) : new Date(),
  };
}
