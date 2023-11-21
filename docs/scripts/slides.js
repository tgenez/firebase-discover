import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
    '00-conf/00-TITLE.md',
    '00-conf/01-speaker-genez-t.md',
    '00-conf/03-github.md'
    // '00-school/02-tour-de-table.md',
  ];
}

function introSlides() {
  return [
    '01-intro/00-transition.md',
    '01-intro/01-firebase.md',
    '01-intro/02-a-quoi-sert-firebase.md',
    '01-intro/03-offres.md',
    '01-intro/04-creation.md',
    '01-intro/05-pre-requis.md'
  ];
}

function hosting() {
  return [
    '02-hosting/00-transition.md',
    '02-hosting/01-how-to-host-a-blog.md'
  ];
}

function storage() {
  return [
    '03-storage/00-transition.md',
    '03-storage/01-storage.md'
  ];
}

function auth() {
  return [
    '04-authentication/00-transition.md',
    '04-authentication/01-authentication.md',
    '04-authentication/02-authentication-sso.md',
    '04-authentication/03-auth-with-other-product.md',
  ];
}

function database() {
  return [
    '05-database/00-transition.md',
    '05-database/01-database.md'
  ];
}

function cloudFunction() {
  return [
    '06-cloud-function/00-transition.md',
    '06-cloud-function/01-cloud-function.md'
  ];
}

function conclusion() {
  return [
    '07-conclusion/00-transition.md',
    '07-conclusion/01-feedback.md'
  ];
}


function formation() {
  return [
    ...schoolSlides(),
    ...introSlides(),
    ...hosting(),
    ...storage(),
    ...auth(),
    ...database(),
    ...cloudFunction(),
    ...conclusion()
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
