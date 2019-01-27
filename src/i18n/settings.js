//This file was created in order to prevent default
//lazy loading of the modules and thus keeping ONE bundle.js 
//file for later serving from embedded server

import I18n from 'preact-i18nline/i18n';

I18n.supportedLocales = ['en','pl'];
I18n.defaultLocale = 'en';

I18n.translations["pl"] = require('./pl.json').pl;
I18n.translations["en"] = require('./en.json').en;

export default I18n;