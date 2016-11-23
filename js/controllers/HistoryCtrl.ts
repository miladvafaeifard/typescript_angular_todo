/// <reference path='../_all.ts' />

module todos {
	"use strict";

	export class HistoryCtrl {

		public static $inject = [
			'$scope'
		];

		constructor(private $scope: IHistoryScope) {
			$scope.vm = this;
		}

		showHistory() {
			console.log('show list of history');
		}

	}
}
