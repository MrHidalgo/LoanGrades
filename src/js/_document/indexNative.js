/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const btnToggle = () => {
		$('[btn-toggle-js]').on('click', (ev) => {
			$('[btn-toggle-js]').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
		$('[link-toggle-js]').on('click', (ev) => {
			$('[link-toggle-js]').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
	};


	const toggleTableRow = () => {
		$('[table-toggle-js]').on('click', (ev) => {
			const el = $(ev.currentTarget),
				elID = el.attr('data-id');

			if(el.hasClass('is-open')) {
				el.removeClass('is-open');
				el.siblings('.table__block-wrapper[data-id="' + elID + '"]').slideUp(250);
			} else {
				$('[table-toggle-js]').removeClass('is-open');
				$('.table__block-wrapper').slideUp(250);

				el.addClass('is-open');
				el.siblings('.table__block-wrapper[data-id="' + elID + '"]').slideDown(250);
			}

		});
	};


	const searchTable = () => {
		let _rows = $('#table .table__tbody .table__tr');

		$('#search').keyup(function(ev) {
			let val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

			_rows.show().filter(function() {
				let text = $(this).text().replace(/\s+/g, ' ').toLowerCase();

				return !~text.indexOf(val);
			}).hide();
		});
	};


	const sortNumeric = () => {
		const sortNumberTable1 = () => {
			let table, rows, switching, i, x, y, shouldSwitch;

			table = document.getElementById("table");
			switching = true;

			while (switching) {
				switching = false;
				rows = table.querySelectorAll('.table__tbody .table__tr');

				for (i = 1; i < (rows.length - 1); i++) {
					shouldSwitch = false;

					x = rows[i].querySelector(".table__td:last-of-type");
					y = rows[i + 1].querySelector(".table__td:last-of-type");

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


		$('[sort-lowest-js]').on('click', (ev) => {
			sortNumberTable1();
		});
		$('[sort-highest-js]').on('click', (ev) => {});
	};
	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
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
