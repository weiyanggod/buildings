package com.example.app.model.vo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
// 楼宇
public class BuildingsVO {
    private String id; // 楼宇id
    private String name;  // 楼宇名称
}

