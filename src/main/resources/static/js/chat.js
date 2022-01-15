const chat = {
	1: {
		text: 'Chào mừng bạn đến với hệ thống chatbot tư vấn thời trang',
		options: [
			{
				text: 'Bắt đầu',
				next: 2 // hệ thống hỏi tên và người dùng nhập tên
			}
		]
	},
	2: {
		text: 'Bạn tên là gì?',
	},
	3: {
		text: 'Xin chào ',
		options: [
			{
				text: "Nam",
				next: 4
			},
			{
				text: "Nữ",
				next: 4
			}
		]
	},
	4: {
		text: 'Lứa tuổi của bạn là gì?',
		options: [
			{
				text: "Trẻ em",
				next: 5
			},
			{
				text: "Thanh niên",
				next: 5
			},
			{
				text: "Trung niên",
				next: 5
			},
		]
	},
	5: {
		text: 'Bạn muốn lựa chọn trang phục để đi đâu?',
		options1: [ // lựa chọn trẻ trẻ em
			{
				text: 'Đi học',
				next: 17 // lựa chọn thời tiết
			},
			{
				text: 'Đi chơi, du lịch với gia đình',
				next: 17 // lựa chọn thời tiết
			},
			{
				text: 'Đi biển',
				next: 16 // hệ thống phản hồi tư vấn
			},
		],
		options2: [ // lựa chọn của thanh niên
			{
				text: 'Đi chơi, du lịch, dạo phố',
				next: 6
			},
			{
				text: 'Đi học',
				next: 6
			},
			{
				text: 'Đi biển',
				next: 7
			},
			{
				text: 'Đi làm công sở, văn phòng, đi phỏng vấn',
				next: 6
			},
			{
				text: 'Đi hội nghị, gặp mặt quan trọng',
				next: 6
			},
			{
				text: 'Đi hẹn hò, tiệc cưới, tiệc gia đình',
				next: 6
			},
		],
		options3: [ // lựa chọn của trung niên
			{
				text: 'Đi chơi, du lịch, dạo phố',
				next: 6
			},
			{
				text: 'Đi biển',
				next: 7
			},
			{
				text: 'Đi làm công sở, văn phòng, đi phỏng vấn',
				next: 6
			},
			{
				text: 'Đi hội nghị, gặp mặt quan trọng',
				next: 6
			},
			{
				text: 'Đi hẹn hò, tiệc cưới, tiệc gia đình',
				next: 6
			},
		]
	},
	6: {
		text: 'Phong cách trang phục mà bạn muốn mặc là gì?',
		options1: [ // thanh niên đi chơi
			{
				text: 'Phong cách thể thao',
				next: 7,
			},
			{
				text: 'Phong cách cổ điển',
				next: 7,
			},
			{
				text: 'Phong cách hiện đại, sành điệu, trẻ trung, năng động',
				next: 7,
			},
			{
				text: 'Phong cách đường phố, bụi bặm, cá tính, phá cách',
				next: 7,
			},
		],
		options2: [ //trung niên đi chơi
			{
				text: 'Phong cách lịch lãm',
				next: 7,
			},
			{
				text: 'Phong cách thể thao',
				next: 7,
			},
			{
				text: 'Phong cách cổ điển',
				next: 7,
			},
		],
		options3: [ // thanh niên, trung niên đi làm, hẹn hò
			{
				text: 'Phong cách lịch lãm',
				next: 7,
			},
			{
				text: 'Phong cách cổ điển',
				next: 7,
			},
			{
				text: 'Phong cách hiện đại, sành điệu, trẻ trung, năng động',
				next: 7,
			},
		],
		options4: [ // thanh niên đi học
			{
				text: 'Phong cách lịch lãm',
				next: 7,
			},
			{
				text: 'Phong cách thể thao',
				next: 7,
			},
		],
		options5: [ // thanh niên, trung niên đi hội nghị
			{
				text: 'Phong cách lịch lãm',
				next: 7,
			},
			{
				text: 'Phong cách cổ điển',
				next: 7,
			},
		]
	},
	7: {
		text: 'Lựa chọn vóc dáng phù hợp của bạn: ',
		options1: [
			{
				text: "Dáng hình tam giác",
				next: 11
			},
			{
				text: "Dáng hình tam giác ngược",
				next: 11
			},
			{
				text: "Dáng hình chữ nhật",
				next: 11
			},
			{
				text: "Dáng hình thang",
				next: 11
			},
			{
				text: "Dáng hình bầu dục",
				next: 11
			},
			{
				text: "Nhập thông số ngực, eo, hông để hệ thống tính",
				next: 8
			}
		],

		options2: [
			{
				text: "Dáng hình tam giác",
				next: 11
			},
			{
				text: "Dáng hình tam giác ngược",
				next: 11
			},
			{
				text: "Dáng hình chữ nhật",
				next: 11
			},
			{
				text: "Dáng đồng hồ cát",
				next: 11
			},
			{
				text: "Dáng hình bầu dục",
				next: 11
			},
			{
				text: "Nhập thông số ngực, eo, hông để hệ thống tính",
				next: 8
			}
		]
	},
	8: {
		text: 'Số đo ngực của bạn là bao nhiêu? (nhập dưới dạng cm, ví dụ 90)',
	},
	9: {
		text: 'Số đo eo của bạn là bao nhiêu? (nhập dưới dạng cm, ví dụ 90)',
	},
	10: {
		text: 'Số đo hông cao của bạn là bao nhiêu? (nhập dưới dạng cm, ví dụ 90)',
	},
	100: {
		text: 'Số đo hông của bạn là bao nhiêu? (nhập dưới dạng cm, ví dụ 90)',
	},
	11: {
		text: 'Thể trạng của bạn là gì?',
		options: [
			{
				text: 'Gầy',
				next: 14
			},
			{
				text: 'Tiêu chuẩn',
				next: 14
			},
			{
				text: 'Mập',
				next: 14
			},
			{
				text: 'Nhập thông số chiều cao, cân nặng để hệ thống tính',
				next: 12
			},
		]
	},
	12:{
		text: 'Nhập thông số chiều cao của bạn (đơn vị cm)',
		next:13,
	},
	13:{
		text: 'Nhập thông số cân nặng của bạn (đơn vị kg)',
		next:14,
	},
	14: {
		text: 'Lựa chọn thời tiết: ',
		options: [
			{
				text: 'Nóng',
				next: 15
			},
			{
				text: 'Mát mẻ',
				next: 15
			},
			{
				text: 'Lạnh',
				next: 15
			},
		]
	}
};
