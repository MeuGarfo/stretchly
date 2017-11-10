const {remote} = require('electron')

class HtmlTranslate {
  constructor (document) {
    document.querySelectorAll('[data-i18next]').forEach(function (element) {
      if (element.dataset.i18next.options) {
        JSON.parse(element.dataset.i18next.options)
        element.innerHTML = remote.getGlobal('shared').i18next.t(element.dataset.i18next, JSON.parse(element.dataset.i18next.options))
      } else {
        element.innerHTML = remote.getGlobal('shared').i18next.t(element.dataset.i18next)
      }
    })
  }
}

module.exports = HtmlTranslate
