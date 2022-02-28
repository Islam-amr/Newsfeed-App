import { I18nManager, DevSettings, Linking } from 'react-native'

export const changeLanguage = () => {
    I18nManager.forceRTL(!I18nManager.isRTL);
    DevSettings.reload();
};

export const linkHandler = (url: string) => {
    Linking.canOpenURL(url).then(supported => {
        if (supported) {
            Linking.openURL(url);
        }
    });
}