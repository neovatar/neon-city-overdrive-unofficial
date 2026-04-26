import ncouItemBase from './base-item.mjs';

export default class ncouGear extends ncouItemBase {
  static LOCALIZATION_PREFIXES = [
    'NCOU.Item.base',
    'NCOU.Item.Gear',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    schema.tags = new fields.StringField({ required: true, nullable: false, initial: '' });

    return schema;
  }
}
