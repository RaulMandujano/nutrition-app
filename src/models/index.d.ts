import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type NutritionListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class NutritionList {
  readonly id: string;
  readonly fav_id?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NutritionList, NutritionListMetaData>);
  static copyOf(source: NutritionList, mutator: (draft: MutableModel<NutritionList, NutritionListMetaData>) => MutableModel<NutritionList, NutritionListMetaData> | void): NutritionList;
}