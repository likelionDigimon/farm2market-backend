package com.springboot.farm2marketbackend.data.dto;

import com.springboot.farm2marketbackend.data.entity.Image;
import com.springboot.farm2marketbackend.data.entity.SupplierBoard;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Column;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class SupplierBoardDto {
    private Long id;

    private String name;

    private String product;

    private Long price;

    private String keyword;

    private Long supplier_id;
    private LocalDateTime createdDate;

    private LocalDateTime modifiedDate;

    private String title;
    private String introduction;

    private Image image;
    private Long imageId;

private ImageDto imageDto;
    private String imageName; // 이미지 파일명
    private String imageType; // 이미지 파일 타입
    private byte[] imageData;

    public SupplierBoard toEntity() {
        return SupplierBoard.builder()
                .id(id)
                .name(name)
                .product(product)
                .price(price)
                .keyword(keyword)
                .supplier_id(supplier_id)
                .createdDate(createdDate)
                .modifiedDate(modifiedDate)
                .build();
    }
    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }

}
