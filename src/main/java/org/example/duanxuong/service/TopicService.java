package org.example.duanxuong.service;import org.example.duanxuong.entity.Topic;import java.util.List;public interface TopicService {    List<Topic> getAllTopic();    void doGetDeleteTopic(int id);    Topic doGetSaveTopic (Topic topic );}