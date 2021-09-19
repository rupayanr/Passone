import * as Haptics from 'react-native'

export const impact = (style) => {

    switch (style) {

        case 'lt':
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            break;
        case 'md':
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            break;
        default:
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            break;
    }
}
