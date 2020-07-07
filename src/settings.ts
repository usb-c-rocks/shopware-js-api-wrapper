/**
 * @beta
 */
export interface ClientSettings {
  endpoint: string;
  accessToken: string;
  contextToken?: string;
  paginationLimit?: number;
  timeout?: number;
  languageId?: string;
  rejectUnauthorized?: boolean;
}

export const clientSettings: ClientSettings = {
  endpoint: "",
  accessToken: "",
  contextToken: "",
  languageId: "",
  paginationLimit: 10,
  timeout: 10000, // ms
  rejectUnauthorized: true
};
