import {getNavigation, NavigationType} from "@shopware-js-api-wrapper";
import { defaultInstance } from "../../../src/apiService";

jest.mock("../../../src/apiService");
const mockedApiInstance = defaultInstance as jest.Mocked<
  typeof defaultInstance
>;

describe("NavigationService - getNavigation", () => {
  const mockedPost = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
    mockedApiInstance.invoke = {
      post: mockedPost,
    } as any;
  });
  it("should return navigation elements for given depth and navigationType", async () => {
    mockedPost.mockResolvedValueOnce({
      data: [
        {
          name: "Food",
          children: [
            {
              name: "Bakery products",
              children: [],
              translated: {
                breadcrumb: [
                  "ROOTNODE",
                  "Food",
                  "Bakery products"
                ],
                name: "Bakery products",
                customFields: [],
                slotConfig: null,
                externalLink: null,
                description: null,
                metaTitle: null,
                metaDescription: null,
                keywords: null
              },
              id: "19ca405790ff4f07aac8c599d4317868",
              apiAlias: "category"
            },
          ],
          translated: {
            breadcrumb: [
              "ROOTNODE",
              "Food"
            ],
            name: "Food",
            customFields: [],
            slotConfig: null,
            externalLink: null,
            description: null,
            metaTitle: null,
            metaDescription: null,
            keywords: null
          },
          id: "77b959cf66de4c1590c7f9b7da3982f3",
          apiAlias: "category"
        }
      ]
    });
    const result = await getNavigation({
      includes: {
        category: ["id", "name", "children", "translated"]
      },
      depth: 1,
      buildTree: true
    }, NavigationType.Main);
    expect(mockedPost).toBeCalledTimes(1);
    expect(mockedPost).toBeCalledWith("/store-api/v1/navigation/main-navigation/main-navigation", {
      includes: {
        category: ["id", "name", "children", "translated"]
      },
      depth: 1,
      buildTree: true,
    });
    expect(result[0].id).toEqual("77b959cf66de4c1590c7f9b7da3982f3");
  });
});
