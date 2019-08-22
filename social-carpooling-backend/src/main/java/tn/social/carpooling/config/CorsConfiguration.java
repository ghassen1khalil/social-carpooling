package tn.social.carpooling.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry
                .addMapping("/tn-social-carpooling")
                .allowedMethods(HttpMethod.GET.name(), HttpMethod.POST.name(), HttpMethod.OPTIONS.name())
                .allowedOrigins("https://www.facebook.com",
                        "https:/facebook.com",
                        "http://localhost:4200")
                .allowedHeaders("x-xsrf-token")
                .allowCredentials(true)
                .maxAge(3600);
    }
}
