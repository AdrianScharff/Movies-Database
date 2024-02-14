const getLanguage = (abbreviation) => {
    switch (abbreviation) {
        case 'en':
            return 'English';
        case 'hi':
            return 'Hindi';
        case 'ja':
            return 'Japanese'
        case 'ko':
            return 'Korean'
        case 'it':
            return 'Italian'
        case 'de':
            return 'German'
        case 'zh':
            return 'Chinese'
        case 'ru':
            return 'Russian'
        default:
            return abbreviation;
    }
}

export default getLanguage