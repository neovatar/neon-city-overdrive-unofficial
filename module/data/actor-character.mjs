import ncouActorBase from './base-actor.mjs';

export default class ncouCharacter extends ncouActorBase {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    'NCOU.Actor.Character',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.stuntpoints = new fields.SchemaField({
      value: new fields.NumberField({...requiredInteger, initial: 3, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 3 }),
    });

    schema.leverage = new fields.SchemaField({
      value: new fields.NumberField({...requiredInteger, initial: 0, min: 0 }),
    });

    schema.experience = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
    });

    // Iterate over ability names and create a new SchemaField for each.
    // schema.abilities = new fields.SchemaField(
    //   Object.keys(CONFIG.NCOU.abilities).reduce((obj, ability) => {
    //     obj[ability] = new fields.SchemaField({
    //       value: new fields.NumberField({
    //         ...requiredInteger,
    //         initial: 10,
    //         min: 0,
    //       }),
    //     });
    //     return obj;
    //   }, {})
    // );

    // Iterate over condition names and create a new SchemaField for each.
    schema.conditions = new fields.SchemaField(
      Object.keys(CONFIG.NCOU.conditions).reduce((obj, condition) => { 
        obj[condition] = new fields.SchemaField({
          name: new fields.StringField({ required: true, nullable: false, initial: CONFIG.NCOU.conditions[condition].name }),
          modify: new fields.BooleanField({ required: true, nullable: false, initial: CONFIG.NCOU.conditions[condition].modify }),
          active: new fields.BooleanField({ required: true, nullable: false, initial: CONFIG.NCOU.conditions[condition].active }),
        });
        return obj;
      }, {})
    );

    schema.stash = new fields.SchemaField(
      Object.keys(CONFIG.NCOU.stash).reduce((obj, stashbox) => {
        obj[stashbox] = new fields.SchemaField({
          value: new fields.BooleanField({ required: true, nullable: false, initial: CONFIG.NCOU.stash[stashbox].value }),
        });
        return obj;
      }, {})
    );

    schema.driveboxes = new fields.SchemaField(
      Object.keys(CONFIG.NCOU.driveboxes).reduce((obj, drivebox) => {
        obj[drivebox] = new fields.SchemaField({
          value: new fields.BooleanField({ required: true, nullable: false, initial: CONFIG.NCOU.driveboxes[drivebox].value }),
        });
        return obj;
      }, {})
    );

    schema.drive = new fields.SchemaField({
      description: new fields.StringField({ required: true, nullable: false, initial: '' }),
    });

    return schema;
  }

  prepareDerivedData() {
    // Loop through ability scores, and add their modifiers to our sheet output.
    for (const key in this.abilities) {
      // Calculate the modifier using d20 rules.
      this.abilities[key].mod = Math.floor(
        (this.abilities[key].value - 10) / 2
      );
      // Handle ability label localization.
      this.abilities[key].label =
        game.i18n.localize(CONFIG.NCOU.abilities[key]) ?? key;
    }
  }

  getRollData() {
    const data = {};

    // Copy the ability scores to the top level, so that rolls can use
    // formulas like `@str.mod + 4`.
    if (this.abilities) {
      for (let [k, v] of Object.entries(this.abilities)) {
        data[k] = foundry.utils.deepClone(v);
      }
    }

    // data.lvl = this.attributes.level.value;

    return data;
  }
}
