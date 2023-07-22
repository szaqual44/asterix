import {content} from "./textContent";

type TextMap = Map<number, string>;

export class TextContent {
    private text: TextMap;
    public constructor(text: TextMap) {
        this.text = text
    }

    public getText(txtNumber?: number) {
        if (txtNumber) {
            let txt = this.text.get(txtNumber) || ''
            //TODO loop for replacing arg
            return txt
        }
        return ''
    }
}

export const Text = new TextContent(content)