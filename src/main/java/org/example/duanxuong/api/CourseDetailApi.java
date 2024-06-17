package org.example.duanxuong.api;import org.example.duanxuong.entity.Course;import org.example.duanxuong.entity.CourseDetail;import org.example.duanxuong.service.CourseDetailService;import org.example.duanxuong.service.CourseService;import org.springframework.beans.factory.annotation.Autowired;import org.springframework.http.ResponseEntity;import org.springframework.stereotype.Repository;import org.springframework.web.bind.annotation.*;import java.util.HashMap;import java.util.Map;@RestController@RequestMapping("/coursedetail-api")public class CourseDetailApi {    @Autowired    private CourseDetailService courseDetailService;    @GetMapping("/getAllCourseDetail")    public ResponseEntity<?> doGetAllCourseDetail() {        Map<String, Object> result = new HashMap<>();        result.put("success", true);        result.put("message", "Call Api Success");        result.put("data", courseDetailService.getAllCourseDetail());        return ResponseEntity.ok(result);    }    @PostMapping("/postCourseDetail")    public ResponseEntity<?> doPostCourseDetail(@RequestBody CourseDetail course) {        Map<String, Object> result = new HashMap<>();        try {            result.put("success", true);            result.put("message", "Call Api Success");            result.put("data", courseDetailService.doSaveCourseDetail(course));        } catch (Exception e) {            result.put("Error", false);            result.put("message", "Call Api Error");            result.put("data", null);        }        return ResponseEntity.ok(result);    }    @DeleteMapping("/deleteByIdCourseDetail/{id}")    public ResponseEntity<?> doDeleteByIdCourseDetail(@PathVariable int id) {        Map<String, Object> result = new HashMap<>();        try {            result.put("success", true);            result.put("message", "Call Api Success");            courseDetailService.doGetDeleteByIdCourseDetail(id);        } catch (Exception e) {            result.put("Error", false);            result.put("message", "Call Api Error");            result.put("data", null);        }        return ResponseEntity.ok(result);    }    @GetMapping("/getCourseDetailById/{id}")    public ResponseEntity<?> doGetCourseDetailById(@PathVariable int id) {        Map<String, Object> result = new HashMap<>();        try {            CourseDetail courseDetail = courseDetailService.findById(id);            if (courseDetail != null) {                result.put("success", true);                result.put("message", "Call Api Success");                result.put("data", courseDetail);            } else {                result.put("success", false);                result.put("message", "CourseDetail not found");                result.put("data", null);            }        } catch (Exception e) {            result.put("Error", false);            result.put("message", "Call Api Error");            result.put("data", null);        }        return ResponseEntity.ok(result);    }}