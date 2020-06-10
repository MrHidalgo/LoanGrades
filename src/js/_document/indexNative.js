/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const btnToggle = () => {
		$('body').on('click', function (ev) {
			const className = "[sort-toggle-js], [pipline-toggle-js]";

			if($(window).width() < 768) {
				if (!$(ev.target).closest(className).length) {
					$('.main__filter-sort-drop').removeClass('is-show');
				}
			}
		});

		$('[btn-toggle-js]').on('click', (ev) => {
			$('[btn-toggle-js]').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});

		$('[link-toggle-js]').on('click', (ev) => {
			$('[link-toggle-js]').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});

		$('[sort-toggle-js], [pipline-toggle-js]').hover(
			(ev) => {
				$(ev.currentTarget).find('.main__filter-sort-drop').addClass('is-show');
			},
			(ev) => {
				$(ev.currentTarget).find('.main__filter-sort-drop').removeClass('is-show');
			},
		);
	};


	const toggleTableRow = () => {
		$('[table-toggle-js]').on('click', (ev) => {
			const el = $(ev.currentTarget);

			if(el.hasClass('is-open')) {
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
		$.fn.reverseChildren = function() {
			return this.each(function(){
				var $this = $(this);

				$this.children().each(function(){ $this.prepend(this) });
			});
		};

		const sortNumberTable = () => {
			let table, rows, switching, i, x, y, shouldSwitch;

			table = document.getElementById("table");
			switching = true;

			while (switching) {
				switching = false;
				rows = table.querySelectorAll('.table__tbody .table__tr');

				for (i = 1; i < (rows.length - 1); i++) {
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


		$('[sort-lowest-js]').on('click', (ev) => {
			sortNumberTable();
		});

		$('[sort-highest-js]').on('click', (ev) => {
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
