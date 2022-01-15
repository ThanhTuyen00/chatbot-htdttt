package vn.ptit.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import vn.ptit.entities.Output;

@Repository
public interface OutputRepository extends JpaRepository<Output, Integer>{
	@Query("SELECT o FROM Output o WHERE o.input.id = ?1")
	public List<Output> findByInputId(int inputId);
}
