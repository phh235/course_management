package org.example.duanxuong.service.impl;import org.example.duanxuong.entity.Topic;import org.example.duanxuong.repository.TopicRepository;import org.example.duanxuong.service.TopicService;import org.springframework.beans.factory.annotation.Autowired;import org.springframework.stereotype.Service;import java.util.List;@Servicepublic class TopicServiceImpl implements TopicService {    @Autowired    private TopicRepository tp;    @Override    public List<Topic> getAllTopic() {        return tp.findAll();    }    @Override    public void doGetDeleteTopic(int id) {        tp.deleteById(id);    }    @Override    public Topic doGetSaveTopic(Topic topic) {        return tp.saveAndFlush(topic);    }}