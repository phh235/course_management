package org.example.duanxuong.service.impl;import org.example.duanxuong.entity.Course;import org.example.duanxuong.entity.CourseDetail;import org.example.duanxuong.repository.CourseDetailRepository;import org.example.duanxuong.service.CourseDetailService;import org.springframework.beans.factory.annotation.Autowired;import org.springframework.stereotype.Service;import java.util.List;@Servicepublic class CourseDetailServiceImpl implements CourseDetailService {    @Autowired    private CourseDetailRepository courseDetailRepository;    @Override    public List<CourseDetail> getAllCourseDetail() {        return courseDetailRepository.findAll();    }    @Override    public void doGetDeleteByIdCourseDetail(int id) {        courseDetailRepository.deleteById(id);    }    @Override    public CourseDetail doSaveCourseDetail(CourseDetail courseDetail) {        return courseDetailRepository.saveAndFlush(courseDetail);    }    @Override    public CourseDetail findById(int id) {        return courseDetailRepository.findById(id);    }}