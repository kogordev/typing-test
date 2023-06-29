var UIModule = (function () {
	var splitArray = function (string) {
		return string.split('');
	};

	var addSpace = function (array) {
		array.push(' ');
		return array;
	};

	var addSpanTags = function (array) {
		return array.map(function (currentCharacter) {
			return '<span>' + currentCharacter + '</span>';
		});
	};

	var addWordSpanTags = function (array) {
		array.unshift('<span>');
		array.push('</span>');
		return array;
	};

	var joinEachWord = function (array) {
		return array.join('');
	};

	var userValue;
	var returnCharClass = function (currentCharacter, index) {
		return index < userValue.length
			? currentCharacter == userValue[index]
				? 'correctCharacter'
				: 'wrongCharacter'
			: '0';
	};

	var fadeElement = function (element) {
		element.style.opacity = 1;
		setTimeout(function () {
			element.style.opacity = 0.9;
		}, 100);
	};

	var updateChange = function (value, changeElement) {
		//determine the class to add to the change element and html content to insert
		var classToAdd, html;
		[classToAdd, html] =
			value >= 0 ? ['scoreUp', '+' + value] : ['scoreDown', value];

		//add % to accuracyChange
		if (changeElement == DOMElements.accuracyChange) {
			html += '%';
		}

		//update the change element
		changeElement.innerHTML = html;

		//style the change element
		changeElement.removeAttribute('class');
		changeElement.className = classToAdd;

		//fade element
		fadeElement(changeElement);
	};

	//classes used to select HTML elements
	var DOMElements = {
		//indicators -test control
		timeLeft: document.getElementById('timeLeft'), //HTML element displaying time left
		//test results
		wpm: document.getElementById('wpm'),
		wpmChange: document.getElementById('wpmChange'),
		cpm: document.getElementById('cpm'),
		cpmChange: document.getElementById('cpmChange'),
		accuracy: document.getElementById('accuracy'),
		accuracyChange: document.getElementById('accuracyChange'),
		//user input
		textInput: document.querySelector('#input'),
		nameInput: document.querySelector('.form-group'),
		nameField: document.querySelector('#name'),
		//test words
		content: document.getElementById('content'),
		activeWord: '',
		//modal
		modal: $('#myModal'),
		//modal download button
		download: document.getElementById('download'),
	};

	return {
		//get DOM elements
		getDOMElements: function () {
			return {
				textInput: DOMElements.textInput,
				donwload: DOMElements.download,
			};
		},
		//Indicators -Test Controls
		updateTimeLeft: function (timeleft) {
			DOMElements.timeLeft.innerHTML = timeleft;
		},
		//results
		updateResults: function () {},
		fillModal: function (wpm) {
			var results;
			if (wpm < 40) {
				results = {
					type: 'turtle',
					image: 'turtle.jpg',
					level: 'Beginner',
				};
			} else if (wpm < 70) {
				results = {
					type: 'horse',
					image: 'horse.jpg',
					level: 'Average',
				};
			} else {
				results = {
					type: 'puma',
					image: 'puma.jpg',
					level: 'Expert',
				};
			}

			var html =
				'<div class="fs-20"><p>You are a %type%!</p> <p>You type at a speed of %wpm% words per minute!</p> <img class="speed-image rounded-circle" src="../images/categories/%image%" alt=%alt%></div>';

			html = html.replace('%type%', results.type);
			html = html.replace('%wpm%', wpm);
			html = html.replace('%image%', results.image);
			html = html.replace('%alt%', results.type);

			//insert html vefore form-group 'name input'
			DOMElements.nameInput.insertAdjacentHTML('beforebegin', html);

			//store level in download button
			DOMElements.download.setAttribute('level', results.level);
		},
		showModal: function () {
			DOMElements.modal.modal('show');
		},
		//user input
		inputFocus: function () {
			DOMElements.textInput.focus();
		},
		isNameEmpty: function () {
			return DOMElements.nameField.value == '';
		},
		flageNameInput: function () {
			DOMElements.nameField.style.borderColor = 'red';
		},
		spacePressed: function (event) {
			return event.data == ' ';
		},
		enterPressed: function (lineReturn) {
			return DOMElements.textInput.value.includes(lineReturn + ' ');
		},
		emptyInput: function () {
			DOMElements.textInput.value = '';
		},
		getTypedWord: function () {
			return DOMElements.textInput.value;
		},
		getName: function () {
			return DOMElements.nameField.value;
		},
		//test words
		fillContent: function (array, lineReturn) {
			var content = array.map(splitArray);
			content = content.map(addSpace);
			content = content.map(addSpanTags);
			content = content.map(addWordSpanTags);
			content = content.map(joinEachWord);
			content = content.join('');

			//replace the line return special code with the HTML entity (line return )

			content = content
				.split('<span>' + lineReturn + '</span>')
				.join('<span>&crarr;</span>');

			content = content.replace(
				'<span>' + lineReturn + '</span>',
				'<span>&crarr;</span>'
			);
			//fill content
			DOMElements.content.innerHTML = content;
		},
		formatWord: function (wordObject) {
			var activeWord = DOMElements.activeWord;

			//highlight current word
			activeWord.className = 'activeWord';

			//format individual character
			var correctValue = wordObject.value.correct;
			userValue = wordObject.value.user;

			//correct value 'word1 '
			//user value 'wwrd'

			var classes = Array.prototype.map.call(correctValue, returnCharClass);

			//get active word
			var activeWord = DOMElements.activeWord;

			//HTML collection
			var characters = activeWord.children;

			//add classes to children
			for (var i = 0; i < characters.length; i++) {
				characters[i].removeAttribute('class');
				characters[i].className = classes[i];
			}
		},
		setActiveWord: function (index) {
			DOMElements.activeWord = DOMElements.content.children[index];
		},
		deactivateCurrentWord: function () {
			DOMElements.activeWord.removeAttribute('class');
		},
		scroll: function () {
			var top1 = DOMElements.activeWord.offsetTop;
			var top2 = DOMElements.content.offsetTop;
			var diff = top1 - top2;
			DOMElements.content.scrollTop = diff - 46;
		},
		updateResults: function (results) {
			//update wpm
			DOMElements.wpm.innerHTML = results.wpm;
			//update cpm
			DOMElements.cpm.innerHTML = results.cpm;
			//update accuracy
			DOMElements.accuracy.innerHTML = results.accuracy + '%';
			//update changes
			updateChange(results.wpmChange, DOMElements.wpmChange);
			updateChange(results.cpmChange, DOMElements.cpmChange);
			updateChange(results.accuracyChange, DOMElements.accuracyChange);
		},
	};
})();
