package com.example.thuctap.controller;


import com.example.thuctap.entity.Users;
import com.example.thuctap.repository.UserRepository;
import com.example.thuctap.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/tai-khoan")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    @GetMapping("/dang-ki")
    public String dangKi(Model model
    ) {
        return "/dang-ki";
    }

    @PostMapping("/dang-ki/add")
    public String addTaiKhoan(Model model,
                              @RequestParam("email") String email,
                              @RequestParam("fullname") String fullname,
                              @RequestParam("photo") String photo,
                              @RequestParam("passWord") String passWord
    ) {
        //1:kh,0:nv
        int trangThai = 1;
        Users users = Users.builder()
                .email(email)
                .passWord(passWord)
                .fullname(fullname)
                .photo(photo)
                .trangThai(trangThai)
                .build();

        this.userService.addAccount(users);
        // quay vè trang dang nhap
        return "redirect:/login";
    }
}
