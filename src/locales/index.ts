import { Language } from '../types/Language';
import { Locales } from '../types/Locales';
import en from './languages/en.json';
import ja from './languages/ja.json';

const locales: Locales = {
    en: en,
    ja: ja,
};

/**
 * 言語別のテキストを取得します
 * @param id 翻訳識別子
 * @param lang 言語
 * @returns テキスト
 */
export function locale(id: string, lang?: Language): string {
    const useLang: Language = lang ? lang : 'ja';

    const ids = locales[useLang];
    if (!ids) {
        console.warn(`The specified language '${useLang}' was not found.`);
        return id;
    }

    const text = ids[id];
    if (!text) {
        console.warn(`The specified translation identifier '${id}' was not found.`);
        return id;
    }

    return text;
}
