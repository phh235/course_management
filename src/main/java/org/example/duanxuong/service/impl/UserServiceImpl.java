package org.example.duanxuong.service.impl;import org.example.duanxuong.entity.User;import org.example.duanxuong.repository.UserRepository;import org.example.duanxuong.service.UserService;import org.springframework.beans.factory.annotation.Autowired;import org.springframework.stereotype.Service;import java.util.List;import java.util.Optional;@Servicepublic class UserServiceImpl implements UserService {    @Autowired    private UserRepository userRepository;    @Override    public User doSaveUser(User user) {        return userRepository.saveAndFlush(user);    }    @Override    public void doDeleteUserById(int userId) {        userRepository.deleteById(userId);    }    @Override    public Optional<User> findByUserId(int userId) {        return userRepository.findById(userId);    }    @Override    public List<User> findAllUser() {        return userRepository.findAll();    }    @Override    public User findByUsername(String username) {        return userRepository.findByUsername(username);    }    public boolean verifyPassword(String rawPassword, String encodedPassword) {        return rawPassword.equals(encodedPassword);    }}