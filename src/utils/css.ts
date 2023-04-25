/* This file was derived from o-spreadsheet/src/components/helpers/css.ts */

const STYLESHEETS: { [id: string]: HTMLStyleElement } = {};
let nextId: number = 0;

export function css(strings, ...args) {
    const name = `__sheet__${nextId++}`;
    const value = String.raw(strings, ...args);
    registerSheet(name, value);
    activateSheet(name);
    return name;
}

function registerSheet(id: string, css: string) {
    const sheet = document.createElement("style");
    sheet.textContent = processSheet(css);
    STYLESHEETS[id] = sheet;
}

function activateSheet(id: string) {
    const sheet = STYLESHEETS[id];
    sheet.setAttribute("component", id);
    document.head.appendChild(sheet);
}

export function processSheet(str: string): string {
    const tokens = str.split(/(\{|\}|;)/).map((s) => s.trim());
    const selectorStack: string[][] = [];
    const parts: string[] = [];
    let rules: string[] = [];
    function generateSelector(stackIndex: number, parentSelector?: string) {
        const parts: string[] = [];
        for (const selector of selectorStack[stackIndex]) {
            let part = (parentSelector && parentSelector + " " + selector) || selector;
            if (part.includes("&")) {
                part = selector.replace(/&/g, parentSelector || "");
            }
            if (stackIndex < selectorStack.length - 1) {
                part = generateSelector(stackIndex + 1, part);
            }
            parts.push(part);
        }
        return parts.join(", ");
    }
    function generateRules() {
        if (rules.length) {
            parts.push(generateSelector(0) + " {");
            parts.push(...rules);
            parts.push("}");
            rules = [];
        }
    }
    while (tokens.length) {
        let token = tokens.shift()!;
        if (token === "}") {
            generateRules();
            selectorStack.pop();
        } else {
            if (tokens[0] === "{") {
                generateRules();
                selectorStack.push(token.split(/\s*,\s*/));
                tokens.shift();
            }
            if (tokens[0] === ";") {
                rules.push("  " + token + ";");
            }
        }
    }
    return parts.join("\n");
}