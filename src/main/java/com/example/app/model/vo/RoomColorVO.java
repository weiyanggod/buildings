package com.example.app.model.vo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoomColorVO {
    private LocalDate endDate; // 房间到期时间
    private String status; // 房间状态
}
