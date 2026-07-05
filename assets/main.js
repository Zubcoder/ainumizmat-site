/*
 * AI Нумизмат — общий скрипт сайта.
 * Партнёрские ссылки и ссылка на приложение настраиваются здесь.
 */
(function () {
  "use strict";

  window.APP_RUSTORE_URL = "https://apps.rustore.ru/app/com.zubcoder.ai_numizmat";

  window.PARTNERS = [
    { ico: "🔍", name: "Лупы и микроскопы", desc: "Для оценки монет — Ozon", url: "#" },
    { ico: "📕", name: "Каталоги монет", desc: "Справочники и определители", url: "#" },
    { ico: "🗂️", name: "Альбомы и холдеры", desc: "Хранение коллекции", url: "#" },
    { ico: "⚖️", name: "Оценка и продажа", desc: "Нумизматические площадки", url: "#" }
  ];

  function renderPartners() {
    document.querySelectorAll("[data-partners]").forEach(function (box) {
      var items = window.PARTNERS.map(function (p) {
        return (
          '<div class="partner-item">' +
          '<span class="p-ico">' + p.ico + "</span>" +
          '<div><div class="p-name">' + p.name + "</div>" +
          '<div class="p-desc">' + p.desc + "</div></div>" +
          '<a class="p-cta" href="' + p.url + '" rel="nofollow sponsored" target="_blank">Открыть</a>' +
          "</div>"
        );
      }).join("");
      box.insertAdjacentHTML("beforeend", items);
    });
    document.querySelectorAll("[data-app-link]").forEach(function (a) {
      a.setAttribute("href", window.APP_RUSTORE_URL);
    });
  }

  function initBurger() {
    var burger = document.querySelector(".nav-burger");
    var links = document.querySelector(".nav-links");
    if (burger && links) burger.addEventListener("click", function () { links.classList.toggle("open"); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderPartners();
    initBurger();
  });
})();
