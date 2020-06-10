"use strict";

/*
*
* ============================
*
* Include lib:
*
* - preventBehavior.js;
*
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * CALLBACK :: start
 * ============================================= */
	var searchTable = function searchTable() {
		var $rows = $('#table .table__tbody .table__tr');

		$('#search').keyup(function (ev) {
			var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

			$rows.show().filter(function () {
				var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();

				return !~text.indexOf(val);
			}).hide();
		});
	};
	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		// ==========================================

		// callback
		searchTable();
		// ==========================================
	};
	initNative();
})();