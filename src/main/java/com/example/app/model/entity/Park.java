package com.example.app.model.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
@Data
@AllArgsConstructor
@NoArgsConstructor
// 园区
public class Park implements Serializable {
    private String value;
    private String label;
}
