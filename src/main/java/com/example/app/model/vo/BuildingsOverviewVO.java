package com.example.app.model.vo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BuildingsOverviewVO {
    private Integer totalArea;   // 下属所有房间 面积总和
    private Integer rooms; // 下属所有房间 总数
    private Integer rentedArea; // 已租面积
    private Integer vacantArea; // 空置面积
    private Integer customersNumber; // 有效客户数量
    private String occupancyRate; // 出租率
    private double averagePrice; // 在租房间均价
}
