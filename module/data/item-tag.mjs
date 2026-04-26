import ncouItemBase from './base-item.mjs';

export default class ncouTag extends ncouItemBase {
  static LOCALIZATION_PREFIXES = [
    'NCOU.Item.base',
    'NCOU.Item.Tag',
  ];

  static defineSchema() {
    const schema = super.defineSchema();
    return schema;
  }
}