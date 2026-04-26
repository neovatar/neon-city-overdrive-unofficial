export default class ncouActorBase extends foundry.abstract.TypeDataModel {
  static LOCALIZATION_PREFIXES = ["NCOU.Actor.base"];

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    // schema.health = new fields.SchemaField({
    //   value: new fields.NumberField({
    //     ...requiredInteger,
    //     initial: 10,
    //     min: 0,
    //   }),
    //   max: new fields.NumberField({ ...requiredInteger, initial: 10 }),
    // });
    // schema.power = new fields.SchemaField({
    //   value: new fields.NumberField({ ...requiredInteger, initial: 5, min: 0 }),
    //   max: new fields.NumberField({ ...requiredInteger, initial: 5 }),
    // });
    schema.hits = new fields.SchemaField({
      value: new fields.NumberField({...requiredInteger, initial: 3, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 3 }),
    });

    schema.drive = new fields.SchemaField({
      description: new fields.StringField({ required: false, nullable: true, initial: "" }),
    });

    schema.sheet_unlocked = new fields.BooleanField({ required: true, nullable: false, initial: true });

    schema.biography = new fields.HTMLField();

    return schema;
  }
}
