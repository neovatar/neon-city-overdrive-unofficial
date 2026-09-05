import ncouItemBase from './base-item.mjs';

export default class ncouEdge extends ncouItemBase {
  static LOCALIZATION_PREFIXES = [
    'NCOU.Item.base',
    'NCOU.Item.Edge',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    schema.trademarkid = new fields.StringField({ required: true, nullable: false, initial: null });
    schema.isEdge = new fields.BooleanField({ required: true, nullable: false, initial: true });
    
    return schema;
  }
}
