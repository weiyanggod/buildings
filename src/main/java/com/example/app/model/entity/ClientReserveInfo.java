package com.example.app.model.entity;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
@Data
@AllArgsConstructor
@NoArgsConstructor
// 客户预留信息
public class ClientReserveInfo implements Serializable {
    private String clientName; // 客户名称
    @JsonFormat(pattern = "yyyy-MM-dd")
    private String startTime; // 开始日期
    @JsonFormat(pattern = "yyyy-MM-dd")
    private String entTime; // 结束日期
    private String status; // 状态
}
