import { Pagination } from "@shopware-js-api-wrapper/commons/interfaces/search/Pagination";
import {
  EqualsFilter,
  RangeFilter,
  MultiFilter,
  EqualsAnyFilter,
} from "@shopware-js-api-wrapper/commons/interfaces/search/SearchFilter";
import { Association } from "@shopware-js-api-wrapper/commons/interfaces/search/Association";
import { Aggregation } from "@shopware-js-api-wrapper/commons/interfaces/search/Aggregation";
import { TotalCountMode } from "@shopware-js-api-wrapper/commons/interfaces/search/TotalCountMode";

/**
 * @alpha
 */
export interface Sort {
  field: string;
  desc?: boolean;
}
/**
 * @alpha
 */
export interface Grouping {
  field: string;
}

/**
 * configutarion.displayParents: true - if you want to show all the products
 *
 * @alpha
 */
export interface SearchCriteria {
  filters?: Array<EqualsFilter | EqualsAnyFilter | RangeFilter | MultiFilter>;
  pagination?: Pagination;
  sort?: Sort;
  term?: string;
  configuration?: {
    displayParents?: boolean;
    grouping?: Grouping;
    associations?: Association[];
    aggregations?: Aggregation[];
    totalCountMode?: TotalCountMode;
  };
}
