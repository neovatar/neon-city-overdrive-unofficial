/**
 * Extend the base Token class to implement additional system-specific logic.
 * 
 * @extends {Token}
 */
export class ncouToken extends Token {
  /** @inheritdoc */
  _drawBar(number, bar, data) {
    if ( data.attribute === "hits" ) return this._drawHitsBar(number, bar, data);
    return super._drawBar(number, bar, data);
  }

  _drawHitsBar(number, bar, data) {
    function mapRange(num,inMin,inMax, outMin, outMax) {
      if (inMin === inMax || outMin === outMax) return 0;
      const mapped = ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
      return Math.clamp(mapped, outMin, outMax);
    }

    function getHitsColor(current, max) {
      const minDegrees = 60;
      const maxDegrees = 120;
      //get the degrees on the HSV wheel, going from 30° (greenish-yellow) to 120° (green)
      const degrees = mapRange(current, 0, max, minDegrees, maxDegrees);
      //invert the degrees and map them from 0 to a third
      const hue = mapRange(maxDegrees - degrees, 0, maxDegrees, 0, 1 / 3);
      //get a usable color value with 100% saturation and 90% value
      return Color.fromHSV([hue, 1, 0.9]);
    }

    // Extract hits data
    let {value, max} = this.document.actor.system.hits;

    // Allocate percentages of the total
    const pct = Math.clamp(value, 0, max) / max;
    const colorPct = 1- Math.clamp(value, 0, max) / max;
    console.log(`colorPct = ${colorPct}`)
    const hitsColor = getHitsColor(value, max);

    // Determine colors to use
    const blk = 0x000000;

    // Determine the container size (logic borrowed from core)
    const w = this.w;
    let h = Math.max((canvas.dimensions.size / 12), 8);
    if ( this.document.height >= 2 ) h *= 1.6; 
    const bs = Math.clamp(h / 8, 1, 2);

    // Overall bar container
    bar.clear();

    // Only draw hits when > 0
    if (value != 0) {
      bar.beginFill(blk, 0.5).lineStyle(bs, blk, 1.0).drawRoundedRect(0, 0, w, h, 3);

      // Health bar
      bar.beginFill(hitsColor, 1.0).lineStyle(bs, blk, 1.0).drawRoundedRect(0, 0, pct*w, h, 2);
    }

    // Set position
    let posY = (number === 0) ? (this.h - h) : 0;
    bar.position.set(0, posY);
 }
}
