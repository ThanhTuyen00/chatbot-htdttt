package vn.ptit.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vn.ptit.entities.Input;
import vn.ptit.entities.Output;
import vn.ptit.repositories.InputRepository;
import vn.ptit.repositories.OutputRepository;
import vn.ptit.utils.AjaxResponse;

@RestController
@RequestMapping("/rest/api")
public class AjaxController {
	@Autowired
	InputRepository inputRepository;
	@Autowired
	OutputRepository outputRepository;

	@PostMapping(value = "/output")
	public ResponseEntity<AjaxResponse> output(@RequestBody final Map<String, Object> data) {
		String name, gender, ages, goTo, style = null, bodyShape = null, bodyCondition = null, weather = null;
		name = data.get("name").toString();
		gender = data.get("gender").toString();
		ages = data.get("ages").toString();
		goTo = data.get("goTo").toString();
		if (!ages.equals("Trẻ em")) { // nếu không phải trẻ em - trẻ em thì chỉ cần giới tính, đi đâu (thêm thời tiết
										// nếu là đi học/ đi chơi)
			bodyShape = data.get("bodyShape").toString();
			bodyCondition = data.get("bodyCondition").toString();
			if (!goTo.equals("Đi biển")) { // nếu không phải đi biển - đi biển không cần xét style và thời tiết
				style = data.get("style").toString();
				weather = data.get("weather").toString();
				Input input = inputRepository.findInput(gender, ages, goTo, style, bodyShape, bodyCondition, weather);
				List<Output> output = outputRepository.findByInputId(input.getId());
				String res = "<strong>Tên:</strong> " + name + "<br>" + "<strong>Giới tính:</strong> " + gender + "<br>"
						+ "<strong>Độ tuổi:</strong> " + ages + "<br>" + "<strong>Đi:</strong> " + goTo + "<br>"
						+ "<strong>Phong cách:</strong> " + style + "<br>" + "<strong>Vóc dáng:</strong> " + bodyShape
						+ "<br>" + "<strong>Thể trạng:</strong> " + bodyCondition + "<br>"
						+ "<strong>Thời tiết:</strong> " + weather + "<br>";
				if (output.size() == 0) {
					res += "<strong>Xin lỗi, hệ thống chưa có tư vấn nào phù hợp với bạn!\"</strong>";
				} else {
					for (int i = 0; i < output.size(); i++) {
						res += "<br><strong>Tư vấn " + (i + 1) + "</strong><br>" + "<strong>Trang phục: </strong>"
								+ output.get(i).getCostume() + "<br>";
						if (!output.get(i).getColor().equals("")) {
							res += "<strong>Màu sắc: </strong>" + output.get(i).getColor() + "<br>";
						}
						if (!output.get(i).getPattern().equals("")) {
							res += "<strong>Họa tiết: </strong>" + output.get(i).getPattern() + "<br>";
						}
						if (!output.get(i).getNote().equals("")) {
							res += "<strong>Lưu ý: </strong>" + output.get(i).getNote() + "<br>";
						}
					}
				}
				return ResponseEntity.ok(new AjaxResponse(33, res));
			} else {
				Input input = inputRepository.findInput(gender, ages, goTo, bodyShape, bodyCondition);
				List<Output> output = outputRepository.findByInputId(input.getId());
				String res = "<strong>Tên:</strong> " + name + "<br>" + "<strong>Giới tính:</strong> " + gender + "<br>"
						+ "<strong>Độ tuổi:</strong> " + ages + "<br>" + "<strong>Đi:</strong> " + goTo + "<br>"
						+ "<strong>Vóc dáng:</strong> " + bodyShape + "<br>" + "<strong>Thể trạng:</strong> "
						+ bodyCondition + "<br>";
				if (output.size() == 0) {
					res += "<strong>Xin lỗi, hệ thống chưa có tư vấn nào phù hợp với bạn!\"</strong>";

				} else {
					for (int i = 0; i < output.size(); i++) {
						res += "<br><strong>Tư vấn " + (i + 1) + "</strong><br>" + "<strong>Trang phục: </strong>"
								+ output.get(i).getCostume() + "<br>";
						if (!output.get(i).getColor().equals("")) {
							res += "<strong>Màu sắc: </strong>" + output.get(i).getColor() + "<br>";
						}
						if (!output.get(i).getPattern().equals("")) {
							res += "<strong>Họa tiết: </strong>" + output.get(i).getPattern() + "<br>";
						}
						if (!output.get(i).getNote().equals("")) {
							res += "<strong>Lưu ý: </strong>" + output.get(i).getNote() + "<br>";
						}
					}
				}
				return ResponseEntity.ok(new AjaxResponse(33, res));
			}
		} else {
			if (goTo.equals("Đi biển")) {
				Input input = inputRepository.findInput(gender, ages, goTo);
				List<Output> output = outputRepository.findByInputId(input.getId());
				String res = "<strong>Tên:</strong> " + name + "<br>" + "<strong>Giới tính:</strong> " + gender + "<br>"
						+ "<strong>Độ tuổi:</strong> " + ages + "<br>" + "<strong>Đi:</strong> " + goTo + "<br>";
				if (output.size() == 0) {
					res += "<strong>Xin lỗi, hệ thống chưa có tư vấn nào phù hợp với bạn!\"</strong>";
				} else {
					for (int i = 0; i < output.size(); i++) {
						res += "<br><strong>Tư vấn " + (i + 1) + "</strong><br>" + "<strong>Trang phục: </strong>"
								+ output.get(i).getCostume() + "<br>";
						if (!output.get(i).getColor().equals("")) {
							res += "<strong>Màu sắc: </strong>" + output.get(i).getColor() + "<br>";
						}
						if (!output.get(i).getPattern().equals("")) {
							res += "<strong>Họa tiết: </strong>" + output.get(i).getPattern() + "<br>";
						}
						if (!output.get(i).getNote().equals("")) {
							res += "<strong>Lưu ý: </strong>" + output.get(i).getNote() + "<br>";
						}
					}
				}
				return ResponseEntity.ok(new AjaxResponse(33, res));
			} else {
				weather = data.get("weather").toString();
				Input input = inputRepository.findInput(gender, ages, goTo, weather);
				List<Output> output = outputRepository.findByInputId(input.getId());
				String res = "<strong>Tên:</strong> " + name + "<br>" + "<strong>Giới tính:</strong> " + gender + "<br>"
						+ "<strong>Độ tuổi:</strong> " + ages + "<br>" + "<strong>Đi:</strong> " + goTo + "<br>"
						+ "<strong>Thời tiết:</strong> " + weather + "<br>";
				if (output.size() == 0) {
					res += "<strong>Xin lỗi, hệ thống chưa có tư vấn nào phù hợp với bạn!\"</strong>";
				} else {
					for (int i = 0; i < output.size(); i++) {
						res += "<br><strong>Tư vấn " + (i + 1) + "</strong><br>" + "<strong>Trang phục: </strong>"
								+ output.get(i).getCostume() + "<br>";
						if (!output.get(i).getColor().equals("")) {
							res += "<strong>Màu sắc: </strong>" + output.get(i).getColor() + "<br>";
						}
						if (!output.get(i).getPattern().equals("")) {
							res += "<strong>Họa tiết: </strong>" + output.get(i).getPattern() + "<br>";
						}
						if (!output.get(i).getNote().equals("")) {
							res += "<strong>Lưu ý: </strong>" + output.get(i).getNote() + "<br>";
						}
					}
				}
				return ResponseEntity.ok(new AjaxResponse(33, res));
			}
		}
	}
}
