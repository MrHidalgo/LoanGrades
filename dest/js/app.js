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
	var btnToggle = function btnToggle() {
		$('[btn-toggle-js]').on('click', function (ev) {
			$('[btn-toggle-js]').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});

		$('[link-toggle-js]').on('click', function (ev) {
			$('[link-toggle-js]').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
	};

	var toggleTableRow = function toggleTableRow() {
		$('[table-toggle-js]').on('click', function (ev) {
			var el = $(ev.currentTarget);

			if (el.hasClass('is-open')) {
				el.removeClass('is-open');
				el.find('.table__block-wrapper').slideUp(250);
			} else {
				$('[table-toggle-js]').removeClass('is-open');
				$('.table__block-wrapper').slideUp(250);

				el.addClass('is-open');
				el.find('.table__block-wrapper').slideDown(250);
			}
		});
	};

	var searchTable = function searchTable() {
		var _rows = $('#table .table__tbody .table__tr');

		$('#search').keyup(function (ev) {
			var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

			_rows.show().filter(function () {
				var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();

				return !~text.indexOf(val);
			}).hide();
		});
	};

	var sortNumeric = function sortNumeric() {
		$.fn.reverseChildren = function () {
			return this.each(function () {
				var $this = $(this);

				$this.children().each(function () {
					$this.prepend(this);
				});
			});
		};

		var sortNumberTable = function sortNumberTable() {
			var table = void 0,
			    rows = void 0,
			    switching = void 0,
			    i = void 0,
			    x = void 0,
			    y = void 0,
			    shouldSwitch = void 0;

			table = document.getElementById("table");
			switching = true;

			while (switching) {
				switching = false;
				rows = table.querySelectorAll('.table__tbody .table__tr');

				for (i = 1; i < rows.length - 1; i++) {
					shouldSwitch = false;

					x = rows[i].querySelector(".table__td--numeric");
					y = rows[i + 1].querySelector(".table__td--numeric");

					if (Number(x.innerHTML) > Number(y.innerHTML)) {
						shouldSwitch = true;
						break;
					}
				}

				if (shouldSwitch) {
					rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
					switching = true;
				}
			}
		};

		$('[sort-lowest-js]').on('click', function (ev) {
			sortNumberTable();
		});

		$('[sort-highest-js]').on('click', function (ev) {
			sortNumberTable();

			$('#table .table__tbody').reverseChildren();
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
		btnToggle();
		sortNumeric();
		toggleTableRow();
		// ==========================================
	};
	initNative();
})();