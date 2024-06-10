package org.example.duanxuong.controller;

import org.example.duanxuong.entity.Topic;
import org.example.duanxuong.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/topic")
public class TopicController {
    @Autowired
    private TopicService topicService;
    @GetMapping("/list")
    public String listTopic (Model model){
        List<Topic> list=topicService.getAllTopic();
        model.addAttribute("topics",list);
        return "/admin/topic";
    }
}
