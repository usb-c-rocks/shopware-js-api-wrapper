import {
  Association,
  ShopwareAssociation,
} from "@shopware-api-client/commons/interfaces/search/Association";

export function convertAssociations(
  associations: Association[] = []
): ShopwareAssociation | undefined {
  if (!Array.isArray(associations) || !associations.length) return;
  const shopwareAssociations: ShopwareAssociation = {};
  associations.forEach((association) => {
    shopwareAssociations[association.name] = association.associations
      ? {
          associations: convertAssociations(association.associations),
        }
      : {};
  });
  return shopwareAssociations;
}
