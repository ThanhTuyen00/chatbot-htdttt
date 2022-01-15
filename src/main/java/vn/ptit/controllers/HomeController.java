package vn.ptit.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {
	@GetMapping
	public String home() {
		return "index";
	}
	
	@GetMapping("rule")
	public String viewRule(Model model) {
		return "rule";
	}
}
