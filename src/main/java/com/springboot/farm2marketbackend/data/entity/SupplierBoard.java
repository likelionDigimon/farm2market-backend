package com.springboot.farm2marketbackend.data.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode
@Table(name = "supplierBoard")
public class SupplierBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String product;

    @Column(nullable = false)
    private Long price;

    @Column(nullable = false)
    private String keyword;
    @JsonManagedReference
    @OneToOne
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;
    @Column(name="user_id")
    private Long user_id;
    @Column(length = 1000)
    private String title;
    @Column(length = 1000)
    private String introduction;
    @Column(name = "image_id") // image_id 컬럼 추가
    private Long imageId; // 이미지와의 연결을 위한 외래키
    @Lob
    @Column
    private byte[] imageData; // 이미지 데이터
    @JsonManagedReference
    @OneToOne
    @JoinColumn(name = "image_id", insertable = false, updatable = false)
    private Image image;
    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdDate;

    @LastModifiedDate
    private LocalDateTime modifiedDate;
}
