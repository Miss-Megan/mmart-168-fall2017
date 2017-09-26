//Megan Nelson
let language
let languageCode

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'ar') {
        language = 'Arabic'
    } else if ( === 'km') {
        language = 'Khmer'
    } else { navigator.language === 'th'
        language = 'Thai'
    }
    document.getElementById('language').innerHTML = language
}
