package com.example.app.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FloorInfo implements Serializable {
    private String id; // 楼层id
    private String floorName; // 楼层名称
    private Integer floorArea; // 楼层下房间面积
    private List<RoomInfo> roomInfos; // 楼层下所有房间信息
}
