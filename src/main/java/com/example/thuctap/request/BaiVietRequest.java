package com.example.thuctap.request;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BaiVietRequest {

    @NotBlank(message = "Không được để trống")
    private String tieuDe;
    @NotBlank(message = "Không được để trống")
    private String poster;
    @NotBlank(message = "Không được để trống")
    private String moTa;
    @NotBlank(message = "Không được để trống")
    private String views;
    @NotBlank(message = "Không được để trống")
    private String trangThai;
    @NotNull(message = "Không được để trống")
    private Integer id;

}
