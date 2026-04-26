import ncouItemBase from './base-item.mjs';

export default class ncouAction extends ncouItemBase {
  static LOCALIZATION_PREFIXES = [
    'NCOU.Item.base',
    'NCOU.Item.Action',
  ];

  static defineSchema() {
    const schema = super.defineSchema();
    return schema;
  }
}