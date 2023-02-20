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
  Date: any;
  DateEnd: any;
  DateTime: any;
  DateTimeUtc: any;
  Decimal: any;
  EMAIL: any;
  JSON: any;
  Mixed: any;
  StringInteger: any;
};

export type Account = {
  __typename?: 'Account';
  account_name: Scalars['String'];
  account_number?: Maybe<Scalars['String']>;
  account_state?: Maybe<AccountState>;
  account_type?: Maybe<AccountType>;
  activated_at?: Maybe<Scalars['DateTimeUtc']>;
  client?: Maybe<Client>;
  client_accounts: Array<ClientAccountsDetails>;
  commission_template?: Maybe<CommissionTemplate>;
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  currency?: Maybe<Currencies>;
  group?: Maybe<GroupRole>;
  group_type?: Maybe<GroupType>;
  id: Scalars['ID'];
  is_primary?: Maybe<Scalars['Boolean']>;
  member?: Maybe<Members>;
  owner?: Maybe<ApplicantIndividual>;
  payment_bank?: Maybe<PaymentBank>;
  payment_provider?: Maybe<PaymentProvider>;
  payment_system?: Maybe<PaymentSystem>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type AccountClient = {
  __typename?: 'AccountClient';
  client: Client;
  id: Scalars['ID'];
};

export enum AccountClientsType {
  Company = 'COMPANY',
  Individual = 'INDIVIDUAL'
}

export type AccountGenerateIbanResponse = {
  __typename?: 'AccountGenerateIbanResponse';
  message: Scalars['String'];
  status: Scalars['String'];
};

export type AccountLimit = {
  __typename?: 'AccountLimit';
  account?: Maybe<Account>;
  account_id?: Maybe<Scalars['ID']>;
  amount?: Maybe<Scalars['Decimal']>;
  commission_template_limit_action_type?: Maybe<CommissionTemplateLimitActionType>;
  commission_template_limit_action_type_id?: Maybe<Scalars['ID']>;
  commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
  commission_template_limit_period_id?: Maybe<Scalars['ID']>;
  commission_template_limit_transfer_direction?: Maybe<CommissionTemplateLimitTransferDirection>;
  commission_template_limit_transfer_direction_id?: Maybe<Scalars['ID']>;
  commission_template_limit_type?: Maybe<CommissionTemplateLimitType>;
  currency?: Maybe<Currencies>;
  currency_id?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  period_count?: Maybe<Scalars['Int']>;
};

export type AccountLimitPaginator = {
  __typename?: 'AccountLimitPaginator';
  data: Array<AccountLimit>;
  paginatorInfo: PaginatorInfo;
};

export type AccountPaginator = {
  __typename?: 'AccountPaginator';
  data: Array<Account>;
  paginatorInfo: PaginatorInfo;
};

export type AccountReachedLimit = {
  __typename?: 'AccountReachedLimit';
  account?: Maybe<Account>;
  account_id: Scalars['ID'];
  amount: Scalars['Decimal'];
  client_name: Scalars['String'];
  client_type: Scalars['String'];
  group_type: Scalars['String'];
  id: Scalars['ID'];
  limit_currency: Scalars['String'];
  limit_type: Scalars['String'];
  limit_value: Scalars['Int'];
  period: Scalars['Int'];
  transfer_direction: Scalars['String'];
};

export type AccountReachedLimitPaginator = {
  __typename?: 'AccountReachedLimitPaginator';
  data: Array<AccountReachedLimit>;
  paginatorInfo: PaginatorInfo;
};

export type AccountState = {
  __typename?: 'AccountState';
  active: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum AccountType {
  Business = 'Business',
  Private = 'Private'
}

export type ActiveSession = {
  __typename?: 'ActiveSession';
  browser?: Maybe<Scalars['String']>;
  browser_version?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTimeUtc'];
  device_type?: Maybe<Scalars['String']>;
  domain: Scalars['String'];
  id: Scalars['String'];
  ip?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  trusted?: Maybe<Scalars['Boolean']>;
};

export type ActiveSessionMutatorResponse = {
  __typename?: 'ActiveSessionMutatorResponse';
  message: Scalars['String'];
  status: Scalars['String'];
};

export type ActiveSessions = {
  __typename?: 'ActiveSessions';
  data?: Maybe<Array<ActiveSession>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export type ActivityLog = {
  __typename?: 'ActivityLog';
  changes?: Maybe<Scalars['String']>;
  company: Scalars['String'];
  created_at: Scalars['DateTimeUtc'];
  description?: Maybe<Scalars['String']>;
  domain: Scalars['String'];
  group: Scalars['String'];
  id: Scalars['String'];
  member: Scalars['String'];
};

export type ActivityLogs = {
  __typename?: 'ActivityLogs';
  data?: Maybe<Array<ActivityLog>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export type AdditionalFieldInput = {
  field_name?: InputMaybe<Scalars['String']>;
  field_type?: InputMaybe<FieldTypes>;
  field_value?: InputMaybe<Scalars['StringInteger']>;
};

export type ApplicantAccount = {
  __typename?: 'ApplicantAccount';
  account_name: Scalars['String'];
  account_number?: Maybe<Scalars['String']>;
  account_type: Scalars['String'];
  currency?: Maybe<Currencies>;
  current_balance?: Maybe<Scalars['Decimal']>;
  id: Scalars['ID'];
  is_primary?: Maybe<Scalars['Boolean']>;
  is_show?: Maybe<Scalars['Boolean']>;
};

export type ApplicantBankingAccess = {
  __typename?: 'ApplicantBankingAccess';
  applicant_company?: Maybe<ApplicantCompany>;
  applicant_individual?: Maybe<ApplicantIndividual>;
  contact_administrator: Scalars['Boolean'];
  create_payments?: Maybe<Scalars['Boolean']>;
  daily_limit: Scalars['Decimal'];
  grant_access?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  member?: Maybe<Members>;
  monthly_limit: Scalars['Decimal'];
  operation_limit: Scalars['Decimal'];
  role?: Maybe<Role>;
  sign_payments?: Maybe<Scalars['Boolean']>;
  used_daily_limit: Scalars['Decimal'];
  used_monthly_limit: Scalars['Decimal'];
};

export type ApplicantBankingAccesses = {
  __typename?: 'ApplicantBankingAccesses';
  data?: Maybe<Array<ApplicantBankingAccess>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export enum ApplicantClientType {
  Corporate = 'Corporate',
  Private = 'Private'
}

export type ApplicantCompany = {
  __typename?: 'ApplicantCompany';
  address?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  applicant_state?: Maybe<ApplicantState>;
  basic_info_additional_field?: Maybe<Scalars['JSON']>;
  business_type?: Maybe<ApplicantCompanyBusinessType>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  company_info_additional_fields?: Maybe<Scalars['JSON']>;
  company_position?: Maybe<ApplicantIndividualCompany>;
  company_type?: Maybe<Scalars['String']>;
  contacts_additional_fields?: Maybe<Scalars['JSON']>;
  country?: Maybe<Country>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  email?: Maybe<Scalars['EMAIL']>;
  email_verification?: Maybe<ApplicantVerificationStatus>;
  expires_at?: Maybe<Scalars['Date']>;
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  incorporate_date?: Maybe<Scalars['DateTimeUtc']>;
  kyc_level?: Maybe<ApplicantRiskLevel>;
  labels?: Maybe<Array<Maybe<ApplicantCompanyLabel>>>;
  language?: Maybe<Languages>;
  license_number?: Maybe<Scalars['String']>;
  manager?: Maybe<Members>;
  modules?: Maybe<Array<Maybe<ApplicantCompanyModules>>>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<ApplicantCompanyNotes>>>;
  office_address?: Maybe<Scalars['String']>;
  owner?: Maybe<ApplicantIndividual>;
  owner_position?: Maybe<ApplicantIndividualCompany>;
  owner_relation?: Maybe<ApplicantIndividualCompany>;
  phone?: Maybe<Scalars['String']>;
  phone_verification?: Maybe<ApplicantVerificationStatus>;
  photo?: Maybe<Files>;
  profile_additional_fields?: Maybe<Scalars['JSON']>;
  project?: Maybe<Project>;
  reg_at?: Maybe<Scalars['Date']>;
  reg_number?: Maybe<Scalars['String']>;
  risk_level?: Maybe<ApplicantRiskLevel>;
  state?: Maybe<Scalars['String']>;
  state_reason?: Maybe<ApplicantStateReason>;
  status?: Maybe<ApplicantStatus>;
  tax?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type ApplicantCompanyBusinessType = {
  __typename?: 'ApplicantCompanyBusinessType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantCompanyBusinessTypePaginator = {
  __typename?: 'ApplicantCompanyBusinessTypePaginator';
  data: Array<ApplicantCompanyBusinessType>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyLabel = {
  __typename?: 'ApplicantCompanyLabel';
  hex_color_code: Scalars['String'];
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type ApplicantCompanyLabelPaginator = {
  __typename?: 'ApplicantCompanyLabelPaginator';
  data: Array<ApplicantCompanyLabel>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyModules = {
  __typename?: 'ApplicantCompanyModules';
  id?: Maybe<Scalars['ID']>;
  is_active?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type ApplicantCompanyNotes = {
  __typename?: 'ApplicantCompanyNotes';
  applicant?: Maybe<ApplicantCompany>;
  author?: Maybe<Members>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  note: Scalars['String'];
};

export type ApplicantCompanyNotesPaginator = {
  __typename?: 'ApplicantCompanyNotesPaginator';
  data: Array<ApplicantCompanyNotes>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyPaginator = {
  __typename?: 'ApplicantCompanyPaginator';
  data: Array<ApplicantCompany>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantCompanyRiskLevelHistory = {
  __typename?: 'ApplicantCompanyRiskLevelHistory';
  applicant_company?: Maybe<ApplicantCompany>;
  comment: Scalars['String'];
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  manager?: Maybe<Members>;
  risk_level?: Maybe<ApplicantRiskLevel>;
};

export type ApplicantCompanyRiskLevelHistoryPaginator = {
  __typename?: 'ApplicantCompanyRiskLevelHistoryPaginator';
  data: Array<ApplicantCompanyRiskLevelHistory>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantDetailsRequisites = {
  __typename?: 'ApplicantDetailsRequisites';
  address: Scalars['String'];
  bank_address: Scalars['String'];
  bank_country: Scalars['String'];
  bank_name: Scalars['String'];
  beneficiary: Scalars['String'];
  country: Scalars['String'];
  currency: Scalars['String'];
  iban: Scalars['String'];
  swift_code: Scalars['String'];
};

export type ApplicantDevice = {
  __typename?: 'ApplicantDevice';
  browser?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTimeUtc'];
  device_type?: Maybe<Scalars['String']>;
  expired_at?: Maybe<Scalars['DateTimeUtc']>;
  id?: Maybe<Scalars['ID']>;
  ip?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  trusted: Scalars['Boolean'];
};

export type ApplicantDocument = {
  __typename?: 'ApplicantDocument';
  added_from?: Maybe<Scalars['String']>;
  applicant_id: Scalars['ID'];
  applicant_type: ApplicantType;
  company?: Maybe<Company>;
  country?: Maybe<Country>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  document_state?: Maybe<DocumentState>;
  document_state_id?: Maybe<Scalars['ID']>;
  document_type?: Maybe<DocumentType>;
  document_type_id?: Maybe<Scalars['ID']>;
  file?: Maybe<Files>;
  id: Scalars['ID'];
  info?: Maybe<Scalars['String']>;
  internal_notes?: Maybe<Array<Maybe<ApplicantDocumentInternalNote>>>;
  tags?: Maybe<Array<Maybe<ApplicantDocumentTag>>>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type ApplicantDocumentInternalNote = {
  __typename?: 'ApplicantDocumentInternalNote';
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  document?: Maybe<ApplicantDocument>;
  id: Scalars['ID'];
  member?: Maybe<Members>;
  note?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type ApplicantDocumentInternalNotePaginator = {
  __typename?: 'ApplicantDocumentInternalNotePaginator';
  data: Array<ApplicantDocumentInternalNote>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantDocumentPaginator = {
  __typename?: 'ApplicantDocumentPaginator';
  data: Array<ApplicantDocument>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantDocumentTag = {
  __typename?: 'ApplicantDocumentTag';
  category?: Maybe<ApplicantDocumentTagCategory>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  member?: Maybe<Members>;
  name: Scalars['String'];
};

export type ApplicantDocumentTagCategory = {
  __typename?: 'ApplicantDocumentTagCategory';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantDocumentTagCategoryPaginator = {
  __typename?: 'ApplicantDocumentTagCategoryPaginator';
  data: Array<ApplicantDocumentTagCategory>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantDocumentTagPaginator = {
  __typename?: 'ApplicantDocumentTagPaginator';
  data: Array<ApplicantDocumentTag>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividual = {
  __typename?: 'ApplicantIndividual';
  address?: Maybe<Scalars['String']>;
  address_additional_fields?: Maybe<Scalars['JSON']>;
  applicant_companies?: Maybe<Array<Maybe<ApplicantCompany>>>;
  applicant_state?: Maybe<ApplicantState>;
  backup_codes?: Maybe<Scalars['JSON']>;
  banking_access?: Maybe<Array<Maybe<ApplicantBankingAccess>>>;
  birth_at?: Maybe<Scalars['Date']>;
  birth_city?: Maybe<Scalars['String']>;
  birth_country?: Maybe<Country>;
  birth_state?: Maybe<Scalars['String']>;
  citizenship_country?: Maybe<Country>;
  city?: Maybe<Scalars['String']>;
  contacts_additional_fields?: Maybe<Scalars['JSON']>;
  country?: Maybe<Country>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  created_for?: Maybe<Company>;
  email?: Maybe<Scalars['EMAIL']>;
  email_verification?: Maybe<ApplicantVerificationStatus>;
  first_name?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  google2fa_secret?: Maybe<Scalars['String']>;
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  kyc_level?: Maybe<ApplicantKycLevel>;
  labels?: Maybe<Array<Maybe<ApplicantIndividualLabel>>>;
  language?: Maybe<Languages>;
  last_name?: Maybe<Scalars['String']>;
  last_screened_at?: Maybe<Scalars['DateTimeUtc']>;
  manager?: Maybe<Members>;
  middle_name?: Maybe<Scalars['String']>;
  modules?: Maybe<Array<Maybe<ApplicantIndividualModules>>>;
  nationality?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<ApplicantIndividualNotes>>>;
  personal_additional_fields?: Maybe<Scalars['JSON']>;
  phone?: Maybe<Scalars['String']>;
  phone_verification?: Maybe<ApplicantVerificationStatus>;
  photo?: Maybe<Files>;
  profile_additional_fields?: Maybe<Scalars['JSON']>;
  project?: Maybe<Project>;
  risk_level?: Maybe<ApplicantRiskLevel>;
  security_pin?: Maybe<Scalars['String']>;
  sex?: Maybe<Sex>;
  state?: Maybe<Scalars['String']>;
  state_reason?: Maybe<ApplicantStateReason>;
  status?: Maybe<ApplicantStatus>;
  two_factor_auth?: Maybe<TwoFactorAuthSettings>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
  url?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type ApplicantIndividualCompany = {
  __typename?: 'ApplicantIndividualCompany';
  applicant_company?: Maybe<ApplicantCompany>;
  applicant_company_id: Scalars['ID'];
  applicant_id: Scalars['ID'];
  applicant_individual_company_position_id: Scalars['ID'];
  applicant_individual_company_relation_id: Scalars['ID'];
  applicant_type: Scalars['String'];
  client?: Maybe<Client>;
  percentage_owned?: Maybe<Scalars['Float']>;
  position_in_company?: Maybe<ApplicantIndividualCompanyPosition>;
  relation_to_company?: Maybe<ApplicantIndividualCompanyRelation>;
};

export type ApplicantIndividualCompanyPosition = {
  __typename?: 'ApplicantIndividualCompanyPosition';
  company?: Maybe<Company>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantIndividualCompanyPositionPaginator = {
  __typename?: 'ApplicantIndividualCompanyPositionPaginator';
  data: Array<ApplicantIndividualCompanyPosition>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualCompanyRelation = {
  __typename?: 'ApplicantIndividualCompanyRelation';
  company?: Maybe<Company>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantIndividualCompanyRelationPaginator = {
  __typename?: 'ApplicantIndividualCompanyRelationPaginator';
  data: Array<ApplicantIndividualCompanyRelation>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualLabel = {
  __typename?: 'ApplicantIndividualLabel';
  hex_color_code: Scalars['String'];
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type ApplicantIndividualLabelPaginator = {
  __typename?: 'ApplicantIndividualLabelPaginator';
  data: Array<ApplicantIndividualLabel>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualModules = {
  __typename?: 'ApplicantIndividualModules';
  id?: Maybe<Scalars['ID']>;
  is_active?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type ApplicantIndividualNotes = {
  __typename?: 'ApplicantIndividualNotes';
  applicant?: Maybe<ApplicantIndividual>;
  author?: Maybe<Members>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  note: Scalars['String'];
};

export type ApplicantIndividualNotesPaginator = {
  __typename?: 'ApplicantIndividualNotesPaginator';
  data: Array<ApplicantIndividualNotes>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantIndividualPaginator = {
  __typename?: 'ApplicantIndividualPaginator';
  data: Array<ApplicantIndividual>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantKycLevel = {
  __typename?: 'ApplicantKycLevel';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantKycLevelPaginator = {
  __typename?: 'ApplicantKycLevelPaginator';
  data: Array<ApplicantKycLevel>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantLinkedCompany = {
  __typename?: 'ApplicantLinkedCompany';
  company?: Maybe<ApplicantCompany>;
  company_position?: Maybe<ApplicantIndividualCompanyPosition>;
  company_relation?: Maybe<ApplicantIndividualCompanyRelation>;
};

export type ApplicantModules = {
  __typename?: 'ApplicantModules';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantModulesPaginator = {
  __typename?: 'ApplicantModulesPaginator';
  data: Array<ApplicantModules>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantProfile = {
  __typename?: 'ApplicantProfile';
  address?: Maybe<Scalars['String']>;
  applicant_state?: Maybe<ApplicantState>;
  backup_codes?: Maybe<Scalars['JSON']>;
  birth_at?: Maybe<Scalars['Date']>;
  birth_city?: Maybe<Scalars['String']>;
  birth_country?: Maybe<Country>;
  birth_state?: Maybe<Scalars['String']>;
  citizenship_country?: Maybe<Country>;
  city?: Maybe<Scalars['String']>;
  companies?: Maybe<Array<Maybe<ApplicantCompany>>>;
  contacts_additional_fields?: Maybe<Scalars['JSON']>;
  country?: Maybe<Country>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  created_for?: Maybe<Company>;
  email?: Maybe<Scalars['EMAIL']>;
  first_name?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  google2fa_secret?: Maybe<Scalars['String']>;
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  is_verification_phone?: Maybe<Scalars['Boolean']>;
  labels?: Maybe<Array<Maybe<ApplicantIndividualLabel>>>;
  language?: Maybe<Languages>;
  last_name?: Maybe<Scalars['String']>;
  manager?: Maybe<Members>;
  middle_name?: Maybe<Scalars['String']>;
  modules?: Maybe<Array<Maybe<ApplicantIndividualModules>>>;
  nationality?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<ApplicantIndividualNotes>>>;
  notify_device_email?: Maybe<Scalars['Boolean']>;
  personal_additional_fields?: Maybe<Scalars['JSON']>;
  phone?: Maybe<Scalars['String']>;
  photo?: Maybe<Files>;
  profile_additional_fields?: Maybe<Scalars['JSON']>;
  risk_level?: Maybe<ApplicantRiskLevel>;
  security_pin?: Maybe<Scalars['String']>;
  sex?: Maybe<Sex>;
  state?: Maybe<Scalars['String']>;
  state_reason?: Maybe<ApplicantStateReason>;
  status?: Maybe<ApplicantStatus>;
  two_factor_auth?: Maybe<TwoFactorAuthSettings>;
  url?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type ApplicantRequisites = {
  __typename?: 'ApplicantRequisites';
  account_number: Scalars['String'];
  bank?: Maybe<PaymentBank>;
  currency?: Maybe<Currencies>;
  id: Scalars['ID'];
  owner?: Maybe<ApplicantProfile>;
};

export type ApplicantRiskLevel = {
  __typename?: 'ApplicantRiskLevel';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantRiskLevelHistory = {
  __typename?: 'ApplicantRiskLevelHistory';
  applicant?: Maybe<ApplicantIndividual>;
  comment: Scalars['String'];
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  manager?: Maybe<Members>;
  risk_level?: Maybe<ApplicantRiskLevel>;
};

export type ApplicantRiskLevelHistoryPaginator = {
  __typename?: 'ApplicantRiskLevelHistoryPaginator';
  data: Array<ApplicantRiskLevelHistory>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantRiskLevelPaginator = {
  __typename?: 'ApplicantRiskLevelPaginator';
  data: Array<ApplicantRiskLevel>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantSettingsProfile = {
  __typename?: 'ApplicantSettingsProfile';
  email?: Maybe<Scalars['EMAIL']>;
  email_confirm_url?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  last_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
};

export type ApplicantState = {
  __typename?: 'ApplicantState';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantStatePaginator = {
  __typename?: 'ApplicantStatePaginator';
  data: Array<ApplicantState>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantStateReason = {
  __typename?: 'ApplicantStateReason';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantStateReasonPaginator = {
  __typename?: 'ApplicantStateReasonPaginator';
  data: Array<ApplicantStateReason>;
  paginatorInfo: PaginatorInfo;
};

export type ApplicantStatus = {
  __typename?: 'ApplicantStatus';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantStatusPaginator = {
  __typename?: 'ApplicantStatusPaginator';
  data: Array<ApplicantStatus>;
  paginatorInfo: PaginatorInfo;
};

export enum ApplicantType {
  ApplicantCompany = 'ApplicantCompany',
  ApplicantIndividual = 'ApplicantIndividual'
}

export type ApplicantVerificationStatus = {
  __typename?: 'ApplicantVerificationStatus';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type AuthenticationLog = {
  __typename?: 'AuthenticationLog';
  browser?: Maybe<Scalars['String']>;
  browser_version?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  client_type: Scalars['String'];
  company: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTimeUtc'];
  device_type?: Maybe<Scalars['String']>;
  domain: Scalars['String'];
  email: Scalars['String'];
  expired_at?: Maybe<Scalars['DateTimeUtc']>;
  group: Scalars['String'];
  id: Scalars['ID'];
  info?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  member: Scalars['String'];
  model?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  status?: Maybe<Scalars['String']>;
};

export type AuthenticationLogs = {
  __typename?: 'AuthenticationLogs';
  data?: Maybe<Array<AuthenticationLog>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export type BankCorrespondent = {
  __typename?: 'BankCorrespondent';
  address: Scalars['String'];
  bank_account: Scalars['String'];
  bank_code: Scalars['String'];
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  regions?: Maybe<Array<Maybe<Region>>>;
};

export type BankCorrespondentPaginator = {
  __typename?: 'BankCorrespondentPaginator';
  data: Array<BankCorrespondent>;
  paginatorInfo: PaginatorInfo;
};

export type BusinessActivity = {
  __typename?: 'BusinessActivity';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type BusinessActivityPaginator = {
  __typename?: 'BusinessActivityPaginator';
  data: Array<BusinessActivity>;
  paginatorInfo: PaginatorInfo;
};

export type Client = ApplicantCompany | ApplicantIndividual;

export type ClientAccountsDetails = {
  __typename?: 'ClientAccountsDetails';
  available_balance: Scalars['Decimal'];
  currency: Currencies;
  current_balance: Scalars['Decimal'];
  id: Scalars['ID'];
  reserved_balance: Scalars['Decimal'];
};

export type ClientIpAddress = {
  __typename?: 'ClientIpAddress';
  client_id?: Maybe<Scalars['ID']>;
  client_type?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ip_address?: Maybe<Scalars['String']>;
};

export enum ClientType {
  Administration = 'Administration',
  Client = 'Client'
}

export type Clientable = ApplicantCompany | ApplicantIndividual | Members;

export enum Column {
  CreatedAt = 'CREATED_AT',
  ExpiredAt = 'EXPIRED_AT',
  Id = 'ID'
}

export type CommissionPriceList = {
  __typename?: 'CommissionPriceList';
  account?: Maybe<Account>;
  commission_template?: Maybe<CommissionTemplate>;
  company?: Maybe<Company>;
  fees?: Maybe<Array<Maybe<PriceListFee>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  payment_system?: Maybe<PaymentSystem>;
  provider?: Maybe<PaymentProvider>;
  region?: Maybe<Region>;
};

export type CommissionPriceListPaginator = {
  __typename?: 'CommissionPriceListPaginator';
  data: Array<CommissionPriceList>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplate = {
  __typename?: 'CommissionTemplate';
  account?: Maybe<Account>;
  business_activity?: Maybe<Array<Maybe<BusinessActivity>>>;
  commission_template_limits?: Maybe<Array<Maybe<CommissionTemplateLimit>>>;
  company?: Maybe<Company>;
  country_id?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  currency_id?: Maybe<Array<Maybe<Scalars['ID']>>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  payment_provider?: Maybe<PaymentProvider>;
  regions?: Maybe<Array<Maybe<Region>>>;
};

export type CommissionTemplateLimit = {
  __typename?: 'CommissionTemplateLimit';
  amount: Scalars['Decimal'];
  commission_template: CommissionTemplate;
  commission_template_limit_action_type: CommissionTemplateLimitActionType;
  commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
  commission_template_limit_transfer_direction: CommissionTemplateLimitTransferDirection;
  commission_template_limit_type: CommissionTemplateLimitType;
  currency: Currencies;
  id: Scalars['ID'];
  payment_system: PaymentSystem;
  period_count?: Maybe<Scalars['Int']>;
  region: Region;
};

export type CommissionTemplateLimitActionType = {
  __typename?: 'CommissionTemplateLimitActionType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CommissionTemplateLimitActionTypePaginator = {
  __typename?: 'CommissionTemplateLimitActionTypePaginator';
  data: Array<CommissionTemplateLimitActionType>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplateLimitPaginator = {
  __typename?: 'CommissionTemplateLimitPaginator';
  data: Array<CommissionTemplateLimit>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplateLimitPeriod = {
  __typename?: 'CommissionTemplateLimitPeriod';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CommissionTemplateLimitPeriodPaginator = {
  __typename?: 'CommissionTemplateLimitPeriodPaginator';
  data: Array<CommissionTemplateLimitPeriod>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplateLimitTransferDirection = {
  __typename?: 'CommissionTemplateLimitTransferDirection';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CommissionTemplateLimitTransferDirectionPaginator = {
  __typename?: 'CommissionTemplateLimitTransferDirectionPaginator';
  data: Array<CommissionTemplateLimitTransferDirection>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplateLimitType = {
  __typename?: 'CommissionTemplateLimitType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CommissionTemplateLimitTypePaginator = {
  __typename?: 'CommissionTemplateLimitTypePaginator';
  data: Array<CommissionTemplateLimitType>;
  paginatorInfo: PaginatorInfo;
};

export type CommissionTemplatePaginator = {
  __typename?: 'CommissionTemplatePaginator';
  data: Array<CommissionTemplate>;
  paginatorInfo: PaginatorInfo;
};

export type Company = {
  __typename?: 'Company';
  additional_fields_basic?: Maybe<Scalars['JSON']>;
  additional_fields_data?: Maybe<Scalars['JSON']>;
  additional_fields_info?: Maybe<Scalars['JSON']>;
  additional_fields_settings?: Maybe<Scalars['JSON']>;
  address?: Maybe<Scalars['String']>;
  backoffice_forgot_password_url?: Maybe<Scalars['String']>;
  backoffice_login_url?: Maybe<Scalars['String']>;
  backoffice_support_email?: Maybe<Scalars['EMAIL']>;
  backoffice_support_url?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company_modules?: Maybe<Array<Maybe<CompanyModule>>>;
  company_number?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  created_at: Scalars['DateTimeUtc'];
  departments?: Maybe<Array<Maybe<Department>>>;
  email: Scalars['EMAIL'];
  employees?: Maybe<Employee>;
  entity_type?: Maybe<Scalars['String']>;
  exp_date?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  incorporate_date?: Maybe<Scalars['DateTimeUtc']>;
  license_number?: Maybe<Scalars['String']>;
  logo?: Maybe<Files>;
  member_verify_url?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Maybe<Members>>>;
  members_count?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
  projects?: Maybe<Array<Maybe<Project>>>;
  projects_count?: Maybe<Scalars['Int']>;
  reg_address?: Maybe<Scalars['String']>;
  reg_number?: Maybe<Scalars['String']>;
  state?: Maybe<State>;
  state_reason?: Maybe<StateReason>;
  tax_id?: Maybe<Scalars['String']>;
  type_of_industry?: Maybe<TypeOfIndustry>;
  updated_at: Scalars['DateTimeUtc'];
  url?: Maybe<Scalars['String']>;
  vv_token?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type CompanyModule = {
  __typename?: 'CompanyModule';
  iban_providers?: Maybe<Array<Maybe<CompanyModuleIbanProvider>>>;
  id: Scalars['ID'];
  is_active: Scalars['Boolean'];
  module?: Maybe<Module>;
  payment_providers?: Maybe<Array<Maybe<CompanyModulePaymentProvider>>>;
};

export type CompanyModuleIbanProvider = {
  __typename?: 'CompanyModuleIbanProvider';
  company_module_id: Scalars['ID'];
  id: Scalars['ID'];
  is_active: Scalars['Boolean'];
  payment_provider_iban: PaymentProviderIban;
};

export type CompanyModuleIbanProviderPassword = {
  __typename?: 'CompanyModuleIbanProviderPassword';
  id: Scalars['ID'];
  password: Scalars['String'];
};

export type CompanyModulePaymentProvider = {
  __typename?: 'CompanyModulePaymentProvider';
  company_module_id: Scalars['ID'];
  id: Scalars['ID'];
  is_active: Scalars['Boolean'];
  payment_provider: PaymentProvider;
};

export type CompanyModulePaymentProviderPassword = {
  __typename?: 'CompanyModulePaymentProviderPassword';
  id: Scalars['ID'];
  password: Scalars['String'];
};

export type CompanyPaginator = {
  __typename?: 'CompanyPaginator';
  data: Array<Company>;
  paginatorInfo: PaginatorInfo;
};

export type ConnectImageableInput = {
  id: Scalars['ID'];
  type: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['ID'];
  iso: Scalars['String'];
  name: Scalars['String'];
};

export type CountryPaginator = {
  __typename?: 'CountryPaginator';
  data: Array<Country>;
  paginatorInfo: PaginatorInfo;
};

export type Currencies = {
  __typename?: 'Currencies';
  code: Scalars['String'];
  id: Scalars['ID'];
  minor_unit?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type CurrenciesPaginator = {
  __typename?: 'CurrenciesPaginator';
  data: Array<Currencies>;
  paginatorInfo: PaginatorInfo;
};

export type DateRange = {
  from: Scalars['Date'];
  to: Scalars['DateEnd'];
};

export type DateTimeRange = {
  from: Scalars['DateTimeUtc'];
  to: Scalars['DateTimeUtc'];
};

export type Department = {
  __typename?: 'Department';
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
};

export type DepartmentPaginator = {
  __typename?: 'DepartmentPaginator';
  data: Array<Department>;
  paginatorInfo: PaginatorInfo;
};

export type DepartmentPosition = {
  __typename?: 'DepartmentPosition';
  company?: Maybe<Company>;
  department?: Maybe<Array<Maybe<Department>>>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type DepartmentPositionPaginator = {
  __typename?: 'DepartmentPositionPaginator';
  data: Array<DepartmentPosition>;
  paginatorInfo: PaginatorInfo;
};

export type DocumentState = {
  __typename?: 'DocumentState';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type DocumentType = {
  __typename?: 'DocumentType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type EmailNotification = {
  __typename?: 'EmailNotification';
  clientable?: Maybe<Clientable>;
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  group_role?: Maybe<GroupRole>;
  group_type?: Maybe<GroupType>;
  id: Scalars['ID'];
  recipient_type?: Maybe<RecipientType>;
  templates?: Maybe<Array<Maybe<EmailTemplate>>>;
  type?: Maybe<NotifyType>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type EmailNotificationPaginator = {
  __typename?: 'EmailNotificationPaginator';
  data: Array<EmailNotification>;
  paginatorInfo: PaginatorInfo;
};

export type EmailSmtp = {
  __typename?: 'EmailSmtp';
  company?: Maybe<Company>;
  from_email?: Maybe<Scalars['String']>;
  from_name?: Maybe<Scalars['String']>;
  host_name: Scalars['String'];
  id: Scalars['ID'];
  is_sending_mail?: Maybe<Scalars['Boolean']>;
  member?: Maybe<Members>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  port: Scalars['Int'];
  replay_to?: Maybe<Scalars['String']>;
  security?: Maybe<Securities>;
  username: Scalars['String'];
};

export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  company?: Maybe<Company>;
  content: Scalars['String'];
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  layout?: Maybe<EmailTemplateLayout>;
  name: Scalars['String'];
  service_type: ServiceType;
  subject: Scalars['String'];
  type: ClientType;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
  use_layout?: Maybe<Scalars['Boolean']>;
};

export type EmailTemplateLayout = {
  __typename?: 'EmailTemplateLayout';
  company_id: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  footer: Scalars['String'];
  header: Scalars['String'];
  id: Scalars['ID'];
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type EmailTemplateOnCompanyResponse = {
  __typename?: 'EmailTemplateOnCompanyResponse';
  data: Array<EmailTemplate>;
  layout?: Maybe<EmailTemplateLayout>;
};

export enum EmailVerification {
  NotVerified = 'NOT_VERIFIED',
  Requested = 'REQUESTED',
  Verified = 'VERIFIED'
}

export type Employee = {
  __typename?: 'Employee';
  employees_number: Scalars['String'];
  id: Scalars['ID'];
};

export type Fee = {
  __typename?: 'Fee';
  account?: Maybe<Account>;
  client?: Maybe<Client>;
  created_at: Scalars['DateTimeUtc'];
  fee: Scalars['Decimal'];
  fee_amount: Scalars['Decimal'];
  fee_pp: Scalars['Decimal'];
  member?: Maybe<Members>;
  operation_type?: Maybe<OperationType>;
  price_list_fee?: Maybe<PriceListFee>;
  status?: Maybe<PaymentStatus>;
  transfer_outgoing?: Maybe<TransferOutgoing>;
  transfer_type: Scalars['String'];
};

export type FeeItem = {
  __typename?: 'FeeItem';
  amount_from?: Maybe<Scalars['Int']>;
  amount_to?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Int']>;
  mode: Scalars['String'];
  percent?: Maybe<Scalars['Int']>;
};

export type FeeMode = {
  __typename?: 'FeeMode';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type FeePeriod = {
  __typename?: 'FeePeriod';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type FeeType = {
  __typename?: 'FeeType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum FieldTypes {
  CountryList = 'CountryList',
  Text = 'Text',
  TextArea = 'TextArea'
}

export enum FileEntityTypeEnum {
  Applicant = 'APPLICANT',
  ApplicantCompany = 'APPLICANT_COMPANY',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL',
  Company = 'COMPANY',
  Document = 'DOCUMENT',
  File = 'FILE',
  Member = 'MEMBER',
  Project = 'PROJECT'
}

export type Files = {
  __typename?: 'Files';
  author_id: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  entity_type: FileEntityTypeEnum;
  file_name: Scalars['String'];
  id: Scalars['ID'];
  link: Scalars['String'];
  mime_type: Scalars['String'];
  size: Scalars['Int'];
  storage_name: Scalars['String'];
  storage_path: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type FilesPaginator = {
  __typename?: 'FilesPaginator';
  data: Array<Files>;
  paginatorInfo: PaginatorInfo;
};

export type FilterConditions = {
  AND?: InputMaybe<Array<FilterConditions>>;
  OR?: InputMaybe<Array<FilterConditions>>;
  column?: InputMaybe<Scalars['String']>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type GroupRole = {
  __typename?: 'GroupRole';
  company?: Maybe<Company>;
  description?: Maybe<Scalars['String']>;
  group_type?: Maybe<GroupType>;
  group_type_id?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  module?: Maybe<Module>;
  module_id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  providers?: Maybe<Array<Maybe<GroupRoleProvider>>>;
  role?: Maybe<Role>;
  role_id?: Maybe<Scalars['ID']>;
};

export type GroupRolePaginator = {
  __typename?: 'GroupRolePaginator';
  data: Array<GroupRole>;
  paginatorInfo: PaginatorInfo;
};

export type GroupRoleProvider = {
  __typename?: 'GroupRoleProvider';
  commission_template?: Maybe<CommissionTemplate>;
  group_role_id?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  is_default?: Maybe<Scalars['Boolean']>;
  payment_provider?: Maybe<PaymentProvider>;
};

export type GroupRoleView = {
  __typename?: 'GroupRoleView';
  commission_template_id?: Maybe<Scalars['ID']>;
  commission_template_name?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  description?: Maybe<Scalars['String']>;
  group_type?: Maybe<GroupType>;
  group_type_id?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  module?: Maybe<Module>;
  module_id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  payment_provider_id?: Maybe<Scalars['ID']>;
  payment_provider_name?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  role_id?: Maybe<Scalars['ID']>;
};

export type GroupRoleViewPaginator = {
  __typename?: 'GroupRoleViewPaginator';
  data: Array<GroupRoleView>;
  paginatorInfo: PaginatorInfo;
};

export type GroupType = {
  __typename?: 'GroupType';
  id: Scalars['ID'];
  name: GroupsEntities;
};

export enum GroupTypeMode {
  All = 'ALL',
  Clients = 'CLIENTS'
}

export type GroupTypePaginator = {
  __typename?: 'GroupTypePaginator';
  data: Array<GroupType>;
  paginatorInfo: PaginatorInfo;
};

export type Groups = {
  __typename?: 'Groups';
  /** @deprecated Field no longer supported */
  groups?: Maybe<Array<Maybe<GroupRole>>>;
  id: Scalars['ID'];
  name: GroupsEntities;
};

export enum GroupsEntities {
  Company = 'Company',
  Individual = 'Individual',
  Member = 'Member'
}

export type ImageableMorphToTable = {
  connect?: InputMaybe<ConnectImageableInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type InputAccount = {
  account_name: Scalars['String'];
  account_number?: InputMaybe<Scalars['String']>;
  clientableAttach?: InputMaybe<PivotTable>;
  commission_template_id: Scalars['ID'];
  company_id: Scalars['ID'];
  currency_id: Scalars['ID'];
  group_role_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
  is_primary?: InputMaybe<Scalars['Boolean']>;
  owner_id: Scalars['ID'];
  payment_bank_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id: Scalars['ID'];
  payment_system_id: Scalars['ID'];
};

export type InputCommissionTemplate = {
  business_activity?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  commission_template_limit_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  company_id?: InputMaybe<Scalars['ID']>;
  currency_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  payment_system_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  region_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type InputCommissionTemplateLimit = {
  amount: Scalars['Decimal'];
  commission_template_id: Scalars['ID'];
  commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_period_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_transfer_direction_id: Scalars['ID'];
  commission_template_limit_type_id: Scalars['ID'];
  currency_id?: InputMaybe<Scalars['ID']>;
  period_count?: InputMaybe<Scalars['ID']>;
  region_id?: InputMaybe<Scalars['ID']>;
};

export type InputCompanyModuleIbanProvider = {
  company_module_id?: InputMaybe<Scalars['ID']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  payment_provider_iban_id?: InputMaybe<Scalars['ID']>;
};

export type InputCompanyModulePaymentProvider = {
  company_module_id?: InputMaybe<Scalars['ID']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
};

export type InputGroupRoleProvider = {
  commission_template_id: Scalars['ID'];
  is_default?: InputMaybe<Scalars['Boolean']>;
  payment_provider_id: Scalars['ID'];
};

export type InputMemberAccessLimitation = {
  company_id: Scalars['ID'];
  groupRoles?: InputMaybe<PivotTable>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  member_id: Scalars['ID'];
  module_id: Scalars['ID'];
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  project_id?: InputMaybe<Scalars['ID']>;
  see_own_applicants?: InputMaybe<Scalars['Boolean']>;
};

export type InputPaymentBank = {
  address: Scalars['String'];
  bank_code?: InputMaybe<Scalars['String']>;
  country_id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  payment_provider_id: Scalars['ID'];
  payment_system_code?: InputMaybe<Scalars['String']>;
  payment_system_id: Scalars['ID'];
};

export type InputPaymentProvider = {
  company_id: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  logo_id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  payment_systems?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type InputPaymentProviderIban = {
  company_id: Scalars['ID'];
  currency_id: Scalars['ID'];
  is_active: Scalars['Boolean'];
  name: Scalars['String'];
};

export type InputPaymentSystem = {
  banks?: InputMaybe<PivotTable>;
  currencies?: InputMaybe<PivotTable>;
  description?: InputMaybe<Scalars['String']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  logo_id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  operations?: InputMaybe<PivotTable>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  regions?: InputMaybe<PivotTable>;
};

export type InputProject = {
  additional_fields_basic?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_settings?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  avatar_id?: InputMaybe<Scalars['ID']>;
  client_url?: InputMaybe<Scalars['String']>;
  company_id: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  forgot_password_url?: InputMaybe<Scalars['String']>;
  login_url?: InputMaybe<Scalars['String']>;
  module_id: Scalars['ID'];
  name: Scalars['String'];
  project_settings?: InputMaybe<Array<InputMaybe<InputProjectSettings>>>;
  sms_sender_name?: InputMaybe<Scalars['String']>;
  state_id?: InputMaybe<Scalars['ID']>;
  support_email?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type InputProjectApiSetting = {
  api_key: Scalars['String'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  provider_id: Scalars['ID'];
  provider_type: ProviderTypeEnum;
  wallet: Scalars['String'];
};

export type InputProjectSettings = {
  applicant_type: ApplicantType;
  commission_template_id?: InputMaybe<Scalars['ID']>;
  group_role_id?: InputMaybe<Scalars['ID']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  iban_provider_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
};

export type InputRegion = {
  company_id: Scalars['ID'];
  countries?: InputMaybe<PivotTable>;
  name: Scalars['String'];
};

export type KycTimeline = {
  __typename?: 'KycTimeline';
  action: Scalars['String'];
  action_new_value?: Maybe<Scalars['JSON']>;
  action_old_value?: Maybe<Scalars['JSON']>;
  action_type: KycTimelineActionType;
  applicant?: Maybe<Client>;
  applicant_id: Scalars['ID'];
  applicant_type: ApplicantType;
  browser: Scalars['String'];
  company?: Maybe<Company>;
  created_at: Scalars['DateTimeUtc'];
  creator?: Maybe<Members>;
  document?: Maybe<ApplicantDocument>;
  id: Scalars['ID'];
  ip: Scalars['String'];
  os: Scalars['String'];
  tag: Scalars['String'];
};

export enum KycTimelineActionType {
  DocumentState = 'DOCUMENT_STATE',
  DocumentUpload = 'DOCUMENT_UPLOAD',
  Email = 'EMAIL',
  Profile = 'PROFILE',
  Verification = 'VERIFICATION'
}

export type KycTimelines = {
  __typename?: 'KycTimelines';
  data?: Maybe<Array<KycTimeline>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export type Languages = {
  __typename?: 'Languages';
  id: Scalars['ID'];
  iso: Scalars['String'];
  name: Scalars['String'];
};

export type LanguagesPaginator = {
  __typename?: 'LanguagesPaginator';
  data: Array<Languages>;
  paginatorInfo: PaginatorInfo;
};

export type MemberAccessLimitation = {
  __typename?: 'MemberAccessLimitation';
  company?: Maybe<Company>;
  group?: Maybe<GroupType>;
  group_roles?: Maybe<Array<Maybe<GroupRole>>>;
  id: Scalars['ID'];
  member?: Maybe<Members>;
  module?: Maybe<Module>;
  project?: Maybe<Project>;
  provider?: Maybe<PaymentProvider>;
  see_own_applicants?: Maybe<Scalars['Boolean']>;
};

export type MemberAccessLimitationPaginator = {
  __typename?: 'MemberAccessLimitationPaginator';
  data: Array<MemberAccessLimitation>;
  paginatorInfo: PaginatorInfo;
};

export type MemberProfile = {
  __typename?: 'MemberProfile';
  access_groups?: Maybe<Array<Maybe<MemberAccessLimitation>>>;
  additional_fields?: Maybe<Scalars['JSON']>;
  additional_info_fields?: Maybe<Scalars['JSON']>;
  backup_codes?: Maybe<Scalars['JSON']>;
  company: Company;
  country?: Maybe<Country>;
  department?: Maybe<Department>;
  email?: Maybe<Scalars['EMAIL']>;
  first_name?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  google2fa_secret?: Maybe<Scalars['String']>;
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  is_active?: Maybe<Scalars['Boolean']>;
  is_show_owner_applicants?: Maybe<Scalars['Boolean']>;
  is_sign_transaction?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Languages>;
  last_login_at?: Maybe<Scalars['DateTimeUtc']>;
  last_name?: Maybe<Scalars['String']>;
  position?: Maybe<DepartmentPosition>;
  security_pin?: Maybe<Scalars['String']>;
  sex?: Maybe<Sex>;
  two_factor_auth_setting_id?: Maybe<Scalars['ID']>;
  two_factor_auth_settings?: Maybe<TwoFactorAuthSettings>;
};

export type MemberStatus = {
  __typename?: 'MemberStatus';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Members = {
  __typename?: 'Members';
  access_groups?: Maybe<Array<Maybe<MemberAccessLimitation>>>;
  additional_fields?: Maybe<Scalars['JSON']>;
  additional_info_fields?: Maybe<Scalars['JSON']>;
  backup_codes?: Maybe<Scalars['JSON']>;
  company?: Maybe<Company>;
  country?: Maybe<Country>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  department?: Maybe<Department>;
  email?: Maybe<Scalars['EMAIL']>;
  email_verification?: Maybe<EmailVerification>;
  first_name?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  google2fa_secret?: Maybe<Scalars['String']>;
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  is_show_owner_applicants?: Maybe<Scalars['Boolean']>;
  is_sign_transaction?: Maybe<Scalars['Boolean']>;
  job_title?: Maybe<Scalars['String']>;
  language?: Maybe<Languages>;
  last_login_at?: Maybe<Scalars['DateTimeUtc']>;
  last_name?: Maybe<Scalars['String']>;
  member_status?: Maybe<MemberStatus>;
  photo?: Maybe<Files>;
  position?: Maybe<DepartmentPosition>;
  security_pin?: Maybe<Scalars['String']>;
  sex?: Maybe<Sex>;
  two_factor_auth_setting_id?: Maybe<Scalars['ID']>;
  two_factor_auth_settings?: Maybe<TwoFactorAuthSettings>;
};

export type MembersPaginator = {
  __typename?: 'MembersPaginator';
  data: Array<Members>;
  paginatorInfo: PaginatorInfo;
};

export type Module = {
  __typename?: 'Module';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCompanyModule?: Maybe<Company>;
  attachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
  attachApplicantDocumentTag?: Maybe<ApplicantDocument>;
  attachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
  cancelTransferOutgoingFee?: Maybe<TransferOutgoing>;
  createAccount: Array<Account>;
  createAccountLimit?: Maybe<AccountLimit>;
  createApplicant?: Maybe<ApplicantSettingsProfile>;
  createApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  createApplicantCompany?: Maybe<ApplicantCompany>;
  createApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  createApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  createApplicantCompanyModule?: Maybe<ApplicantCompany>;
  createApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  createApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
  createApplicantDocument?: Maybe<ApplicantDocument>;
  createApplicantDocumentInternalNote?: Maybe<ApplicantDocumentInternalNote>;
  createApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
  createApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
  createApplicantIndividual?: Maybe<ApplicantIndividual>;
  createApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  createApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  createApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  createApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  createApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  createApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  createApplicantModule?: Maybe<ApplicantModules>;
  createApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
  createApplicantStateReason?: Maybe<ApplicantStateReason>;
  createBankCorrespondent?: Maybe<BankCorrespondent>;
  createBusinessActivity?: Maybe<BusinessActivity>;
  createCommissionPriceList?: Maybe<CommissionPriceList>;
  createCommissionTemplate?: Maybe<CommissionTemplate>;
  createCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  createCompany?: Maybe<Company>;
  createCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
  createCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
  createDepartment?: Maybe<Department>;
  createDepartmentPosition?: Maybe<DepartmentPosition>;
  createDocumentType?: Maybe<DocumentType>;
  createEmailNotification?: Maybe<EmailNotification>;
  createEmailSmtp?: Maybe<EmailSmtp>;
  createEmailTemplate?: Maybe<EmailTemplateOnCompanyResponse>;
  createEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  createGroupSettings?: Maybe<GroupRole>;
  createMember?: Maybe<Members>;
  createMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  createModule?: Maybe<Module>;
  createPayment?: Maybe<Payments>;
  createPaymentBank?: Maybe<PaymentBank>;
  createPaymentProvider?: Maybe<PaymentProvider>;
  createPaymentProviderIban?: Maybe<PaymentProviderIban>;
  createPaymentSystem?: Maybe<PaymentSystem>;
  createPriceListFees?: Maybe<PriceListFee>;
  createProject?: Maybe<Project>;
  createRegion?: Maybe<Region>;
  createRole?: Maybe<Role>;
  createTicket?: Maybe<Ticket>;
  createTicketComment?: Maybe<TicketComments>;
  createTransferOutgoing?: Maybe<TransferOutgoing>;
  createTransferOutgoingFee?: Maybe<TransferOutgoing>;
  deleteAccount?: Maybe<Account>;
  deleteAccountLimit?: Maybe<AccountLimit>;
  deleteApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  deleteApplicantBankingMember?: Maybe<ApplicantBankingAccess>;
  deleteApplicantCompany?: Maybe<ApplicantCompany>;
  deleteApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  deleteApplicantCompanyModule?: Maybe<ApplicantCompany>;
  deleteApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  deleteApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
  deleteApplicantDevice?: Maybe<ApplicantDevice>;
  deleteApplicantDocument?: Maybe<ApplicantDocument>;
  deleteApplicantDocumentInternalNote?: Maybe<ApplicantDocumentInternalNote>;
  deleteApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
  deleteApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
  deleteApplicantIndividual?: Maybe<ApplicantIndividual>;
  deleteApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  deleteApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  deleteApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  deleteApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  deleteApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
  deleteApplicantStateReason?: Maybe<ApplicantStateReason>;
  deleteBankCorrespondent?: Maybe<BankCorrespondent>;
  deleteCommissionPriceList?: Maybe<CommissionPriceList>;
  deleteCommissionTemplate?: Maybe<CommissionTemplate>;
  deleteCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  deleteCompany?: Maybe<Company>;
  deleteCompanyModule?: Maybe<Company>;
  deleteCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
  deleteCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
  deleteDepartment?: Maybe<Department>;
  deleteDepartmentPosition?: Maybe<DepartmentPosition>;
  deleteDocumentType?: Maybe<DocumentType>;
  deleteEmailNotification?: Maybe<EmailNotification>;
  deleteEmailSmtp: Array<EmailSmtp>;
  deleteEmailTemplate?: Maybe<EmailTemplate>;
  deleteEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  deleteFile?: Maybe<Files>;
  deleteGroup?: Maybe<GroupRole>;
  deleteMember?: Maybe<Members>;
  deleteMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  deletePayment?: Maybe<Payments>;
  deletePaymentBank?: Maybe<PaymentBank>;
  deletePaymentProvider?: Maybe<PaymentProvider>;
  deletePaymentProviderIban?: Maybe<PaymentProviderIban>;
  deletePaymentSystem?: Maybe<PaymentSystem>;
  deletePriceListFees?: Maybe<PriceListFee>;
  deleteProject?: Maybe<Project>;
  deleteRegion?: Maybe<Region>;
  deleteRole?: Maybe<Role>;
  detachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
  detachApplicantDocumentTag?: Maybe<ApplicantDocument>;
  detachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
  generateIban: AccountGenerateIbanResponse;
  grantApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  resetMemberPassword?: Maybe<Members>;
  sendConfirmChangeEmail?: Maybe<StatusType>;
  sendEmail?: Maybe<StatusType>;
  sendEmailRegistation?: Maybe<ApplicantIndividual>;
  sendEmailResetPassword?: Maybe<ApplicantIndividual>;
  sendEmailVerification?: Maybe<ApplicantIndividual>;
  sendEmailVerificationApplicantCompany?: Maybe<ApplicantCompany>;
  sendEmailWithTemplate?: Maybe<StatusType>;
  sendMemberEmailVerification?: Maybe<Members>;
  sendPhoneVerification?: Maybe<ApplicantIndividual>;
  sendPhoneVerificationApplicantCompany?: Maybe<ApplicantCompany>;
  setApplicantIndividualPassword?: Maybe<ApplicantIndividual>;
  setApplicantSecurityPin?: Maybe<ApplicantIndividual>;
  setApplicantSettingsPassword?: Maybe<TwoFactorAuthToken>;
  setApplicantSettingsPasswordWithOtp?: Maybe<ApplicantSettingsProfile>;
  setMemberActive?: Maybe<Members>;
  setMemberGroup?: Maybe<GroupRole>;
  setMemberInactive?: Maybe<Members>;
  setMemberPassword?: Maybe<Members>;
  setMemberSecurityPin?: Maybe<Members>;
  setMemberSuspended?: Maybe<Members>;
  updateAccount?: Maybe<Account>;
  updateAccountLimit?: Maybe<AccountLimit>;
  updateActiveSession: ActiveSessionMutatorResponse;
  updateApplicantAccount: ApplicantAccount;
  updateApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  updateApplicantCompany?: Maybe<ApplicantCompany>;
  updateApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  updateApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  updateApplicantCompanyModule?: Maybe<ApplicantCompany>;
  updateApplicantCompanyVerificationStatus?: Maybe<ApplicantCompany>;
  updateApplicantDevice: TwoFactorAuthToken;
  updateApplicantDeviceWithOtp: ApplicantDevice;
  updateApplicantDocument?: Maybe<ApplicantDocument>;
  updateApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
  updateApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
  updateApplicantIndividual?: Maybe<ApplicantIndividual>;
  updateApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  updateApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  updateApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  updateApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  updateApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  updateApplicantIndividualVerificationStatus?: Maybe<ApplicantIndividual>;
  updateApplicantProfile?: Maybe<ApplicantProfile>;
  updateApplicantStateReason?: Maybe<ApplicantStateReason>;
  updateBankCorrespondent?: Maybe<BankCorrespondent>;
  updateBusinessActivity?: Maybe<BusinessActivity>;
  updateCommissionPriceList?: Maybe<CommissionPriceList>;
  updateCommissionTemplate?: Maybe<CommissionTemplate>;
  updateCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  updateCompany?: Maybe<Company>;
  updateCompanyModule?: Maybe<CompanyModule>;
  updateCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
  updateCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
  updateDepartment?: Maybe<Department>;
  updateEmailNotification?: Maybe<EmailNotification>;
  updateEmailSmtp?: Maybe<EmailSmtp>;
  updateEmailTemplate?: Maybe<EmailTemplateOnCompanyResponse>;
  updateEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  updateGroupSettings?: Maybe<GroupRole>;
  updateMember?: Maybe<Members>;
  updateMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  updateMemberProfile?: Maybe<MemberProfile>;
  updatePayment?: Maybe<Payments>;
  updatePaymentBank?: Maybe<PaymentBank>;
  updatePaymentProvider?: Maybe<PaymentProvider>;
  updatePaymentProviderIban?: Maybe<PaymentProviderIban>;
  updatePaymentSystem?: Maybe<PaymentSystem>;
  updatePriceListFees?: Maybe<PriceListFee>;
  updateProject?: Maybe<Project>;
  updateProjectApiSetting: Array<ProjectApiSetting>;
  updateRegion?: Maybe<Region>;
  updateRole?: Maybe<Role>;
  updateTicket?: Maybe<Ticket>;
  updateTransferOutgoing?: Maybe<TransferOutgoing>;
  updateTransferOutgoingFee?: Maybe<TransferOutgoing>;
};


export type MutationAddCompanyModuleArgs = {
  company_id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationAttachApplicantCompanyLabelArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_company_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationAttachApplicantDocumentTagArgs = {
  applicant_document_id: Scalars['ID'];
  applicant_document_tag_id: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationAttachApplicantIndividualLabelArgs = {
  applicant_individual_id: Scalars['ID'];
  applicant_individual_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCancelTransferOutgoingFeeArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAccountArgs = {
  input: InputAccount;
};


export type MutationCreateAccountLimitArgs = {
  account_id: Scalars['ID'];
  amount: Scalars['Decimal'];
  commission_template_limit_action_type_id: Scalars['ID'];
  commission_template_limit_period_id: Scalars['ID'];
  commission_template_limit_transfer_direction_id: Scalars['ID'];
  commission_template_limit_type_id: Scalars['ID'];
  currency_id?: InputMaybe<Scalars['ID']>;
  period_count?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateApplicantArgs = {
  client_type: ApplicantClientType;
  company_name?: InputMaybe<Scalars['String']>;
  email: Scalars['EMAIL'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
  phone: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};


export type MutationCreateApplicantBankingAccessArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_individual_id: Scalars['ID'];
  contact_administrator: Scalars['Boolean'];
  daily_limit: Scalars['Decimal'];
  monthly_limit: Scalars['Decimal'];
  operation_limit: Scalars['Decimal'];
  role_id: Scalars['ID'];
  used_limit?: InputMaybe<Scalars['Decimal']>;
};


export type MutationCreateApplicantCompanyArgs = {
  company_id: Scalars['ID'];
  email: Scalars['EMAIL'];
  group_id?: InputMaybe<Scalars['ID']>;
  module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name: Scalars['String'];
  owner_id?: InputMaybe<Scalars['ID']>;
  owner_position_id?: InputMaybe<Scalars['ID']>;
  owner_relation_id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  photo_id?: InputMaybe<Scalars['ID']>;
  project_id: Scalars['ID'];
};


export type MutationCreateApplicantCompanyBusinessTypeArgs = {
  name: Scalars['String'];
};


export type MutationCreateApplicantCompanyLabelArgs = {
  hex_color_code: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreateApplicantCompanyNoteArgs = {
  applicant_company_id: Scalars['ID'];
  member_id: Scalars['ID'];
  note: Scalars['String'];
};


export type MutationCreateApplicantCompanyRiskLevelHistoryArgs = {
  applicant_company_id: Scalars['ID'];
  comment: Scalars['String'];
  risk_level_id: Scalars['ID'];
};


export type MutationCreateApplicantDocumentArgs = {
  added_from?: InputMaybe<Scalars['String']>;
  applicant_id: Scalars['ID'];
  applicant_type: ApplicantType;
  company_id: Scalars['ID'];
  country_id?: InputMaybe<Scalars['ID']>;
  document_state_id?: InputMaybe<Scalars['ID']>;
  document_type_id: Scalars['ID'];
  file_id: Scalars['ID'];
  info?: InputMaybe<Scalars['String']>;
};


export type MutationCreateApplicantDocumentInternalNoteArgs = {
  applicant_document_id: Scalars['ID'];
  note: Scalars['String'];
};


export type MutationCreateApplicantDocumentTagArgs = {
  category_id: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationCreateApplicantDocumentTagCategoryArgs = {
  name: Scalars['String'];
};


export type MutationCreateApplicantIndividualArgs = {
  company_id: Scalars['ID'];
  email: Scalars['EMAIL'];
  first_name: Scalars['String'];
  group_id?: InputMaybe<Scalars['ID']>;
  last_name: Scalars['String'];
  module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  phone: Scalars['String'];
  photo_id?: InputMaybe<Scalars['ID']>;
  project_id?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_id: Scalars['ID'];
  applicant_individual_company_position_id: Scalars['ID'];
  applicant_individual_company_relation_id: Scalars['ID'];
  percentage_owned?: InputMaybe<Scalars['Float']>;
};


export type MutationCreateApplicantIndividualCompanyPositionArgs = {
  company_id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationCreateApplicantIndividualCompanyRelationArgs = {
  company_id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationCreateApplicantIndividualLabelArgs = {
  hex_color_code: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreateApplicantIndividualNoteArgs = {
  applicant_individual_id: Scalars['ID'];
  member_id: Scalars['ID'];
  note: Scalars['String'];
};


export type MutationCreateApplicantModuleArgs = {
  name: Scalars['String'];
};


export type MutationCreateApplicantRiskLevelHistoryArgs = {
  applicant_id: Scalars['ID'];
  comment: Scalars['String'];
  risk_level_id: Scalars['ID'];
};


export type MutationCreateApplicantStateReasonArgs = {
  name: Scalars['String'];
};


export type MutationCreateBankCorrespondentArgs = {
  address: Scalars['String'];
  bank_account: Scalars['String'];
  bank_code: Scalars['String'];
  currency_id: Array<InputMaybe<Scalars['ID']>>;
  is_active: Scalars['Boolean'];
  name: Scalars['String'];
  payment_system_id: Scalars['ID'];
  region_id: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationCreateBusinessActivityArgs = {
  name: Scalars['String'];
};


export type MutationCreateCommissionPriceListArgs = {
  commission_template_id: Scalars['ID'];
  company_id: Scalars['ID'];
  name: Scalars['String'];
  payment_system_id: Scalars['ID'];
  provider_id: Scalars['ID'];
  region_id: Scalars['ID'];
};


export type MutationCreateCommissionTemplateArgs = {
  input: InputCommissionTemplate;
};


export type MutationCreateCommissionTemplateLimitArgs = {
  input: InputCommissionTemplateLimit;
};


export type MutationCreateCompanyArgs = {
  country_id: Scalars['ID'];
  email: Scalars['EMAIL'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};


export type MutationCreateCompanyModuleIbanProviderArgs = {
  input: InputCompanyModuleIbanProvider;
};


export type MutationCreateCompanyModulePaymentProviderArgs = {
  input: InputCompanyModulePaymentProvider;
};


export type MutationCreateDepartmentArgs = {
  company_id: Scalars['ID'];
  department_positions_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name: Scalars['String'];
};


export type MutationCreateDepartmentPositionArgs = {
  company_id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationCreateDocumentTypeArgs = {
  name: Scalars['String'];
};


export type MutationCreateEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['Int']>;
  company_id: Scalars['ID'];
  group_role_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
  templates: Array<InputMaybe<Scalars['Int']>>;
};


export type MutationCreateEmailSmtpArgs = {
  company_id: Scalars['ID'];
  from_email?: InputMaybe<Scalars['String']>;
  from_name?: InputMaybe<Scalars['String']>;
  host_name: Scalars['String'];
  is_sending_mail?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  password: Scalars['String'];
  port: Scalars['Int'];
  replay_to?: InputMaybe<Scalars['String']>;
  security?: InputMaybe<Securities>;
  username: Scalars['String'];
};


export type MutationCreateEmailTemplateArgs = {
  company_id: Scalars['ID'];
  content: Scalars['String'];
  footer?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  service_type: ServiceType;
  subject: Scalars['String'];
  type: ClientType;
  use_layout: Scalars['Boolean'];
};


export type MutationCreateEmailTemplateLayoutArgs = {
  company_id: Scalars['Int'];
  footer: Scalars['String'];
  header: Scalars['String'];
};


export type MutationCreateGroupSettingsArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  group_type_id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  module_id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  providers?: InputMaybe<Array<InputMaybe<InputGroupRoleProvider>>>;
  role_id?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateMemberArgs = {
  company_id: Scalars['ID'];
  country_id?: InputMaybe<Scalars['ID']>;
  email: Scalars['EMAIL'];
  first_name: Scalars['String'];
  group_id: Scalars['ID'];
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']>;
  is_sign_transaction?: InputMaybe<Scalars['Boolean']>;
  language_id?: InputMaybe<Scalars['ID']>;
  last_name: Scalars['String'];
  member_status_id?: InputMaybe<Scalars['ID']>;
  password?: InputMaybe<Scalars['String']>;
  send_email?: InputMaybe<Scalars['Boolean']>;
  sex?: InputMaybe<Sex>;
  two_factor_auth_setting_id: Scalars['ID'];
};


export type MutationCreateMemberAccessLimitationArgs = {
  input: InputMemberAccessLimitation;
};


export type MutationCreateModuleArgs = {
  name: Scalars['String'];
};


export type MutationCreatePaymentArgs = {
  account_id: Scalars['ID'];
  amount: Scalars['Decimal'];
  amount_real?: InputMaybe<Scalars['Decimal']>;
  beneficiary_additional_data?: InputMaybe<Scalars['JSON']>;
  beneficiary_address: Scalars['String'];
  beneficiary_city: Scalars['String'];
  beneficiary_country_id: Scalars['ID'];
  beneficiary_name: Scalars['String'];
  beneficiary_state: Scalars['String'];
  beneficiary_zip: Scalars['String'];
  company_id: Scalars['ID'];
  currency_id: Scalars['ID'];
  execution_at?: InputMaybe<Scalars['DateTimeUtc']>;
  fee?: InputMaybe<Scalars['Decimal']>;
  fee_type_id: Scalars['ID'];
  operation_type_id: Scalars['ID'];
  payment_provider_id: Scalars['ID'];
  price_list_fees_id: Scalars['ID'];
  recipient_account: Scalars['String'];
  recipient_bank_address: Scalars['String'];
  recipient_bank_country_id: Scalars['ID'];
  recipient_bank_name: Scalars['String'];
  recipient_bank_swift: Scalars['String'];
  respondent_fees_id: Scalars['ID'];
  urgency_id: Scalars['ID'];
};


export type MutationCreatePaymentBankArgs = {
  input: InputPaymentBank;
};


export type MutationCreatePaymentProviderArgs = {
  input: InputPaymentProvider;
};


export type MutationCreatePaymentProviderIbanArgs = {
  input: InputPaymentProviderIban;
};


export type MutationCreatePaymentSystemArgs = {
  input: InputPaymentSystem;
};


export type MutationCreatePriceListFeesArgs = {
  input?: InputMaybe<PriceListFeeInput>;
};


export type MutationCreateProjectArgs = {
  input: InputProject;
};


export type MutationCreateRegionArgs = {
  input: InputRegion;
};


export type MutationCreateRoleArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  permission_category_all_member?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreateTicketArgs = {
  client_id: Scalars['ID'];
  company_id: Scalars['ID'];
  message: Scalars['String'];
  status?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};


export type MutationCreateTicketCommentArgs = {
  client_id: Scalars['ID'];
  message: Scalars['String'];
  ticket_id: Scalars['ID'];
};


export type MutationCreateTransferOutgoingArgs = {
  account_id: Scalars['ID'];
  amount: Scalars['Decimal'];
  bank_message?: InputMaybe<Scalars['String']>;
  company_id: Scalars['ID'];
  currency_id: Scalars['ID'];
  execution_at?: InputMaybe<Scalars['DateTimeUtc']>;
  file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  group_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
  payment_provider_id: Scalars['ID'];
  payment_system_id: Scalars['ID'];
  price_list_fee_id: Scalars['ID'];
  price_list_id: Scalars['ID'];
  project_id: Scalars['ID'];
  recipient_account?: InputMaybe<Scalars['String']>;
  recipient_address?: InputMaybe<Scalars['String']>;
  recipient_bank_address?: InputMaybe<Scalars['String']>;
  recipient_bank_country_id: Scalars['ID'];
  recipient_bank_name?: InputMaybe<Scalars['String']>;
  recipient_bank_swift?: InputMaybe<Scalars['String']>;
  recipient_city?: InputMaybe<Scalars['String']>;
  recipient_name?: InputMaybe<Scalars['String']>;
  recipient_state?: InputMaybe<Scalars['String']>;
  recipient_zip?: InputMaybe<Scalars['String']>;
  requested_by_id: Scalars['ID'];
};


export type MutationCreateTransferOutgoingFeeArgs = {
  account_id: Scalars['ID'];
  amount: Scalars['Decimal'];
  bank_message?: InputMaybe<Scalars['String']>;
  company_id: Scalars['ID'];
  currency_id: Scalars['ID'];
  execution_at?: InputMaybe<Scalars['DateTimeUtc']>;
  file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  group_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
  operation_type_id: Scalars['ID'];
  payment_provider_id: Scalars['ID'];
  payment_system_id: Scalars['ID'];
  price_list_fee_id: Scalars['ID'];
  price_list_id: Scalars['ID'];
  project_id: Scalars['ID'];
  recipient_account?: InputMaybe<Scalars['String']>;
  recipient_address?: InputMaybe<Scalars['String']>;
  recipient_bank_address?: InputMaybe<Scalars['String']>;
  recipient_bank_country_id: Scalars['ID'];
  recipient_bank_name?: InputMaybe<Scalars['String']>;
  recipient_bank_swift?: InputMaybe<Scalars['String']>;
  recipient_city?: InputMaybe<Scalars['String']>;
  recipient_name?: InputMaybe<Scalars['String']>;
  recipient_state?: InputMaybe<Scalars['String']>;
  recipient_zip?: InputMaybe<Scalars['String']>;
  requested_by_id: Scalars['ID'];
};


export type MutationDeleteAccountArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAccountLimitArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantBankingAccessArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantBankingMemberArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyLabelArgs = {
  deleteAnyway?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID'];
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDeleteApplicantCompanyNoteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyRiskLevelHistoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantDeviceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantDocumentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantDocumentInternalNoteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantDocumentTagArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantDocumentTagCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualLabelArgs = {
  deleteAnyway?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID'];
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDeleteApplicantIndividualNoteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantRiskLevelHistoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantStateReasonArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBankCorrespondentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommissionPriceListArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommissionTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommissionTemplateLimitArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCompanyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCompanyModuleArgs = {
  company_id: Scalars['ID'];
};


export type MutationDeleteCompanyModuleIbanProviderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCompanyModulePaymentProviderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDepartmentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDepartmentPositionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDocumentTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmailNotificationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmailSmtpArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmailTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmailTemplateLayoutArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMemberArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMemberAccessLimitationArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentBankArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentProviderArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentProviderIbanArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentSystemArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePriceListFeesArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRegionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDetachApplicantCompanyLabelArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_company_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDetachApplicantDocumentTagArgs = {
  applicant_document_id: Scalars['ID'];
  applicant_document_tag_id: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDetachApplicantIndividualLabelArgs = {
  applicant_individual_id: Scalars['ID'];
  applicant_individual_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationGenerateIbanArgs = {
  id: Scalars['ID'];
};


export type MutationGrantApplicantBankingAccessArgs = {
  id: Scalars['ID'];
};


export type MutationResetMemberPasswordArgs = {
  id: Scalars['ID'];
};


export type MutationSendConfirmChangeEmailArgs = {
  email: Scalars['String'];
};


export type MutationSendEmailArgs = {
  email: Scalars['String'];
  from_email?: InputMaybe<Scalars['String']>;
  from_name?: InputMaybe<Scalars['String']>;
  host_name: Scalars['String'];
  password: Scalars['String'];
  port: Scalars['Int'];
  replay_to?: InputMaybe<Scalars['String']>;
  security?: InputMaybe<Securities>;
  username: Scalars['String'];
};


export type MutationSendEmailRegistationArgs = {
  applicant_id: Scalars['ID'];
  email?: InputMaybe<Scalars['String']>;
};


export type MutationSendEmailResetPasswordArgs = {
  applicant_id: Scalars['ID'];
  email?: InputMaybe<Scalars['String']>;
};


export type MutationSendEmailVerificationArgs = {
  applicant_id: Scalars['ID'];
};


export type MutationSendEmailVerificationApplicantCompanyArgs = {
  applicant_company_id: Scalars['ID'];
};


export type MutationSendEmailWithTemplateArgs = {
  company_id: Scalars['ID'];
  content?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  footer?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  subject: Scalars['String'];
};


export type MutationSendMemberEmailVerificationArgs = {
  id: Scalars['ID'];
};


export type MutationSendPhoneVerificationArgs = {
  applicant_id: Scalars['ID'];
};


export type MutationSendPhoneVerificationApplicantCompanyArgs = {
  applicant_company_id: Scalars['ID'];
};


export type MutationSetApplicantIndividualPasswordArgs = {
  id: Scalars['ID'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};


export type MutationSetApplicantSecurityPinArgs = {
  id: Scalars['ID'];
};


export type MutationSetApplicantSettingsPasswordArgs = {
  current_password: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};


export type MutationSetApplicantSettingsPasswordWithOtpArgs = {
  auth_token: Scalars['String'];
  code: Scalars['String'];
  current_password: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};


export type MutationSetMemberActiveArgs = {
  id: Scalars['ID'];
};


export type MutationSetMemberGroupArgs = {
  group_type_id: Scalars['ID'];
  providers?: InputMaybe<Array<InputGroupRoleProvider>>;
  role_id: Scalars['ID'];
};


export type MutationSetMemberInactiveArgs = {
  id: Scalars['ID'];
};


export type MutationSetMemberPasswordArgs = {
  id: Scalars['ID'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};


export type MutationSetMemberSecurityPinArgs = {
  id: Scalars['ID'];
};


export type MutationSetMemberSuspendedArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateAccountArgs = {
  account_name: Scalars['String'];
  account_state_id: Scalars['ID'];
  id: Scalars['ID'];
  is_primary: Scalars['Boolean'];
};


export type MutationUpdateAccountLimitArgs = {
  amount?: InputMaybe<Scalars['Decimal']>;
  commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_period_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_transfer_direction_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_type_id?: InputMaybe<Scalars['ID']>;
  currency_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  period_count?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateActiveSessionArgs = {
  id: Scalars['String'];
  trusted: Scalars['Boolean'];
};


export type MutationUpdateApplicantAccountArgs = {
  id: Scalars['ID'];
  is_show: Scalars['Boolean'];
};


export type MutationUpdateApplicantBankingAccessArgs = {
  applicant_company_id?: InputMaybe<Scalars['ID']>;
  applicant_individual_id?: InputMaybe<Scalars['ID']>;
  contact_administrator?: InputMaybe<Scalars['Boolean']>;
  daily_limit?: InputMaybe<Scalars['Decimal']>;
  id: Scalars['ID'];
  monthly_limit?: InputMaybe<Scalars['Decimal']>;
  operation_limit?: InputMaybe<Scalars['Decimal']>;
  role_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateApplicantCompanyArgs = {
  account_manager_member_id?: InputMaybe<Scalars['ID']>;
  address?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  applicant_company_business_type_id?: InputMaybe<Scalars['ID']>;
  applicant_kyc_level_id?: InputMaybe<Scalars['ID']>;
  applicant_risk_level_id?: InputMaybe<Scalars['ID']>;
  applicant_state_id?: InputMaybe<Scalars['ID']>;
  applicant_state_reason_id?: InputMaybe<Scalars['ID']>;
  basic_info_additional_field?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  city?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['ID']>;
  company_info_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  company_type?: InputMaybe<Scalars['String']>;
  contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  country_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  expires_at?: InputMaybe<Scalars['Date']>;
  group_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  incorporate_date?: InputMaybe<Scalars['DateTimeUtc']>;
  is_verification_phone?: InputMaybe<Scalars['Boolean']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  language_id?: InputMaybe<Scalars['ID']>;
  license_number?: InputMaybe<Scalars['String']>;
  module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  office_address?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['ID']>;
  owner_position_id?: InputMaybe<Scalars['ID']>;
  owner_relation_id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  photo_id?: InputMaybe<Scalars['ID']>;
  profile_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  project_id?: InputMaybe<Scalars['ID']>;
  reg_at?: InputMaybe<Scalars['Date']>;
  reg_number?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateApplicantCompanyBusinessTypeArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantCompanyLabelArgs = {
  hex_color_code?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdateApplicantCompanyVerificationStatusArgs = {
  applicant_status_id: Scalars['ID'];
  id: Scalars['ID'];
};


export type MutationUpdateApplicantDeviceArgs = {
  id: Scalars['ID'];
  trusted: Scalars['Boolean'];
};


export type MutationUpdateApplicantDeviceWithOtpArgs = {
  auth_token: Scalars['String'];
  code: Scalars['String'];
  id: Scalars['ID'];
  trusted: Scalars['Boolean'];
};


export type MutationUpdateApplicantDocumentArgs = {
  document_state_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  info?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateApplicantDocumentTagArgs = {
  category_id: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantDocumentTagCategoryArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantIndividualArgs = {
  account_manager_member_id?: InputMaybe<Scalars['ID']>;
  address?: InputMaybe<Scalars['String']>;
  address_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  applicant_risk_level_id?: InputMaybe<Scalars['ID']>;
  applicant_state_id?: InputMaybe<Scalars['ID']>;
  applicant_state_reason_id?: InputMaybe<Scalars['ID']>;
  birth_at?: InputMaybe<Scalars['Date']>;
  birth_city?: InputMaybe<Scalars['String']>;
  birth_country_id?: InputMaybe<Scalars['ID']>;
  birth_state?: InputMaybe<Scalars['String']>;
  citizenship_country_id?: InputMaybe<Scalars['ID']>;
  city?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['ID']>;
  contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  country_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  first_name?: InputMaybe<Scalars['String']>;
  group_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  ip_address?: InputMaybe<Scalars['String']>;
  is_verification_phone?: InputMaybe<Scalars['Boolean']>;
  kyc_level_id?: InputMaybe<Scalars['ID']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  language_id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
  last_screened_at?: InputMaybe<Scalars['DateTimeUtc']>;
  middle_name?: InputMaybe<Scalars['String']>;
  module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  nationality?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  password_confirmation?: InputMaybe<Scalars['String']>;
  personal_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  phone?: InputMaybe<Scalars['String']>;
  photo_id?: InputMaybe<Scalars['ID']>;
  profile_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  project_id?: InputMaybe<Scalars['ID']>;
  sex?: InputMaybe<Sex>;
  state?: InputMaybe<Scalars['String']>;
  two_factor_auth_setting_id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_id: Scalars['ID'];
  applicant_individual_company_position_id?: InputMaybe<Scalars['ID']>;
  applicant_individual_company_relation_id?: InputMaybe<Scalars['ID']>;
  percentage_owned?: InputMaybe<Scalars['Float']>;
};


export type MutationUpdateApplicantIndividualCompanyPositionArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantIndividualCompanyRelationArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantIndividualLabelArgs = {
  hex_color_code?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdateApplicantIndividualVerificationStatusArgs = {
  applicant_status_id: Scalars['ID'];
  id: Scalars['ID'];
};


export type MutationUpdateApplicantProfileArgs = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  notify_device_email?: InputMaybe<Scalars['Boolean']>;
  photo_id?: InputMaybe<Scalars['ID']>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateApplicantStateReasonArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateBankCorrespondentArgs = {
  address: Scalars['String'];
  bank_account: Scalars['String'];
  bank_code: Scalars['String'];
  currency_id: Array<InputMaybe<Scalars['ID']>>;
  id: Scalars['ID'];
  is_active: Scalars['Boolean'];
  name: Scalars['String'];
  payment_system_id: Scalars['ID'];
  region_id: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationUpdateBusinessActivityArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateCommissionPriceListArgs = {
  commission_template_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  payment_system_id?: InputMaybe<Scalars['ID']>;
  provider_id?: InputMaybe<Scalars['ID']>;
  region_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateCommissionTemplateArgs = {
  id: Scalars['ID'];
  input: InputCommissionTemplate;
};


export type MutationUpdateCommissionTemplateLimitArgs = {
  id: Scalars['ID'];
  input: InputCommissionTemplateLimit;
};


export type MutationUpdateCompanyArgs = {
  additional_fields_basic?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_data?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_info?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_settings?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  address?: InputMaybe<Scalars['String']>;
  backoffice_forgot_password_url?: InputMaybe<Scalars['String']>;
  backoffice_login_url?: InputMaybe<Scalars['String']>;
  backoffice_support_email?: InputMaybe<Scalars['EMAIL']>;
  backoffice_support_url?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company_number?: InputMaybe<Scalars['String']>;
  contact_name?: InputMaybe<Scalars['String']>;
  country_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  employees_id?: InputMaybe<Scalars['ID']>;
  entity_type?: InputMaybe<Scalars['String']>;
  exp_date?: InputMaybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  incorporate_date?: InputMaybe<Scalars['DateTimeUtc']>;
  license_number?: InputMaybe<Scalars['String']>;
  logo_id?: InputMaybe<Scalars['ID']>;
  member_verify_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  reg_address?: InputMaybe<Scalars['String']>;
  reg_number?: InputMaybe<Scalars['String']>;
  state_id?: InputMaybe<Scalars['ID']>;
  state_reason_id?: InputMaybe<Scalars['ID']>;
  tax_id?: InputMaybe<Scalars['String']>;
  type_of_industry_id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  vv_token?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateCompanyModuleArgs = {
  id: Scalars['ID'];
  is_active: Scalars['Boolean'];
};


export type MutationUpdateCompanyModuleIbanProviderArgs = {
  id: Scalars['ID'];
  is_active: Scalars['Boolean'];
};


export type MutationUpdateCompanyModulePaymentProviderArgs = {
  id: Scalars['ID'];
  is_active: Scalars['Boolean'];
};


export type MutationUpdateDepartmentArgs = {
  department_positions_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['Int']>;
  company_id?: InputMaybe<Scalars['ID']>;
  group_role_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
  id: Scalars['ID'];
  templates?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationUpdateEmailSmtpArgs = {
  from_email?: InputMaybe<Scalars['String']>;
  from_name?: InputMaybe<Scalars['String']>;
  host_name?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  is_sending_mail?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  port?: InputMaybe<Scalars['Int']>;
  replay_to?: InputMaybe<Scalars['String']>;
  security?: InputMaybe<Securities>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateEmailTemplateArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  content?: InputMaybe<Scalars['String']>;
  footer?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  service_type?: InputMaybe<ServiceType>;
  subject?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ClientType>;
  use_layout?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateEmailTemplateLayoutArgs = {
  company_id: Scalars['Int'];
  footer?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type MutationUpdateGroupSettingsArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  group_type_id: Scalars['ID'];
  id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  module_id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  providers?: InputMaybe<Array<InputMaybe<InputGroupRoleProvider>>>;
  role_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateMemberArgs = {
  additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_info_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  company_id?: InputMaybe<Scalars['ID']>;
  country_id?: InputMaybe<Scalars['ID']>;
  department_id?: InputMaybe<Scalars['ID']>;
  department_position_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  first_name?: InputMaybe<Scalars['String']>;
  group_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  ip_address?: InputMaybe<Scalars['String']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']>;
  is_sign_transaction?: InputMaybe<Scalars['Boolean']>;
  job_title?: InputMaybe<Scalars['String']>;
  language_id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
  member_status_id?: InputMaybe<Scalars['ID']>;
  photo_id?: InputMaybe<Scalars['ID']>;
  sex?: InputMaybe<Sex>;
  two_factor_auth_setting_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateMemberAccessLimitationArgs = {
  id: Scalars['ID'];
  input: InputMemberAccessLimitation;
};


export type MutationUpdateMemberProfileArgs = {
  country_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  first_name?: InputMaybe<Scalars['String']>;
  language_id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePaymentArgs = {
  id: Scalars['ID'];
  status_id: Scalars['ID'];
};


export type MutationUpdatePaymentBankArgs = {
  id: Scalars['ID'];
  input: InputPaymentBank;
};


export type MutationUpdatePaymentProviderArgs = {
  id: Scalars['ID'];
  input: InputPaymentProvider;
};


export type MutationUpdatePaymentProviderIbanArgs = {
  id: Scalars['ID'];
  input: InputPaymentProviderIban;
};


export type MutationUpdatePaymentSystemArgs = {
  id: Scalars['ID'];
  input: InputPaymentSystem;
};


export type MutationUpdatePriceListFeesArgs = {
  commission_price_list?: InputMaybe<Array<InputMaybe<PriceList>>>;
  id: Scalars['ID'];
  input?: InputMaybe<PriceListFeeInput>;
};


export type MutationUpdateProjectArgs = {
  id: Scalars['ID'];
  input: InputProject;
};


export type MutationUpdateProjectApiSettingArgs = {
  input: Array<InputProjectApiSetting>;
  project_id: Scalars['ID'];
};


export type MutationUpdateRegionArgs = {
  id: Scalars['ID'];
  input: InputRegion;
};


export type MutationUpdateRoleArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permission_category_all_member?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdateTicketArgs = {
  id: Scalars['ID'];
  status: Scalars['Int'];
};


export type MutationUpdateTransferOutgoingArgs = {
  id: Scalars['ID'];
  status_id: Scalars['Int'];
};


export type MutationUpdateTransferOutgoingFeeArgs = {
  amount: Scalars['Decimal'];
  file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id: Scalars['ID'];
  reason?: InputMaybe<Scalars['String']>;
};

export enum NotifyType {
  Administration = 'Administration',
  Client = 'Client'
}

export type OperationType = {
  __typename?: 'OperationType';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export enum OperationTypeEnum {
  BetweenAccount = 'BETWEEN_ACCOUNT',
  BetweenUsers = 'BETWEEN_USERS',
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Exchange = 'EXCHANGE',
  IncomingWireTransfer = 'INCOMING_WIRE_TRANSFER',
  OutgoingWireTransfer = 'OUTGOING_WIRE_TRANSFER',
  ScheduledFees = 'SCHEDULED_FEES'
}

export enum Order {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderBy = {
  column: Column;
  order: Order;
};

export type OrderByClause = {
  column: Scalars['String'];
  order: SortOrder;
};

export enum OrderByRelationAggregateFunction {
  Count = 'COUNT'
}

export enum OrderByRelationWithColumnAggregateFunction {
  Avg = 'AVG',
  Count = 'COUNT',
  Max = 'MAX',
  Min = 'MIN',
  Sum = 'SUM'
}

export enum Permission_Account_Details {
  Edit = 'EDIT',
  Read = 'READ',
  ShowBalance = 'SHOW_BALANCE',
  ShowProviderInfo = 'SHOW_PROVIDER_INFO',
  StatusActive = 'STATUS_ACTIVE',
  StatusClosed = 'STATUS_CLOSED',
  StatusPending = 'STATUS_PENDING',
  StatusSuspended = 'STATUS_SUSPENDED',
  WaitingForIBANActivation = 'WAITING_FOR_I_B_A_N_ACTIVATION'
}

export enum Permission_Dashboard {
  Feedback = 'FEEDBACK',
  InviteFriends = 'INVITE_FRIENDS',
  LastPayments = 'LAST_PAYMENTS',
  Yes = 'YES'
}

export enum Permission_Make_Payments {
  CreatePayments = 'CREATE_PAYMENTS',
  SignPayments = 'SIGN_PAYMENTS'
}

export enum Permission_My_Net_Worth {
  Assets = 'ASSETS',
  Liabilities = 'LIABILITIES',
  Summary = 'SUMMARY',
  Yes = 'YES'
}

export enum Permission_My_Templates {
  AddNew = 'ADD_NEW',
  Delete = 'DELETE',
  Edit = 'EDIT',
  Read = 'READ'
}

export enum Permission_Payment_Details {
  ExportPaymentDetails = 'EXPORT_PAYMENT_DETAILS',
  Read = 'READ'
}

export enum Permission_Payment_List {
  CancelPayment = 'CANCEL_PAYMENT',
  Edit = 'EDIT',
  Read = 'READ'
}

export enum Permission_Requisites {
  DownloadRequisites = 'DOWNLOAD_REQUISITES',
  Read = 'READ',
  SendRequisitesDetails = 'SEND_REQUISITES_DETAILS'
}

export enum Permission_Settings_Accounts {
  Edit = 'EDIT',
  Read = 'READ'
}

export enum Permission_Settings_Contact_Details {
  Edit = 'EDIT',
  Read = 'READ'
}

export enum Permission_Settings_Log_In_Details {
  Edit = 'EDIT',
  MyDevice = 'MY_DEVICE',
  Read = 'READ',
  SecurePin = 'SECURE_PIN',
  TwoFactorAuthentication = 'TWO_FACTOR_AUTHENTICATION'
}

export enum Permission_Settings_Security_Level {
  Edit = 'EDIT',
  Read = 'READ'
}

export enum Permission_Statements {
  ExportStatement = 'EXPORT_STATEMENT',
  Read = 'READ'
}

export enum Permission_Tickets {
  CloseTicket = 'CLOSE_TICKET',
  NewTicket = 'NEW_TICKET',
  Read = 'READ',
  StatusClosed = 'STATUS_CLOSED',
  StatusNoReplyRequired = 'STATUS_NO_REPLY_REQUIRED',
  StatusOpened = 'STATUS_OPENED',
  StatusReplyRequired = 'STATUS_REPLY_REQUIRED'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  lastPage: Scalars['Int'];
  startCursor?: Maybe<Scalars['String']>;
  total: Scalars['Int'];
};

export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  firstItem?: Maybe<Scalars['Int']>;
  hasMorePages: Scalars['Boolean'];
  lastItem?: Maybe<Scalars['Int']>;
  lastPage: Scalars['Int'];
  perPage: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaymentBank = {
  __typename?: 'PaymentBank';
  address?: Maybe<Scalars['String']>;
  bank_code?: Maybe<Scalars['String']>;
  bank_correspondent?: Maybe<BankCorrespondent>;
  country?: Maybe<Country>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  payment_provider?: Maybe<PaymentProvider>;
  payment_system?: Maybe<PaymentSystem>;
  payment_system_code?: Maybe<Scalars['String']>;
};

export type PaymentBankPaginator = {
  __typename?: 'PaymentBankPaginator';
  data: Array<PaymentBank>;
  paginatorInfo: PaginatorInfo;
};

export type PaymentProvider = {
  __typename?: 'PaymentProvider';
  commission_price_list?: Maybe<CommissionPriceList>;
  company?: Maybe<Company>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<Files>;
  name: Scalars['String'];
  payment_systems?: Maybe<Array<Maybe<PaymentSystem>>>;
};

export type PaymentProviderHistory = {
  __typename?: 'PaymentProviderHistory';
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  payment_provider_id: Scalars['ID'];
  provider_response?: Maybe<Scalars['JSON']>;
  transfer_id: Scalars['ID'];
  transfer_type?: Maybe<Scalars['String']>;
};

export type PaymentProviderIban = {
  __typename?: 'PaymentProviderIban';
  company?: Maybe<Company>;
  currency?: Maybe<Currencies>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type PaymentProviderIbanPaginator = {
  __typename?: 'PaymentProviderIbanPaginator';
  data: Array<PaymentProviderIban>;
  paginatorInfo: PaginatorInfo;
};

export type PaymentProviderPaginator = {
  __typename?: 'PaymentProviderPaginator';
  data: Array<PaymentProvider>;
  paginatorInfo: PaginatorInfo;
};

export type PaymentStatus = {
  __typename?: 'PaymentStatus';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PaymentSystem = {
  __typename?: 'PaymentSystem';
  bank_correspondent?: Maybe<BankCorrespondent>;
  banks?: Maybe<Array<Maybe<PaymentBank>>>;
  company?: Maybe<Company>;
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<Files>;
  name: Scalars['String'];
  operations?: Maybe<Array<Maybe<OperationType>>>;
  providers?: Maybe<PaymentProvider>;
  regions?: Maybe<Array<Maybe<Region>>>;
};

export type PaymentSystemPaginator = {
  __typename?: 'PaymentSystemPaginator';
  data: Array<PaymentSystem>;
  paginatorInfo: PaginatorInfo;
};

export type PaymentUrgency = {
  __typename?: 'PaymentUrgency';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Payments = {
  __typename?: 'Payments';
  account?: Maybe<Account>;
  amount: Scalars['Decimal'];
  amount_real: Scalars['Decimal'];
  beneficiary_additional_data?: Maybe<Scalars['JSON']>;
  beneficiary_address?: Maybe<Scalars['String']>;
  beneficiary_city?: Maybe<Scalars['String']>;
  beneficiary_country?: Maybe<Country>;
  beneficiary_name?: Maybe<Scalars['String']>;
  beneficiary_state?: Maybe<Scalars['String']>;
  beneficiary_zip?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  currency?: Maybe<Currencies>;
  error?: Maybe<Scalars['String']>;
  execution_at?: Maybe<Scalars['DateTimeUtc']>;
  fee?: Maybe<Scalars['Decimal']>;
  fee_type?: Maybe<FeeType>;
  id: Scalars['ID'];
  member?: Maybe<Members>;
  payment_number?: Maybe<Scalars['String']>;
  payment_operation_type?: Maybe<OperationType>;
  payment_provider?: Maybe<PaymentProvider>;
  payment_urgency?: Maybe<PaymentUrgency>;
  price_list_fees?: Maybe<PriceListFee>;
  received_at?: Maybe<Scalars['DateTimeUtc']>;
  recipient_account?: Maybe<Scalars['String']>;
  recipient_bank_address?: Maybe<Scalars['String']>;
  recipient_bank_country?: Maybe<Country>;
  recipient_bank_name?: Maybe<Scalars['String']>;
  recipient_bank_swift?: Maybe<Scalars['String']>;
  respondent_fee?: Maybe<RespondentFee>;
  status?: Maybe<PaymentStatus>;
  status_id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type PaymentsPaginator = {
  __typename?: 'PaymentsPaginator';
  data: Array<Payments>;
  paginatorInfo: PaginatorInfo;
};

export type PermissionAuth = {
  __typename?: 'PermissionAuth';
  PERMISSION_ACCOUNT_DETAILS: Array<Permission_Account_Details>;
  PERMISSION_DASHBOARD: Array<Permission_Dashboard>;
  PERMISSION_MAKE_PAYMENTS: Array<Permission_Make_Payments>;
  PERMISSION_MY_NET_WORTH: Array<Permission_My_Net_Worth>;
  PERMISSION_MY_TEMPLATES: Array<Permission_My_Templates>;
  PERMISSION_PAYMENT_DETAILS: Array<Permission_Payment_Details>;
  PERMISSION_PAYMENT_LIST: Array<Permission_Payment_List>;
  PERMISSION_REQUISITES: Array<Permission_Requisites>;
  PERMISSION_SETTINGS_ACCOUNTS: Array<Permission_Settings_Accounts>;
  PERMISSION_SETTINGS_CONTACT_DETAILS: Array<Permission_Settings_Contact_Details>;
  PERMISSION_SETTINGS_LOG_IN_DETAILS: Array<Permission_Settings_Log_In_Details>;
  PERMISSION_SETTINGS_SECURITY_LEVEL: Array<Permission_Settings_Security_Level>;
  PERMISSION_STATEMENTS: Array<Permission_Statements>;
  PERMISSION_TICKETS: Array<Permission_Tickets>;
};

export type PermissionCategory = {
  __typename?: 'PermissionCategory';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  permissionList?: Maybe<Array<Maybe<PermissionList>>>;
};


export type PermissionCategoryPermissionListArgs = {
  permissionType?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
};

export enum PermissionCategoryPermissionListPermissionTypeColumn {
  Type = 'TYPE'
}

export type PermissionCategoryPermissionListPermissionTypeWhereConditions = {
  AND?: InputMaybe<Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
  HAS?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation>;
  OR?: InputMaybe<Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
  column?: InputMaybe<PermissionCategoryPermissionListPermissionTypeColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export type PermissionCategoryRole = {
  __typename?: 'PermissionCategoryRole';
  is_all_companies?: Maybe<Scalars['Boolean']>;
  permission_category_id?: Maybe<Scalars['ID']>;
  role_id?: Maybe<Scalars['ID']>;
};

export type PermissionList = {
  __typename?: 'PermissionList';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  separator?: Maybe<PermissionSeparatorType>;
  type?: Maybe<PermissionListType>;
};

export enum PermissionListType {
  Individual = 'Individual',
  Member = 'Member'
}

export enum PermissionSeparatorType {
  Business = 'Business',
  Private = 'Private'
}

export type PermissionType = {
  __typename?: 'PermissionType';
  PERMISSION_ACCOUNT_DETAILS?: Maybe<Permission_Account_Details>;
  PERMISSION_DASHBOARD?: Maybe<Permission_Dashboard>;
  PERMISSION_MAKE_PAYMENTS?: Maybe<Permission_Make_Payments>;
  PERMISSION_MY_NET_WORTH?: Maybe<Permission_My_Net_Worth>;
  PERMISSION_MY_TEMPLATES?: Maybe<Permission_My_Templates>;
  PERMISSION_PAYMENT_DETAILS?: Maybe<Permission_Payment_Details>;
  PERMISSION_PAYMENT_LIST?: Maybe<Permission_Payment_List>;
  PERMISSION_REQUISITES?: Maybe<Permission_Requisites>;
  PERMISSION_SETTINGS_ACCOUNTS?: Maybe<Permission_Settings_Accounts>;
  PERMISSION_SETTINGS_CONTACT_DETAILS?: Maybe<Permission_Settings_Contact_Details>;
  PERMISSION_SETTINGS_LOG_IN_DETAILS?: Maybe<Permission_Settings_Log_In_Details>;
  PERMISSION_SETTINGS_SECURITY_LEVEL?: Maybe<Permission_Settings_Security_Level>;
  PERMISSION_STATEMENTS?: Maybe<Permission_Statements>;
  PERMISSION_TICKETS?: Maybe<Permission_Tickets>;
};

export type Permissions = {
  __typename?: 'Permissions';
  all?: Maybe<Scalars['JSON']>;
  display_name?: Maybe<Scalars['String']>;
  guard_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type PivotTable = {
  sync?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type PriceListFee = {
  __typename?: 'PriceListFee';
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  fee_ranges?: Maybe<Scalars['JSON']>;
  fee_type?: Maybe<FeeType>;
  fees?: Maybe<Array<Maybe<PriceListFeeCurrency>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  operation_type?: Maybe<OperationType>;
  period?: Maybe<FeePeriod>;
  price_list_id?: Maybe<Scalars['ID']>;
  scheduled?: Maybe<PriceListFeeScheduled>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type PriceListFeeCurrency = {
  __typename?: 'PriceListFeeCurrency';
  currency_id: Scalars['ID'];
  fee?: Maybe<Array<Maybe<FeeItem>>>;
  id: Scalars['ID'];
  price_list_fee_id: Scalars['ID'];
};

export type PriceListFeeInput = {
  fee_ranges?: InputMaybe<Scalars['JSON']>;
  fees?: InputMaybe<Array<PriceListFeesList>>;
  name: Scalars['String'];
  operation_type_id: Scalars['ID'];
  period_id?: InputMaybe<Scalars['ID']>;
  price_list_id: Scalars['ID'];
  scheduled?: InputMaybe<PriceListFeeScheduledInput>;
  type_id: Scalars['ID'];
};

export type PriceListFeeItem = {
  amount_from?: InputMaybe<Scalars['Int']>;
  amount_to?: InputMaybe<Scalars['Int']>;
  fee?: InputMaybe<Scalars['Int']>;
  mode: Scalars['String'];
  percent?: InputMaybe<Scalars['Int']>;
};

export type PriceListFeeScheduled = {
  __typename?: 'PriceListFeeScheduled';
  end_date?: Maybe<Scalars['DateTimeUtc']>;
  end_date_id?: Maybe<Scalars['ID']>;
  recurrent_interval?: Maybe<Scalars['Int']>;
  starting_date?: Maybe<Scalars['DateTimeUtc']>;
  starting_date_id?: Maybe<Scalars['ID']>;
};

export type PriceListFeeScheduledInput = {
  end_date?: InputMaybe<Scalars['DateTimeUtc']>;
  end_date_id?: InputMaybe<Scalars['ID']>;
  recurrent_interval?: InputMaybe<Scalars['Int']>;
  starting_date?: InputMaybe<Scalars['DateTimeUtc']>;
  starting_date_id?: InputMaybe<Scalars['ID']>;
};

export type PriceListFeesList = {
  currency_id: Scalars['ID'];
  fee: Array<Array<InputMaybe<PriceListFeeItem>>>;
};

export type Project = {
  __typename?: 'Project';
  additional_fields_basic?: Maybe<Scalars['JSON']>;
  additional_fields_settings?: Maybe<Scalars['JSON']>;
  avatar?: Maybe<Files>;
  client_url?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  created_at: Scalars['DateTimeUtc'];
  description?: Maybe<Scalars['String']>;
  forgot_password_url?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  login_url?: Maybe<Scalars['String']>;
  module?: Maybe<Module>;
  name: Scalars['String'];
  project_api_settings?: Maybe<Array<Maybe<ProjectApiSetting>>>;
  project_settings?: Maybe<Array<Maybe<ProjectSettings>>>;
  sms_sender_name?: Maybe<Scalars['String']>;
  state?: Maybe<State>;
  support_email?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTimeUtc'];
  url?: Maybe<Scalars['String']>;
};

export type ProjectApiSetting = {
  __typename?: 'ProjectApiSetting';
  api_key?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  project: Project;
  provider?: Maybe<ProviderType>;
  wallet?: Maybe<Scalars['String']>;
};

export type ProjectApiSettingPassword = {
  __typename?: 'ProjectApiSettingPassword';
  id: Scalars['ID'];
  password: Scalars['String'];
};

export type ProjectPaginator = {
  __typename?: 'ProjectPaginator';
  data: Array<Project>;
  paginatorInfo: PaginatorInfo;
};

export type ProjectSettings = {
  __typename?: 'ProjectSettings';
  applicant_type: ApplicantType;
  commission_template?: Maybe<CommissionTemplate>;
  group_role?: Maybe<GroupRole>;
  group_type?: Maybe<GroupType>;
  iban_provider?: Maybe<PaymentProviderIban>;
  payment_provider?: Maybe<PaymentProvider>;
};

export type ProviderType = PaymentProvider | PaymentProviderIban;

export enum ProviderTypeEnum {
  PaymentProvider = 'PaymentProvider',
  PaymentProviderIban = 'PaymentProviderIban'
}

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accountLimit?: Maybe<AccountLimit>;
  accountLimits?: Maybe<AccountLimitPaginator>;
  accountList?: Maybe<AccountPaginator>;
  accountReachedLimit?: Maybe<AccountReachedLimit>;
  accountReachedLimits?: Maybe<AccountReachedLimitPaginator>;
  accountStates: Array<AccountState>;
  activeSessions?: Maybe<ActiveSessions>;
  activityLogs?: Maybe<ActivityLogs>;
  applicantAccounts?: Maybe<Array<ApplicantAccount>>;
  applicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  applicantBankingAccesses?: Maybe<ApplicantBankingAccesses>;
  applicantCompanies?: Maybe<ApplicantCompanyPaginator>;
  applicantCompany?: Maybe<ApplicantCompany>;
  applicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessTypePaginator>;
  applicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  applicantCompanyLabels: Array<ApplicantCompanyLabel>;
  applicantCompanyLabelsAvailable?: Maybe<ApplicantCompanyLabelPaginator>;
  applicantCompanyModules: Array<ApplicantCompanyModules>;
  applicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  applicantCompanyNotes?: Maybe<ApplicantCompanyNotesPaginator>;
  applicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistoryPaginator>;
  applicantDevices?: Maybe<Array<ApplicantDevice>>;
  applicantDocument?: Maybe<ApplicantDocument>;
  applicantDocumentInternalNotes?: Maybe<ApplicantDocumentInternalNotePaginator>;
  applicantDocumentTagCategories?: Maybe<ApplicantDocumentTagCategoryPaginator>;
  applicantDocumentTags?: Maybe<ApplicantDocumentTagPaginator>;
  applicantDocuments?: Maybe<ApplicantDocumentPaginator>;
  applicantIndividual?: Maybe<ApplicantIndividual>;
  applicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  applicantIndividualCompanyPositions?: Maybe<ApplicantIndividualCompanyPositionPaginator>;
  applicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  applicantIndividualCompanyRelations?: Maybe<ApplicantIndividualCompanyRelationPaginator>;
  applicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  applicantIndividualLabels: Array<ApplicantIndividualLabel>;
  applicantIndividualLabelsAvailable?: Maybe<ApplicantIndividualLabelPaginator>;
  applicantIndividualModules: Array<ApplicantIndividualModules>;
  applicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  applicantIndividualNotes?: Maybe<ApplicantIndividualNotesPaginator>;
  applicantIndividuals?: Maybe<ApplicantIndividualPaginator>;
  applicantKycLevel?: Maybe<ApplicantKycLevel>;
  applicantKycLevels?: Maybe<ApplicantKycLevelPaginator>;
  applicantLinkedCompanies: Array<ApplicantLinkedCompany>;
  applicantProfile?: Maybe<ApplicantProfile>;
  applicantRequisite?: Maybe<ApplicantDetailsRequisites>;
  applicantRequisites: Array<ApplicantRequisites>;
  applicantRiskLevel?: Maybe<ApplicantRiskLevel>;
  applicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistoryPaginator>;
  applicantRiskLevels?: Maybe<ApplicantRiskLevelPaginator>;
  applicantState?: Maybe<ApplicantState>;
  applicantStateReason?: Maybe<ApplicantStateReason>;
  applicantStateReasons?: Maybe<ApplicantStateReasonPaginator>;
  applicantStates?: Maybe<ApplicantStatePaginator>;
  applicantStatus?: Maybe<ApplicantStatus>;
  applicantStatuses?: Maybe<ApplicantStatusPaginator>;
  applicantVerificationStatuses: Array<ApplicantVerificationStatus>;
  applicant_module?: Maybe<ApplicantModules>;
  applicant_modules?: Maybe<ApplicantModulesPaginator>;
  authenticationLogs?: Maybe<AuthenticationLogs>;
  authenticationMemberLogs?: Maybe<AuthenticationLogs>;
  bankCorrespondent: BankCorrespondent;
  bankCorrespondents?: Maybe<BankCorrespondentPaginator>;
  businessActivities?: Maybe<BusinessActivityPaginator>;
  businessActivity?: Maybe<BusinessActivity>;
  clientList: Array<AccountClient>;
  commissionPriceList?: Maybe<CommissionPriceList>;
  commissionPriceLists?: Maybe<CommissionPriceListPaginator>;
  commissionTemplate?: Maybe<CommissionTemplate>;
  commissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  commissionTemplateLimitActionType?: Maybe<CommissionTemplateLimitActionType>;
  commissionTemplateLimitActionTypes?: Maybe<CommissionTemplateLimitActionTypePaginator>;
  commissionTemplateLimitPeriod?: Maybe<CommissionTemplateLimitPeriod>;
  commissionTemplateLimitPeriods?: Maybe<CommissionTemplateLimitPeriodPaginator>;
  commissionTemplateLimitTransferDirection?: Maybe<CommissionTemplateLimitTransferDirection>;
  commissionTemplateLimitTransferDirections?: Maybe<CommissionTemplateLimitTransferDirectionPaginator>;
  commissionTemplateLimitType?: Maybe<CommissionTemplateLimitType>;
  commissionTemplateLimitTypes?: Maybe<CommissionTemplateLimitTypePaginator>;
  commissionTemplateLimits?: Maybe<CommissionTemplateLimitPaginator>;
  commissionTemplates?: Maybe<CommissionTemplatePaginator>;
  companies?: Maybe<CompanyPaginator>;
  company?: Maybe<Company>;
  companyModuleIbanProviderPassword?: Maybe<CompanyModuleIbanProviderPassword>;
  companyModuleProviderPassword?: Maybe<CompanyModulePaymentProviderPassword>;
  companyModules: Array<CompanyModule>;
  countries?: Maybe<CountryPaginator>;
  country?: Maybe<Country>;
  currencies?: Maybe<CurrenciesPaginator>;
  currency?: Maybe<Currencies>;
  dashboardAccountsStatistic?: Maybe<Array<Maybe<DashboardAccountsStatistic>>>;
  dashboardTicketsStatistic?: Maybe<Array<Maybe<DashboardTicketsStatistic>>>;
  dashboardTransfersStatistic?: Maybe<Array<Maybe<DashboardTransfersStatistic>>>;
  dashboardUsersStatistic?: Maybe<Array<Maybe<DashboardUsersStatistic>>>;
  department?: Maybe<Department>;
  departmentPosition?: Maybe<DepartmentPosition>;
  departmentPositions?: Maybe<DepartmentPositionPaginator>;
  departments?: Maybe<DepartmentPaginator>;
  documentStates: Array<DocumentState>;
  documentTypes: Array<DocumentType>;
  downloadApplicantRequisiteDetails?: Maybe<RawFile>;
  downloadRequisiteDetails?: Maybe<RawFile>;
  emailNotification?: Maybe<EmailNotification>;
  emailNotifications?: Maybe<EmailNotificationPaginator>;
  emailSmtp?: Maybe<EmailSmtp>;
  emailSmtps: Array<EmailSmtp>;
  emailTemplate?: Maybe<EmailTemplate>;
  emailTemplateLayout?: Maybe<EmailTemplateLayout>;
  emailTemplates: Array<EmailTemplate>;
  employees: Array<Employee>;
  feeDetails: Fee;
  feeModes: Array<FeeMode>;
  feePeriods: Array<FeePeriod>;
  feeTypes: Array<FeeType>;
  file?: Maybe<Files>;
  files?: Maybe<FilesPaginator>;
  getMatchedApplicantIndividuals: Array<ApplicantIndividualCompany>;
  getMatchedUsers: Array<ApplicantIndividualCompany>;
  getPaymentUrgencys: Array<PaymentUrgency>;
  getTicketComments: Array<TicketComments>;
  grantedBankingAccess?: Maybe<ApplicantBankingAccesses>;
  groupList?: Maybe<GroupRoleViewPaginator>;
  groupTypeList?: Maybe<GroupTypePaginator>;
  group_type?: Maybe<GroupType>;
  group_types: Array<GroupType>;
  groups?: Maybe<GroupRolePaginator>;
  kycTimeline: KycTimeline;
  kycTimelines?: Maybe<KycTimelines>;
  language?: Maybe<Languages>;
  languages?: Maybe<LanguagesPaginator>;
  member?: Maybe<Members>;
  memberAccessLimitation?: Maybe<MemberAccessLimitation>;
  memberAccessLimitations?: Maybe<MemberAccessLimitationPaginator>;
  memberProfile?: Maybe<MemberProfile>;
  memberStatuses: Array<MemberStatus>;
  members?: Maybe<MembersPaginator>;
  module?: Maybe<Module>;
  modules: Array<Module>;
  modulesWithKyc?: Maybe<Array<Module>>;
  operationTypes: Array<OperationType>;
  owners: Array<ApplicantIndividual>;
  payment?: Maybe<Payments>;
  paymentBank?: Maybe<PaymentBank>;
  paymentBanks?: Maybe<PaymentBankPaginator>;
  paymentProvider?: Maybe<PaymentProvider>;
  paymentProviderIban: PaymentProviderIban;
  paymentProviderIbans?: Maybe<PaymentProviderIbanPaginator>;
  paymentProviders?: Maybe<PaymentProviderPaginator>;
  paymentStatuses: Array<PaymentStatus>;
  paymentSystem?: Maybe<PaymentSystem>;
  paymentSystems?: Maybe<PaymentSystemPaginator>;
  paymentSystemsList: Array<PaymentSystem>;
  payments?: Maybe<PaymentsPaginator>;
  permission?: Maybe<Permissions>;
  permissions?: Maybe<Array<Maybe<PermissionCategory>>>;
  permissions_tree?: Maybe<Permissions>;
  priceListFees: Array<PriceListFee>;
  project?: Maybe<Project>;
  projectApiSettingPassword?: Maybe<ProjectApiSettingPassword>;
  projectApiSettings: Array<ProjectApiSetting>;
  projects?: Maybe<ProjectPaginator>;
  region: Region;
  regions?: Maybe<RegionPaginator>;
  requisite?: Maybe<Requisite>;
  requisites: Array<Requisite>;
  respondentFees: Array<RespondentFee>;
  role?: Maybe<Role>;
  roles?: Maybe<RolePaginator>;
  sendApplicantRequisiteDetails?: Maybe<StatusType>;
  sendRequisiteDetails?: Maybe<StatusType>;
  senders?: Maybe<Array<Maybe<Sender>>>;
  stateReasons: Array<StateReason>;
  states: Array<State>;
  ticket?: Maybe<Ticket>;
  ticketComment?: Maybe<TicketComments>;
  tickets?: Maybe<TicketPaginator>;
  transferIncoming: TransferIncoming;
  transferIncomingHistory?: Maybe<TransferIncomingHistoryPaginator>;
  transferIncomings?: Maybe<TransferIncomingPaginator>;
  transferIncomingsStatistic?: Maybe<Array<Maybe<TransferIncomingStatistic>>>;
  transferOutgoing: TransferOutgoing;
  transferOutgoingHistory?: Maybe<TransferOutgoingHistoryPaginator>;
  transferOutgoings?: Maybe<TransferOutgoingPaginator>;
  transferOutgoingsStatistic?: Maybe<Array<Maybe<TransferOutgoingStatistic>>>;
  twoFactorAuth?: Maybe<TwoFactorAuthSettings>;
  twoFactorsAuth?: Maybe<TwoFactorAuthSettingsPaginator>;
  typeOfIndustries: Array<TypeOfIndustry>;
  userAuthData: UserAuthResponse;
  users?: Maybe<UsersPaginator>;
};


export type QueryAccountArgs = {
  id: Scalars['ID'];
};


export type QueryAccountLimitArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAccountLimitsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasAccount?: InputMaybe<QueryAccountLimitsHasAccountWhereHasConditions>;
  hasCommissionTemplateLimitActionType?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditions>;
  hasCommissionTemplateLimitPeriod?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditions>;
  hasCommissionTemplateLimitTransferDirection?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditions>;
  hasCommissionTemplateLimitType?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditions>;
  hasCurrency?: InputMaybe<QueryAccountLimitsHasCurrencyWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryAccountLimitsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryAccountLimitsWhereWhereConditions>;
};


export type QueryAccountListArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryAccountListFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryAccountListOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryAccountReachedLimitArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAccountReachedLimitsArgs = {
  filter?: InputMaybe<QueryAccountReachedLimitsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  hasAccount?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryAccountReachedLimitsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditions>;
};


export type QueryAccountStatesArgs = {
  orderBy?: InputMaybe<Array<QueryAccountStatesOrderByOrderByClause>>;
};


export type QueryActiveSessionsArgs = {
  count?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<QueryActiveSessionsStatic>;
};


export type QueryActivityLogsArgs = {
  count?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderBy>>;
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<QueryActivityLogsStatic>;
};


export type QueryApplicantAccountsArgs = {
  filter?: InputMaybe<QueryApplicantAccountsFilterFilterConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantAccountsOrderByOrderByClause>>;
};


export type QueryApplicantBankingAccessArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantBankingAccessesArgs = {
  applicant_company_id: Scalars['ID'];
  filter?: InputMaybe<QueryApplicantBankingAccessesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantBankingAccessesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantCompaniesArgs = {
  company?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryApplicantCompaniesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  group?: InputMaybe<Sort>;
  hasBusinessType?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
  hasGroupRole?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>;
  hasKycLevel?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
  hasOwner?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
  hasRiskLevel?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
  hasStateReason?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
  hasStatus?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantCompaniesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
};


export type QueryApplicantCompanyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantCompanyBusinessTypeArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditions>;
};


export type QueryApplicantCompanyLabelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantCompanyLabelsArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyLabelsOrderByOrderByClause>>;
  where?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
};


export type QueryApplicantCompanyLabelsAvailableArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyLabelsAvailableOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantCompanyModulesArgs = {
  applicant_company_id: Scalars['ID'];
};


export type QueryApplicantCompanyNoteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantCompanyNotesArgs = {
  applicant_company_id?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyNotesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantCompanyRiskLevelHistoryArgs = {
  applicant_company_id: Scalars['ID'];
  filter?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
};


export type QueryApplicantDocumentArgs = {
  id: Scalars['ID'];
};


export type QueryApplicantDocumentInternalNotesArgs = {
  applicant_document_id: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantDocumentTagCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantDocumentTagsArgs = {
  filter?: InputMaybe<QueryApplicantDocumentTagsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantDocumentTagsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantDocumentsArgs = {
  applicant_type: ApplicantType;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryApplicantDocumentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantDocumentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  update_at?: InputMaybe<DateTimeRange>;
};


export type QueryApplicantIndividualArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualCompanyPositionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualCompanyPositionsArgs = {
  filter?: InputMaybe<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualCompanyRelationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualCompanyRelationsArgs = {
  filter?: InputMaybe<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualLabelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualLabelsArgs = {
  applicant_id?: InputMaybe<Scalars['ID']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualLabelsOrderByOrderByClause>>;
  where?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
};


export type QueryApplicantIndividualLabelsAvailableArgs = {
  applicant_id?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualLabelsAvailableOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualModulesArgs = {
  applicant_individual_id: Scalars['ID'];
};


export type QueryApplicantIndividualNoteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualNotesArgs = {
  applicant_individual_id?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualNotesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualsArgs = {
  company?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryApplicantIndividualsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  group?: InputMaybe<Sort>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantKycLevelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantKycLevelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantKycLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
};


export type QueryApplicantLinkedCompaniesArgs = {
  applicant_individual_id: Scalars['ID'];
};


export type QueryApplicantRequisiteArgs = {
  account_number?: InputMaybe<Scalars['String']>;
};


export type QueryApplicantRiskLevelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantRiskLevelHistoryArgs = {
  applicant_id: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantRiskLevelHistoryOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
};


export type QueryApplicantRiskLevelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantRiskLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
};


export type QueryApplicantStateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantStateReasonArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantStateReasonsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantStateReasonsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
};


export type QueryApplicantStatesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantStatesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
};


export type QueryApplicantStatusArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantStatusesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantStatusesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
};


export type QueryApplicant_ModuleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicant_ModulesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantModulesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantModulesWhereWhereConditions>;
};


export type QueryAuthenticationLogsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderBy>>;
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<QueryAuthenticationLogsStatic>;
};


export type QueryAuthenticationMemberLogsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  member_id: Scalars['ID'];
  orderBy?: InputMaybe<Array<OrderBy>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryBankCorrespondentArgs = {
  id: Scalars['ID'];
};


export type QueryBankCorrespondentsArgs = {
  filter?: InputMaybe<QueryBankCorrespondentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryBankCorrespondentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryBusinessActivitiesArgs = {
  filter?: InputMaybe<QueryBusinessActivitiesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryBusinessActivitiesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryBusinessActivityArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryClientListArgs = {
  group_type?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionPriceListArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionPriceListsArgs = {
  filter?: InputMaybe<QueryCommissionPriceListsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionPriceListsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  paymentProviderName?: InputMaybe<Sort>;
};


export type QueryCommissionTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitActionTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitActionTypesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitPeriodArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitPeriodsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitTransferDirectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitTransferDirectionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitTypesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitTypesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitsArgs = {
  filter?: InputMaybe<QueryCommissionTemplateLimitsFilterStatic>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCommissionTemplatesArgs = {
  filter?: InputMaybe<QueryCommissionTemplatesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplatesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  paymentProviderName?: InputMaybe<Sort>;
};


export type QueryCompaniesArgs = {
  country?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryCompaniesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  member_count?: InputMaybe<Sort>;
  orderBy?: InputMaybe<Array<QueryCompaniesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCompanyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCompanyModuleIbanProviderPasswordArgs = {
  id: Scalars['ID'];
};


export type QueryCompanyModuleProviderPasswordArgs = {
  id: Scalars['ID'];
};


export type QueryCompanyModulesArgs = {
  company_id: Scalars['ID'];
};


export type QueryCountriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCountryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCurrenciesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCurrencyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDashboardAccountsStatisticArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
};


export type QueryDashboardTicketsStatisticArgs = {
  created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDashboardTransfersStatisticArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  created_at?: InputMaybe<DateTimeRange>;
  payment_bank_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  payment_system_id?: InputMaybe<Scalars['ID']>;
};


export type QueryDashboardUsersStatisticArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  created_at?: InputMaybe<DateTimeRange>;
  project_id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentPositionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentPositionsArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<QueryDepartmentPositionsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryDepartmentPositionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryDepartmentsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryDepartmentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryDepartmentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryDownloadApplicantRequisiteDetailsArgs = {
  account_id?: InputMaybe<Scalars['ID']>;
};


export type QueryDownloadRequisiteDetailsArgs = {
  account_id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['ID']>;
  company_id: Scalars['ID'];
  group_role_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
};


export type QueryEmailNotificationsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryEmailNotificationsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryEmailNotificationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryEmailSmtpArgs = {
  id: Scalars['ID'];
};


export type QueryEmailSmtpsArgs = {
  company_id: Scalars['ID'];
  orderBy?: InputMaybe<Array<QueryEmailSmtpsOrderByOrderByClause>>;
};


export type QueryEmailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmailTemplateLayoutArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmailTemplatesArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryEmailTemplatesFilterFilterConditions>;
  orderBy?: InputMaybe<Array<QueryEmailTemplatesOrderByOrderByClause>>;
};


export type QueryFeeDetailsArgs = {
  id: Scalars['ID'];
};


export type QueryFeeTypesArgs = {
  filter?: InputMaybe<QueryFeeTypesFilterFilterConditions>;
};


export type QueryFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryFilesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryFilesWhereWhereConditions>;
};


export type QueryGetMatchedApplicantIndividualsArgs = {
  applicant_company_id: Scalars['ID'];
};


export type QueryGetMatchedUsersArgs = {
  applicant_company_id: Scalars['ID'];
  filter?: InputMaybe<QueryGetMatchedUsersFilterFilterConditions>;
};


export type QueryGrantedBankingAccessArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_individual_id: Scalars['ID'];
  filter?: InputMaybe<QueryGrantedBankingAccessFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryGrantedBankingAccessOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGroupListArgs = {
  filter?: InputMaybe<QueryGroupListFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryGroupListOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGroupTypeListArgs = {
  first?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<GroupTypeMode>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGroup_TypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGroup_TypesArgs = {
  filter?: InputMaybe<QueryGroupTypesFilterFilterConditions>;
};


export type QueryGroupsArgs = {
  filter?: InputMaybe<QueryGroupsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryGroupsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryKycTimelineArgs = {
  id: Scalars['ID'];
};


export type QueryKycTimelinesArgs = {
  applicant_id: Scalars['ID'];
  applicant_type: ApplicantType;
  company_id: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryKycTimelinesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryLanguageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLanguagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryMemberArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMemberAccessLimitationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMemberAccessLimitationsArgs = {
  filter?: InputMaybe<QueryMemberAccessLimitationsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  member_id: Scalars['ID'];
  orderBy?: InputMaybe<Array<QueryMemberAccessLimitationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryMembersArgs = {
  companyName?: InputMaybe<Sort>;
  filter?: InputMaybe<QueryMembersFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  group?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryMembersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryModuleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryModulesArgs = {
  orderBy?: InputMaybe<Array<QueryModulesOrderByOrderByClause>>;
  where?: InputMaybe<QueryModulesWhereWhereConditions>;
};


export type QueryModulesWithKycArgs = {
  orderBy?: InputMaybe<Array<QueryModulesWithKycOrderByOrderByClause>>;
  where?: InputMaybe<QueryModulesWithKycWhereWhereConditions>;
};


export type QueryOperationTypesArgs = {
  filter?: InputMaybe<QueryOperationTypesFilterFilterConditions>;
};


export type QueryOwnersArgs = {
  orderBy?: InputMaybe<Array<QueryOwnersOrderByOrderByClause>>;
};


export type QueryPaymentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentBankArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentBanksArgs = {
  filter?: InputMaybe<QueryPaymentBanksFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryPaymentBanksOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<QueryPaymentBankCondition>;
};


export type QueryPaymentProviderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentProviderIbanArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentProviderIbansArgs = {
  filter?: InputMaybe<QueryPaymentProviderIbansFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryPaymentProviderIbansOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryPaymentProvidersArgs = {
  filter?: InputMaybe<QueryPaymentProvidersFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryPaymentProvidersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryPaymentStatusesArgs = {
  filter?: InputMaybe<QueryPaymentStatusesFilterFilterConditions>;
};


export type QueryPaymentSystemArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentSystemsArgs = {
  filter?: InputMaybe<QueryPaymentSystemsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryPaymentSystemsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryPaymentsArgs = {
  AccountNumber?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryPaymentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryPaymentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryPermissionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPermissionsArgs = {
  where?: InputMaybe<QueryPermissionsWhereWhereConditions>;
};


export type QueryPriceListFeesArgs = {
  filter?: InputMaybe<QueryPriceListFeesFilterFilterConditions>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProjectApiSettingPasswordArgs = {
  id: Scalars['ID'];
};


export type QueryProjectApiSettingsArgs = {
  project_id: Scalars['ID'];
};


export type QueryProjectsArgs = {
  filter?: InputMaybe<QueryProjectsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryRegionArgs = {
  id: Scalars['ID'];
};


export type QueryRegionsArgs = {
  filter?: InputMaybe<QueryRegionsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryRequisiteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRequisitesArgs = {
  filter?: InputMaybe<QueryRequisitesFilterFilterConditions>;
};


export type QueryRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRolesArgs = {
  filter?: InputMaybe<QueryRolesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  groups_sort?: InputMaybe<Sort>;
  orderBy?: InputMaybe<Array<QueryRolesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySendApplicantRequisiteDetailsArgs = {
  account_id: Scalars['ID'];
  email: Scalars['String'];
};


export type QuerySendRequisiteDetailsArgs = {
  account_id: Scalars['ID'];
  email: Scalars['String'];
};


export type QueryTicketArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTicketCommentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTicketsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  first?: InputMaybe<Scalars['Int']>;
  hasClient?: InputMaybe<QueryTicketsHasClientWhereHasConditions>;
  hasCompany?: InputMaybe<QueryTicketsHasCompanyWhereHasConditions>;
  hasDepartment?: InputMaybe<QueryTicketsHasDepartmentWhereHasConditions>;
  hasMember?: InputMaybe<QueryTicketsHasMemberWhereHasConditions>;
  hasPosition?: InputMaybe<QueryTicketsHasPositionWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryTicketsOrderByRelationOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryTicketsWhereWhereConditions>;
};


export type QueryTransferIncomingArgs = {
  id: Scalars['ID'];
};


export type QueryTransferIncomingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  transfer_id: Scalars['ID'];
};


export type QueryTransferIncomingsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryTransferIncomingsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryTransferIncomingsStatisticArgs = {
  account_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  created_at?: InputMaybe<DateTimeRange>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTransferOutgoingArgs = {
  id: Scalars['ID'];
};


export type QueryTransferOutgoingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  transfer_id: Scalars['ID'];
};


export type QueryTransferOutgoingsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryTransferOutgoingsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryTransferOutgoingsStatisticArgs = {
  account_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  created_at?: InputMaybe<DateTimeRange>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTwoFactorAuthArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTwoFactorsAuthArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<QueryUsersFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryUsersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};

export enum QueryAccountLimitsHasAccountColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryAccountLimitsHasAccountWhereHasConditions = {
  AND?: InputMaybe<Array<QueryAccountLimitsHasAccountWhereHasConditions>>;
  HAS?: InputMaybe<QueryAccountLimitsHasAccountWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryAccountLimitsHasAccountWhereHasConditions>>;
  column?: InputMaybe<QueryAccountLimitsHasAccountColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryAccountLimitsHasAccountWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryAccountLimitsHasAccountWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryAccountLimitsHasCommissionTemplateLimitActionTypeColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditions = {
  AND?: InputMaybe<Array<QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditions>>;
  HAS?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditions>>;
  column?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitActionTypeColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryAccountLimitsHasCommissionTemplateLimitPeriodColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditions = {
  AND?: InputMaybe<Array<QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditions>>;
  HAS?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditions>>;
  column?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitPeriodColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditions = {
  AND?: InputMaybe<Array<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditions>>;
  HAS?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditions>>;
  column?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryAccountLimitsHasCommissionTemplateLimitTypeColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditions = {
  AND?: InputMaybe<Array<QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditions>>;
  HAS?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditions>>;
  column?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTypeColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryAccountLimitsHasCurrencyColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryAccountLimitsHasCurrencyWhereHasConditions = {
  AND?: InputMaybe<Array<QueryAccountLimitsHasCurrencyWhereHasConditions>>;
  HAS?: InputMaybe<QueryAccountLimitsHasCurrencyWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryAccountLimitsHasCurrencyWhereHasConditions>>;
  column?: InputMaybe<QueryAccountLimitsHasCurrencyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryAccountLimitsHasCurrencyWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryAccountLimitsHasCurrencyWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryAccountLimitsOrderByColumn {
  Id = 'ID'
}

export type QueryAccountLimitsOrderByOrderByClause = {
  column: QueryAccountLimitsOrderByColumn;
  order: SortOrder;
};

export enum QueryAccountLimitsWhereColumn {
  AccountId = 'ACCOUNT_ID',
  Amount = 'AMOUNT',
  PeriodCount = 'PERIOD_COUNT'
}

export type QueryAccountLimitsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryAccountLimitsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryAccountLimitsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryAccountLimitsWhereWhereConditions>>;
  column?: InputMaybe<QueryAccountLimitsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryAccountLimitsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryAccountLimitsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export type QueryAccountListFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryAccountListFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryAccountListFilterFilterConditions>>;
  column?: InputMaybe<QueryAccountListFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryAccountListFilterStatic {
  AccountStateId = 'ACCOUNT_STATE_ID',
  CurrencyId = 'CURRENCY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  HasClientableMixedIdOrFullname = 'HAS_CLIENTABLE_MIXED_ID_OR_FULLNAME',
  HasCommissionTemplateMixedIdOrFullname = 'HAS_COMMISSION_TEMPLATE_MIXED_ID_OR_FULLNAME',
  HasCompanyMixedIdOrName = 'HAS_COMPANY_MIXED_ID_OR_NAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasMemberMixedIdOrFullname = 'HAS_MEMBER_MIXED_ID_OR_FULLNAME',
  HasOwnerMixedIdOrFullname = 'HAS_OWNER_MIXED_ID_OR_FULLNAME',
  HasPaymentProviderMixedIdOrName = 'HAS_PAYMENT_PROVIDER_MIXED_ID_OR_NAME',
  HasPaymentSystemMixedIdOrName = 'HAS_PAYMENT_SYSTEM_MIXED_ID_OR_NAME',
  IsPrimary = 'IS_PRIMARY',
  MixedAccountNumberOrAccountName = 'MIXED_ACCOUNT_NUMBER_OR_ACCOUNT_NAME'
}

export type QueryAccountListFilterStaticInput = {
  MixedAccountNumberOrAccountName?: InputMaybe<Scalars['String']>;
  account_state_id?: InputMaybe<Scalars['ID']>;
  currency_id?: InputMaybe<Scalars['ID']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  hasClientableMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasCommissionTemplateMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasCompanyMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasMemberMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasOwnerMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasPaymentProviderMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasPaymentSystemMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  is_primary?: InputMaybe<Scalars['Boolean']>;
};

export enum QueryAccountListFilterStaticOperator {
  MixedAccountNumberOrAccountName = 'MixedAccountNumberOrAccountName',
  AccountStateId = 'account_state_id',
  CurrencyId = 'currency_id',
  GroupTypeId = 'group_type_id',
  HasClientableMixedIdOrFullname = 'hasClientableMixedIdOrFullname',
  HasCommissionTemplateMixedIdOrFullname = 'hasCommissionTemplateMixedIdOrFullname',
  HasCompanyMixedIdOrName = 'hasCompanyMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasPaymentProviderMixedIdOrName = 'hasPaymentProviderMixedIdOrName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName',
  IsPrimary = 'is_primary'
}

export enum QueryAccountListFilterStaticType {
  MixedAccountNumberOrAccountName = 'MixedAccountNumberOrAccountName',
  AccountStateId = 'account_state_id',
  CurrencyId = 'currency_id',
  GroupTypeId = 'group_type_id',
  HasClientableMixedIdOrFullname = 'hasClientableMixedIdOrFullname',
  HasCommissionTemplateMixedIdOrFullname = 'hasCommissionTemplateMixedIdOrFullname',
  HasCompanyMixedIdOrName = 'hasCompanyMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasPaymentProviderMixedIdOrName = 'hasPaymentProviderMixedIdOrName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName',
  IsPrimary = 'is_primary'
}

export enum QueryAccountListOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QueryAccountListOrderByOrderByClause = {
  column: QueryAccountListOrderByColumn;
  order: SortOrder;
};

export type QueryAccountReachedLimitsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryAccountReachedLimitsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryAccountReachedLimitsFilterFilterConditions>>;
  column?: InputMaybe<QueryAccountReachedLimitsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryAccountReachedLimitsFilterStatic {
  AccountId = 'ACCOUNT_ID',
  Amount = 'AMOUNT',
  LimitCurrency = 'LIMIT_CURRENCY',
  LimitType = 'LIMIT_TYPE',
  LimitValue = 'LIMIT_VALUE',
  Period = 'PERIOD',
  TransferDirection = 'TRANSFER_DIRECTION'
}

export type QueryAccountReachedLimitsFilterStaticInput = {
  account_id?: InputMaybe<Scalars['ID']>;
  amount?: InputMaybe<Scalars['Float']>;
  limit_currency?: InputMaybe<Scalars['String']>;
  limit_type?: InputMaybe<Scalars['String']>;
  limit_value?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<Scalars['Int']>;
  transfer_direction?: InputMaybe<Scalars['String']>;
};

export enum QueryAccountReachedLimitsFilterStaticOperator {
  AccountId = 'account_id',
  Amount = 'amount',
  LimitCurrency = 'limit_currency',
  LimitType = 'limit_type',
  LimitValue = 'limit_value',
  Period = 'period',
  TransferDirection = 'transfer_direction'
}

export enum QueryAccountReachedLimitsFilterStaticType {
  AccountId = 'account_id',
  Amount = 'amount',
  LimitCurrency = 'limit_currency',
  LimitType = 'limit_type',
  LimitValue = 'limit_value',
  Period = 'period',
  TransferDirection = 'transfer_direction'
}

export enum QueryAccountReachedLimitsHasAccountColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryAccountReachedLimitsHasAccountWhereHasConditions = {
  AND?: InputMaybe<Array<QueryAccountReachedLimitsHasAccountWhereHasConditions>>;
  HAS?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryAccountReachedLimitsHasAccountWhereHasConditions>>;
  column?: InputMaybe<QueryAccountReachedLimitsHasAccountColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryAccountReachedLimitsOrderByColumn {
  Id = 'ID'
}

export type QueryAccountReachedLimitsOrderByOrderByClause = {
  column: QueryAccountReachedLimitsOrderByColumn;
  order: SortOrder;
};

export enum QueryAccountReachedLimitsWhereColumn {
  AccountId = 'ACCOUNT_ID',
  Amount = 'AMOUNT',
  ClientName = 'CLIENT_NAME',
  ClientType = 'CLIENT_TYPE',
  GroupType = 'GROUP_TYPE',
  LimitCurrency = 'LIMIT_CURRENCY',
  LimitType = 'LIMIT_TYPE',
  LimitValue = 'LIMIT_VALUE',
  Period = 'PERIOD',
  TransferDirection = 'TRANSFER_DIRECTION'
}

export type QueryAccountReachedLimitsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryAccountReachedLimitsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryAccountReachedLimitsWhereWhereConditions>>;
  column?: InputMaybe<QueryAccountReachedLimitsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryAccountReachedLimitsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryAccountStatesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryAccountStatesOrderByOrderByClause = {
  column: QueryAccountStatesOrderByColumn;
  order: SortOrder;
};

export type QueryActiveSessionsStatic = {
  company?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  group?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
};

export type QueryActivityLogsStatic = {
  company?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  domain?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<Scalars['String']>;
};

export type QueryApplicantAccountsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantAccountsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantAccountsFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantAccountsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryApplicantAccountsFilterStatic {
  IsShow = 'IS_SHOW'
}

export type QueryApplicantAccountsFilterStaticInput = {
  is_show?: InputMaybe<Scalars['Boolean']>;
};

export enum QueryApplicantAccountsFilterStaticOperator {
  IsShow = 'is_show'
}

export enum QueryApplicantAccountsFilterStaticType {
  IsShow = 'is_show'
}

export enum QueryApplicantAccountsOrderByColumn {
  CurrentBalance = 'CURRENT_BALANCE',
  Id = 'ID'
}

export type QueryApplicantAccountsOrderByOrderByClause = {
  column: QueryApplicantAccountsOrderByColumn;
  order: SortOrder;
};

export type QueryApplicantBankingAccessesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantBankingAccessesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantBankingAccessesFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantBankingAccessesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryApplicantBankingAccessesFilterStatic {
  GrantAccess = 'GRANT_ACCESS',
  MemberId = 'MEMBER_ID'
}

export type QueryApplicantBankingAccessesFilterStaticInput = {
  grant_access?: InputMaybe<Scalars['Boolean']>;
  member_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryApplicantBankingAccessesFilterStaticOperator {
  GrantAccess = 'grant_access',
  MemberId = 'member_id'
}

export enum QueryApplicantBankingAccessesFilterStaticType {
  GrantAccess = 'grant_access',
  MemberId = 'member_id'
}

export enum QueryApplicantBankingAccessesOrderByColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID'
}

export type QueryApplicantBankingAccessesOrderByOrderByClause = {
  column: QueryApplicantBankingAccessesOrderByColumn;
  order: SortOrder;
};

export type QueryApplicantCompaniesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryApplicantCompaniesFilterStatic {
  AccountManagerMemberId = 'ACCOUNT_MANAGER_MEMBER_ID',
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  HasBusinessTypeMixedIdOrName = 'HAS_BUSINESS_TYPE_MIXED_ID_OR_NAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasKycLevelMixedIdOrName = 'HAS_KYC_LEVEL_MIXED_ID_OR_NAME',
  HasModulesFilterById = 'HAS_MODULES_FILTER_BY_ID',
  HasOwnerMixedIdOrFullname = 'HAS_OWNER_MIXED_ID_OR_FULLNAME',
  HasRiskLevelMixedIdOrName = 'HAS_RISK_LEVEL_MIXED_ID_OR_NAME',
  HasStateReasonMixedIdOrName = 'HAS_STATE_REASON_MIXED_ID_OR_NAME',
  HasStatusFilterById = 'HAS_STATUS_FILTER_BY_ID',
  HasStatusMixedIdOrName = 'HAS_STATUS_MIXED_ID_OR_NAME',
  Id = 'ID',
  Name = 'NAME',
  ProjectId = 'PROJECT_ID',
  Url = 'URL'
}

export type QueryApplicantCompaniesFilterStaticInput = {
  account_manager_member_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  hasBusinessTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasKycLevelMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasModulesFilterById?: InputMaybe<Scalars['ID']>;
  hasOwnerMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasRiskLevelMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasStateReasonMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasStatusFilterById?: InputMaybe<Scalars['ID']>;
  hasStatusMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export enum QueryApplicantCompaniesFilterStaticOperator {
  AccountManagerMemberId = 'account_manager_member_id',
  CompanyId = 'company_id',
  Email = 'email',
  HasBusinessTypeMixedIdOrName = 'hasBusinessTypeMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasKycLevelMixedIdOrName = 'hasKycLevelMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasRiskLevelMixedIdOrName = 'hasRiskLevelMixedIdOrName',
  HasStateReasonMixedIdOrName = 'hasStateReasonMixedIdOrName',
  HasStatusFilterById = 'hasStatusFilterById',
  HasStatusMixedIdOrName = 'hasStatusMixedIdOrName',
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id',
  Url = 'url'
}

export enum QueryApplicantCompaniesFilterStaticType {
  AccountManagerMemberId = 'account_manager_member_id',
  CompanyId = 'company_id',
  Email = 'email',
  HasBusinessTypeMixedIdOrName = 'hasBusinessTypeMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasKycLevelMixedIdOrName = 'hasKycLevelMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasRiskLevelMixedIdOrName = 'hasRiskLevelMixedIdOrName',
  HasStateReasonMixedIdOrName = 'hasStateReasonMixedIdOrName',
  HasStatusFilterById = 'hasStatusFilterById',
  HasStatusMixedIdOrName = 'hasStatusMixedIdOrName',
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id',
  Url = 'url'
}

export enum QueryApplicantCompaniesHasBusinessTypeColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompaniesHasGroupRoleColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasGroupRoleWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasGroupRoleColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompaniesHasKycLevelColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasKycLevelWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasKycLevelColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompaniesHasOwnerColumn {
  Fullname = 'FULLNAME',
  Id = 'ID'
}

export type QueryApplicantCompaniesHasOwnerWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasOwnerColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompaniesHasRiskLevelColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasRiskLevelWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasRiskLevelColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompaniesHasStateReasonColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasStateReasonWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasStateReasonWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasStateReasonWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasStateReasonColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompaniesHasStatusColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompaniesHasStatusWhereHasConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesHasStatusColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompaniesHasStatusWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompaniesOrderByColumn {
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Id = 'ID',
  Name = 'NAME',
  OwnerId = 'OWNER_ID',
  Url = 'URL'
}

export type QueryApplicantCompaniesOrderByOrderByClause = {
  column: QueryApplicantCompaniesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompaniesWhereColumn {
  AccountManagerMemberId = 'ACCOUNT_MANAGER_MEMBER_ID',
  ApplicantStateId = 'APPLICANT_STATE_ID',
  ApplicantStateReasonId = 'APPLICANT_STATE_REASON_ID',
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  GroupId = 'GROUP_ID',
  Id = 'ID',
  Name = 'NAME',
  Url = 'URL'
}

export type QueryApplicantCompaniesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompaniesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompaniesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompaniesWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantCompaniesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompaniesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompanyBusinessTypeOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompanyBusinessTypeOrderByOrderByClause = {
  column: QueryApplicantCompanyBusinessTypeOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyBusinessTypeWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantCompanyBusinessTypeWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompanyLabelsAvailableOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompanyLabelsAvailableOrderByOrderByClause = {
  column: QueryApplicantCompanyLabelsAvailableOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyLabelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantCompanyLabelsOrderByOrderByClause = {
  column: QueryApplicantCompanyLabelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyLabelsWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantCompanyLabelsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompanyLabelsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompanyLabelsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantCompanyLabelsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompanyLabelsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantCompanyNotesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QueryApplicantCompanyNotesOrderByOrderByClause = {
  column: QueryApplicantCompanyNotesOrderByColumn;
  order: SortOrder;
};

export type QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryApplicantCompanyRiskLevelHistoryFilterStatic {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  RiskLevelId = 'RISK_LEVEL_ID'
}

export type QueryApplicantCompanyRiskLevelHistoryFilterStaticInput = {
  applicant_company_id: Scalars['ID'];
  risk_level_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryApplicantCompanyRiskLevelHistoryFilterStaticOperator {
  ApplicantCompanyId = 'applicant_company_id',
  RiskLevelId = 'risk_level_id'
}

export enum QueryApplicantCompanyRiskLevelHistoryFilterStaticRequired {
  ApplicantCompanyId = 'applicant_company_id'
}

export enum QueryApplicantCompanyRiskLevelHistoryFilterStaticType {
  ApplicantCompanyId = 'applicant_company_id',
  RiskLevelId = 'risk_level_id'
}

export enum QueryApplicantCompanyRiskLevelHistoryOrderByColumn {
  Id = 'ID'
}

export type QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause = {
  column: QueryApplicantCompanyRiskLevelHistoryOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantCompanyRiskLevelHistoryWhereColumn {
  RiskLevelId = 'RISK_LEVEL_ID'
}

export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export type QueryApplicantDocumentTagsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantDocumentTagsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantDocumentTagsFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantDocumentTagsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryApplicantDocumentTagsFilterStatic {
  HasCategoryFilterByName = 'HAS_CATEGORY_FILTER_BY_NAME',
  Name = 'NAME'
}

export type QueryApplicantDocumentTagsFilterStaticInput = {
  hasCategoryFilterByName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum QueryApplicantDocumentTagsFilterStaticOperator {
  HasCategoryFilterByName = 'hasCategoryFilterByName',
  Name = 'name'
}

export enum QueryApplicantDocumentTagsFilterStaticType {
  HasCategoryFilterByName = 'hasCategoryFilterByName',
  Name = 'name'
}

export enum QueryApplicantDocumentTagsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QueryApplicantDocumentTagsOrderByOrderByClause = {
  column: QueryApplicantDocumentTagsOrderByColumn;
  order: SortOrder;
};

export type QueryApplicantDocumentsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantDocumentsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantDocumentsFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantDocumentsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryApplicantDocumentsFilterStatic {
  ApplicantId = 'APPLICANT_ID',
  DocumentStateId = 'DOCUMENT_STATE_ID',
  DocumentTypeId = 'DOCUMENT_TYPE_ID',
  Id = 'ID'
}

export type QueryApplicantDocumentsFilterStaticInput = {
  applicant_id?: InputMaybe<Scalars['ID']>;
  document_state_id?: InputMaybe<Scalars['ID']>;
  document_type_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export enum QueryApplicantDocumentsFilterStaticOperator {
  ApplicantId = 'applicant_id',
  DocumentStateId = 'document_state_id',
  DocumentTypeId = 'document_type_id',
  Id = 'id'
}

export enum QueryApplicantDocumentsFilterStaticType {
  ApplicantId = 'applicant_id',
  DocumentStateId = 'document_state_id',
  DocumentTypeId = 'document_type_id',
  Id = 'id'
}

export enum QueryApplicantDocumentsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QueryApplicantDocumentsOrderByOrderByClause = {
  column: QueryApplicantDocumentsOrderByColumn;
  order: SortOrder;
};

export type QueryApplicantIndividualCompanyPositionsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantIndividualCompanyPositionsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryApplicantIndividualCompanyPositionsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualCompanyPositionsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum QueryApplicantIndividualCompanyPositionsFilterStaticOperator {
  CompanyId = 'company_id',
  Name = 'name'
}

export enum QueryApplicantIndividualCompanyPositionsFilterStaticType {
  CompanyId = 'company_id',
  Name = 'name'
}

export enum QueryApplicantIndividualCompanyPositionsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualCompanyPositionsOrderByOrderByClause = {
  column: QueryApplicantIndividualCompanyPositionsOrderByColumn;
  order: SortOrder;
};

export type QueryApplicantIndividualCompanyRelationsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantIndividualCompanyRelationsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryApplicantIndividualCompanyRelationsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualCompanyRelationsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum QueryApplicantIndividualCompanyRelationsFilterStaticOperator {
  CompanyId = 'company_id',
  Name = 'name'
}

export enum QueryApplicantIndividualCompanyRelationsFilterStaticType {
  CompanyId = 'company_id',
  Name = 'name'
}

export enum QueryApplicantIndividualCompanyRelationsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualCompanyRelationsOrderByOrderByClause = {
  column: QueryApplicantIndividualCompanyRelationsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualLabelsAvailableOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualLabelsAvailableOrderByOrderByClause = {
  column: QueryApplicantIndividualLabelsAvailableOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualLabelsOrderByColumn {
  ApplicantId = 'APPLICANT_ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualLabelsOrderByOrderByClause = {
  column: QueryApplicantIndividualLabelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualLabelsWhereColumn {
  ApplicantId = 'APPLICANT_ID',
  Name = 'NAME'
}

export type QueryApplicantIndividualLabelsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualLabelsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantIndividualLabelsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantIndividualLabelsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantIndividualLabelsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export type QueryApplicantIndividualModulesFilterStatic = {
  applicant_individual_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryApplicantIndividualNotesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QueryApplicantIndividualNotesOrderByOrderByClause = {
  column: QueryApplicantIndividualNotesOrderByColumn;
  order: SortOrder;
};

export type QueryApplicantIndividualsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryApplicantIndividualsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantIndividualsFilterFilterConditions>>;
  column?: InputMaybe<QueryApplicantIndividualsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryApplicantIndividualsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasModulesFilterById = 'HAS_MODULES_FILTER_BY_ID',
  HasRiskLevelFilterById = 'HAS_RISK_LEVEL_FILTER_BY_ID',
  HasStateReasonFilterById = 'HAS_STATE_REASON_FILTER_BY_ID',
  HasStatusFilterById = 'HAS_STATUS_FILTER_BY_ID',
  Id = 'ID',
  KycLevelId = 'KYC_LEVEL_ID',
  ProjectId = 'PROJECT_ID'
}

export type QueryApplicantIndividualsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasModulesFilterById?: InputMaybe<Scalars['ID']>;
  hasRiskLevelFilterById?: InputMaybe<Scalars['ID']>;
  hasStateReasonFilterById?: InputMaybe<Scalars['ID']>;
  hasStatusFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  kyc_level_id?: InputMaybe<Scalars['ID']>;
  project_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryApplicantIndividualsFilterStaticOperator {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasRiskLevelFilterById = 'hasRiskLevelFilterById',
  HasStateReasonFilterById = 'hasStateReasonFilterById',
  HasStatusFilterById = 'hasStatusFilterById',
  Id = 'id',
  KycLevelId = 'kyc_level_id',
  ProjectId = 'project_id'
}

export enum QueryApplicantIndividualsFilterStaticType {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasRiskLevelFilterById = 'hasRiskLevelFilterById',
  HasStateReasonFilterById = 'hasStateReasonFilterById',
  HasStatusFilterById = 'hasStatusFilterById',
  Id = 'id',
  KycLevelId = 'kyc_level_id',
  ProjectId = 'project_id'
}

export enum QueryApplicantIndividualsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  Fullname = 'FULLNAME',
  Id = 'ID',
  LastName = 'LAST_NAME'
}

export type QueryApplicantIndividualsOrderByOrderByClause = {
  column: QueryApplicantIndividualsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantKycLevelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantKycLevelsOrderByOrderByClause = {
  column: QueryApplicantKycLevelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantKycLevelsWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantKycLevelsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantKycLevelsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantKycLevelsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantKycLevelsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantKycLevelsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantModulesOrderByColumn {
  Id = 'ID'
}

export type QueryApplicantModulesOrderByOrderByClause = {
  column: QueryApplicantModulesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantModulesWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantModulesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantModulesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantModulesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantModulesWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantModulesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantModulesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantModulesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantRiskLevelHistoryOrderByColumn {
  Id = 'ID'
}

export type QueryApplicantRiskLevelHistoryOrderByOrderByClause = {
  column: QueryApplicantRiskLevelHistoryOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantRiskLevelHistoryWhereColumn {
  RiskLevelId = 'RISK_LEVEL_ID'
}

export type QueryApplicantRiskLevelHistoryWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantRiskLevelHistoryWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantRiskLevelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantRiskLevelsOrderByOrderByClause = {
  column: QueryApplicantRiskLevelsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantRiskLevelsWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantRiskLevelsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantRiskLevelsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantRiskLevelsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantRiskLevelsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantRiskLevelsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantStateReasonsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantStateReasonsOrderByOrderByClause = {
  column: QueryApplicantStateReasonsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantStateReasonsWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantStateReasonsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantStateReasonsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantStateReasonsWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantStateReasonsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantStateReasonsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantStatesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantStatesOrderByOrderByClause = {
  column: QueryApplicantStatesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantStatesWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantStatesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantStatesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantStatesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantStatesWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantStatesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantStatesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryApplicantStatusesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryApplicantStatusesOrderByOrderByClause = {
  column: QueryApplicantStatusesOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantStatusesWhereColumn {
  Name = 'NAME'
}

export type QueryApplicantStatusesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryApplicantStatusesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryApplicantStatusesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryApplicantStatusesWhereWhereConditions>>;
  column?: InputMaybe<QueryApplicantStatusesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryApplicantStatusesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export type QueryAuthenticationLogsStatic = {
  browser?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  client_type?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  device_type?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  expired_at?: InputMaybe<Scalars['Date']>;
  group?: InputMaybe<Scalars['String']>;
  ip?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  platform?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type QueryBankCorrespondentsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryBankCorrespondentsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryBankCorrespondentsFilterFilterConditions>>;
  column?: InputMaybe<QueryBankCorrespondentsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryBankCorrespondentsFilterStatic {
  HasBankCorrespondentCurrenciesFilterByCurrencyId = 'HAS_BANK_CORRESPONDENT_CURRENCIES_FILTER_BY_CURRENCY_ID',
  HasBankCorrespondentRegionsFilterByRegionId = 'HAS_BANK_CORRESPONDENT_REGIONS_FILTER_BY_REGION_ID',
  Name = 'NAME'
}

export type QueryBankCorrespondentsFilterStaticInput = {
  hasBankCorrespondentCurrenciesFilterByCurrencyId?: InputMaybe<Scalars['ID']>;
  hasBankCorrespondentRegionsFilterByRegionId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum QueryBankCorrespondentsFilterStaticOperator {
  HasBankCorrespondentCurrenciesFilterByCurrencyId = 'hasBankCorrespondentCurrenciesFilterByCurrencyId',
  HasBankCorrespondentRegionsFilterByRegionId = 'hasBankCorrespondentRegionsFilterByRegionId',
  Name = 'name'
}

export enum QueryBankCorrespondentsFilterStaticType {
  HasBankCorrespondentCurrenciesFilterByCurrencyId = 'hasBankCorrespondentCurrenciesFilterByCurrencyId',
  HasBankCorrespondentRegionsFilterByRegionId = 'hasBankCorrespondentRegionsFilterByRegionId',
  Name = 'name'
}

export enum QueryBankCorrespondentsOrderByColumn {
  Id = 'ID'
}

export type QueryBankCorrespondentsOrderByOrderByClause = {
  column: QueryBankCorrespondentsOrderByColumn;
  order: SortOrder;
};

export type QueryBusinessActivitiesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryBusinessActivitiesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryBusinessActivitiesFilterFilterConditions>>;
  column?: InputMaybe<QueryBusinessActivitiesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryBusinessActivitiesFilterStatic {
  HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
  Id = 'ID',
  Name = 'NAME'
}

export type QueryBusinessActivitiesFilterStaticInput = {
  hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum QueryBusinessActivitiesFilterStaticOperator {
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  Id = 'id',
  Name = 'name'
}

export enum QueryBusinessActivitiesFilterStaticType {
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  Id = 'id',
  Name = 'name'
}

export enum QueryBusinessActivitiesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryBusinessActivitiesOrderByOrderByClause = {
  column: QueryBusinessActivitiesOrderByColumn;
  order: SortOrder;
};

export type QueryClientCondition = {
  id: Scalars['ID'];
};

export type QueryCommissionPriceListsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryCommissionPriceListsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryCommissionPriceListsFilterFilterConditions>>;
  column?: InputMaybe<QueryCommissionPriceListsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryCommissionPriceListsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  Id = 'ID',
  RegionId = 'REGION_ID'
}

export type QueryCommissionPriceListsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  region_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryCommissionPriceListsFilterStaticOperator {
  CompanyId = 'company_id',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  RegionId = 'region_id'
}

export enum QueryCommissionPriceListsFilterStaticType {
  CompanyId = 'company_id',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  RegionId = 'region_id'
}

export enum QueryCommissionPriceListsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionPriceListsOrderByOrderByClause = {
  column: QueryCommissionPriceListsOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitActionTypesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitActionTypesOrderByOrderByClause = {
  column: QueryCommissionTemplateLimitActionTypesOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitActionTypesWhereColumn {
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitActionTypesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>>;
  column?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionTemplateLimitPeriodsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitPeriodsOrderByOrderByClause = {
  column: QueryCommissionTemplateLimitPeriodsOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitPeriodsWhereColumn {
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitPeriodsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>>;
  column?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionTemplateLimitTransferDirectionsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause = {
  column: QueryCommissionTemplateLimitTransferDirectionsOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitTransferDirectionsWhereColumn {
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>>;
  column?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryCommissionTemplateLimitTypesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitTypesOrderByOrderByClause = {
  column: QueryCommissionTemplateLimitTypesOrderByColumn;
  order: SortOrder;
};

export enum QueryCommissionTemplateLimitTypesWhereColumn {
  Name = 'NAME'
}

export type QueryCommissionTemplateLimitTypesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
  column?: InputMaybe<QueryCommissionTemplateLimitTypesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export type QueryCommissionTemplateLimitsFilterStatic = {
  account_id?: InputMaybe<Scalars['ID']>;
  amount?: InputMaybe<Scalars['Decimal']>;
  commission_template_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_period_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_transfer_direction_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_type_id?: InputMaybe<Scalars['ID']>;
  currency_id?: InputMaybe<Scalars['ID']>;
  payment_system_id?: InputMaybe<Scalars['ID']>;
  period_count?: InputMaybe<Scalars['Int']>;
  region_id?: InputMaybe<Scalars['ID']>;
};

export type QueryCommissionTemplatesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryCommissionTemplatesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryCommissionTemplatesFilterFilterConditions>>;
  column?: InputMaybe<QueryCommissionTemplatesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryCommissionTemplatesFilterStatic {
  HasBusinessActivityFilterById = 'HAS_BUSINESS_ACTIVITY_FILTER_BY_ID',
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryCommissionTemplatesFilterStaticInput = {
  hasBusinessActivityFilterById?: InputMaybe<Scalars['ID']>;
  hasCompanyFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum QueryCommissionTemplatesFilterStaticOperator {
  HasBusinessActivityFilterById = 'hasBusinessActivityFilterById',
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name'
}

export enum QueryCommissionTemplatesFilterStaticType {
  HasBusinessActivityFilterById = 'hasBusinessActivityFilterById',
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name'
}

export enum QueryCommissionTemplatesOrderByColumn {
  Description = 'DESCRIPTION',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryCommissionTemplatesOrderByOrderByClause = {
  column: QueryCommissionTemplatesOrderByColumn;
  order: SortOrder;
};

export type QueryCompaniesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryCompaniesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryCompaniesFilterFilterConditions>>;
  column?: InputMaybe<QueryCompaniesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryCompaniesFilterStatic {
  CountryId = 'COUNTRY_ID',
  Email = 'EMAIL',
  EntityType = 'ENTITY_TYPE',
  HasPaymentProvidersFilterById = 'HAS_PAYMENT_PROVIDERS_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  HasRegionsFilterById = 'HAS_REGIONS_FILTER_BY_ID',
  Name = 'NAME',
  RegNumber = 'REG_NUMBER',
  Url = 'URL'
}

export type QueryCompaniesFilterStaticInput = {
  country_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  entity_type?: InputMaybe<Scalars['String']>;
  hasPaymentProvidersFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']>;
  hasRegionsFilterById?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  reg_number?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export enum QueryCompaniesFilterStaticOperator {
  CountryId = 'country_id',
  Email = 'email',
  EntityType = 'entity_type',
  HasPaymentProvidersFilterById = 'hasPaymentProvidersFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Name = 'name',
  RegNumber = 'reg_number',
  Url = 'url'
}

export enum QueryCompaniesFilterStaticType {
  CountryId = 'country_id',
  Email = 'email',
  EntityType = 'entity_type',
  HasPaymentProvidersFilterById = 'hasPaymentProvidersFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Name = 'name',
  RegNumber = 'reg_number',
  Url = 'url'
}

export enum QueryCompaniesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Id = 'ID',
  Name = 'NAME',
  Url = 'URL'
}

export type QueryCompaniesOrderByOrderByClause = {
  column: QueryCompaniesOrderByColumn;
  order: SortOrder;
};

export type QueryDepartmentPositionsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryDepartmentPositionsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryDepartmentPositionsFilterFilterConditions>>;
  column?: InputMaybe<QueryDepartmentPositionsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryDepartmentPositionsFilterStatic {
  HasDepartmentFilterById = 'HAS_DEPARTMENT_FILTER_BY_ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryDepartmentPositionsFilterStaticInput = {
  hasDepartmentFilterById?: InputMaybe<Scalars['ID']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum QueryDepartmentPositionsFilterStaticOperator {
  HasDepartmentFilterById = 'hasDepartmentFilterById',
  IsActive = 'is_active',
  Name = 'name'
}

export enum QueryDepartmentPositionsFilterStaticType {
  HasDepartmentFilterById = 'hasDepartmentFilterById',
  IsActive = 'is_active',
  Name = 'name'
}

export enum QueryDepartmentPositionsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryDepartmentPositionsOrderByOrderByClause = {
  column: QueryDepartmentPositionsOrderByColumn;
  order: SortOrder;
};

export type QueryDepartmentsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryDepartmentsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryDepartmentsFilterFilterConditions>>;
  column?: InputMaybe<QueryDepartmentsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryDepartmentsFilterStatic {
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  Name = 'NAME'
}

export type QueryDepartmentsFilterStaticInput = {
  hasCompanyFilterById?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum QueryDepartmentsFilterStaticOperator {
  HasCompanyFilterById = 'hasCompanyFilterById',
  Name = 'name'
}

export enum QueryDepartmentsFilterStaticType {
  HasCompanyFilterById = 'hasCompanyFilterById',
  Name = 'name'
}

export enum QueryDepartmentsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryDepartmentsOrderByOrderByClause = {
  column: QueryDepartmentsOrderByColumn;
  order: SortOrder;
};

export type QueryEmailNotificationsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryEmailNotificationsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryEmailNotificationsFilterFilterConditions>>;
  column?: InputMaybe<QueryEmailNotificationsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryEmailNotificationsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasApplicantCompanyMixedIdOrName = 'HAS_APPLICANT_COMPANY_MIXED_ID_OR_NAME',
  HasApplicantIndividualMixedIdOrFullname = 'HAS_APPLICANT_INDIVIDUAL_MIXED_ID_OR_FULLNAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasGroupTypeMixedIdOrName = 'HAS_GROUP_TYPE_MIXED_ID_OR_NAME',
  HasMemberMixedIdOrFullname = 'HAS_MEMBER_MIXED_ID_OR_FULLNAME',
  HasTemplatesFilterBySubject = 'HAS_TEMPLATES_FILTER_BY_SUBJECT',
  RecipientType = 'RECIPIENT_TYPE',
  Type = 'TYPE'
}

export enum QueryEmailNotificationsFilterStaticEnumNotifyType {
  Administration = 'ADMINISTRATION',
  Client = 'CLIENT'
}

export enum QueryEmailNotificationsFilterStaticEnumRecipientType {
  Group = 'GROUP',
  Person = 'PERSON'
}

export type QueryEmailNotificationsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  hasApplicantCompanyMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasApplicantIndividualMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasGroupTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasMemberMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
  hasTemplatesFilterBySubject?: InputMaybe<Scalars['String']>;
  recipient_type?: InputMaybe<RecipientType>;
  type?: InputMaybe<NotifyType>;
};

export enum QueryEmailNotificationsFilterStaticOperator {
  CompanyId = 'company_id',
  HasApplicantCompanyMixedIdOrName = 'hasApplicantCompanyMixedIdOrName',
  HasApplicantIndividualMixedIdOrFullname = 'hasApplicantIndividualMixedIdOrFullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasTemplatesFilterBySubject = 'hasTemplatesFilterBySubject',
  RecipientType = 'recipient_type',
  Type = 'type'
}

export enum QueryEmailNotificationsFilterStaticType {
  CompanyId = 'company_id',
  HasApplicantCompanyMixedIdOrName = 'hasApplicantCompanyMixedIdOrName',
  HasApplicantIndividualMixedIdOrFullname = 'hasApplicantIndividualMixedIdOrFullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasTemplatesFilterBySubject = 'hasTemplatesFilterBySubject',
  RecipientType = 'recipient_type',
  Type = 'type'
}

export enum QueryEmailNotificationsOrderByColumn {
  Id = 'ID'
}

export type QueryEmailNotificationsOrderByOrderByClause = {
  column: QueryEmailNotificationsOrderByColumn;
  order: SortOrder;
};

export enum QueryEmailSmtpsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryEmailSmtpsOrderByOrderByClause = {
  column: QueryEmailSmtpsOrderByColumn;
  order: SortOrder;
};

export type QueryEmailTemplatesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryEmailTemplatesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryEmailTemplatesFilterFilterConditions>>;
  column?: InputMaybe<QueryEmailTemplatesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryEmailTemplatesFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasCompanyFilterByName = 'HAS_COMPANY_FILTER_BY_NAME',
  Name = 'NAME',
  ServiceType = 'SERVICE_TYPE',
  Type = 'TYPE'
}

export enum QueryEmailTemplatesFilterStaticEnumClientType {
  Administration = 'ADMINISTRATION',
  Client = 'CLIENT'
}

export enum QueryEmailTemplatesFilterStaticEnumServiceType {
  AdminNotify = 'ADMIN_NOTIFY',
  Banking = 'BANKING',
  BankingCommon = 'BANKING_COMMON',
  BankingSystem = 'BANKING_SYSTEM',
  Common = 'COMMON',
  System = 'SYSTEM'
}

export type QueryEmailTemplatesFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  hasCompanyFilterByName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  service_type?: InputMaybe<ServiceType>;
  type?: InputMaybe<ClientType>;
};

export enum QueryEmailTemplatesFilterStaticOperator {
  CompanyId = 'company_id',
  HasCompanyFilterByName = 'hasCompanyFilterByName',
  Name = 'name',
  ServiceType = 'service_type',
  Type = 'type'
}

export enum QueryEmailTemplatesFilterStaticType {
  CompanyId = 'company_id',
  HasCompanyFilterByName = 'hasCompanyFilterByName',
  Name = 'name',
  ServiceType = 'service_type',
  Type = 'type'
}

export enum QueryEmailTemplatesOrderByColumn {
  Id = 'ID'
}

export type QueryEmailTemplatesOrderByOrderByClause = {
  column: QueryEmailTemplatesOrderByColumn;
  order: SortOrder;
};

export type QueryFeeTypesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryFeeTypesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryFeeTypesFilterFilterConditions>>;
  column?: InputMaybe<QueryFeeTypesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryFeeTypesFilterStatic {
  HasOperationTypeFilterById = 'HAS_OPERATION_TYPE_FILTER_BY_ID'
}

export type QueryFeeTypesFilterStaticInput = {
  hasOperationTypeFilterById?: InputMaybe<Scalars['ID']>;
};

export enum QueryFeeTypesFilterStaticOperator {
  HasOperationTypeFilterById = 'hasOperationTypeFilterById'
}

export enum QueryFeeTypesFilterStaticType {
  HasOperationTypeFilterById = 'hasOperationTypeFilterById'
}

export enum QueryFilesOrderByColumn {
  AuthorId = 'AUTHOR_ID',
  Id = 'ID'
}

export type QueryFilesOrderByOrderByClause = {
  column: QueryFilesOrderByColumn;
  order: SortOrder;
};

export enum QueryFilesWhereColumn {
  AuthorId = 'AUTHOR_ID',
  EntityType = 'ENTITY_TYPE'
}

export type QueryFilesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryFilesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryFilesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryFilesWhereWhereConditions>>;
  column?: InputMaybe<QueryFilesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryFilesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryFilesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export type QueryGetMatchedUsersFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryGetMatchedUsersFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryGetMatchedUsersFilterFilterConditions>>;
  column?: InputMaybe<QueryGetMatchedUsersFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryGetMatchedUsersFilterStatic {
  ApplicantType = 'APPLICANT_TYPE'
}

export enum QueryGetMatchedUsersFilterStaticEnumApplicantType {
  ApplicantCompany = 'APPLICANT_COMPANY',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL'
}

export type QueryGetMatchedUsersFilterStaticInput = {
  applicant_type?: InputMaybe<ApplicantType>;
};

export enum QueryGetMatchedUsersFilterStaticOperator {
  ApplicantType = 'applicant_type'
}

export enum QueryGetMatchedUsersFilterStaticType {
  ApplicantType = 'applicant_type'
}

export type QueryGrantedBankingAccessFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryGrantedBankingAccessFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryGrantedBankingAccessFilterFilterConditions>>;
  column?: InputMaybe<QueryGrantedBankingAccessFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryGrantedBankingAccessFilterStatic {
  GrantAccess = 'GRANT_ACCESS',
  MemberId = 'MEMBER_ID'
}

export type QueryGrantedBankingAccessFilterStaticInput = {
  grant_access?: InputMaybe<Scalars['Boolean']>;
  member_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryGrantedBankingAccessFilterStaticOperator {
  GrantAccess = 'grant_access',
  MemberId = 'member_id'
}

export enum QueryGrantedBankingAccessFilterStaticType {
  GrantAccess = 'grant_access',
  MemberId = 'member_id'
}

export enum QueryGrantedBankingAccessOrderByColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID'
}

export type QueryGrantedBankingAccessOrderByOrderByClause = {
  column: QueryGrantedBankingAccessOrderByColumn;
  order: SortOrder;
};

export type QueryGroupListFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryGroupListFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryGroupListFilterFilterConditions>>;
  column?: InputMaybe<QueryGroupListFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryGroupListFilterStatic {
  CommissionTemplateId = 'COMMISSION_TEMPLATE_ID',
  CompanyId = 'COMPANY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  ModuleId = 'MODULE_ID',
  Name = 'NAME',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  RoleId = 'ROLE_ID'
}

export type QueryGroupListFilterStaticInput = {
  commission_template_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  module_id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  role_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryGroupListFilterStaticOperator {
  CommissionTemplateId = 'commission_template_id',
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  ModuleId = 'module_id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  RoleId = 'role_id'
}

export enum QueryGroupListFilterStaticType {
  CommissionTemplateId = 'commission_template_id',
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  ModuleId = 'module_id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  RoleId = 'role_id'
}

export enum QueryGroupListOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryGroupListOrderByOrderByClause = {
  column: QueryGroupListOrderByColumn;
  order: SortOrder;
};

export type QueryGroupTypesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryGroupTypesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryGroupTypesFilterFilterConditions>>;
  column?: InputMaybe<QueryGroupTypesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryGroupTypesFilterStatic {
  HasGroupsFilterByCompanyId = 'HAS_GROUPS_FILTER_BY_COMPANY_ID',
  HasGroupsFilterByRoleId = 'HAS_GROUPS_FILTER_BY_ROLE_ID',
  HasRolesFilterById = 'HAS_ROLES_FILTER_BY_ID'
}

export type QueryGroupTypesFilterStaticInput = {
  hasGroupsFilterByCompanyId?: InputMaybe<Scalars['ID']>;
  hasGroupsFilterByRoleId?: InputMaybe<Scalars['ID']>;
  hasRolesFilterById?: InputMaybe<Scalars['ID']>;
};

export enum QueryGroupTypesFilterStaticOperator {
  HasGroupsFilterByCompanyId = 'hasGroupsFilterByCompanyId',
  HasGroupsFilterByRoleId = 'hasGroupsFilterByRoleId',
  HasRolesFilterById = 'hasRolesFilterById'
}

export enum QueryGroupTypesFilterStaticType {
  HasGroupsFilterByCompanyId = 'hasGroupsFilterByCompanyId',
  HasGroupsFilterByRoleId = 'hasGroupsFilterByRoleId',
  HasRolesFilterById = 'hasRolesFilterById'
}

export type QueryGroupsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryGroupsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryGroupsFilterFilterConditions>>;
  column?: InputMaybe<QueryGroupsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryGroupsFilterStatic {
  CompanyId = 'COMPANY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME',
  RoleId = 'ROLE_ID'
}

export type QueryGroupsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  role_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryGroupsFilterStaticOperator {
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name',
  RoleId = 'role_id'
}

export enum QueryGroupsFilterStaticType {
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name',
  RoleId = 'role_id'
}

export enum QueryGroupsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryGroupsOrderByOrderByClause = {
  column: QueryGroupsOrderByColumn;
  order: SortOrder;
};

export enum QueryKycTimelinesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

export type QueryKycTimelinesOrderByOrderByClause = {
  column: QueryKycTimelinesOrderByColumn;
  order: SortOrder;
};

export type QueryMemberAccessLimitationsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryMemberAccessLimitationsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryMemberAccessLimitationsFilterFilterConditions>>;
  column?: InputMaybe<QueryMemberAccessLimitationsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryMemberAccessLimitationsFilterStatic {
  DoesntHaveGroupRoles = 'DOESNT_HAVE_GROUP_ROLES',
  GroupTypeId = 'GROUP_TYPE_ID',
  HasGroupRolesFilterById = 'HAS_GROUP_ROLES_FILTER_BY_ID',
  ModuleId = 'MODULE_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  ProjectId = 'PROJECT_ID'
}

export type QueryMemberAccessLimitationsFilterStaticInput = {
  doesntHaveGroupRoles?: InputMaybe<Scalars['Boolean']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  hasGroupRolesFilterById?: InputMaybe<Scalars['ID']>;
  module_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  project_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryMemberAccessLimitationsFilterStaticOperator {
  DoesntHaveGroupRoles = 'doesntHaveGroupRoles',
  GroupTypeId = 'group_type_id',
  HasGroupRolesFilterById = 'hasGroupRolesFilterById',
  ModuleId = 'module_id',
  PaymentProviderId = 'payment_provider_id',
  ProjectId = 'project_id'
}

export enum QueryMemberAccessLimitationsFilterStaticType {
  DoesntHaveGroupRoles = 'doesntHaveGroupRoles',
  GroupTypeId = 'group_type_id',
  HasGroupRolesFilterById = 'hasGroupRolesFilterById',
  ModuleId = 'module_id',
  PaymentProviderId = 'payment_provider_id',
  ProjectId = 'project_id'
}

export enum QueryMemberAccessLimitationsOrderByColumn {
  Id = 'ID'
}

export type QueryMemberAccessLimitationsOrderByOrderByClause = {
  column: QueryMemberAccessLimitationsOrderByColumn;
  order: SortOrder;
};

export type QueryMembersFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryMembersFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryMembersFilterFilterConditions>>;
  column?: InputMaybe<QueryMembersFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryMembersFilterStatic {
  CompanyId = 'COMPANY_ID',
  DepartmentId = 'DEPARTMENT_ID',
  DepartmentPositionId = 'DEPARTMENT_POSITION_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  HasGroupRoleFilterById = 'HAS_GROUP_ROLE_FILTER_BY_ID',
  HasRoleFilterById = 'HAS_ROLE_FILTER_BY_ID',
  Id = 'ID',
  IsShowOwnerApplicants = 'IS_SHOW_OWNER_APPLICANTS',
  LastLoginAt = 'LAST_LOGIN_AT',
  MemberStatusId = 'MEMBER_STATUS_ID'
}

export type QueryMembersFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  department_id?: InputMaybe<Scalars['ID']>;
  department_position_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  hasGroupRoleFilterById?: InputMaybe<Scalars['ID']>;
  hasRoleFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']>;
  last_login_at?: InputMaybe<Scalars['String']>;
  member_status_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryMembersFilterStaticOperator {
  CompanyId = 'company_id',
  DepartmentId = 'department_id',
  DepartmentPositionId = 'department_position_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleFilterById = 'hasGroupRoleFilterById',
  HasRoleFilterById = 'hasRoleFilterById',
  Id = 'id',
  IsShowOwnerApplicants = 'is_show_owner_applicants',
  LastLoginAt = 'last_login_at',
  MemberStatusId = 'member_status_id'
}

export enum QueryMembersFilterStaticType {
  CompanyId = 'company_id',
  DepartmentId = 'department_id',
  DepartmentPositionId = 'department_position_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleFilterById = 'hasGroupRoleFilterById',
  HasRoleFilterById = 'hasRoleFilterById',
  Id = 'id',
  IsShowOwnerApplicants = 'is_show_owner_applicants',
  LastLoginAt = 'last_login_at',
  MemberStatusId = 'member_status_id'
}

export enum QueryMembersOrderByColumn {
  Email = 'EMAIL',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  LastLoginAt = 'LAST_LOGIN_AT'
}

export type QueryMembersOrderByOrderByClause = {
  column: QueryMembersOrderByColumn;
  order: SortOrder;
};

export enum QueryModulesOrderByColumn {
  Id = 'ID'
}

export type QueryModulesOrderByOrderByClause = {
  column: QueryModulesOrderByColumn;
  order: SortOrder;
};

export enum QueryModulesWhereColumn {
  Name = 'NAME'
}

export type QueryModulesWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryModulesWhereWhereConditions>>;
  HAS?: InputMaybe<QueryModulesWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryModulesWhereWhereConditions>>;
  column?: InputMaybe<QueryModulesWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryModulesWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryModulesWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryModulesWithKycOrderByColumn {
  Id = 'ID'
}

export type QueryModulesWithKycOrderByOrderByClause = {
  column: QueryModulesWithKycOrderByColumn;
  order: SortOrder;
};

export enum QueryModulesWithKycWhereColumn {
  Name = 'NAME'
}

export type QueryModulesWithKycWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryModulesWithKycWhereWhereConditions>>;
  HAS?: InputMaybe<QueryModulesWithKycWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryModulesWithKycWhereWhereConditions>>;
  column?: InputMaybe<QueryModulesWithKycWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryModulesWithKycWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryModulesWithKycWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export type QueryOperationTypesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryOperationTypesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryOperationTypesFilterFilterConditions>>;
  column?: InputMaybe<QueryOperationTypesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryOperationTypesFilterStatic {
  FeeTypeId = 'FEE_TYPE_ID',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID',
  TransferType = 'TRANSFER_TYPE'
}

export enum QueryOperationTypesFilterStaticEnumTransferType {
  Incoming = 'INCOMING',
  Outgoing = 'OUTGOING'
}

export type QueryOperationTypesFilterStaticInput = {
  fee_type_id?: InputMaybe<Scalars['ID']>;
  payment_system_id?: InputMaybe<Scalars['ID']>;
  transfer_type?: InputMaybe<TransferType>;
};

export enum QueryOperationTypesFilterStaticOperator {
  FeeTypeId = 'fee_type_id',
  PaymentSystemId = 'payment_system_id',
  TransferType = 'transfer_type'
}

export enum QueryOperationTypesFilterStaticType {
  FeeTypeId = 'fee_type_id',
  PaymentSystemId = 'payment_system_id',
  TransferType = 'transfer_type'
}

export enum QueryOwnersOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  Id = 'ID'
}

export type QueryOwnersOrderByOrderByClause = {
  column: QueryOwnersOrderByColumn;
  order: SortOrder;
};

export type QueryPaymentBankCondition = {
  address?: InputMaybe<Scalars['String']>;
  bank_code?: InputMaybe<Scalars['String']>;
  country_id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  payment_provider_id: Scalars['ID'];
  payment_system_code?: InputMaybe<Scalars['String']>;
  payment_system_id: Scalars['ID'];
};

export enum QueryPaymentBankWhereColumn {
  Address = 'ADDRESS',
  BankCode = 'BANK_CODE',
  CountryId = 'COUNTRY_ID',
  Name = 'NAME',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  PaymentSystemCode = 'PAYMENT_SYSTEM_CODE',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID'
}

export type QueryPaymentBanksFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryPaymentBanksFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryPaymentBanksFilterFilterConditions>>;
  column?: InputMaybe<QueryPaymentBanksFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryPaymentBanksFilterStatic {
  Address = 'ADDRESS',
  BankCode = 'BANK_CODE',
  CountryId = 'COUNTRY_ID',
  Id = 'ID',
  Name = 'NAME',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  PaymentSystemCode = 'PAYMENT_SYSTEM_CODE',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID'
}

export type QueryPaymentBanksFilterStaticInput = {
  address?: InputMaybe<Scalars['String']>;
  bank_code?: InputMaybe<Scalars['String']>;
  country_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  payment_system_code?: InputMaybe<Scalars['String']>;
  payment_system_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryPaymentBanksFilterStaticOperator {
  Address = 'address',
  BankCode = 'bank_code',
  CountryId = 'country_id',
  Id = 'id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemCode = 'payment_system_code',
  PaymentSystemId = 'payment_system_id'
}

export enum QueryPaymentBanksFilterStaticType {
  Address = 'address',
  BankCode = 'bank_code',
  CountryId = 'country_id',
  Id = 'id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemCode = 'payment_system_code',
  PaymentSystemId = 'payment_system_id'
}

export enum QueryPaymentBanksOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryPaymentBanksOrderByOrderByClause = {
  column: QueryPaymentBanksOrderByColumn;
  order: SortOrder;
};

export type QueryPaymentProviderIbansFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryPaymentProviderIbansFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryPaymentProviderIbansFilterFilterConditions>>;
  column?: InputMaybe<QueryPaymentProviderIbansFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryPaymentProviderIbansFilterStatic {
  CompanyId = 'COMPANY_ID',
  CurrencyId = 'CURRENCY_ID',
  Name = 'NAME'
}

export type QueryPaymentProviderIbansFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  currency_id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum QueryPaymentProviderIbansFilterStaticOperator {
  CompanyId = 'company_id',
  CurrencyId = 'currency_id',
  Name = 'name'
}

export enum QueryPaymentProviderIbansFilterStaticType {
  CompanyId = 'company_id',
  CurrencyId = 'currency_id',
  Name = 'name'
}

export enum QueryPaymentProviderIbansOrderByColumn {
  Id = 'ID'
}

export type QueryPaymentProviderIbansOrderByOrderByClause = {
  column: QueryPaymentProviderIbansOrderByColumn;
  order: SortOrder;
};

export type QueryPaymentProvidersFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryPaymentProvidersFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryPaymentProvidersFilterFilterConditions>>;
  column?: InputMaybe<QueryPaymentProvidersFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryPaymentProvidersFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasAccountFilterById = 'HAS_ACCOUNT_FILTER_BY_ID',
  HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
  HasPaymentSystemsFilterById = 'HAS_PAYMENT_SYSTEMS_FILTER_BY_ID',
  Id = 'ID',
  Name = 'NAME'
}

export type QueryPaymentProvidersFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  hasAccountFilterById?: InputMaybe<Scalars['ID']>;
  hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentSystemsFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum QueryPaymentProvidersFilterStaticOperator {
  CompanyId = 'company_id',
  HasAccountFilterById = 'hasAccountFilterById',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentSystemsFilterById = 'hasPaymentSystemsFilterById',
  Id = 'id',
  Name = 'name'
}

export enum QueryPaymentProvidersFilterStaticType {
  CompanyId = 'company_id',
  HasAccountFilterById = 'hasAccountFilterById',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentSystemsFilterById = 'hasPaymentSystemsFilterById',
  Id = 'id',
  Name = 'name'
}

export enum QueryPaymentProvidersOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryPaymentProvidersOrderByOrderByClause = {
  column: QueryPaymentProvidersOrderByColumn;
  order: SortOrder;
};

export type QueryPaymentStatusesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryPaymentStatusesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryPaymentStatusesFilterFilterConditions>>;
  column?: InputMaybe<QueryPaymentStatusesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryPaymentStatusesFilterStatic {
  OperationType = 'OPERATION_TYPE'
}

export enum QueryPaymentStatusesFilterStaticEnumOperationTypeEnum {
  BetweenAccount = 'BETWEEN_ACCOUNT',
  BetweenUsers = 'BETWEEN_USERS',
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Exchange = 'EXCHANGE',
  IncomingTransfer = 'INCOMING_TRANSFER',
  OutgoingTransfer = 'OUTGOING_TRANSFER',
  ScheduledFee = 'SCHEDULED_FEE'
}

export type QueryPaymentStatusesFilterStaticInput = {
  operation_type?: InputMaybe<OperationTypeEnum>;
};

export enum QueryPaymentStatusesFilterStaticOperator {
  OperationType = 'operation_type'
}

export enum QueryPaymentStatusesFilterStaticType {
  OperationType = 'operation_type'
}

export type QueryPaymentSystemsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryPaymentSystemsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryPaymentSystemsFilterFilterConditions>>;
  column?: InputMaybe<QueryPaymentSystemsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryPaymentSystemsFilterStatic {
  HasCompaniesFilterById = 'HAS_COMPANIES_FILTER_BY_ID',
  HasProvidersFilterById = 'HAS_PROVIDERS_FILTER_BY_ID',
  HasProvidersFilterByName = 'HAS_PROVIDERS_FILTER_BY_NAME',
  HasRegionsFilterById = 'HAS_REGIONS_FILTER_BY_ID',
  Id = 'ID'
}

export type QueryPaymentSystemsFilterStaticInput = {
  hasCompaniesFilterById?: InputMaybe<Scalars['ID']>;
  hasProvidersFilterById?: InputMaybe<Scalars['ID']>;
  hasProvidersFilterByName?: InputMaybe<Scalars['String']>;
  hasRegionsFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export enum QueryPaymentSystemsFilterStaticOperator {
  HasCompaniesFilterById = 'hasCompaniesFilterById',
  HasProvidersFilterById = 'hasProvidersFilterById',
  HasProvidersFilterByName = 'hasProvidersFilterByName',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Id = 'id'
}

export enum QueryPaymentSystemsFilterStaticType {
  HasCompaniesFilterById = 'hasCompaniesFilterById',
  HasProvidersFilterById = 'hasProvidersFilterById',
  HasProvidersFilterByName = 'hasProvidersFilterByName',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Id = 'id'
}

export enum QueryPaymentSystemsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type QueryPaymentSystemsOrderByOrderByClause = {
  column: QueryPaymentSystemsOrderByColumn;
  order: SortOrder;
};

export type QueryPaymentsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryPaymentsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryPaymentsFilterFilterConditions>>;
  column?: InputMaybe<QueryPaymentsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryPaymentsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  SenderName = 'SENDER_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID'
}

export type QueryPaymentsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  operation_type_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  sender_name?: InputMaybe<Scalars['String']>;
  status_id?: InputMaybe<Scalars['ID']>;
  urgency_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryPaymentsFilterStaticOperator {
  CompanyId = 'company_id',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PaymentProviderId = 'payment_provider_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

export enum QueryPaymentsFilterStaticType {
  CompanyId = 'company_id',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PaymentProviderId = 'payment_provider_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

export enum QueryPaymentsOrderByColumn {
  Amount = 'AMOUNT',
  CreatedAt = 'CREATED_AT',
  Fee = 'FEE',
  Id = 'ID',
  PaymentNumber = 'PAYMENT_NUMBER'
}

export type QueryPaymentsOrderByOrderByClause = {
  column: QueryPaymentsOrderByColumn;
  order: SortOrder;
};

export enum QueryPermissionsWhereColumn {
  Id = 'ID',
  Name = 'NAME'
}

export type QueryPermissionsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryPermissionsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryPermissionsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryPermissionsWhereWhereConditions>>;
  column?: InputMaybe<QueryPermissionsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryPermissionsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryPermissionsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export type QueryPriceListFeesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryPriceListFeesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryPriceListFeesFilterFilterConditions>>;
  column?: InputMaybe<QueryPriceListFeesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryPriceListFeesFilterStatic {
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  HasFeesFilterById = 'HAS_FEES_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  PeriodId = 'PERIOD_ID',
  PriceListId = 'PRICE_LIST_ID',
  TypeId = 'TYPE_ID'
}

export type QueryPriceListFeesFilterStaticInput = {
  hasCompanyFilterById?: InputMaybe<Scalars['ID']>;
  hasFeesFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']>;
  hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  operation_type_id?: InputMaybe<Scalars['ID']>;
  period_id?: InputMaybe<Scalars['ID']>;
  price_list_id?: InputMaybe<Scalars['ID']>;
  type_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryPriceListFeesFilterStaticOperator {
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasFeesFilterById = 'hasFeesFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PeriodId = 'period_id',
  PriceListId = 'price_list_id',
  TypeId = 'type_id'
}

export enum QueryPriceListFeesFilterStaticType {
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasFeesFilterById = 'hasFeesFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PeriodId = 'period_id',
  PriceListId = 'price_list_id',
  TypeId = 'type_id'
}

export type QueryProjectsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryProjectsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryProjectsFilterFilterConditions>>;
  column?: InputMaybe<QueryProjectsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryProjectsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Id = 'ID',
  ModuleId = 'MODULE_ID'
}

export type QueryProjectsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  module_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryProjectsFilterStaticOperator {
  CompanyId = 'company_id',
  Id = 'id',
  ModuleId = 'module_id'
}

export enum QueryProjectsFilterStaticType {
  CompanyId = 'company_id',
  Id = 'id',
  ModuleId = 'module_id'
}

export type QueryRegionsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryRegionsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryRegionsFilterFilterConditions>>;
  column?: InputMaybe<QueryRegionsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryRegionsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasCountriesFilterById = 'HAS_COUNTRIES_FILTER_BY_ID',
  HasCountriesFilterByName = 'HAS_COUNTRIES_FILTER_BY_NAME',
  HasPaymentSystemMixedIdOrName = 'HAS_PAYMENT_SYSTEM_MIXED_ID_OR_NAME'
}

export type QueryRegionsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  hasCountriesFilterById?: InputMaybe<Scalars['ID']>;
  hasCountriesFilterByName?: InputMaybe<Scalars['String']>;
  hasPaymentSystemMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryRegionsFilterStaticOperator {
  CompanyId = 'company_id',
  HasCountriesFilterById = 'hasCountriesFilterById',
  HasCountriesFilterByName = 'hasCountriesFilterByName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName'
}

export enum QueryRegionsFilterStaticType {
  CompanyId = 'company_id',
  HasCountriesFilterById = 'hasCountriesFilterById',
  HasCountriesFilterByName = 'hasCountriesFilterByName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName'
}

export type QueryRequisitesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryRequisitesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryRequisitesFilterFilterConditions>>;
  column?: InputMaybe<QueryRequisitesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryRequisitesFilterStatic {
  AccountNumber = 'ACCOUNT_NUMBER',
  CompanyId = 'COMPANY_ID',
  PaymentBankId = 'PAYMENT_BANK_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID'
}

export type QueryRequisitesFilterStaticInput = {
  account_number?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['ID']>;
  payment_bank_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  payment_system_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryRequisitesFilterStaticOperator {
  AccountNumber = 'account_number',
  CompanyId = 'company_id',
  PaymentBankId = 'payment_bank_id',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemId = 'payment_system_id'
}

export enum QueryRequisitesFilterStaticType {
  AccountNumber = 'account_number',
  CompanyId = 'company_id',
  PaymentBankId = 'payment_bank_id',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemId = 'payment_system_id'
}

export type QueryRolesFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryRolesFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryRolesFilterFilterConditions>>;
  column?: InputMaybe<QueryRolesFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryRolesFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasGroupsMixedIdOrName = 'HAS_GROUPS_MIXED_ID_OR_NAME',
  HasGroupTypeMixedIdOrName = 'HAS_GROUP_TYPE_MIXED_ID_OR_NAME',
  Name = 'NAME'
}

export type QueryRolesFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  hasGroupTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  hasGroupsMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum QueryRolesFilterStaticOperator {
  CompanyId = 'company_id',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasGroupsMixedIdOrName = 'hasGroupsMixedIdOrName',
  Name = 'name'
}

export enum QueryRolesFilterStaticType {
  CompanyId = 'company_id',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasGroupsMixedIdOrName = 'hasGroupsMixedIdOrName',
  Name = 'name'
}

export enum QueryRolesOrderByColumn {
  Description = 'DESCRIPTION',
  Id = 'ID',
  Name = 'NAME'
}

export type QueryRolesOrderByOrderByClause = {
  column: QueryRolesOrderByColumn;
  order: SortOrder;
};

export enum QueryTicketsHasClientColumn {
  Fullname = 'FULLNAME'
}

export type QueryTicketsHasClientWhereHasConditions = {
  AND?: InputMaybe<Array<QueryTicketsHasClientWhereHasConditions>>;
  HAS?: InputMaybe<QueryTicketsHasClientWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryTicketsHasClientWhereHasConditions>>;
  column?: InputMaybe<QueryTicketsHasClientColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryTicketsHasClientWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryTicketsHasClientWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryTicketsHasCompanyColumn {
  Name = 'NAME'
}

export type QueryTicketsHasCompanyWhereHasConditions = {
  AND?: InputMaybe<Array<QueryTicketsHasCompanyWhereHasConditions>>;
  HAS?: InputMaybe<QueryTicketsHasCompanyWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryTicketsHasCompanyWhereHasConditions>>;
  column?: InputMaybe<QueryTicketsHasCompanyColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryTicketsHasCompanyWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryTicketsHasCompanyWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryTicketsHasDepartmentColumn {
  Name = 'NAME'
}

export type QueryTicketsHasDepartmentWhereHasConditions = {
  AND?: InputMaybe<Array<QueryTicketsHasDepartmentWhereHasConditions>>;
  HAS?: InputMaybe<QueryTicketsHasDepartmentWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryTicketsHasDepartmentWhereHasConditions>>;
  column?: InputMaybe<QueryTicketsHasDepartmentColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryTicketsHasDepartmentWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryTicketsHasDepartmentWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryTicketsHasMemberColumn {
  Fullname = 'FULLNAME'
}

export type QueryTicketsHasMemberWhereHasConditions = {
  AND?: InputMaybe<Array<QueryTicketsHasMemberWhereHasConditions>>;
  HAS?: InputMaybe<QueryTicketsHasMemberWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryTicketsHasMemberWhereHasConditions>>;
  column?: InputMaybe<QueryTicketsHasMemberColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryTicketsHasMemberWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryTicketsHasMemberWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryTicketsHasPositionColumn {
  Name = 'NAME'
}

export type QueryTicketsHasPositionWhereHasConditions = {
  AND?: InputMaybe<Array<QueryTicketsHasPositionWhereHasConditions>>;
  HAS?: InputMaybe<QueryTicketsHasPositionWhereHasConditionsRelation>;
  OR?: InputMaybe<Array<QueryTicketsHasPositionWhereHasConditions>>;
  column?: InputMaybe<QueryTicketsHasPositionColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryTicketsHasPositionWhereHasConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryTicketsHasPositionWhereHasConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export enum QueryTicketsOrderByColumn {
  Id = 'ID'
}

export type QueryTicketsOrderByCompany = {
  aggregate: OrderByRelationAggregateFunction;
};

export type QueryTicketsOrderByDepartment = {
  aggregate: OrderByRelationAggregateFunction;
};

export type QueryTicketsOrderByRelationOrderByClause = {
  column?: InputMaybe<QueryTicketsOrderByColumn>;
  company?: InputMaybe<QueryTicketsOrderByCompany>;
  department?: InputMaybe<QueryTicketsOrderByDepartment>;
  order: SortOrder;
};

export enum QueryTicketsWhereColumn {
  Status = 'STATUS',
  Title = 'TITLE'
}

export type QueryTicketsWhereWhereConditions = {
  AND?: InputMaybe<Array<QueryTicketsWhereWhereConditions>>;
  HAS?: InputMaybe<QueryTicketsWhereWhereConditionsRelation>;
  OR?: InputMaybe<Array<QueryTicketsWhereWhereConditions>>;
  column?: InputMaybe<QueryTicketsWhereColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type QueryTicketsWhereWhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<QueryTicketsWhereWhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export type QueryTransferIncomingsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryTransferIncomingsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryTransferIncomingsFilterFilterConditions>>;
  column?: InputMaybe<QueryTransferIncomingsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryTransferIncomingsFilterStatic {
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  HasFeeFilterByFee = 'HAS_FEE_FILTER_BY_FEE',
  HasFeeFilterByFeeAmount = 'HAS_FEE_FILTER_BY_FEE_AMOUNT',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  SenderName = 'SENDER_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID'
}

export type QueryTransferIncomingsFilterStaticInput = {
  hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']>;
  hasFeeFilterByFee?: InputMaybe<Scalars['String']>;
  hasFeeFilterByFeeAmount?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  operation_type_id?: InputMaybe<Scalars['ID']>;
  sender_name?: InputMaybe<Scalars['String']>;
  status_id?: InputMaybe<Scalars['ID']>;
  urgency_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryTransferIncomingsFilterStaticOperator {
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

export enum QueryTransferIncomingsFilterStaticType {
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

export type QueryTransferOutgoingsFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryTransferOutgoingsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryTransferOutgoingsFilterFilterConditions>>;
  column?: InputMaybe<QueryTransferOutgoingsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryTransferOutgoingsFilterStatic {
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  HasFeeFilterByFee = 'HAS_FEE_FILTER_BY_FEE',
  HasFeeFilterByFeeAmount = 'HAS_FEE_FILTER_BY_FEE_AMOUNT',
  HasSenderMixedNameOrFullname = 'HAS_SENDER_MIXED_NAME_OR_FULLNAME',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  RecipientName = 'RECIPIENT_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID',
  UserType = 'USER_TYPE'
}

export enum QueryTransferOutgoingsFilterStaticEnumUserType {
  ApplicantCompany = 'APPLICANT_COMPANY',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL',
  Members = 'MEMBERS'
}

export type QueryTransferOutgoingsFilterStaticInput = {
  hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']>;
  hasFeeFilterByFee?: InputMaybe<Scalars['String']>;
  hasFeeFilterByFeeAmount?: InputMaybe<Scalars['String']>;
  hasSenderMixedNameOrFullname?: InputMaybe<Scalars['Mixed']>;
  id?: InputMaybe<Scalars['ID']>;
  operation_type_id?: InputMaybe<Scalars['ID']>;
  recipient_name?: InputMaybe<Scalars['String']>;
  status_id?: InputMaybe<Scalars['ID']>;
  urgency_id?: InputMaybe<Scalars['ID']>;
  user_type?: InputMaybe<UserType>;
};

export enum QueryTransferOutgoingsFilterStaticOperator {
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount',
  HasSenderMixedNameOrFullname = 'hasSenderMixedNameOrFullname',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  RecipientName = 'recipient_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id',
  UserType = 'user_type'
}

export enum QueryTransferOutgoingsFilterStaticType {
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount',
  HasSenderMixedNameOrFullname = 'hasSenderMixedNameOrFullname',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  RecipientName = 'recipient_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id',
  UserType = 'user_type'
}

export type QueryUsersFilterFilterConditions = {
  AND?: InputMaybe<Array<QueryUsersFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryUsersFilterFilterConditions>>;
  column?: InputMaybe<QueryUsersFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryUsersFilterStatic {
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  GroupId = 'GROUP_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  RoleId = 'ROLE_ID'
}

export type QueryUsersFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  group_id?: InputMaybe<Scalars['ID']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  role_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryUsersFilterStaticOperator {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  GroupId = 'group_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  RoleId = 'role_id'
}

export enum QueryUsersFilterStaticType {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  GroupId = 'group_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  RoleId = 'role_id'
}

export enum QueryUsersOrderByColumn {
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  Id = 'ID'
}

export type QueryUsersOrderByOrderByClause = {
  column: QueryUsersOrderByColumn;
  order: SortOrder;
};

export type RawFile = {
  __typename?: 'RawFile';
  base64: Scalars['String'];
};

export enum RecipientType {
  Group = 'GROUP',
  Person = 'PERSON'
}

export type Region = {
  __typename?: 'Region';
  company?: Maybe<Company>;
  countries?: Maybe<Array<Maybe<Country>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type RegionPaginator = {
  __typename?: 'RegionPaginator';
  data: Array<Region>;
  paginatorInfo: PaginatorInfo;
};

export type Requisite = {
  __typename?: 'Requisite';
  account_number?: Maybe<Scalars['String']>;
  bank?: Maybe<PaymentBank>;
  currency?: Maybe<Currencies>;
  id?: Maybe<Scalars['ID']>;
  owner?: Maybe<ApplicantIndividual>;
};

export type RespondentFee = {
  __typename?: 'RespondentFee';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  company?: Maybe<Company>;
  description?: Maybe<Scalars['String']>;
  group_type?: Maybe<GroupType>;
  groups?: Maybe<Array<Maybe<GroupRole>>>;
  groups_count?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  is_all_companies?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  permission_category_all_member?: Maybe<Array<Maybe<PermissionCategory>>>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  permissions_tree?: Maybe<Scalars['JSON']>;
};

export type RolePaginator = {
  __typename?: 'RolePaginator';
  data: Array<Role>;
  paginatorInfo: PaginatorInfo;
};

export enum SqlOperator {
  Between = 'BETWEEN',
  Eq = 'EQ',
  Gt = 'GT',
  Gte = 'GTE',
  Ilike = 'ILIKE',
  In = 'IN',
  IsNotNull = 'IS_NOT_NULL',
  IsNull = 'IS_NULL',
  Like = 'LIKE',
  Lt = 'LT',
  Lte = 'LTE',
  Neq = 'NEQ',
  NotBetween = 'NOT_BETWEEN',
  NotIn = 'NOT_IN',
  NotLike = 'NOT_LIKE'
}

export enum Securities {
  Auto = 'Auto',
  Ssl = 'Ssl',
  Starttls = 'Starttls'
}

export type Sender = {
  __typename?: 'Sender';
  sender_name: Scalars['String'];
};

export enum ServiceType {
  AdminNotify = 'AdminNotify',
  Banking = 'Banking',
  BankingCommon = 'BankingCommon',
  BankingSystem = 'BankingSystem',
  Common = 'Common',
  System = 'System'
}

export enum Sex {
  Female = 'Female',
  Male = 'Male'
}

export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  firstItem?: Maybe<Scalars['Int']>;
  hasMorePages: Scalars['Boolean'];
  lastItem?: Maybe<Scalars['Int']>;
  perPage: Scalars['Int'];
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type State = {
  __typename?: 'State';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type StateReason = {
  __typename?: 'StateReason';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type StatusType = {
  __typename?: 'StatusType';
  message?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

export type Ticket = {
  __typename?: 'Ticket';
  client?: Maybe<ApplicantIndividual>;
  comments?: Maybe<Array<Maybe<TicketComments>>>;
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  department?: Maybe<Department>;
  file_object?: Maybe<Files>;
  id: Scalars['ID'];
  member?: Maybe<Members>;
  message: Scalars['String'];
  position?: Maybe<DepartmentPosition>;
  status?: Maybe<TicketStatus>;
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type TicketComments = {
  __typename?: 'TicketComments';
  client?: Maybe<ApplicantIndividual>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  file_object?: Maybe<Files>;
  id: Scalars['ID'];
  message: Scalars['String'];
  ticket?: Maybe<Ticket>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type TicketPaginator = {
  __typename?: 'TicketPaginator';
  data: Array<Ticket>;
  paginatorInfo: PaginatorInfo;
};

export type TicketStatus = {
  __typename?: 'TicketStatus';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TransferIncoming = {
  __typename?: 'TransferIncoming';
  account?: Maybe<Account>;
  amount: Scalars['Decimal'];
  amount_debt: Scalars['Decimal'];
  bank_message?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  currency?: Maybe<Currencies>;
  execution_at?: Maybe<Scalars['DateTimeUtc']>;
  fee?: Maybe<Fee>;
  fees?: Maybe<Array<Maybe<Fee>>>;
  files?: Maybe<Array<Maybe<Files>>>;
  id: Scalars['ID'];
  payment_bank?: Maybe<PaymentBank>;
  payment_number: Scalars['String'];
  payment_operation_type?: Maybe<OperationType>;
  payment_provider?: Maybe<PaymentProvider>;
  payment_provider_history?: Maybe<PaymentProviderHistory>;
  payment_system?: Maybe<PaymentSystem>;
  payment_urgency?: Maybe<PaymentUrgency>;
  reason?: Maybe<Scalars['String']>;
  recipient?: Maybe<Client>;
  respondent_fee?: Maybe<RespondentFee>;
  sender_account?: Maybe<Scalars['String']>;
  sender_address?: Maybe<Scalars['String']>;
  sender_bank_address?: Maybe<Scalars['String']>;
  sender_bank_country?: Maybe<Country>;
  sender_bank_name?: Maybe<Scalars['String']>;
  sender_bank_swift?: Maybe<Scalars['String']>;
  sender_city?: Maybe<Scalars['String']>;
  sender_country?: Maybe<Country>;
  sender_name?: Maybe<Scalars['String']>;
  sender_state?: Maybe<Scalars['String']>;
  sender_zip?: Maybe<Scalars['String']>;
  status?: Maybe<PaymentStatus>;
  system_message?: Maybe<Scalars['String']>;
  transfer_type?: Maybe<TypeOfTransfer>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type TransferIncomingHistory = {
  __typename?: 'TransferIncomingHistory';
  action?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  status?: Maybe<PaymentStatus>;
};

export type TransferIncomingHistoryPaginator = {
  __typename?: 'TransferIncomingHistoryPaginator';
  data: Array<TransferIncomingHistory>;
  paginatorInfo: PaginatorInfo;
};

export type TransferIncomingPaginator = {
  __typename?: 'TransferIncomingPaginator';
  data: Array<TransferIncoming>;
  paginatorInfo: PaginatorInfo;
};

export type TransferIncomingStatistic = {
  __typename?: 'TransferIncomingStatistic';
  count: Scalars['Int'];
  name: Scalars['String'];
  status_id: Scalars['ID'];
};

export type TransferOutgoing = {
  __typename?: 'TransferOutgoing';
  account?: Maybe<Account>;
  amount: Scalars['Decimal'];
  amount_debt: Scalars['Decimal'];
  bank_message?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  currency?: Maybe<Currencies>;
  execution_at?: Maybe<Scalars['DateTimeUtc']>;
  fee?: Maybe<Fee>;
  fees?: Maybe<Array<Maybe<Fee>>>;
  files?: Maybe<Array<Maybe<Files>>>;
  id: Scalars['ID'];
  payment_bank?: Maybe<PaymentBank>;
  payment_number: Scalars['String'];
  payment_operation_type?: Maybe<OperationType>;
  payment_provider?: Maybe<PaymentProvider>;
  payment_provider_history?: Maybe<PaymentProviderHistory>;
  payment_system?: Maybe<PaymentSystem>;
  payment_urgency?: Maybe<PaymentUrgency>;
  reason?: Maybe<Scalars['String']>;
  recipient_account: Scalars['String'];
  recipient_address: Scalars['String'];
  recipient_bank_address: Scalars['String'];
  recipient_bank_country?: Maybe<Country>;
  recipient_bank_name: Scalars['String'];
  recipient_bank_swift?: Maybe<Scalars['String']>;
  recipient_city: Scalars['String'];
  recipient_country?: Maybe<Country>;
  recipient_name: Scalars['String'];
  recipient_state: Scalars['String'];
  recipient_zip: Scalars['String'];
  requested_by?: Maybe<Clientable>;
  respondent_fee?: Maybe<RespondentFee>;
  sender?: Maybe<Client>;
  status?: Maybe<PaymentStatus>;
  system_message?: Maybe<Scalars['String']>;
  transfer_type?: Maybe<TypeOfTransfer>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
  user_type?: Maybe<UserType>;
};

export type TransferOutgoingHistory = {
  __typename?: 'TransferOutgoingHistory';
  action?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  id: Scalars['ID'];
  status?: Maybe<PaymentStatus>;
};

export type TransferOutgoingHistoryPaginator = {
  __typename?: 'TransferOutgoingHistoryPaginator';
  data: Array<TransferOutgoingHistory>;
  paginatorInfo: PaginatorInfo;
};

export type TransferOutgoingPaginator = {
  __typename?: 'TransferOutgoingPaginator';
  data: Array<TransferOutgoing>;
  paginatorInfo: PaginatorInfo;
};

export type TransferOutgoingStatistic = {
  __typename?: 'TransferOutgoingStatistic';
  count: Scalars['Int'];
  name: Scalars['String'];
  status_id: Scalars['ID'];
};

export enum TransferType {
  Incoming = 'INCOMING',
  Outgoing = 'OUTGOING'
}

export type TwoFactorAuthSettings = {
  __typename?: 'TwoFactorAuthSettings';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TwoFactorAuthSettingsPaginator = {
  __typename?: 'TwoFactorAuthSettingsPaginator';
  data: Array<TwoFactorAuthSettings>;
  paginatorInfo: PaginatorInfo;
};

export type TwoFactorAuthToken = {
  __typename?: 'TwoFactorAuthToken';
  auth_token?: Maybe<Scalars['String']>;
  two_factor?: Maybe<Scalars['Boolean']>;
};

export type TypeOfIndustry = {
  __typename?: 'TypeOfIndustry';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TypeOfTransfer = {
  __typename?: 'TypeOfTransfer';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum UserType {
  ApplicantCompany = 'ApplicantCompany',
  ApplicantIndividual = 'ApplicantIndividual',
  Members = 'Members'
}

export type Users = {
  __typename?: 'Users';
  company?: Maybe<Company>;
  email?: Maybe<Scalars['EMAIL']>;
  first_name?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  group?: Maybe<GroupRole>;
  id?: Maybe<Scalars['ID']>;
  last_name?: Maybe<Scalars['String']>;
};

export type UsersPaginator = {
  __typename?: 'UsersPaginator';
  data: Array<Users>;
  paginatorInfo: PaginatorInfo;
};

export type WhereConditions = {
  AND?: InputMaybe<Array<WhereConditions>>;
  HAS?: InputMaybe<WhereConditionsRelation>;
  OR?: InputMaybe<Array<WhereConditions>>;
  column?: InputMaybe<Scalars['String']>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
};

export type WhereConditionsRelation = {
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<WhereConditions>;
  operator?: InputMaybe<SqlOperator>;
  relation: Scalars['String'];
};

export type DashboardAccountsStatistic = {
  __typename?: 'dashboardAccountsStatistic';
  account_state_id: Scalars['ID'];
  account_state_name: Scalars['String'];
  count: Scalars['Int'];
  payment_provider_id: Scalars['ID'];
  payment_provider_name: Scalars['String'];
};

export type DashboardTicketsStatistic = {
  __typename?: 'dashboardTicketsStatistic';
  count: Scalars['Int'];
  status_id: Scalars['ID'];
  status_name: Scalars['String'];
};

export type DashboardTransfersStatistic = {
  __typename?: 'dashboardTransfersStatistic';
  count: Scalars['Int'];
  status_name: Scalars['String'];
  transfer_type: Scalars['String'];
};

export type DashboardUsersStatistic = {
  __typename?: 'dashboardUsersStatistic';
  applicant_type: Scalars['String'];
  count: Scalars['Int'];
  status_name: Scalars['String'];
};

export type PriceList = {
  commission_template_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  payment_system_id?: InputMaybe<Scalars['ID']>;
};

export type UserAuthResponse = {
  __typename?: 'userAuthResponse';
  data?: Maybe<Users>;
  permissions: PermissionAuth;
};
