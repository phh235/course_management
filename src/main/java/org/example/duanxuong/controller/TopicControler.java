package org.example.duanxuong.controller;


import org.example.duanxuong.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/topic")

public class TopicControler {
   @Autowired
   private TopicService service;
    @GetMapping("/delete")
    public String delte(@RequestParam("id") Integer id, Model model){
        service.doGetDeleteTopic(id);


        return "admin/topic";

    }
}
