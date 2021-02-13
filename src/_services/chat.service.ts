/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  chatRoomParticipantsId?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  chatRoomParticipantsId?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateMessageInput = {
  id?: string | null,
  userId: string,
  chatRoomId: string,
  content: string,
};

export type ModelMessageConditionInput = {
  userId?: ModelIDInput | null,
  chatRoomId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMessageInput = {
  id: string,
  userId?: string | null,
  chatRoomId?: string | null,
  content?: string | null,
};

export type DeleteMessageInput = {
  id?: string | null,
};

export type CreateChatRoomInput = {
  id?: string | null,
  name: string,
  userChatRoomsId?: string | null,
};

export type ModelChatRoomConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
  name?: string | null,
  userChatRoomsId?: string | null,
};

export type DeleteChatRoomInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  chatRoomId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    chatRooms:  {
      __typename: "ModelChatRoomConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    chatRooms:  {
      __typename: "ModelChatRoomConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    chatRooms:  {
      __typename: "ModelChatRoomConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage:  {
    __typename: "Message",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage:  {
    __typename: "Message",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage:  {
    __typename: "Message",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom:  {
    __typename: "ChatRoom",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    participants:  {
      __typename: "ModelUserConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom:  {
    __typename: "ChatRoom",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    participants:  {
      __typename: "ModelUserConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom:  {
    __typename: "ChatRoom",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    participants:  {
      __typename: "ModelUserConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    chatRooms:  {
      __typename: "ModelChatRoomConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage:  {
    __typename: "Message",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      userId: string,
      chatRoomId: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom:  {
    __typename: "ChatRoom",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    participants:  {
      __typename: "ModelUserConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    chatRooms:  {
      __typename: "ModelChatRoomConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    chatRooms:  {
      __typename: "ModelChatRoomConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    chatRooms:  {
      __typename: "ModelChatRoomConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage:  {
    __typename: "Message",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage:  {
    __typename: "Message",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage:  {
    __typename: "Message",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom:  {
    __typename: "ChatRoom",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    participants:  {
      __typename: "ModelUserConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom:  {
    __typename: "ChatRoom",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    participants:  {
      __typename: "ModelUserConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom:  {
    __typename: "ChatRoom",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      nextToken: string | null,
    } | null,
    participants:  {
      __typename: "ModelUserConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
