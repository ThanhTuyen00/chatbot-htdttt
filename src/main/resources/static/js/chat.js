const chat = {
	20: {
		text1: 'Xin chào bạn, chúc bạn có một ngày tốt lành!!!',
		text2: 'Chào bạn, chúng tôi có thể giúp gì cho bạn?',
		text3: 'Chào bạn, nhớ nhập <strong>start</strong> trong thanh chat và ấn Enter để được chúng tôi tư vấn lựa chọn trang phục nhé!!!',
	},
	21: {
		text: 'Mình là <strong>chatbot tư vấn trang phục</strong>, bạn chat <strong>start</strong> để được mình tư vấn lựa chọn trang phục nhé!!!',
	},
	22: {
		text: 'Xin lỗi, hệ thống không thể xử lý được yêu càu của bạn'
			+ '<br>Xin vui lòng nhập 1 trong các lựa chọn dưới đây'
			+ '<br><strong>start</strong> để lựa chọn tư vấn trang phục'
			+ '<br><strong>version</strong> để xem phiên bản mới nhất của hệ thống'
			+ '<br><strong>description</strong> để xem mô tả của hệ thống'
			+ '<br><strong>help</strong> để xem hướng dẫn sử dụng hệ thống'
			+ '<br><strong>case</strong> để xem số lượng trường hợp trong hệ thống',
	},
	23: {
		text: '<strong>Phiên bản</strong>: 1.2'
			+ '<br><strong>Ngày</strong>: 17/01/2022'
			+ '<br><strong>Cập nhật:</strong>: Thêm một số cuộc trò truyện của người dùng với chatbot như: xin chào/hi/hello, ... , bạn tên là gì/who are you, ... start, version, description, help, case',
	},
	24: {
		text: 'Hệ thống chatbot tư vấn lựa chọn trang giúp bạn có thể lựa chọn trang phục phù hợp với giới tính, lứa tuổi, hoàn cảnh, vóc dáng, thể trạng, thời tiết!!!',
	},
	25: {
		text: '<strong>Hướng dẫn sử dụng chatbot tư vấn trang phục</strong>'
			+ '<br><strong>Bước 1</strong>: nhập <strong> start</strong> trong thanh chat và ấn Enter'
			+ '<br><strong>Bước 2</strong>: chọn/trả lời các câu hỏi liên quan'
			+ '<br>Sau khi nhập tên, người dùng sẽ trả lời tối thiểu 3 câu hỏi liên quan đến giới tính, lứa tuổi và hoàn cảnh, sau đó tùy trường hợp của người dùng mà trả lời tối đa đến 13 câu hỏi, trong đó gồm 4 câu hỏi về thông số vòng ngực, eo, hông cao, hông để xác định vóc dáng của người dùng và 2 câu hỏi về chiều cao cân nặng để tính thể trạng.'
			+ '<br><strong></strong>: Tùy theo từng <strong>lứa tuổi</strong> của người dùng hệ thống sẽ đưa ra các câu hỏi về <strong>hoàn cảnh</strong> và <strong>phong cách ăn mặc</strong> khác nhau'
			+ '<br><strong></strong>: Tùy theo từng <strong>giới tính</strong> của người dùng hệ thống sẽ đưa ra các câu hỏi về <strong>vóc dáng</strong> khác nhau'
			+ '<br><strong></strong>: Tùy theo từng <strong>hoàn cảnh</strong> của người dùng hệ thống sẽ đưa ra các câu hỏi về <strong>phong cách ăn mặc</strong> khác nhau'
			+ '<br>Nhập <strong>case</strong> và ấn Enter để xem số trường hợp của người dùng trong hệ thống',
	},
	26: {
		text: '<strong>Số trường hợp của người dùng trong hệ thống</strong>'
			+ '<br><strong>Giới tính</strong>: “Nam” và “Nữ”'
			+ '<br><strong>Lứa tuổi</strong>: "Trẻ em", "Thanh niên" và "Trung niên"'
			+ '<br><strong>Hoàn cảnh</strong>: phụ thuộc vào Lứa tuổi của người dùng, có 3 trường hợp'
			+ '<br> 1.Nếu lứa tuổi là "Trẻ em" thì có 3 hoàn cảnh: “Đi học”, “Đi chơi, du lịch với gia đình”, “Đi biển”'
			+ '<br> 2.Nếu lứa tuổi là "Thanh niên" thì có 6 hoàn cảnh: : “Đi chơi, du lịch, dạo phố”, “Đi học”, “Đi biển”, “Đi làm công sở, văn phòng, đi phỏng vấn”, “Đi hội nghị, gặp mặt quan trọng”, “Đi hẹn hò, tiệc cưới, tiệc gia đình”'
			+ '<br> 3.Nếu lứa tuổi là "Thanh niên" thì có 5 hoàn cảnh: : “Đi chơi, du lịch, dạo phố”, “Đi biển”, “Đi làm công sở, văn phòng, đi phỏng vấn”, “Đi hội nghị, gặp mặt quan trọng”, “Đi hẹn hò, tiệc cưới, tiệc gia đình”'
			+ '<br><strong>Phong cách ăn mặc</strong>: phụ thuộc vào Lứa tuổi, hoàn cảnh của người dùng, có 6 trường hợp'
			+ '<br> 1. Nếu lứa tuổi là “Trẻ em” hoặc hoàn cảnh là “Đi biển” thì không cần lựa chọn phong cách ăn mặc'
			+ '<br> 2. Nếu lứa tuổi là “Thanh niên” và hoàn cảnh là “Đi học” thì có các lựa chọn của phong cách là: “Phong cách lịch lãm”, “Phong cách thể thao”'
			+ '<br> 3. Nếu lứa tuổi là “Thanh niên” và hoàn cảnh là “Đi chơi, du lịch, dạo phố” thì có các lựa chọn của phong cách là: “Phong cách thể thao”, “Phong cách cổ điển”, “Phong cách hiện đại, sành điệu, trẻ trung, năng động”, “Phong cách đường phố, bụi bặm, cá tính, phá cách”'
			+ '<br> 4. Nếu lứa tuổi là “Trung niên” và hoàn cảnh là “Đi chơi, du lịch, dạo phố” thì có các lựa chọn của phong cách là: “Phong cách lịch lãm”, “Phong cách thể thao”, “Phong cách cổ điển”'
			+ '<br> 5. Nếu lứa tuổi là “Thanh niên” hoặc “Trung niên” và hoàn cảnh là “Đi làm công sở, văn phòng, đi phỏng vấn” hoặc “Đi hẹn hò, tiệc cưới, tiệc gia đình” thì có các lựa chọn của phong cách là: “Phong cách lịch lãm”, “Phong cách cổ điển”, “Phong cách hiện đại, sành điệu, trẻ trung, năng động”'
			+ '<br> 6. Nếu lứa tuổi là “Thanh niên” hoặc “Trung niên” và hoàn cảnh là “Đi hội nghị, gặp mặt quan trọng” thì có các lựa chọn của phong cách là: “Phong cách lịch lãm”, “Phong cách cổ điển”'
			+ '<br><strong>Vóc dáng</strong>: phụ thuộc vào lứa tuổi, giới tính của người dùng, có 3 trường hợp'
			+ '<br> 1. Nếu lứa tuổi của người dùng là “Trẻ em” thì không cần lựa chọn vóc dáng'
			+ '<br> 2. Nếu lứa tuổi của người dùng khác “Trẻ em” và giới tính là “Nam” thì có 5 kiểu vóc dáng của người dùng: “Dáng hình tam giác”, “Dáng hình tam giác ngược”, “Dáng hình chữ nhật”, “Dáng hình thang”, “Dáng hình bầu dục”'
			+ '<br> 3. Nếu lứa tuổi của người dùng khác “Trẻ em” và giới tính là “Nữ” thì có 5 kiểu vóc dáng của người dùng: “Dáng hình tam giác”, “Dáng hình tam giác ngược”, “Dáng hình chữ nhật”, “Dáng đồng hồ cát”, “Dáng hình bầu dục”'
			+ '<br><strong>Thể trạng</strong>: phụ thuộc vào lứa tuổi của người dùng, có 2 trường hợp'
			+ '<br> 1. Nếu lứa tuổi của người dùng là “Trẻ em” thì không cần lựa chọn thể trạng'
			+ '<br> 2. Nếu lứa tuổi của người dùng khác “Trẻ em” thì có 3 kiểu thể trạng là "Gầy", "Tiêu chuẩn", "Mập"'
			+ '<br><strong>Thời tiết</strong>: phụ thuộc vào hoàn cảnh của người dùng chọn, có 2 trường hợp'
			+ '<br> 1. Nếu lựa chọn hoàn cảnh của người dùng là “Đi biển” thì người dùng không cần lựa chọn thời tiết'
			+ '<br> 2. Nếu lựa chọn hoàn cảnh của người dùng khác “Đi biển” thì người dùng có 3 lứa chọn “Nóng”, “Mát mẻ” và “Lạnh”'
	},
	27: {
		text: 'Hệ thống đang chạy tư vấn, bạn vui lòng ấn nút <strong>Restart</strong> hoặc trả lời để hệ thống tư vấn song!',
	},
	28: {
		text: 'Hệ thống đang chạy tư vấn, bạn vui lòng ấn nút <strong>Restart</strong> hoặc trả lời <strong>đúng kiểu dữ liệu yêu cầu</strong> để hệ thống tư vấn song!',
	},
	29: {
		text: 'Hệ thống đã tư vấn trang phục phù hợp với lựa chọn của bạn.'
			+ '<br>Bạn vui lòng chat 1 trong các lựa chọn dưới đây để tiếp tục'
			+ '<br><strong>start</strong> để lựa chọn tư vấn trang phục'
			+ '<br><strong>version</strong> để xem phiên bản mới nhất của hệ thống'
			+ '<br><strong>description</strong> để xem mô tả của hệ thống'
			+ '<br><strong>help</strong> để xem hướng dẫn sử dụng hệ thống'
			+ '<br><strong>case</strong> để xem số lượng trường hợp trong hệ thống',
	},
	1: {
		text: 'Chào mừng bạn đến với hệ thống chatbot tư vấn thời trang.'
			+ '<br>Xin vui lòng chat 1 trong các lựa chọn dưới đây'
			+ '<br><strong>start</strong> để lựa chọn tư vấn trang phục'
			+ '<br><strong>version</strong> để xem phiên bản mới nhất của hệ thống'
			+ '<br><strong>description</strong> để xem mô tả của hệ thống'
			+ '<br><strong>help</strong> để xem hướng dẫn sử dụng hệ thống'
			+ '<br><strong>case</strong> để xem số lượng trường hợp trong hệ thống',
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
	12: {
		text: 'Nhập thông số chiều cao của bạn (đơn vị cm)',
		next: 13,
	},
	13: {
		text: 'Nhập thông số cân nặng của bạn (đơn vị kg)',
		next: 14,
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
