package org.example.duanxuong.controller;


import org.example.duanxuong.entity.Course;
import org.example.duanxuong.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/course")
public class CourseController {
    @Autowired
    private CourseService course;
    @GetMapping("/list")
        public String listAll(Model model){
            List<Course> list=course.getAllCourse();
            model.addAttribute("courses",list);
            return "/admin/course";


        }
    }

