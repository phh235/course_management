package org.example.duanxuong.repository;import org.example.duanxuong.entity.CourseDetail;import org.springframework.data.jpa.repository.JpaRepository;import org.springframework.stereotype.Repository;@Repositorypublic interface CourseDetailRepository extends JpaRepository<CourseDetail, Integer> {    CourseDetail findById(int id);}