// <auto-generated>
// This code was auto-generated.
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
// </auto-generated>
import { ImporterSettings } from "@src/ImporterSettings";
import { JsonHelper } from "@src/io/JsonHelper";
export class ImporterSettingsSerializer {
    public static fromJson(obj: ImporterSettings, m: unknown): void {
        if (!m) {
            return;
        } 
        JsonHelper.forEach(m, (v, k) => this.setProperty(obj, k.toLowerCase(), v)); 
    }
    public static toJson(obj: ImporterSettings | null): Map<string, unknown> | null {
        if (!obj) {
            return null;
        } 
        const o = new Map<string, unknown>(); 
        o.set("encoding", obj.encoding); 
        o.set("mergePartGroupsInMusicXml", obj.mergePartGroupsInMusicXml); 
        o.set("beatTextAsLyrics", obj.beatTextAsLyrics); 
        return o; 
    }
    public static setProperty(obj: ImporterSettings, property: string, v: unknown): boolean {
        switch (property) {
            case "encoding":
                obj.encoding = (v as string);
                return true;
            case "mergepartgroupsinmusicxml":
                obj.mergePartGroupsInMusicXml = (v as boolean);
                return true;
            case "beattextaslyrics":
                obj.beatTextAsLyrics = (v as boolean);
                return true;
        } 
        return false; 
    }
}
