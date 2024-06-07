package org.example.duanxuong.api;import org.example.duanxuong.entity.Topic;import org.example.duanxuong.service.TopicService;import org.springframework.beans.factory.annotation.Autowired;import org.springframework.http.ResponseEntity;import org.springframework.web.bind.annotation.*;import java.util.HashMap;import java.util.Map;@RestController@RequestMapping("/topic-api")public class TopicApi {    @Autowired    private TopicService topicService;    @GetMapping("/getAllTopic")     public ResponseEntity<?> doGetAllTopic(){        Map<String, Object> result = new HashMap<>();        try {            result.put("success", true);            result.put("message", "Call Api Success");            result.put("data", topicService.getAllTopic());        } catch(Exception e) {            result.put("Error", false);            result.put("message", "Call Api Error");            result.put("data",null);        }        return ResponseEntity.ok(result);    }    @PostMapping("/postTopic")    public ResponseEntity<?> doPostTopic(@RequestBody Topic topic) {        Map<String, Object> result = new HashMap<>();        try {            result.put("success", true);            result.put("message", "Call Api Success");            result.put("data", topicService.doGetSaveTopic(topic));                   } catch(Exception e) {            result.put("Error", false);            result.put("message", "Call Api Error");            result.put("data",null);                   }        return ResponseEntity.ok(result);    }    @DeleteMapping("/deleteByIdTopic/{id}")    public ResponseEntity<?> doDeleteByIdTopic(@PathVariable int id){        Map<String, Object> result = new HashMap<>();        try {            result.put("success", true);            result.put("message", "Call Api Success");           topicService.doGetDeleteTopic(id);        } catch(Exception e) {            result.put("Error", false);            result.put("message", "Call Api Error");            result.put("data",null);        }        return ResponseEntity.ok(result);    }}