package com.example.app.model.entity;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AgreementInfo implements Serializable {
    private String id; // 主键
    private String agreementNumber; // 合同编号
    private String clientId; // 客户id
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime startTime; // 合同开始时间
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime endTime; // 合同结束时间
    private String status; // 合同状态
    private String clientName; // 客户名称
}
