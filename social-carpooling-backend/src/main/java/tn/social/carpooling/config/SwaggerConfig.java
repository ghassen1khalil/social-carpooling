package tn.social.carpooling.config;

import com.google.common.base.Predicates;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfig {

    ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("Facebook Social Carpooling - REST API")
                .description("")
                .license("")
                .licenseUrl("http://www.hezzni-m3k.tn")
                .termsOfServiceUrl("")
                .version("1.0")
                .contact(new Contact("Ghassen Khalil ATI", "", "ghassen1khalil@gmail.com"))
                .build();
    }

    @Bean
    public Docket customImplementation() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(Predicates.or(
                        RequestHandlerSelectors.basePackage("tn.social.carpooling")))
                .build()
                //.directModelSubstitute(org.joda.time.LocalDate.class, java.sql.Date.class)
                //.directModelSubstitute(org.joda.time.DateTime.class, java.util.Date.class)
                .apiInfo(apiInfo());
    }
}
