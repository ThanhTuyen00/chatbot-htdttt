var person = {};
var isStart = 0;
var res = function() {
	var data = person;
	$.ajax({
		url: "/rest/api/output",
		type: "post",
		contentType: "application/json",
		data: JSON.stringify(data),
		dataType: "json",
		success: function(jsonResult) {
			const response = document.createElement('div');
			response.classList.add('chat-response');
			response.innerHTML = jsonResult.data;
			const bot = document.getElementById('bot');
			const inner = document.getElementById('bot-inner');
			bot.appendChild(response);
			inner.scrollTop = inner.scrollHeight;
			response.classList.add('activated');
			
			const response2 = document.createElement('div');
			response2.classList.add('chat-response');
			response2.innerHTML = jsonResult.data;
			response2.innerHTML = chat[29].text;
			bot.appendChild(response2);
			inner.scrollTop = inner.scrollHeight;
			response2.classList.add('activated');
		}
	});
}

const bot = function() {
	const bot = document.getElementById('bot');
	const container = document.getElementById('bot-container');
	const inner = document.getElementById('bot-inner');
	let restartButton = null;
	const inputField = document.getElementById("input0");
	inputField.style.display = "block";
	inputField.addEventListener("keydown", (e) => {
		if (e.code === "Enter") {
			let input = inputField.value;
			if (input === '') {
				return;
			}
			inputField.value = "";
			const request = document.createElement('div');
			request.classList.add('chat-ask');
			request.innerHTML = input;
			insertNewChatItem(request);
			const response = document.createElement('div');
			response.classList.add('chat-response');
			let input1 = input.toLowerCase();
			if (input1.includes('xin chào') || input1.includes('xjn chào') || input1.includes('xin chao')
				|| input1.includes('xjn chao') || input1.includes('hi') || input1.includes('hello')) {
				if (isStart == 1) {
					printTextBot(chat[27]);
				} else {
					var x = parseInt(Math.floor(Math.random() * 3));
					if (x == 0) {
						response.innerHTML = chat[20].text1;
					} else if (x == 1) {
						response.innerHTML = chat[20].text2;
					} else if (x == 2) {
						response.innerHTML = chat[20].text3;
					}
					insertNewChatItem(response);
				}
			} else if (input1.includes('bạn tên là gì') || input1.includes('ban ten la gi') || input1.includes('who are you')) {
				if (isStart == 1) {
					printTextBot(chat[27]);
				} else {
					printTextBot(chat[21]);
				}
			} else if (input1 == 'start') {
				if (isStart == 0) {
					isStart = 1;
					printResponse2();
				} else {
					printTextBot(chat[27]);
				}
			} else if (input1 == 'version') {
				if (isStart == 1) {
					printTextBot(chat[27]);
				} else {
					printTextBot(chat[23]);
				}
			} else if (input1 == 'description') {
				if (isStart == 1) {
					printTextBot(chat[27]);
				} else {
					printTextBot(chat[24]);
				}
			} else if (input1 == 'help') {
				if (isStart == 1) {
					printTextBot(chat[27]);
				} else {
					printTextBot(chat[25]);
				}
			} else if (input1 == 'case') {
				if (isStart == 1) {
					printTextBot(chat[27]);
				} else {
					printTextBot(chat[26]);
				}
			} else {
				if (isStart == 1) {
					printTextBot(chat[28]);
				} else {
					printTextBot(chat[22]);
				}
			}
		}
	});
	const sleep = function(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	};

	const scrollContainer = function() {
		inner.scrollTop = inner.scrollHeight;
	};

	const insertNewChatItem = function(elem) {
		//container.insertBefore(elem, bot);
		bot.appendChild(elem);
		scrollContainer();
		//debugger;
		elem.classList.add('activated');
	};
	const printResponse1 = async function() {
		var step1 = chat[1];
		await sleep(200);
		printTextBot(step1);
	};
	const printResponse2 = async function() {
		var step2 = chat[2];
		await sleep(200);
		printTextBot(step2);
		document.getElementById("input0").style.display = "none";
		const inputField = document.getElementById("input");
		inputField.style.display = "block";
		inputField.addEventListener("keydown", (e) => {
			if (e.code === "Enter") {
				let input = inputField.value;
				if (input === '') {
					return;
				}
				inputField.value = "";
				const request = document.createElement('div');
				request.classList.add('chat-ask');
				request.innerHTML = input;
				person.name = input;
				insertNewChatItem(request);
				inputField.style.display = "none";
				document.getElementById("input0").style.display = "block";
				printResponse3();
			}
		});
	}
	const printResponse3 = async function() {
		var step3 = chat[3];
		await sleep(200);
		const response = document.createElement('div');
		response.classList.add('chat-response');
		response.innerHTML = step3.text + person.name + ' <br>Giới tính của bạn là:';
		insertNewChatItem(response);
		printOptions(step3.options);
	}
	const printResponse4 = async function() {
		var step4 = chat[4];
		await sleep(200);
		printTextBot(step4);
		printOptions(step4.options);
	}

	const printResponse5 = async function() {
		var step5 = chat[5];
		await sleep(200);
		printTextBot(step5);
		if (person.ages == 'Trẻ em') {
			printOptions(step5.options1);
		} else if (person.ages == 'Thanh niên') {
			printOptions(step5.options2);
		} else if (person.ages == 'Trung niên') {
			printOptions(step5.options3);
		}
	}
	const printResponse6 = async function() {
		var step6 = chat[6];
		await sleep(200);
		printTextBot(step6);
		if (person.goTo == 'Đi chơi, du lịch, dạo phố' && person.ages == 'Thanh niên') {
			printOptions(step6.options1);
		} else if (person.goTo == 'Đi chơi, du lịch, dạo phố' && person.ages == 'Trung niên') {
			printOptions(step6.options2);
		} else if (person.goTo == 'Đi làm công sở, văn phòng, đi phỏng vấn' || person.goTo == 'Đi hẹn hò, tiệc cưới, tiệc gia đình') {
			printOptions(step6.options3);
		} else if (person.goTo == 'Đi học') {
			printOptions(step6.options4);
		} else if (person.goTo == 'Đi hội nghị, gặp mặt quan trọng') {
			printOptions(step6.options5);
		}
	}
	const printResponse7 = async function() {
		var step7 = chat[7];
		await sleep(200);
		printTextBot(step7);
		if (person.gender == 'Nam') {
			printOptions(step7.options1);
		} else if (person.gender == 'Nữ') {
			printOptions(step7.options2);
		}
	}
	const printResponse8 = async function() {
		var step8 = chat[8];
		await sleep(200);
		printTextBot(step8);
		document.getElementById("input0").style.display = "none";
		const inputField = document.getElementById("input2");
		inputField.style.display = "block";
		inputField.addEventListener("keydown", (e) => {
			if (e.code === "Enter") {
				let input = inputField.value;
				if (input === '') {
					return;
				}
				if (Math.sign(parseInt(input)) != 1) {
					const request = document.createElement('div');
					request.classList.add('chat-ask');
					request.innerHTML = input;
					insertNewChatItem(request);
					const request1 = document.createElement('div');
					request1.classList.add('chat-response');
					request1.innerHTML = 'Số đo vòng ngực là số dương';
					insertNewChatItem(request1);
					return;
				}
				inputField.value = "";
				const request = document.createElement('div');
				request.classList.add('chat-ask');
				request.innerHTML = input;
				person.bust = input;
				insertNewChatItem(request);
				inputField.style.display = "none";
				document.getElementById("input0").style.display = "block";
				printResponse9();
			}
		});
	}
	const printResponse9 = async function() {
		var step9 = chat[9];
		await sleep(200);
		printTextBot(step9);
		document.getElementById("input0").style.display = "none";
		const inputField = document.getElementById("input3");
		inputField.style.display = "block";
		inputField.addEventListener("keydown", (e) => {
			if (e.code === "Enter") {
				let input = inputField.value;
				if (input === '') {
					return;
				}
				if (Math.sign(parseInt(input)) != 1) {
					const request = document.createElement('div');
					request.classList.add('chat-ask');
					request.innerHTML = input;
					insertNewChatItem(request);
					const request1 = document.createElement('div');
					request1.classList.add('chat-response');
					request1.innerHTML = 'Số đo vòng eo là số dương';
					insertNewChatItem(request1);
					return;
				}
				inputField.value = "";
				const request = document.createElement('div');
				request.classList.add('chat-ask');
				request.innerHTML = input;
				person.waist = input;
				insertNewChatItem(request);
				inputField.style.display = "none";
				document.getElementById("input0").style.display = "block";
				printResponse10();
			}
		});
	}
	const printResponse10 = async function() {
		var step10 = chat[10];
		await sleep(200);
		printTextBot(step10);
		document.getElementById("input0").style.display = "none";
		const inputField = document.getElementById("input4");
		inputField.style.display = "block";
		inputField.addEventListener("keydown", (e) => {
			if (e.code === "Enter") {
				let input = inputField.value;
				if (input === '') {
					return;
				}
				if (Math.sign(parseInt(input)) != 1) {
					const request = document.createElement('div');
					request.classList.add('chat-ask');
					request.innerHTML = input;
					insertNewChatItem(request);
					const request1 = document.createElement('div');
					request1.classList.add('chat-response');
					request1.innerHTML = 'Số đo hông cao là số dương';
					insertNewChatItem(request1);
					return;
				}
				inputField.value = "";
				const request = document.createElement('div');
				request.classList.add('chat-ask');
				request.innerHTML = input;
				person.highHip = input;
				insertNewChatItem(request);
				inputField.style.display = "none";
				document.getElementById("input0").style.display = "block";
				printResponse100();
			}
		});
	}
	const printResponse100 = async function() {
		var step100 = chat[100];
		await sleep(200);
		printTextBot(step100);
		document.getElementById("input0").style.display = "none";
		const inputField = document.getElementById("input7");
		inputField.style.display = "block";
		inputField.addEventListener("keydown", (e) => {
			if (e.code === "Enter") {
				let input = inputField.value;
				if (input === '') {
					return;
				}
				if (Math.sign(parseInt(input)) != 1) {
					const request = document.createElement('div');
					request.classList.add('chat-ask');
					request.innerHTML = input;
					insertNewChatItem(request);
					const request1 = document.createElement('div');
					request1.classList.add('chat-response');
					request1.innerHTML = 'Số đo hông là số dương';
					insertNewChatItem(request1);
					return;
				}
				inputField.value = "";
				const request = document.createElement('div');
				request.classList.add('chat-ask');
				request.innerHTML = input;
				person.hip = input;
				const bust = parseInt(person.bust);
				const waist = parseInt(person.waist);
				const highHip = parseInt(person.highHip);
				const hip = parseInt(person.hip);
				const CM = 2.54;
				if (person.gender == 'Nam') {
					if ((hip - bust) > 2 * CM && (hip - waist) >= 7 * CM && (highHip / waist) >= 1.193) {
						person.bodyShape = "Dáng hình tam giác";
					} else if ((bust - hip) >= 3.6 * CM && (bust - waist) < 9 * CM) {
						person.bodyShape = "Dáng hình tam giác ngược";
					} else if (Math.abs(hip - bust) < 3.6 * CM && (bust - waist) < 9 * CM && (hip - waist) < 10 * CM) {
						person.bodyShape = "Dáng hình chữ nhật";
					} else if ((hip - bust) >= 3.6 * CM && (hip - waist) < 9 * CM) {
						person.bodyShape = "Dáng hình bầu dục";
					} else if ((bust - hip) >= 2 * CM && (bust - waist) < 7 * CM) {
						person.bodyShape = "Dáng hình thang";
					} else {
						person.bodyShape = "Dáng hình bầu dục";
					}
				} else if (person.gender == 'Nữ') {
					if ((hip - waist) >= 10 * CM
						|| (Math.abs(hip - bust) <= 1 * CM && Math.abs(bust - hip) <= 3.6 * CM
							&& (bust - waist >= 9 * CM))
						|| ((bust - hip) > 1 * CM && (bust - hip) < 10 * CM && (bust - waist) >= 9 * CM)
						|| (hip - bust) >= 3.6 * CM && (hip - bust) < 10 * CM && (hip - waist) >= 9 * CM
						&& (highHip / waist) < 1.193) {
						person.bodyShape = "Dáng đồng hồ cát";
					} else if ((hip - bust) > 2 * CM && (hip - waist) >= 7 * CM && (highHip / waist) >= 1.193) {
						person.bodyShape = "Dáng hình tam giác";
					} else if ((bust - hip) >= 3.6 * CM && (bust - waist) < 9 * CM) {
						person.bodyShape = "Dáng hình tam giác ngược";
					} else if (Math.abs(hip - bust) < 3.6 * CM && (bust - waist) < 9 * CM && (hip - waist) < 10 * CM) {
						person.bodyShape = "Dáng hình chữ nhật";
					} else if ((hip - bust) >= 3.6 * CM && (hip - waist) < 9 * CM) {
						person.bodyShape = "Dáng hình bầu dục";
					} else {
						person.bodyShape = "Dáng hình bầu dục";
					}
				}
				insertNewChatItem(request);
				const response = document.createElement('div');
				response.classList.add('chat-response');
				response.innerHTML = 'Có vẻ như vóc dáng của bạn là ' + person.bodyShape;
				insertNewChatItem(response);
				inputField.style.display = "none";
				document.getElementById("input0").style.display = "block";
				printResponse11();
			}
		});
	}
	const printResponse11 = async function() {
		var step11 = chat[11];
		await sleep(200);
		printTextBot(step11);
		printOptions(step11.options);
	}
	const printResponse12 = async function() {
		var step12 = chat[12];
		await sleep(200);
		printTextBot(step12);
		document.getElementById("input0").style.display = "none";
		const inputField = document.getElementById("input5");
		inputField.style.display = "block";
		inputField.addEventListener("keydown", (e) => {
			if (e.code === "Enter") {
				let input = inputField.value;
				if (input === '') {
					return;
				}
				if (Math.sign(parseInt(input)) != 1) {
					const request = document.createElement('div');
					request.classList.add('chat-ask');
					request.innerHTML = input;
					insertNewChatItem(request);
					const request1 = document.createElement('div');
					request1.classList.add('chat-response');
					request1.innerHTML = 'Chiều cao là số dương';
					insertNewChatItem(request1);
					return;
				}
				if (parseInt(input) < 100) {
					const request = document.createElement('div');
					request.classList.add('chat-ask');
					request.innerHTML = input;
					insertNewChatItem(request);
					const request1 = document.createElement('div');
					request1.classList.add('chat-response');
					request1.innerHTML = 'Chiều cao lớn hơn 100 cm';
					insertNewChatItem(request1);
					return;
				}
				inputField.value = "";
				const request = document.createElement('div');
				request.classList.add('chat-ask');
				request.innerHTML = input;
				person.height = input;
				insertNewChatItem(request);
				inputField.style.display = "none";
				document.getElementById("input0").style.display = "block";
				printResponse13();
			}
		});
	}
	const printResponse13 = async function() {
		var step13 = chat[13];
		await sleep(200);
		printTextBot(step13);
		document.getElementById("input0").style.display = "none";
		const inputField = document.getElementById("input6");
		inputField.style.display = "block";
		inputField.addEventListener("keydown", (e) => {
			if (e.code === "Enter") {
				let input = inputField.value;
				if (input === '') {
					return;
				}
				if (Math.sign(parseInt(input)) != 1) {
					const request = document.createElement('div');
					request.classList.add('chat-ask');
					request.innerHTML = input;
					insertNewChatItem(request);
					const request1 = document.createElement('div');
					request1.classList.add('chat-response');
					request1.innerHTML = 'Cân nặng là số dương';
					insertNewChatItem(request1);
					return;
				}
				inputField.value = "";
				const request = document.createElement('div');
				request.classList.add('chat-ask');
				request.innerHTML = input;
				person.weight = input;
				const height = parseInt(person.height);
				const weight = parseInt(person.weight);
				const bmi = weight / (height * height / 10000);
				if (bmi < 18.5) {
					person.bodyCondition = 'Gầy'
				} else if (bmi >= 18.5 && bmi < 25) {
					person.bodyCondition = 'Tiêu chuẩn'
				} else if (bmi >= 25) {
					person.bodyCondition = 'Mập'
				}
				insertNewChatItem(request);
				const response = document.createElement('div');
				response.classList.add('chat-response');
				response.innerHTML = 'Có vẻ như thể trạng của bạn là ' + person.bodyCondition;
				insertNewChatItem(response);
				inputField.style.display = "none";
				document.getElementById("input0").style.display = "block";
				if (person.goTo == 'Đi biển') {
					res();
					isStart = 0;
				} else {
					printResponse14();
				}
			}
		});
	}
	const printResponse14 = async function() {
		var step14 = chat[14];
		await sleep(200);
		printTextBot(step14);
		printOptions(step14.options);
	}
	const printTextBot = function(step) {
		const response = document.createElement('div');
		response.classList.add('chat-response');
		response.innerHTML = step.text;
		insertNewChatItem(response);
	}
	const printOptions = function(options) {
		const choices = document.createElement('div');
		choices.classList.add('choices');
		options.forEach(function(option) {
			const button = document.createElement(option.url ? 'a' : 'button');
			button.classList.add('choice');
			button.innerHTML = option.text;
			if (option.url) {
				button.href = option.url;
			} else {
				button.dataset.next = option.next;
			}
			choices.appendChild(button);
		});
		insertNewChatItem(choices);
	};
	const printChoice = function(choice) {
		const choiceElem = document.createElement('div');
		choiceElem.classList.add('chat-ask');
		choiceElem.innerHTML = choice.innerHTML;
		insertNewChatItem(choiceElem);
	};

	const disableAllChoices = function() {
		const choices = document.querySelectorAll('.choice');
		choices.forEach(function(choice) {
			choice.disabled = 'disabled';
		});
		return;
	};

	const handleChoice = async function(e) {
		// nếu không phải option hoặc là thẻ link a -> click
		if (!e.target.classList.contains('choice') || 'A' === e.target.tagName) {
			// Target isn't a button, but could be a child of a button.
			var button = e.target.closest('#bot-container .choice');
			if (button !== null) {
				button.click();
			}
			return;
		}
		e.preventDefault();
		const choice = e.target;
		disableAllChoices();
		printChoice(choice);
		scrollContainer();
		if (choice.dataset.next == 4) {
			person.gender = choice.innerHTML;
			printResponse4();
		} else if (choice.dataset.next == 5) {
			person.ages = choice.innerHTML;
			printResponse5();
		} else if (choice.dataset.next == 6) {
			person.goTo = choice.innerHTML;
			printResponse6();
		} else if (choice.dataset.next == 7) {
			if (choice.innerHTML == 'Đi biển') {
				person.goTo = choice.innerHTML;
			} else {
				person.style = choice.innerHTML;
			}
			printResponse7();
		} else if (choice.dataset.next == 8) {
			printResponse8();
		} else if (choice.dataset.next == 11) {
			person.bodyShape = choice.innerHTML;
			printResponse11();
		} else if (choice.dataset.next == 12) {
			printResponse12();
		} else if (choice.dataset.next == 14) {
			person.bodyCondition = choice.innerHTML;
			if (person.goTo == 'Đi biển') {
				res();
				isStart = 0;
			} else {
				printResponse14();
			}
		} else if (choice.dataset.next == 15) {
			person.weather = choice.innerHTML;
			res();
			isStart = 0;
		} else if (choice.dataset.next == 16) {
			person.goTo = choice.innerHTML;
			res();
			isStart = 0;
		} else if (choice.dataset.next == 17) {
			person.goTo = choice.innerHTML;
			printResponse14();
		}
	};
	const handleRestart = function() {
		startConversation();
	}

	const startConversation = function() {
		var x = document.getElementsByClassName("input-field");
		x[0].style.display = "none";
		x[1].style.display = "none";
		x[2].style.display = "none";
		x[3].style.display = "none";
		x[4].style.display = "none";
		x[5].style.display = "none";
		x[6].style.display = "none";
		document.getElementById("input0").style.display = "block";
		person = {};
		isStart = 0;
		disableAllChoices();
		printResponse1();
	}

	const init = function() {
		container.addEventListener('click', handleChoice);
		restartButton = document.createElement('button');
		restartButton.innerText = "Restart";
		restartButton.classList.add('restart');
		restartButton.addEventListener('click', handleRestart);
		container.appendChild(restartButton);
		startConversation();
	};

	init();
}

bot();
