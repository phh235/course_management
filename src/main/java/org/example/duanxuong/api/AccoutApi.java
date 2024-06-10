package org.example.duanxuong.api;import org.example.duanxuong.entity.LoginRequest;import org.example.duanxuong.entity.ResponseObject;import org.example.duanxuong.entity.User;import org.example.duanxuong.service.UserService;import org.springframework.beans.factory.annotation.Autowired;import org.springframework.http.HttpStatus;import org.springframework.http.ResponseEntity;import org.springframework.web.bind.annotation.PostMapping;import org.springframework.web.bind.annotation.RequestBody;import org.springframework.web.bind.annotation.RequestMapping;import org.springframework.web.bind.annotation.RestController;import java.util.Optional;@RestController@RequestMapping("/account-api")public class AccoutApi {    @Autowired    private UserService userService;    @PostMapping("/login")    public ResponseEntity<?> accountLogin(@RequestBody LoginRequest loginRequest) {        try {            User user = userService.findByUsername(loginRequest.getUsername());            if (user != null) {                if (user.getPassword().equals(loginRequest.getPassword())) {                    return ResponseEntity.status(HttpStatus.OK).body(                            new ResponseObject("Ok", "Đăng nhập thành công", user)                    );                } else {                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(                            new ResponseObject("Unauthorized", "Mật khẩu không đúng", "")                    );                }            } else {                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(                        new ResponseObject("Unauthorized", "Tên người dùng không đúng", "")                );            }        } catch (Exception exception) {            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(                    new ResponseObject("Bad request", "Đăng nhập thất bại", "")            );        }    }    @PostMapping("/register")    public ResponseEntity<?> register(@RequestBody User user) {        try {            userService.doSaveUser(user);            return ResponseEntity.status(HttpStatus.OK).body(                    new ResponseObject("Ok", "Đăng ký thành công", user)            );        } catch (Exception exception) {            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(                    new ResponseObject("Bad request", "Đăng ký thất bại", "")            );        }    }}