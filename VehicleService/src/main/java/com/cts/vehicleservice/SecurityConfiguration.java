/*
 * package com.cts.vehicleservice
 * 
 * import org.springframework.context.annotation.Configuration; import
 * org.springframework.security.config.annotation.web.builders.HttpSecurity;
 * import
 * org.springframework.security.config.annotation.web.builders.WebSecurity;
 * import org.springframework.security.config.annotation.web.configuration.
 * EnableWebSecurity; import
 * org.springframework.security.config.annotation.web.configuration.
 * WebSecurityConfigurerAdapter; import
 * org.springframework.security.web.util.matcher.AntPathRequestMatcher;
 * 
 * @Configuration
 * 
 * @EnableWebSecurity public class SecurityConfiguration extends
 * WebSecurityConfigurerAdapter {
 * 
 * @Override protected void configure(HttpSecurity http) throws Exception {
 * 
 * http.authorizeRequests().antMatchers("/admin/**").authenticated();
 * http.formLogin(); http.logout().logoutRequestMatcher(new
 * AntPathRequestMatcher("/logout")) .logoutSuccessUrl("/");
 * 
 * }
 * 
 * @Override public void configure(WebSecurity web) throws Exception {
 * web.ignoring()
 * .antMatchers("/resources/**","/static/**","/css/**","/js/**","/images/**"); }
 * }
 */