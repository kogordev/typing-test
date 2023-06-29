var eventsModule = (function (dModule, uModule, cModule, wModule) {
	var addEventListeners = function () {
		//enter click event
		uModule
			.getDOMElements()
			.textInput.addEventListener('keydown', function (event) {
				//if the test ended, do nothing
				if (dModule.testEnded()) {
					return;
				}

				//check if the user pressed enter
				var key = event.keyCode;
				if (key == 13) {
					uModule.getDOMElements().textInput.value +=
						dModule.getLineReturn() + ' ';
				}

				//create a new 'input' event
				var inputEvent = new Event('input');

				//dispatch it
				uModule.getDOMElements().textInput.dispatchEvent(inputEvent);
			});

		//character typing event listener
		uModule
			.getDOMElements()
			.textInput.addEventListener('input', function (event) {
				//if the test ended, do nothing
				if (dModule.testEnded()) {
					return;
				}
				//if the test has not started yet, start the test and countdown
				if (!dModule.testStarted()) {
					//start the test: data Module
					dModule.startTest();
					//start counter
					var b = setInterval(function () {
						//calculate the results: data Module
						var results = {};
						//   update wpm, wpmChange
						[results.wpm, results.wpmChange] = dModule.calculateWpm();
						//	 update cmp, cpmChange
						[results.cpm, results.cpmChange] = dModule.calculateCpm();
						//   update accuracy, accuracyChange
						[results.accuracy, results.accuracyChange] =
							dModule.calculateAccuracy();
						//update results(UI module)
						uModule.updateResults(results);
						//update time left
						//	 check if we have time left
						if (dModule.timeLeft()) {
							//reduce time by one sec: data Module
							dModule.reduceTime();
							//udpate time remaining in UI
							uModule.updateTimeLeft(dModule.getTimeLeft());
						} else {
							//		end the test: data module
							clearInterval(b);
							dModule.endTest();
							dModule.returnData();
							//		fill modal
							uModule.fillModal(results.wpm);
							//		show modal
							uModule.showModal();
						}
					}, 1000);
				}

				//get typed word: UI module
				var typedWord = uModule.getTypedWord();
				//update current Word: data Module
				dModule.updateCurrentWord(typedWord);
				//format the active word
				var currentWord = dModule.getCurrentWord();
				uModule.formatWord(currentWord);
				//check if the user pressed space or enter
				if (
					uModule.spacePressed(event) ||
					uModule.enterPressed(dModule.getLineReturn())
				) {
					//empty text input
					uModule.emptyInput();
					//deactivate curent word
					uModule.deactivateCurrentWord();
					//move to a new word: data Module
					dModule.moveToNewWord();
					//get currentWordIndex: data Module
					var index = dModule.getCurrentWordIndex();
					//set active Word: UI Module
					uModule.setActiveWord(index);
					//get currentWord: data Module
					var currentWord = dModule.getCurrentWord();
					//format the active word: UI Module
					uModule.formatWord(currentWord);
					//scroll word into the middle view
					uModule.scroll();
				}
			});
		//click on download button event listener
		uModule
			.getDOMElements()
			.donwload.addEventListener('click', function (event) {
				//check if the name input is empty:
				if (uModule.isNameEmpty()) {
					uModule.flageNameInput();
				} else {
					var CertificateData = dModule.getCertificateData();

					CertificateData.level = event.target.getAttribute('level');
					CertificateData.name = uModule.getName();
					cModule.generateCertificate(CertificateData);
				}
			});
	};

	//scroll active word into middle view on window resize
	window.addEventListener('resize', uModule.scroll());

	return {
		//init function, initializes the test before start
		init: function (duration, textNumber) {
			//fill the list of test words data Module

			var words = wModule.getWords(textNumber);
			//fill the list of test words: UI Module
			dModule.fillListOfTestWords(textNumber, words);

			var testWords = dModule.getListOfTestWords();

			var lineReturn = dModule.getLineReturn();
			uModule.fillContent(testWords, lineReturn);
			//set the total test time: data Module
			dModule.setTestTime(duration);
			//update time left: data Module
			dModule.initializeTimeleft();
			//get time left: data Module
			var timeleft = dModule.getTimeLeft();
			//update time left: UI Module
			UIModule.updateTimeLeft(timeleft);

			//move to a new word: data Module
			dModule.moveToNewWord();

			//get currentWordIndex: data Module
			var index = dModule.getCurrentWordIndex();

			//set active Word: UI Module
			uModule.setActiveWord(index);

			//get currentWord: data Module
			var currentWord = dModule.getCurrentWord();
			//format the active word: UI Module
			uModule.formatWord(currentWord);
			//focus on text input: UI Module
			uModule.inputFocus();
			//add event listeners
			addEventListeners();
		},
	};
})(dataModule, UIModule, certificateModule, wordsModule);
