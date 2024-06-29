package com.example.thuctap.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "BaiViet")
public class BaiViet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "TieuDe")
    private String tieuDe;
    @Column(name = "Poster")
    private String poster;
    @Column(name = "MoTa")
    private String moTa;
    @Column(name = "views")
    private Integer views;
    @ManyToOne
    @JoinColumn(name = "id_DanhMuc",referencedColumnName = "id")
    private DanhMuc danhMuc;
    @Column(name = "TrangThai")
    private Integer trangThai;


}
