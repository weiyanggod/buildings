package com.example.app.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
@Data
@AllArgsConstructor
@NoArgsConstructor
// 房间
public class RoomInfo implements Serializable {
    private String id;
    private String roomNumber; // 房间号
    private String status; // 房间状态
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private String endTime; // 房间到期时间
    private String area;  // 建筑面积
    private String clientName; // 客户姓名
}
