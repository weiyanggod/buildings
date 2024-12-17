package com.example.app.controller;

import cn.hutool.http.HttpRequest;
import com.alibaba.fastjson.JSONObject;
import com.example.app.config.Result;
import com.example.app.model.dto.LoginDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
@CrossOrigin(originPatterns = "*", allowCredentials = "true")
@Slf4j
@RestController
@RequestMapping("/api")
// 公共api类
public class common {

    // 使用rest账号获取token
    @PostMapping("/getToken")
    public Result<Object> getToken(@RequestBody LoginDTO loginDTO) {
        String baseUrl = "https://39.175.165.98:8826/seeyon/rest/token";
        Map map = new HashMap();
        map.put("userName", loginDTO.getUserName());
        map.put("password", loginDTO.getPassword());

        String jsonString = JSONObject.toJSONString(map);
        String body = null;
        try {
            body = HttpRequest.post(baseUrl)
                    .body(jsonString, "application/json")
                    .timeout(5000).execute().body();
            JSONObject jsonObject = JSONObject.parseObject(body);
            return Result.success(jsonObject);
        } catch (Exception e) {
            return Result.error("登录失败");
        }
    }
}
