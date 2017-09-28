//Megan Nelson
//the setLanguage function sets the language for the page. 

let language
let languageCode

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'ar') {
        language = 'Arabic'
    } else if ( === 'km') {
        language = 'Khmer'
    } else { navigator.language === 'en'
        language = 'English'
    }
    document.getElementById('language').innerHTML = language
}
