package vn.ptit.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Input")
public class Input {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Id")
	private int id;
	@Column(name = "Gender", length = 255)
	private String gender;
	@Column(name = "Ages", length = 255)
	private String ages;
	@Column(name = "GoTo", length = 255)
	private String goTo;
	@Column(name = "Style", length = 255)
	private String style;
	@Column(name = "BodyShape", length = 255)
	private String bodyShape;
	@Column(name = "BodyCondition", length = 255)
	private String bodyCondition;
	@Column(name = "Weather", length = 255)
	private String weather;
}
