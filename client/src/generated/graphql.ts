import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ContractAddress: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  felt252: { input: any; output: any; }
  u32: { input: any; output: any; }
};

export type Attributes = {
  __typename?: 'Attributes';
  cha?: Maybe<Scalars['u32']['output']>;
  cha_modifier?: Maybe<Scalars['u32']['output']>;
  con?: Maybe<Scalars['u32']['output']>;
  con_modifier?: Maybe<Scalars['u32']['output']>;
  dex?: Maybe<Scalars['u32']['output']>;
  dex_modifier?: Maybe<Scalars['u32']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u32']['output']>;
  int?: Maybe<Scalars['u32']['output']>;
  int_modifier?: Maybe<Scalars['u32']['output']>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
  points?: Maybe<Scalars['u32']['output']>;
  quest_id?: Maybe<Scalars['u32']['output']>;
  str?: Maybe<Scalars['u32']['output']>;
  str_modifier?: Maybe<Scalars['u32']['output']>;
  wis?: Maybe<Scalars['u32']['output']>;
  wis_modifier?: Maybe<Scalars['u32']['output']>;
};

export type AttributesConnection = {
  __typename?: 'AttributesConnection';
  edges?: Maybe<Array<Maybe<AttributesEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type AttributesEdge = {
  __typename?: 'AttributesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Attributes>;
};

export type AttributesOrder = {
  direction: OrderDirection;
  field: AttributesOrderField;
};

export enum AttributesOrderField {
  Cha = 'CHA',
  ChaModifier = 'CHA_MODIFIER',
  Con = 'CON',
  ConModifier = 'CON_MODIFIER',
  Dex = 'DEX',
  DexModifier = 'DEX_MODIFIER',
  EntityId = 'ENTITY_ID',
  Int = 'INT',
  IntModifier = 'INT_MODIFIER',
  Player = 'PLAYER',
  Points = 'POINTS',
  QuestId = 'QUEST_ID',
  Str = 'STR',
  StrModifier = 'STR_MODIFIER',
  Wis = 'WIS',
  WisModifier = 'WIS_MODIFIER'
}

export type AttributesWhereInput = {
  cha?: InputMaybe<Scalars['u32']['input']>;
  chaEQ?: InputMaybe<Scalars['u32']['input']>;
  chaGT?: InputMaybe<Scalars['u32']['input']>;
  chaGTE?: InputMaybe<Scalars['u32']['input']>;
  chaLT?: InputMaybe<Scalars['u32']['input']>;
  chaLTE?: InputMaybe<Scalars['u32']['input']>;
  chaNEQ?: InputMaybe<Scalars['u32']['input']>;
  cha_modifier?: InputMaybe<Scalars['u32']['input']>;
  cha_modifierEQ?: InputMaybe<Scalars['u32']['input']>;
  cha_modifierGT?: InputMaybe<Scalars['u32']['input']>;
  cha_modifierGTE?: InputMaybe<Scalars['u32']['input']>;
  cha_modifierLT?: InputMaybe<Scalars['u32']['input']>;
  cha_modifierLTE?: InputMaybe<Scalars['u32']['input']>;
  cha_modifierNEQ?: InputMaybe<Scalars['u32']['input']>;
  con?: InputMaybe<Scalars['u32']['input']>;
  conEQ?: InputMaybe<Scalars['u32']['input']>;
  conGT?: InputMaybe<Scalars['u32']['input']>;
  conGTE?: InputMaybe<Scalars['u32']['input']>;
  conLT?: InputMaybe<Scalars['u32']['input']>;
  conLTE?: InputMaybe<Scalars['u32']['input']>;
  conNEQ?: InputMaybe<Scalars['u32']['input']>;
  con_modifier?: InputMaybe<Scalars['u32']['input']>;
  con_modifierEQ?: InputMaybe<Scalars['u32']['input']>;
  con_modifierGT?: InputMaybe<Scalars['u32']['input']>;
  con_modifierGTE?: InputMaybe<Scalars['u32']['input']>;
  con_modifierLT?: InputMaybe<Scalars['u32']['input']>;
  con_modifierLTE?: InputMaybe<Scalars['u32']['input']>;
  con_modifierNEQ?: InputMaybe<Scalars['u32']['input']>;
  dex?: InputMaybe<Scalars['u32']['input']>;
  dexEQ?: InputMaybe<Scalars['u32']['input']>;
  dexGT?: InputMaybe<Scalars['u32']['input']>;
  dexGTE?: InputMaybe<Scalars['u32']['input']>;
  dexLT?: InputMaybe<Scalars['u32']['input']>;
  dexLTE?: InputMaybe<Scalars['u32']['input']>;
  dexNEQ?: InputMaybe<Scalars['u32']['input']>;
  dex_modifier?: InputMaybe<Scalars['u32']['input']>;
  dex_modifierEQ?: InputMaybe<Scalars['u32']['input']>;
  dex_modifierGT?: InputMaybe<Scalars['u32']['input']>;
  dex_modifierGTE?: InputMaybe<Scalars['u32']['input']>;
  dex_modifierLT?: InputMaybe<Scalars['u32']['input']>;
  dex_modifierLTE?: InputMaybe<Scalars['u32']['input']>;
  dex_modifierNEQ?: InputMaybe<Scalars['u32']['input']>;
  entity_id?: InputMaybe<Scalars['u32']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u32']['input']>;
  entity_idGT?: InputMaybe<Scalars['u32']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u32']['input']>;
  entity_idLT?: InputMaybe<Scalars['u32']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u32']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u32']['input']>;
  int?: InputMaybe<Scalars['u32']['input']>;
  intEQ?: InputMaybe<Scalars['u32']['input']>;
  intGT?: InputMaybe<Scalars['u32']['input']>;
  intGTE?: InputMaybe<Scalars['u32']['input']>;
  intLT?: InputMaybe<Scalars['u32']['input']>;
  intLTE?: InputMaybe<Scalars['u32']['input']>;
  intNEQ?: InputMaybe<Scalars['u32']['input']>;
  int_modifier?: InputMaybe<Scalars['u32']['input']>;
  int_modifierEQ?: InputMaybe<Scalars['u32']['input']>;
  int_modifierGT?: InputMaybe<Scalars['u32']['input']>;
  int_modifierGTE?: InputMaybe<Scalars['u32']['input']>;
  int_modifierLT?: InputMaybe<Scalars['u32']['input']>;
  int_modifierLTE?: InputMaybe<Scalars['u32']['input']>;
  int_modifierNEQ?: InputMaybe<Scalars['u32']['input']>;
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  points?: InputMaybe<Scalars['u32']['input']>;
  pointsEQ?: InputMaybe<Scalars['u32']['input']>;
  pointsGT?: InputMaybe<Scalars['u32']['input']>;
  pointsGTE?: InputMaybe<Scalars['u32']['input']>;
  pointsLT?: InputMaybe<Scalars['u32']['input']>;
  pointsLTE?: InputMaybe<Scalars['u32']['input']>;
  pointsNEQ?: InputMaybe<Scalars['u32']['input']>;
  quest_id?: InputMaybe<Scalars['u32']['input']>;
  quest_idEQ?: InputMaybe<Scalars['u32']['input']>;
  quest_idGT?: InputMaybe<Scalars['u32']['input']>;
  quest_idGTE?: InputMaybe<Scalars['u32']['input']>;
  quest_idLT?: InputMaybe<Scalars['u32']['input']>;
  quest_idLTE?: InputMaybe<Scalars['u32']['input']>;
  quest_idNEQ?: InputMaybe<Scalars['u32']['input']>;
  str?: InputMaybe<Scalars['u32']['input']>;
  strEQ?: InputMaybe<Scalars['u32']['input']>;
  strGT?: InputMaybe<Scalars['u32']['input']>;
  strGTE?: InputMaybe<Scalars['u32']['input']>;
  strLT?: InputMaybe<Scalars['u32']['input']>;
  strLTE?: InputMaybe<Scalars['u32']['input']>;
  strNEQ?: InputMaybe<Scalars['u32']['input']>;
  str_modifier?: InputMaybe<Scalars['u32']['input']>;
  str_modifierEQ?: InputMaybe<Scalars['u32']['input']>;
  str_modifierGT?: InputMaybe<Scalars['u32']['input']>;
  str_modifierGTE?: InputMaybe<Scalars['u32']['input']>;
  str_modifierLT?: InputMaybe<Scalars['u32']['input']>;
  str_modifierLTE?: InputMaybe<Scalars['u32']['input']>;
  str_modifierNEQ?: InputMaybe<Scalars['u32']['input']>;
  wis?: InputMaybe<Scalars['u32']['input']>;
  wisEQ?: InputMaybe<Scalars['u32']['input']>;
  wisGT?: InputMaybe<Scalars['u32']['input']>;
  wisGTE?: InputMaybe<Scalars['u32']['input']>;
  wisLT?: InputMaybe<Scalars['u32']['input']>;
  wisLTE?: InputMaybe<Scalars['u32']['input']>;
  wisNEQ?: InputMaybe<Scalars['u32']['input']>;
  wis_modifier?: InputMaybe<Scalars['u32']['input']>;
  wis_modifierEQ?: InputMaybe<Scalars['u32']['input']>;
  wis_modifierGT?: InputMaybe<Scalars['u32']['input']>;
  wis_modifierGTE?: InputMaybe<Scalars['u32']['input']>;
  wis_modifierLT?: InputMaybe<Scalars['u32']['input']>;
  wis_modifierLTE?: InputMaybe<Scalars['u32']['input']>;
  wis_modifierNEQ?: InputMaybe<Scalars['u32']['input']>;
};

export type Counter = {
  __typename?: 'Counter';
  count?: Maybe<Scalars['u32']['output']>;
  entity?: Maybe<Entity>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
};

export type CounterConnection = {
  __typename?: 'CounterConnection';
  edges?: Maybe<Array<Maybe<CounterEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type CounterEdge = {
  __typename?: 'CounterEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Counter>;
};

export type CounterOrder = {
  direction: OrderDirection;
  field: CounterOrderField;
};

export enum CounterOrderField {
  Count = 'COUNT',
  Player = 'PLAYER'
}

export type CounterWhereInput = {
  count?: InputMaybe<Scalars['u32']['input']>;
  countEQ?: InputMaybe<Scalars['u32']['input']>;
  countGT?: InputMaybe<Scalars['u32']['input']>;
  countGTE?: InputMaybe<Scalars['u32']['input']>;
  countLT?: InputMaybe<Scalars['u32']['input']>;
  countLTE?: InputMaybe<Scalars['u32']['input']>;
  countNEQ?: InputMaybe<Scalars['u32']['input']>;
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type Entity = {
  __typename?: 'Entity';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  event_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  model_names?: Maybe<Scalars['String']['output']>;
  models?: Maybe<Array<Maybe<ModelUnion>>>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type EntityConnection = {
  __typename?: 'EntityConnection';
  edges?: Maybe<Array<Maybe<EntityEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type EntityEdge = {
  __typename?: 'EntityEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Entity>;
};

export type Event = {
  __typename?: 'Event';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  systemCall: SystemCall;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  edges?: Maybe<Array<Maybe<EventEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Event>;
};

export type Metadata = {
  __typename?: 'Metadata';
  id?: Maybe<Scalars['ID']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type MetadataConnection = {
  __typename?: 'MetadataConnection';
  edges?: Maybe<Array<Maybe<MetadataEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type MetadataEdge = {
  __typename?: 'MetadataEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Metadata>;
};

export type Model = {
  __typename?: 'Model';
  class_hash?: Maybe<Scalars['felt252']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['felt252']['output']>;
};

export type ModelConnection = {
  __typename?: 'ModelConnection';
  edges?: Maybe<Array<Maybe<ModelEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type ModelEdge = {
  __typename?: 'ModelEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Model>;
};

export type ModelUnion = Attributes | Counter | Position | Quest | Stats;

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Position = {
  __typename?: 'Position';
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u32']['output']>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
  quest_id?: Maybe<Scalars['u32']['output']>;
  x?: Maybe<Scalars['u32']['output']>;
  y?: Maybe<Scalars['u32']['output']>;
};

export type PositionConnection = {
  __typename?: 'PositionConnection';
  edges?: Maybe<Array<Maybe<PositionEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type PositionEdge = {
  __typename?: 'PositionEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Position>;
};

export type PositionOrder = {
  direction: OrderDirection;
  field: PositionOrderField;
};

export enum PositionOrderField {
  EntityId = 'ENTITY_ID',
  Player = 'PLAYER',
  QuestId = 'QUEST_ID',
  X = 'X',
  Y = 'Y'
}

export type PositionWhereInput = {
  entity_id?: InputMaybe<Scalars['u32']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u32']['input']>;
  entity_idGT?: InputMaybe<Scalars['u32']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u32']['input']>;
  entity_idLT?: InputMaybe<Scalars['u32']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u32']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u32']['input']>;
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  quest_id?: InputMaybe<Scalars['u32']['input']>;
  quest_idEQ?: InputMaybe<Scalars['u32']['input']>;
  quest_idGT?: InputMaybe<Scalars['u32']['input']>;
  quest_idGTE?: InputMaybe<Scalars['u32']['input']>;
  quest_idLT?: InputMaybe<Scalars['u32']['input']>;
  quest_idLTE?: InputMaybe<Scalars['u32']['input']>;
  quest_idNEQ?: InputMaybe<Scalars['u32']['input']>;
  x?: InputMaybe<Scalars['u32']['input']>;
  xEQ?: InputMaybe<Scalars['u32']['input']>;
  xGT?: InputMaybe<Scalars['u32']['input']>;
  xGTE?: InputMaybe<Scalars['u32']['input']>;
  xLT?: InputMaybe<Scalars['u32']['input']>;
  xLTE?: InputMaybe<Scalars['u32']['input']>;
  xNEQ?: InputMaybe<Scalars['u32']['input']>;
  y?: InputMaybe<Scalars['u32']['input']>;
  yEQ?: InputMaybe<Scalars['u32']['input']>;
  yGT?: InputMaybe<Scalars['u32']['input']>;
  yGTE?: InputMaybe<Scalars['u32']['input']>;
  yLT?: InputMaybe<Scalars['u32']['input']>;
  yLTE?: InputMaybe<Scalars['u32']['input']>;
  yNEQ?: InputMaybe<Scalars['u32']['input']>;
};

export type Query = {
  __typename?: 'Query';
  attributesModels?: Maybe<AttributesConnection>;
  counterModels?: Maybe<CounterConnection>;
  entities?: Maybe<EntityConnection>;
  entity: Entity;
  events?: Maybe<EventConnection>;
  metadata: Metadata;
  metadatas?: Maybe<MetadataConnection>;
  model: Model;
  models?: Maybe<ModelConnection>;
  positionModels?: Maybe<PositionConnection>;
  questModels?: Maybe<QuestConnection>;
  statsModels?: Maybe<StatsConnection>;
  system: System;
  systemCall: SystemCall;
  systemCalls?: Maybe<SystemCallConnection>;
  systems?: Maybe<SystemConnection>;
};


export type QueryAttributesModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<AttributesOrder>;
  where?: InputMaybe<AttributesWhereInput>;
};


export type QueryCounterModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CounterOrder>;
  where?: InputMaybe<CounterWhereInput>;
};


export type QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEntityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMetadataArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMetadatasArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPositionModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PositionOrder>;
  where?: InputMaybe<PositionWhereInput>;
};


export type QueryQuestModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<QuestOrder>;
  where?: InputMaybe<QuestWhereInput>;
};


export type QueryStatsModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<StatsOrder>;
  where?: InputMaybe<StatsWhereInput>;
};


export type QuerySystemArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySystemCallArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySystemCallsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySystemsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Quest = {
  __typename?: 'Quest';
  entity?: Maybe<Entity>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
  quest_id?: Maybe<Scalars['u32']['output']>;
  quest_state?: Maybe<Scalars['u32']['output']>;
};

export type QuestConnection = {
  __typename?: 'QuestConnection';
  edges?: Maybe<Array<Maybe<QuestEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type QuestEdge = {
  __typename?: 'QuestEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Quest>;
};

export type QuestOrder = {
  direction: OrderDirection;
  field: QuestOrderField;
};

export enum QuestOrderField {
  Player = 'PLAYER',
  QuestId = 'QUEST_ID',
  QuestState = 'QUEST_STATE'
}

export type QuestWhereInput = {
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  quest_id?: InputMaybe<Scalars['u32']['input']>;
  quest_idEQ?: InputMaybe<Scalars['u32']['input']>;
  quest_idGT?: InputMaybe<Scalars['u32']['input']>;
  quest_idGTE?: InputMaybe<Scalars['u32']['input']>;
  quest_idLT?: InputMaybe<Scalars['u32']['input']>;
  quest_idLTE?: InputMaybe<Scalars['u32']['input']>;
  quest_idNEQ?: InputMaybe<Scalars['u32']['input']>;
  quest_state?: InputMaybe<Scalars['u32']['input']>;
  quest_stateEQ?: InputMaybe<Scalars['u32']['input']>;
  quest_stateGT?: InputMaybe<Scalars['u32']['input']>;
  quest_stateGTE?: InputMaybe<Scalars['u32']['input']>;
  quest_stateLT?: InputMaybe<Scalars['u32']['input']>;
  quest_stateLTE?: InputMaybe<Scalars['u32']['input']>;
  quest_stateNEQ?: InputMaybe<Scalars['u32']['input']>;
};

export type Stats = {
  __typename?: 'Stats';
  ac?: Maybe<Scalars['u32']['output']>;
  damage_dice?: Maybe<Scalars['u32']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u32']['output']>;
  hp?: Maybe<Scalars['u32']['output']>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
  quest_id?: Maybe<Scalars['u32']['output']>;
};

export type StatsConnection = {
  __typename?: 'StatsConnection';
  edges?: Maybe<Array<Maybe<StatsEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type StatsEdge = {
  __typename?: 'StatsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Stats>;
};

export type StatsOrder = {
  direction: OrderDirection;
  field: StatsOrderField;
};

export enum StatsOrderField {
  Ac = 'AC',
  DamageDice = 'DAMAGE_DICE',
  EntityId = 'ENTITY_ID',
  Hp = 'HP',
  Player = 'PLAYER',
  QuestId = 'QUEST_ID'
}

export type StatsWhereInput = {
  ac?: InputMaybe<Scalars['u32']['input']>;
  acEQ?: InputMaybe<Scalars['u32']['input']>;
  acGT?: InputMaybe<Scalars['u32']['input']>;
  acGTE?: InputMaybe<Scalars['u32']['input']>;
  acLT?: InputMaybe<Scalars['u32']['input']>;
  acLTE?: InputMaybe<Scalars['u32']['input']>;
  acNEQ?: InputMaybe<Scalars['u32']['input']>;
  damage_dice?: InputMaybe<Scalars['u32']['input']>;
  damage_diceEQ?: InputMaybe<Scalars['u32']['input']>;
  damage_diceGT?: InputMaybe<Scalars['u32']['input']>;
  damage_diceGTE?: InputMaybe<Scalars['u32']['input']>;
  damage_diceLT?: InputMaybe<Scalars['u32']['input']>;
  damage_diceLTE?: InputMaybe<Scalars['u32']['input']>;
  damage_diceNEQ?: InputMaybe<Scalars['u32']['input']>;
  entity_id?: InputMaybe<Scalars['u32']['input']>;
  entity_idEQ?: InputMaybe<Scalars['u32']['input']>;
  entity_idGT?: InputMaybe<Scalars['u32']['input']>;
  entity_idGTE?: InputMaybe<Scalars['u32']['input']>;
  entity_idLT?: InputMaybe<Scalars['u32']['input']>;
  entity_idLTE?: InputMaybe<Scalars['u32']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['u32']['input']>;
  hp?: InputMaybe<Scalars['u32']['input']>;
  hpEQ?: InputMaybe<Scalars['u32']['input']>;
  hpGT?: InputMaybe<Scalars['u32']['input']>;
  hpGTE?: InputMaybe<Scalars['u32']['input']>;
  hpLT?: InputMaybe<Scalars['u32']['input']>;
  hpLTE?: InputMaybe<Scalars['u32']['input']>;
  hpNEQ?: InputMaybe<Scalars['u32']['input']>;
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  quest_id?: InputMaybe<Scalars['u32']['input']>;
  quest_idEQ?: InputMaybe<Scalars['u32']['input']>;
  quest_idGT?: InputMaybe<Scalars['u32']['input']>;
  quest_idGTE?: InputMaybe<Scalars['u32']['input']>;
  quest_idLT?: InputMaybe<Scalars['u32']['input']>;
  quest_idLTE?: InputMaybe<Scalars['u32']['input']>;
  quest_idNEQ?: InputMaybe<Scalars['u32']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  entityUpdated: Entity;
  modelRegistered: Model;
};


export type SubscriptionEntityUpdatedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionModelRegisteredArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type System = {
  __typename?: 'System';
  class_hash?: Maybe<Scalars['felt252']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  systemCalls: Array<SystemCall>;
  transaction_hash?: Maybe<Scalars['felt252']['output']>;
};

export type SystemCall = {
  __typename?: 'SystemCall';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  system: System;
  system_id?: Maybe<Scalars['ID']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

export type SystemCallConnection = {
  __typename?: 'SystemCallConnection';
  edges?: Maybe<Array<Maybe<SystemCallEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type SystemCallEdge = {
  __typename?: 'SystemCallEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<SystemCall>;
};

export type SystemConnection = {
  __typename?: 'SystemConnection';
  edges?: Maybe<Array<Maybe<SystemEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type SystemEdge = {
  __typename?: 'SystemEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<System>;
};

export type GetAttributesForPlayerQueryVariables = Exact<{
  player: Scalars['ContractAddress']['input'];
  questId: Scalars['u32']['input'];
  entityId: Scalars['u32']['input'];
}>;


export type GetAttributesForPlayerQuery = { __typename?: 'Query', attributesModels?: { __typename?: 'AttributesConnection', edges?: Array<{ __typename?: 'AttributesEdge', node?: { __typename?: 'Attributes', points?: any | null, str?: any | null, dex?: any | null, con?: any | null, int?: any | null, wis?: any | null, cha?: any | null, str_modifier?: any | null, dex_modifier?: any | null, con_modifier?: any | null, int_modifier?: any | null, wis_modifier?: any | null, cha_modifier?: any | null } | null } | null> | null } | null };

export type GetCounterForPlayerQueryVariables = Exact<{
  player: Scalars['ContractAddress']['input'];
}>;


export type GetCounterForPlayerQuery = { __typename?: 'Query', counterModels?: { __typename?: 'CounterConnection', edges?: Array<{ __typename?: 'CounterEdge', node?: { __typename?: 'Counter', count?: any | null } | null } | null> | null } | null };

export type GetQuestForPlayerQueryVariables = Exact<{
  player: Scalars['ContractAddress']['input'];
  questId: Scalars['u32']['input'];
}>;


export type GetQuestForPlayerQuery = { __typename?: 'Query', questModels?: { __typename?: 'QuestConnection', edges?: Array<{ __typename?: 'QuestEdge', node?: { __typename?: 'Quest', quest_state?: any | null } | null } | null> | null } | null };

export type GetEntitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntitiesQuery = { __typename?: 'Query', entities?: { __typename?: 'EntityConnection', edges?: Array<{ __typename?: 'EntityEdge', node?: { __typename?: 'Entity', keys?: Array<string | null> | null, models?: Array<{ __typename: 'Attributes' } | { __typename: 'Counter' } | { __typename: 'Position', x?: any | null, y?: any | null } | { __typename: 'Quest' } | { __typename: 'Stats' } | null> | null } | null } | null> | null } | null };


export const GetAttributesForPlayerDocument = gql`
    query getAttributesForPlayer($player: ContractAddress!, $questId: u32!, $entityId: u32!) {
  attributesModels(
    where: {player: $player, quest_id: $questId, entity_id: $entityId}
  ) {
    edges {
      node {
        points
        str
        dex
        con
        int
        wis
        cha
        str_modifier
        dex_modifier
        con_modifier
        int_modifier
        wis_modifier
        cha_modifier
      }
    }
  }
}
    `;
export const GetCounterForPlayerDocument = gql`
    query getCounterForPlayer($player: ContractAddress!) {
  counterModels(where: {player: $player}) {
    edges {
      node {
        count
      }
    }
  }
}
    `;
export const GetQuestForPlayerDocument = gql`
    query getQuestForPlayer($player: ContractAddress!, $questId: u32!) {
  questModels(where: {player: $player, quest_id: $questId}) {
    edges {
      node {
        quest_state
      }
    }
  }
}
    `;
export const GetEntitiesDocument = gql`
    query getEntities {
  entities(keys: ["%"]) {
    edges {
      node {
        keys
        models {
          __typename
          ... on Position {
            x
            y
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const GetAttributesForPlayerDocumentString = print(GetAttributesForPlayerDocument);
const GetCounterForPlayerDocumentString = print(GetCounterForPlayerDocument);
const GetQuestForPlayerDocumentString = print(GetQuestForPlayerDocument);
const GetEntitiesDocumentString = print(GetEntitiesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAttributesForPlayer(variables: GetAttributesForPlayerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetAttributesForPlayerQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetAttributesForPlayerQuery>(GetAttributesForPlayerDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAttributesForPlayer', 'query');
    },
    getCounterForPlayer(variables: GetCounterForPlayerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetCounterForPlayerQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetCounterForPlayerQuery>(GetCounterForPlayerDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCounterForPlayer', 'query');
    },
    getQuestForPlayer(variables: GetQuestForPlayerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetQuestForPlayerQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetQuestForPlayerQuery>(GetQuestForPlayerDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getQuestForPlayer', 'query');
    },
    getEntities(variables?: GetEntitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetEntitiesQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetEntitiesQuery>(GetEntitiesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getEntities', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;