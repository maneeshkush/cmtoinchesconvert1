function changeLanguage(lang) {
            var currentUrl = window.location.href;

            // Remove any existing language codes from the URL
            var newUrl = currentUrl.replace(/\/[a-z]{2}-[a-zA-Z]{2}\//i, '/').replace(/\/[a-z]{2}\//i, '/');

            // If the selected language is not English, add the language code to the URL
            if (lang !== 'en') {
                newUrl = newUrl.replace(/(https?:\/\/[^\/]+)(\/.*)/, '$1/' + lang + '$2');
            }

            // Redirect to the new URL
            window.location.href = newUrl;
        }
    
        var languageMenu = document.getElementById('language-menu');
        var selectElement = document.createElement('select');
        selectElement.id = 'language-select';
        selectElement.onchange = function () {
            changeLanguage(this.value);
        };

        var languages = [
           { value: 'pl', text: 'Select Language:' },
   		   { value: 'ar', text: 'Arabic - العربية' },
           { value: 'bg', text: 'Bulgarian - български' },
           { value: 'bn', text: 'Bengali - বাংলা' },
           { value: 'ca', text: 'Catalan - Català' },
           { value: 'cs', text: 'Czech - Čeština' },
           { value: 'da', text: 'Danish - Dansk' },
           { value: 'de', text: 'German - Deutsch' },
           { value: 'el', text: 'Greek - Ελληνικά' },
           { value: 'es', text: 'Spanish - Español' },
	       { value: 'en', text: 'English - English' },
           { value: 'et', text: 'Estonian - Eesti' },
           { value: 'fi', text: 'Finnish - Suomi' },
           { value: 'tl', text: 'Filipino - Filipino' },
           { value: 'fr', text: 'French - Français' },
           { value: 'gu', text: 'Gujarati - ગુજરાતી' },
           { value: 'he', text: 'Hebrew - עברית' },
           { value: 'hi', text: 'Hindi - हिन्दी' },
           { value: 'hr', text: 'Croatian - Hrvatski' },
           { value: 'hu', text: 'Hungarian - Magyar' },
           { value: 'id', text: 'Indonesian - Bahasa Indonesia' },
           { value: 'is', text: 'Icelandic - Íslenska' },
           { value: 'it', text: 'Italian - Italiano' },
           { value: 'ja', text: 'Japanese - 日本語' },
           { value: 'kn', text: 'Kannada - ಕನ್ನಡ' },
           { value: 'ko', text: 'Korean - 한국어' },
           { value: 'lt', text: 'Lithuanian - Lietuvių' },
           { value: 'lv', text: 'Latvian - Latviešu' },
           { value: 'ml', text: 'Malayalam - മലയാളം' },
           { value: 'mr', text: 'Marathi - मराठी' },
           { value: 'ms', text: 'Malay - Bahasa Melayu' },
           { value: 'nl', text: 'Dutch - Nederlands' },
           { value: 'no', text: 'Norwegian - Norsk' },
           { value: 'pl', text: 'Polish - Polski' },
           { value: 'pa', text: 'Punjabi - ਪੰਜਾਬੀ' },
           { value: 'pt', text: 'Portuguese - Português' },
           { value: 'ru', text: 'Russian - Русский' },
           { value: 'ro', text: 'Romanian - Română' },
           { value: 'sk', text: 'Slovak - Slovenčina' },
           { value: 'sl', text: 'Slovenian - Slovenščina' },
           { value: 'sr', text: 'Serbian - Српски' },
           { value: 'sv', text: 'Swedish - Svenska' },
           { value: 'ta', text: 'Tamil - தமிழ்' },
           { value: 'te', text: 'Telugu - తెలుగు' },
           { value: 'th', text: 'Thai - ไทย' },
           { value: 'tr', text: 'Turkish - Türkçe' },
           { value: 'uk', text: 'Ukrainian - Українська' },
           { value: 'ur', text: 'Urdu - اردو' },
           { value: 'vi', text: 'Vietnamese - Tiếng Việt' },
           { value: 'zh-CN', text: 'Chinese (Simplified) - 简体中文' },
           { value: 'zh-TW', text: 'Chinese (Traditional) - 繁體中文' }
			
        ];

        languages.forEach(function (language) {
            var optionElement = document.createElement('option');
            optionElement.value = language.value;
            optionElement.text = language.text;
            selectElement.appendChild(optionElement);
        });

        languageMenu.appendChild(selectElement);
		
		
		var languageMenu = document.getElementById('language-menu1');
        var selectElement = document.createElement('select');
        selectElement.id = 'language-select';
        selectElement.onchange = function () {
            changeLanguage(this.value);
        };

        var languages = [
           { value: 'pl', text: 'Select Language:' },
   		   { value: 'ar', text: 'Arabic - العربية' },
           { value: 'bg', text: 'Bulgarian - български' },
           { value: 'bn', text: 'Bengali - বাংলা' },
           { value: 'ca', text: 'Catalan - Català' },
           { value: 'cs', text: 'Czech - Čeština' },
           { value: 'da', text: 'Danish - Dansk' },
           { value: 'de', text: 'German - Deutsch' },
           { value: 'el', text: 'Greek - Ελληνικά' },
           { value: 'es', text: 'Spanish - Español' },
	       { value: 'en', text: 'English - English' },
           { value: 'et', text: 'Estonian - Eesti' },
           { value: 'fi', text: 'Finnish - Suomi' },
           { value: 'tl', text: 'Filipino - Filipino' },
           { value: 'fr', text: 'French - Français' },
           { value: 'gu', text: 'Gujarati - ગુજરાતી' },
           { value: 'he', text: 'Hebrew - עברית' },
           { value: 'hi', text: 'Hindi - हिन्दी' },
           { value: 'hr', text: 'Croatian - Hrvatski' },
           { value: 'hu', text: 'Hungarian - Magyar' },
           { value: 'id', text: 'Indonesian - Bahasa Indonesia' },
           { value: 'is', text: 'Icelandic - Íslenska' },
           { value: 'it', text: 'Italian - Italiano' },
           { value: 'ja', text: 'Japanese - 日本語' },
           { value: 'kn', text: 'Kannada - ಕನ್ನಡ' },
           { value: 'ko', text: 'Korean - 한국어' },
           { value: 'lt', text: 'Lithuanian - Lietuvių' },
           { value: 'lv', text: 'Latvian - Latviešu' },
           { value: 'ml', text: 'Malayalam - മലയാളം' },
           { value: 'mr', text: 'Marathi - मराठी' },
           { value: 'ms', text: 'Malay - Bahasa Melayu' },
           { value: 'nl', text: 'Dutch - Nederlands' },
           { value: 'no', text: 'Norwegian - Norsk' },
           { value: 'pl', text: 'Polish - Polski' },
           { value: 'pa', text: 'Punjabi - ਪੰਜਾਬੀ' },
           { value: 'pt', text: 'Portuguese - Português' },
           { value: 'ru', text: 'Russian - Русский' },
           { value: 'ro', text: 'Romanian - Română' },
           { value: 'sk', text: 'Slovak - Slovenčina' },
           { value: 'sl', text: 'Slovenian - Slovenščina' },
           { value: 'sr', text: 'Serbian - Српски' },
           { value: 'sv', text: 'Swedish - Svenska' },
           { value: 'ta', text: 'Tamil - தமிழ்' },
           { value: 'te', text: 'Telugu - తెలుగు' },
           { value: 'th', text: 'Thai - ไทย' },
           { value: 'tr', text: 'Turkish - Türkçe' },
           { value: 'uk', text: 'Ukrainian - Українська' },
           { value: 'ur', text: 'Urdu - اردو' },
           { value: 'vi', text: 'Vietnamese - Tiếng Việt' },
           { value: 'zh-CN', text: 'Chinese (Simplified) - 简体中文' },
           { value: 'zh-TW', text: 'Chinese (Traditional) - 繁體中文' }
			
        ];

        languages.forEach(function (language) {
            var optionElement = document.createElement('option');
            optionElement.value = language.value;
            optionElement.text = language.text;
            selectElement.appendChild(optionElement);
        });

        languageMenu.appendChild(selectElement);