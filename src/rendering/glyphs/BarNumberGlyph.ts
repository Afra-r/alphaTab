import { Color } from '@src/model/Color';
import { ICanvas, TextBaseline } from '@src/platform/ICanvas';
import { Glyph } from '@src/rendering/glyphs/Glyph';
import { RenderingResources } from '@src/RenderingResources';

export class BarNumberGlyph extends Glyph {
    private _number: number = 0;

    public constructor(x: number, y: number, num: number) {
        super(x, y);
        this._number = num;
    }

    public override doLayout(): void {
        this.renderer.scoreRenderer.canvas!.font = this.renderer.resources.barNumberFont;
        this.width = this.renderer.scoreRenderer.canvas!.measureText(this._number.toString()).width + 5 * this.scale;
    }

    public override paint(cx: number, cy: number, canvas: ICanvas): void {
        if (!this.renderer.staff.isFirstInAccolade) {
            return;
        }
        let res: RenderingResources = this.renderer.resources;
        let c: Color = canvas.color;
        const baseline = canvas.textBaseline;
        canvas.textBaseline = TextBaseline.Top;
        canvas.color = res.barNumberColor;
        canvas.font = res.barNumberFont;
        canvas.fillText(this._number.toString(), cx + this.x, cy + this.y);
        canvas.color = c;
        canvas.textBaseline = baseline;
    }

}
