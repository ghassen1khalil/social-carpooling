package tn.social.carpooling;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import tn.social.carpooling.config.CustomWebMvcConfigurer;
import tn.social.carpooling.config.SwaggerConfig;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
@EnableWebMvc
@Import({SwaggerConfig.class, CustomWebMvcConfigurer.class})
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
