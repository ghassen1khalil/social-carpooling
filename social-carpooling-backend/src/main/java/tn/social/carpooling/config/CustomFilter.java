package tn.social.carpooling.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Configuration
public class CustomFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "https://www.facebook.com");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Allow-Headers",
                "authorization, content-type, xsrf-token, Cache-Control, remember-me, WWW-Authenticate");
        response.addHeader("Access-Control-Expose-Headers", "xsrf-token");
        chain.doFilter(request, response);

    }

}
