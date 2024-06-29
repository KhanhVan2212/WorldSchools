package com.example.thuctap.repository;


import com.example.thuctap.entity.BaiViet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.thuctap.reponse.BaiVietReponse;

import java.util.List;

public interface BaiVietRepository extends JpaRepository<BaiViet, Integer> {
    @Query("Select new com.example.thuctap.reponse.BaiVietReponse(nv.tieuDe,nv.poster,nv.moTa,nv.views,nv.danhMuc.id)" +
            "from BaiViet nv join DanhMuc cv on nv.danhMuc.id = cv.id"
    )
    List<BaiVietReponse> listBaiViet();

    @Query("Select new com.example.thuctap.reponse.BaiVietReponse(nv.tieuDe,nv.poster,nv.moTa,nv.views,nv.danhMuc.id)" +
            "from BaiViet nv join DanhMuc cv on nv.danhMuc.id = cv.id"
    )
    Page<BaiVietReponse> listBaiVietReponsePage(Pageable pageable);
}
