package org.example.duanxuong.controller;import org.example.duanxuong.entity.Course;import org.example.duanxuong.entity.Topic;import org.example.duanxuong.entity.User;import org.example.duanxuong.service.CourseService;import org.example.duanxuong.service.TopicService;import org.example.duanxuong.service.UserService;import org.springframework.beans.factory.annotation.Autowired;import org.springframework.stereotype.Controller;import org.springframework.ui.Model;import org.springframework.web.bind.annotation.*;import java.util.List;@Controller@RequestMapping("/admin")public class AdminController {    @Autowired    private UserService userService;    @Autowired    private TopicService topicService;    @Autowired    private CourseService course;    @GetMapping("/trang-chu")    public String ViewTrangChu(Model model) {        model.addAttribute("currentPage", "trang-chu");        return "admin/home";    }    @GetMapping("/khoa-hoc")    public String listAll(Model model) {        List<Course> list = course.getAllCourse();        model.addAttribute("courses", list);        model.addAttribute("currentPage", "khoa-hoc");        return "/admin/course";    }    @GetMapping("/deleteKhoaHoc")    public String deleteKhoaHoc(@RequestParam("id") Integer id, Model model){        course.doGetDeleteByIdCourse(id);        return "redirect:/admin/khoa-hoc";    }    @GetMapping("/chuyen-de")    public String listTopic(Model model) {        List<Topic> list = topicService.getAllTopic();        model.addAttribute("topics", list);        model.addAttribute("currentPage", "chuyen-de");        return "/admin/topic";    }    @PostMapping("/themCD")    public String themCD( @ModelAttribute("topics") Topic topic){        topicService.doGetSaveTopic(topic);        return"redirect:/admin/chuyen-de";//chuyển huogws    }    @GetMapping("/create")    public String create(Model model){      Topic topic = new Topic();        model.addAttribute("topics",topic);        return "/admin/topic";    }    @GetMapping("/delete")    public String delte(@RequestParam("id") Integer id, Model model){        topicService.doGetDeleteTopic(id);        return "redirect:/admin/chuyen-de";    }    @GetMapping("/nguoi-dung")    public String listUser(Model model) {        List<User> list = userService.findAllUser();        model.addAttribute("users", list);        model.addAttribute("currentPage", "nguoi-dung");        return "admin/user";    }}