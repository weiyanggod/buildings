package com.example.app.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
@Data
@AllArgsConstructor
@NoArgsConstructor
// 楼宇
public class Buildings implements Serializable {
    private String name; // 楼宇名称
    private String id; // 楼宇id
    private String parkId; // 所属园区ID
}
