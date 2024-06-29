package com.example.thuctap.controller;


import com.example.thuctap.entity.BaiViet;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import com.example.thuctap.reponse.BaiVietReponse;
import com.example.thuctap.repository.BaiVietRepository;
import com.example.thuctap.repository.DanhMucRepository;
import com.example.thuctap.request.BaiVietRequest;

import java.util.List;

@RestController
public class BaiVietController {
    @Autowired
    private BaiVietRepository baiVietRepository;
    @Autowired
    private DanhMucRepository danhMucRepository;

    @GetMapping("/get-all")
    public List<BaiVietReponse> getAll() {
        return baiVietRepository.listBaiViet();
    }

    @GetMapping("/phan-trang")
    public List<BaiVietReponse> phanTrang(@RequestParam(value = "abc", required = false, defaultValue = "0") Integer curentPage) {
        int PageSize = 5;
        Pageable pageable = PageRequest.of(curentPage, PageSize);
        return baiVietRepository.listBaiVietReponsePage(pageable).getContent();
    }

    @GetMapping("/detail")
    public BaiViet detail(@RequestParam("id") Integer id) {
        return baiVietRepository.findById(id).get();
    }

    @PostMapping("/add")
    public String add(@RequestBody @Valid BaiVietRequest baiVietRequest, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            System.out.println(bindingResult.getFieldError());
            return "Vui long k de trong";
        } else {
            BaiViet baiViet = new BaiViet();
            baiViet.setTieuDe(baiVietRequest.getTieuDe());
            baiViet.setMoTa(baiVietRequest.getMoTa());
            baiViet.setViews(Integer.valueOf(baiVietRequest.getViews()));
            baiViet.setPoster(baiVietRequest.getPoster());
            baiViet.setTrangThai(Integer.valueOf(baiVietRequest.getTrangThai()));
            baiViet.setDanhMuc(danhMucRepository.findById(baiVietRequest.getId()).get());

            BaiViet nv = baiVietRepository.save(baiViet);
            if (nv == null) {
                return "Thêm thất bại";
            } else {
                return "Thêm thành công";
            }
        }
    }
    @PutMapping("/update")
    public String update(@RequestBody  BaiViet baiViet){
        BaiViet nv = baiVietRepository.save(baiViet);
        if (nv == null) {
            return "Sửa thất bại";
        }else {
            return "Sửa thành công";
        }
    }
    @DeleteMapping("delete/{id}")
    public void delete(@PathVariable("id") Integer id){

        baiVietRepository.deleteById(id);
    }
}
