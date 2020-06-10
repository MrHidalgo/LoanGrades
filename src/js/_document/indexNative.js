/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const searchTable = () => {
		let $rows = $('#table .table__tbody .table__tr');

		$('#search').keyup(function(ev) {
			let val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

			$rows.show().filter(function() {
				let text = $(this).text().replace(/\s+/g, ' ').toLowerCase();

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
	const initNative = () => {
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
