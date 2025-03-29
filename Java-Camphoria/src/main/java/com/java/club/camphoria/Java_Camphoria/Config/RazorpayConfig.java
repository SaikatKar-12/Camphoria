package com.java.club.camphoria.Java_Camphoria.Config;


import com.razorpay.RazorpayClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;

@Configuration
public class RazorpayConfig {

    @Bean
    public RazorpayClient razorpayClient(@Value("${razorpay.api.key}") String keyId,
                                         @Value("${razorpay.api.secret}") String keySecret) throws Exception {
        return new RazorpayClient(keyId, keySecret);
    }
}
