package vn.ptit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import vn.ptit.entities.Input;

@Repository
public interface InputRepository extends JpaRepository<Input, Integer> {
	// trẻ em đi biển
	@Query("SELECT i FROM Input i WHERE i.gender = ?1 AND i.ages = ?2 AND i.goTo = ?3")
	public Input findInput(String gender, String ages, String goTo);
	// trẻ em đi học/chơi
	@Query("SELECT i FROM Input i WHERE i.gender = ?1 AND i.ages = ?2 AND i.goTo = ?3 AND i.weather = ?4")
	public Input findInput(String gender, String ages, String goTo, String weather);
	// người lớn đi biển
	@Query("SELECT i FROM Input i WHERE i.gender = ?1 AND i.ages = ?2 AND i.goTo = ?3 AND i.bodyShape = ?4 AND i.bodyCondition = ?5")
	public Input findInput(String gender, String ages, String goTo, String bodyShape, String bodyCondition);
	// người lớn đi !biển
	@Query("SELECT i FROM Input i WHERE i.gender = ?1 AND i.ages = ?2 AND i.goTo = ?3 AND i.style = ?4 AND i.bodyShape = ?5 AND i.bodyCondition = ?6 AND i.weather = ?7")
	public Input findInput(String gender, String ages, String goTo, String style, String bodyShape, String bodyCondition, String weather);
}
