import ncouItemBase from './base-item.mjs';

export default class ncouTrademark extends ncouItemBase {
  static LOCALIZATION_PREFIXES = [
    'NCOU.Item.base',
    'NCOU.Item.Trademark',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    schema.edgeIds = new fields.ArrayField(new fields.StringField({ required: true, nullable: false, initial: null }));

    return schema;
  }
}
