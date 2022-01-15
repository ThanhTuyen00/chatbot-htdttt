package vn.ptit.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Output")
public class Output {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Id")
	private int id;
	@Column(name = "Costume", length = 1000)
	private String costume;
	@Column(name = "Color", length = 1000)
	private String color;
	@Column(name = "Pattern", length = 1000)
	private String pattern;
	@Column(name = "Note", length = 1000)
	private String note;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "InputId")
	private Input input;
}
