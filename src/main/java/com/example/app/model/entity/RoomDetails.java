package com.example.app.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoomDetails {
    private String id;
    private String roomNumber; // 房间号
    private String floorId; // 楼层id
    private String buildingsName; // 所属楼宇名称
    private String status; // 使用状态
    private String area;  // 建筑面积
    private String renovation; // 装修情况
    private String storeyHeight; // 层高
    private String rentPrice; // 房租标准价
    private String propertyFees; // 物业费标准价
    private String remark; // 备注
    private String airConditioning; // 有无空调
    private String parkId; // 所属园区ID
    private String roomPurpose; // 房间用途
}
