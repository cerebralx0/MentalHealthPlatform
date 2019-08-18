import * as englishStrings from './1033.json';
import * as frenchStrings from './1036.json';

const EN_US = 1033; // English (USA)
const FR_FR = 1036; // French (France)

interface IStringData {
    [key: string]: {
        description: string,
        value: string
    }
}

export default class Localization {
    static getLocalizedString = (key: string, values?: string[]) => {
        const languageCode = EN_US;
        const strings = Localization.getStrings(languageCode);

        let resourceString = strings[key] && strings[key].value || key;
        
        if (values) {
            for (let i = 0; i < values.length; i++) {
                const placeholder = '{' + i + '}';
                resourceString = resourceString.replace(placeholder, values[i]);
            }
        }

        return resourceString;
    }

    static getStrings = (languageCode: number) => {
        switch (languageCode) {
            case FR_FR:
                return frenchStrings as IStringData;
            case EN_US:
            default:
                return englishStrings as IStringData;
        }
    }
}