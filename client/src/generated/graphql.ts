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
  Enum: { input: any; output: any; }
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
  totalCount: Scalars['Int']['output'];
};

export type AttributesEdge = {
  __typename?: 'AttributesEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Attributes>;
};

export type AttributesOrder = {
  direction: Direction;
  field: AttributesOrderOrderField;
};

export enum AttributesOrderOrderField {
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
  cha?: InputMaybe<Scalars['Int']['input']>;
  chaGT?: InputMaybe<Scalars['Int']['input']>;
  chaGTE?: InputMaybe<Scalars['Int']['input']>;
  chaLT?: InputMaybe<Scalars['Int']['input']>;
  chaLTE?: InputMaybe<Scalars['Int']['input']>;
  chaNEQ?: InputMaybe<Scalars['Int']['input']>;
  cha_modifier?: InputMaybe<Scalars['Int']['input']>;
  cha_modifierGT?: InputMaybe<Scalars['Int']['input']>;
  cha_modifierGTE?: InputMaybe<Scalars['Int']['input']>;
  cha_modifierLT?: InputMaybe<Scalars['Int']['input']>;
  cha_modifierLTE?: InputMaybe<Scalars['Int']['input']>;
  cha_modifierNEQ?: InputMaybe<Scalars['Int']['input']>;
  con?: InputMaybe<Scalars['Int']['input']>;
  conGT?: InputMaybe<Scalars['Int']['input']>;
  conGTE?: InputMaybe<Scalars['Int']['input']>;
  conLT?: InputMaybe<Scalars['Int']['input']>;
  conLTE?: InputMaybe<Scalars['Int']['input']>;
  conNEQ?: InputMaybe<Scalars['Int']['input']>;
  con_modifier?: InputMaybe<Scalars['Int']['input']>;
  con_modifierGT?: InputMaybe<Scalars['Int']['input']>;
  con_modifierGTE?: InputMaybe<Scalars['Int']['input']>;
  con_modifierLT?: InputMaybe<Scalars['Int']['input']>;
  con_modifierLTE?: InputMaybe<Scalars['Int']['input']>;
  con_modifierNEQ?: InputMaybe<Scalars['Int']['input']>;
  dex?: InputMaybe<Scalars['Int']['input']>;
  dexGT?: InputMaybe<Scalars['Int']['input']>;
  dexGTE?: InputMaybe<Scalars['Int']['input']>;
  dexLT?: InputMaybe<Scalars['Int']['input']>;
  dexLTE?: InputMaybe<Scalars['Int']['input']>;
  dexNEQ?: InputMaybe<Scalars['Int']['input']>;
  dex_modifier?: InputMaybe<Scalars['Int']['input']>;
  dex_modifierGT?: InputMaybe<Scalars['Int']['input']>;
  dex_modifierGTE?: InputMaybe<Scalars['Int']['input']>;
  dex_modifierLT?: InputMaybe<Scalars['Int']['input']>;
  dex_modifierLTE?: InputMaybe<Scalars['Int']['input']>;
  dex_modifierNEQ?: InputMaybe<Scalars['Int']['input']>;
  entity_id?: InputMaybe<Scalars['Int']['input']>;
  entity_idGT?: InputMaybe<Scalars['Int']['input']>;
  entity_idGTE?: InputMaybe<Scalars['Int']['input']>;
  entity_idLT?: InputMaybe<Scalars['Int']['input']>;
  entity_idLTE?: InputMaybe<Scalars['Int']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['Int']['input']>;
  int?: InputMaybe<Scalars['Int']['input']>;
  intGT?: InputMaybe<Scalars['Int']['input']>;
  intGTE?: InputMaybe<Scalars['Int']['input']>;
  intLT?: InputMaybe<Scalars['Int']['input']>;
  intLTE?: InputMaybe<Scalars['Int']['input']>;
  intNEQ?: InputMaybe<Scalars['Int']['input']>;
  int_modifier?: InputMaybe<Scalars['Int']['input']>;
  int_modifierGT?: InputMaybe<Scalars['Int']['input']>;
  int_modifierGTE?: InputMaybe<Scalars['Int']['input']>;
  int_modifierLT?: InputMaybe<Scalars['Int']['input']>;
  int_modifierLTE?: InputMaybe<Scalars['Int']['input']>;
  int_modifierNEQ?: InputMaybe<Scalars['Int']['input']>;
  player?: InputMaybe<Scalars['String']['input']>;
  playerGT?: InputMaybe<Scalars['String']['input']>;
  playerGTE?: InputMaybe<Scalars['String']['input']>;
  playerLT?: InputMaybe<Scalars['String']['input']>;
  playerLTE?: InputMaybe<Scalars['String']['input']>;
  playerNEQ?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  pointsGT?: InputMaybe<Scalars['Int']['input']>;
  pointsGTE?: InputMaybe<Scalars['Int']['input']>;
  pointsLT?: InputMaybe<Scalars['Int']['input']>;
  pointsLTE?: InputMaybe<Scalars['Int']['input']>;
  pointsNEQ?: InputMaybe<Scalars['Int']['input']>;
  quest_id?: InputMaybe<Scalars['Int']['input']>;
  quest_idGT?: InputMaybe<Scalars['Int']['input']>;
  quest_idGTE?: InputMaybe<Scalars['Int']['input']>;
  quest_idLT?: InputMaybe<Scalars['Int']['input']>;
  quest_idLTE?: InputMaybe<Scalars['Int']['input']>;
  quest_idNEQ?: InputMaybe<Scalars['Int']['input']>;
  str?: InputMaybe<Scalars['Int']['input']>;
  strGT?: InputMaybe<Scalars['Int']['input']>;
  strGTE?: InputMaybe<Scalars['Int']['input']>;
  strLT?: InputMaybe<Scalars['Int']['input']>;
  strLTE?: InputMaybe<Scalars['Int']['input']>;
  strNEQ?: InputMaybe<Scalars['Int']['input']>;
  str_modifier?: InputMaybe<Scalars['Int']['input']>;
  str_modifierGT?: InputMaybe<Scalars['Int']['input']>;
  str_modifierGTE?: InputMaybe<Scalars['Int']['input']>;
  str_modifierLT?: InputMaybe<Scalars['Int']['input']>;
  str_modifierLTE?: InputMaybe<Scalars['Int']['input']>;
  str_modifierNEQ?: InputMaybe<Scalars['Int']['input']>;
  wis?: InputMaybe<Scalars['Int']['input']>;
  wisGT?: InputMaybe<Scalars['Int']['input']>;
  wisGTE?: InputMaybe<Scalars['Int']['input']>;
  wisLT?: InputMaybe<Scalars['Int']['input']>;
  wisLTE?: InputMaybe<Scalars['Int']['input']>;
  wisNEQ?: InputMaybe<Scalars['Int']['input']>;
  wis_modifier?: InputMaybe<Scalars['Int']['input']>;
  wis_modifierGT?: InputMaybe<Scalars['Int']['input']>;
  wis_modifierGTE?: InputMaybe<Scalars['Int']['input']>;
  wis_modifierLT?: InputMaybe<Scalars['Int']['input']>;
  wis_modifierLTE?: InputMaybe<Scalars['Int']['input']>;
  wis_modifierNEQ?: InputMaybe<Scalars['Int']['input']>;
};

export type Component = {
  __typename?: 'Component';
  classHash?: Maybe<Scalars['felt252']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['felt252']['output']>;
};

export type ComponentConnection = {
  __typename?: 'ComponentConnection';
  edges?: Maybe<Array<Maybe<ComponentEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type ComponentEdge = {
  __typename?: 'ComponentEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Component>;
};

export type ComponentUnion = Attributes | Counter | Position | Quest | Stats;

export type Counter = {
  __typename?: 'Counter';
  count?: Maybe<Scalars['u32']['output']>;
  entity?: Maybe<Entity>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
};

export type CounterConnection = {
  __typename?: 'CounterConnection';
  edges?: Maybe<Array<Maybe<CounterEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type CounterEdge = {
  __typename?: 'CounterEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Counter>;
};

export type CounterOrder = {
  direction: Direction;
  field: CounterOrderOrderField;
};

export enum CounterOrderOrderField {
  Count = 'COUNT',
  Player = 'PLAYER'
}

export type CounterWhereInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  countGT?: InputMaybe<Scalars['Int']['input']>;
  countGTE?: InputMaybe<Scalars['Int']['input']>;
  countLT?: InputMaybe<Scalars['Int']['input']>;
  countLTE?: InputMaybe<Scalars['Int']['input']>;
  countNEQ?: InputMaybe<Scalars['Int']['input']>;
  player?: InputMaybe<Scalars['String']['input']>;
  playerGT?: InputMaybe<Scalars['String']['input']>;
  playerGTE?: InputMaybe<Scalars['String']['input']>;
  playerLT?: InputMaybe<Scalars['String']['input']>;
  playerLTE?: InputMaybe<Scalars['String']['input']>;
  playerNEQ?: InputMaybe<Scalars['String']['input']>;
};

export enum Direction {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Entity = {
  __typename?: 'Entity';
  componentNames?: Maybe<Scalars['String']['output']>;
  components?: Maybe<Array<Maybe<ComponentUnion>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EntityConnection = {
  __typename?: 'EntityConnection';
  edges?: Maybe<Array<Maybe<EntityEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type EntityEdge = {
  __typename?: 'EntityEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Entity>;
};

export type Event = {
  __typename?: 'Event';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Scalars['String']['output']>;
  systemCall: SystemCall;
  systemCallId?: Maybe<Scalars['Int']['output']>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  edges?: Maybe<Array<Maybe<EventEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Event>;
};

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
  totalCount: Scalars['Int']['output'];
};

export type PositionEdge = {
  __typename?: 'PositionEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Position>;
};

export type PositionOrder = {
  direction: Direction;
  field: PositionOrderOrderField;
};

export enum PositionOrderOrderField {
  EntityId = 'ENTITY_ID',
  Player = 'PLAYER',
  QuestId = 'QUEST_ID',
  X = 'X',
  Y = 'Y'
}

export type PositionWhereInput = {
  entity_id?: InputMaybe<Scalars['Int']['input']>;
  entity_idGT?: InputMaybe<Scalars['Int']['input']>;
  entity_idGTE?: InputMaybe<Scalars['Int']['input']>;
  entity_idLT?: InputMaybe<Scalars['Int']['input']>;
  entity_idLTE?: InputMaybe<Scalars['Int']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['Int']['input']>;
  player?: InputMaybe<Scalars['String']['input']>;
  playerGT?: InputMaybe<Scalars['String']['input']>;
  playerGTE?: InputMaybe<Scalars['String']['input']>;
  playerLT?: InputMaybe<Scalars['String']['input']>;
  playerLTE?: InputMaybe<Scalars['String']['input']>;
  playerNEQ?: InputMaybe<Scalars['String']['input']>;
  quest_id?: InputMaybe<Scalars['Int']['input']>;
  quest_idGT?: InputMaybe<Scalars['Int']['input']>;
  quest_idGTE?: InputMaybe<Scalars['Int']['input']>;
  quest_idLT?: InputMaybe<Scalars['Int']['input']>;
  quest_idLTE?: InputMaybe<Scalars['Int']['input']>;
  quest_idNEQ?: InputMaybe<Scalars['Int']['input']>;
  x?: InputMaybe<Scalars['Int']['input']>;
  xGT?: InputMaybe<Scalars['Int']['input']>;
  xGTE?: InputMaybe<Scalars['Int']['input']>;
  xLT?: InputMaybe<Scalars['Int']['input']>;
  xLTE?: InputMaybe<Scalars['Int']['input']>;
  xNEQ?: InputMaybe<Scalars['Int']['input']>;
  y?: InputMaybe<Scalars['Int']['input']>;
  yGT?: InputMaybe<Scalars['Int']['input']>;
  yGTE?: InputMaybe<Scalars['Int']['input']>;
  yLT?: InputMaybe<Scalars['Int']['input']>;
  yLTE?: InputMaybe<Scalars['Int']['input']>;
  yNEQ?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  attributesComponents?: Maybe<AttributesConnection>;
  component: Component;
  components?: Maybe<ComponentConnection>;
  counterComponents?: Maybe<CounterConnection>;
  entities?: Maybe<EntityConnection>;
  entity: Entity;
  event: Event;
  events?: Maybe<EventConnection>;
  positionComponents?: Maybe<PositionConnection>;
  questComponents?: Maybe<QuestConnection>;
  statsComponents?: Maybe<StatsConnection>;
  system: System;
  systemCall: SystemCall;
  systemCalls?: Maybe<SystemCallConnection>;
  systems?: Maybe<SystemConnection>;
};


export type QueryAttributesComponentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<AttributesOrder>;
  where?: InputMaybe<AttributesWhereInput>;
};


export type QueryComponentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCounterComponentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CounterOrder>;
  where?: InputMaybe<CounterWhereInput>;
};


export type QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEntityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEventArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPositionComponentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PositionOrder>;
  where?: InputMaybe<PositionWhereInput>;
};


export type QueryQuestComponentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<QuestOrder>;
  where?: InputMaybe<QuestWhereInput>;
};


export type QueryStatsComponentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<StatsOrder>;
  where?: InputMaybe<StatsWhereInput>;
};


export type QuerySystemArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySystemCallArgs = {
  id: Scalars['Int']['input'];
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
  totalCount: Scalars['Int']['output'];
};

export type QuestEdge = {
  __typename?: 'QuestEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Quest>;
};

export type QuestOrder = {
  direction: Direction;
  field: QuestOrderOrderField;
};

export enum QuestOrderOrderField {
  Player = 'PLAYER',
  QuestId = 'QUEST_ID',
  QuestState = 'QUEST_STATE'
}

export type QuestWhereInput = {
  player?: InputMaybe<Scalars['String']['input']>;
  playerGT?: InputMaybe<Scalars['String']['input']>;
  playerGTE?: InputMaybe<Scalars['String']['input']>;
  playerLT?: InputMaybe<Scalars['String']['input']>;
  playerLTE?: InputMaybe<Scalars['String']['input']>;
  playerNEQ?: InputMaybe<Scalars['String']['input']>;
  quest_id?: InputMaybe<Scalars['Int']['input']>;
  quest_idGT?: InputMaybe<Scalars['Int']['input']>;
  quest_idGTE?: InputMaybe<Scalars['Int']['input']>;
  quest_idLT?: InputMaybe<Scalars['Int']['input']>;
  quest_idLTE?: InputMaybe<Scalars['Int']['input']>;
  quest_idNEQ?: InputMaybe<Scalars['Int']['input']>;
  quest_state?: InputMaybe<Scalars['Int']['input']>;
  quest_stateGT?: InputMaybe<Scalars['Int']['input']>;
  quest_stateGTE?: InputMaybe<Scalars['Int']['input']>;
  quest_stateLT?: InputMaybe<Scalars['Int']['input']>;
  quest_stateLTE?: InputMaybe<Scalars['Int']['input']>;
  quest_stateNEQ?: InputMaybe<Scalars['Int']['input']>;
};

export type Stats = {
  __typename?: 'Stats';
  ac?: Maybe<Scalars['u32']['output']>;
  damage_dice?: Maybe<Scalars['u32']['output']>;
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['u32']['output']>;
  hp?: Maybe<Scalars['Enum']['output']>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
  quest_id?: Maybe<Scalars['u32']['output']>;
};

export type StatsConnection = {
  __typename?: 'StatsConnection';
  edges?: Maybe<Array<Maybe<StatsEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type StatsEdge = {
  __typename?: 'StatsEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<Stats>;
};

export type StatsOrder = {
  direction: Direction;
  field: StatsOrderOrderField;
};

export enum StatsOrderOrderField {
  Ac = 'AC',
  DamageDice = 'DAMAGE_DICE',
  EntityId = 'ENTITY_ID',
  Hp = 'HP',
  Player = 'PLAYER',
  QuestId = 'QUEST_ID'
}

export type StatsWhereInput = {
  ac?: InputMaybe<Scalars['Int']['input']>;
  acGT?: InputMaybe<Scalars['Int']['input']>;
  acGTE?: InputMaybe<Scalars['Int']['input']>;
  acLT?: InputMaybe<Scalars['Int']['input']>;
  acLTE?: InputMaybe<Scalars['Int']['input']>;
  acNEQ?: InputMaybe<Scalars['Int']['input']>;
  damage_dice?: InputMaybe<Scalars['Int']['input']>;
  damage_diceGT?: InputMaybe<Scalars['Int']['input']>;
  damage_diceGTE?: InputMaybe<Scalars['Int']['input']>;
  damage_diceLT?: InputMaybe<Scalars['Int']['input']>;
  damage_diceLTE?: InputMaybe<Scalars['Int']['input']>;
  damage_diceNEQ?: InputMaybe<Scalars['Int']['input']>;
  entity_id?: InputMaybe<Scalars['Int']['input']>;
  entity_idGT?: InputMaybe<Scalars['Int']['input']>;
  entity_idGTE?: InputMaybe<Scalars['Int']['input']>;
  entity_idLT?: InputMaybe<Scalars['Int']['input']>;
  entity_idLTE?: InputMaybe<Scalars['Int']['input']>;
  entity_idNEQ?: InputMaybe<Scalars['Int']['input']>;
  hp?: InputMaybe<Scalars['Int']['input']>;
  hpGT?: InputMaybe<Scalars['Int']['input']>;
  hpGTE?: InputMaybe<Scalars['Int']['input']>;
  hpLT?: InputMaybe<Scalars['Int']['input']>;
  hpLTE?: InputMaybe<Scalars['Int']['input']>;
  hpNEQ?: InputMaybe<Scalars['Int']['input']>;
  player?: InputMaybe<Scalars['String']['input']>;
  playerGT?: InputMaybe<Scalars['String']['input']>;
  playerGTE?: InputMaybe<Scalars['String']['input']>;
  playerLT?: InputMaybe<Scalars['String']['input']>;
  playerLTE?: InputMaybe<Scalars['String']['input']>;
  playerNEQ?: InputMaybe<Scalars['String']['input']>;
  quest_id?: InputMaybe<Scalars['Int']['input']>;
  quest_idGT?: InputMaybe<Scalars['Int']['input']>;
  quest_idGTE?: InputMaybe<Scalars['Int']['input']>;
  quest_idLT?: InputMaybe<Scalars['Int']['input']>;
  quest_idLTE?: InputMaybe<Scalars['Int']['input']>;
  quest_idNEQ?: InputMaybe<Scalars['Int']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  componentRegistered: Component;
  entityUpdated: Entity;
};

export type System = {
  __typename?: 'System';
  classHash?: Maybe<Scalars['felt252']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  systemCalls: Array<SystemCall>;
  transactionHash?: Maybe<Scalars['felt252']['output']>;
};

export type SystemCall = {
  __typename?: 'SystemCall';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  system: System;
  systemId?: Maybe<Scalars['ID']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

export type SystemCallConnection = {
  __typename?: 'SystemCallConnection';
  edges?: Maybe<Array<Maybe<SystemCallEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type SystemCallEdge = {
  __typename?: 'SystemCallEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<SystemCall>;
};

export type SystemConnection = {
  __typename?: 'SystemConnection';
  edges?: Maybe<Array<Maybe<SystemEdge>>>;
  totalCount: Scalars['Int']['output'];
};

export type SystemEdge = {
  __typename?: 'SystemEdge';
  cursor: Scalars['Cursor']['output'];
  node?: Maybe<System>;
};

export type GetEntitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntitiesQuery = { __typename?: 'Query', entities?: { __typename?: 'EntityConnection', edges?: Array<{ __typename?: 'EntityEdge', node?: { __typename?: 'Entity', keys?: Array<string | null> | null, components?: Array<{ __typename: 'Attributes', points?: any | null, str?: any | null, dex?: any | null, con?: any | null, int?: any | null, wis?: any | null, cha?: any | null, str_modifier?: any | null, dex_modifier?: any | null, con_modifier?: any | null, int_modifier?: any | null, wis_modifier?: any | null, cha_modifier?: any | null } | { __typename: 'Counter', count?: any | null } | { __typename: 'Position', x?: any | null, y?: any | null } | { __typename: 'Quest', quest_state?: any | null } | { __typename: 'Stats', ac?: any | null, damage_dice?: any | null, hp?: any | null } | null> | null } | null } | null> | null } | null };


export const GetEntitiesDocument = gql`
    query getEntities {
  entities(keys: ["%"]) {
    edges {
      node {
        keys
        components {
          __typename
          ... on Attributes {
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
          ... on Stats {
            ac
            damage_dice
            hp
          }
          ... on Position {
            x
            y
          }
          ... on Counter {
            count
          }
          ... on Quest {
            quest_state
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const GetEntitiesDocumentString = print(GetEntitiesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getEntities(variables?: GetEntitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetEntitiesQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetEntitiesQuery>(GetEntitiesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getEntities', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;