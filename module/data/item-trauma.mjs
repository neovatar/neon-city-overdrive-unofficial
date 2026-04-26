import ncouItemBase from './base-item.mjs';

export default class ncouTrauma extends ncouItemBase {
  static LOCALIZATION_PREFIXES = [
    'NCOU.Item.base',
    'NCOU.Item.Trauma',
  ];

  static defineSchema() {
    const schema = super.defineSchema();
    return schema;
  }
}