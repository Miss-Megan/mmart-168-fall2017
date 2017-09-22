//Megan Nelson
let language
let languageCode

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'ru') {
        language = 'Russian'
    } else if (code === 'es') {
        language = 'Spanish'
    } else { code === 'en'
        language = 'English'
    }
    document.getElementById('language').innerHTML = language
}
