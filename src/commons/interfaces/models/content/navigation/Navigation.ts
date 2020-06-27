/**
 * @alpha
 */
export interface NavigationResponse {
  [index: number]: NavigationElement;
}

/**
 * @alpha
 */
export interface NavigationElement {
  name: string;
  route: {
    path: string;
    resourceType: string;
  };
  children: NavigationElement[] | null;
  translated: NavigationTranslation | null;
  apiAlias: string;
  id: string;
}

export interface NavigationTranslation {
  breadcrumb: string[],
  name: string,
  customFields: any[],
  slotConfig: any[] | null,
  externalLink: string | null,
  description: string | null,
  metaTitle: string | null,
  metaDescription: string | null,
  keywords: string | null
}
