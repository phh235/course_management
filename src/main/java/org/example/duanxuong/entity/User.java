package org.example.duanxuong.entity;import com.fasterxml.jackson.annotation.JsonIgnoreProperties;import jakarta.persistence.*;import lombok.AllArgsConstructor;import lombok.Getter;import lombok.NoArgsConstructor;import lombok.Setter;import java.sql.Date;import java.util.List;@Getter@Setter@AllArgsConstructor@NoArgsConstructor@Entity@Table(name = "users")public class User {    @Id    @GeneratedValue(strategy = GenerationType.IDENTITY)    @Column(name = "user_id")    private int userId;    @Column(name = "user_name")    private String username;    @Column(name = "password")    private String password;    @Column(name = "full_name", columnDefinition = "nvarchar(512)")    private String fullName;    @Column(name = "email")    private String email;    @Column(name = "gender")    private boolean gender;    @Column(name = "birthday")    private Date birthday;    @Column(name = "phone_number")    private int phoneNumber;    @Column(name = "avatar")    private String avatar;    @ManyToOne(fetch = FetchType.LAZY)    @JoinColumn(name = "role_id", referencedColumnName = "role_id")    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})    private Role role;    @OneToMany(mappedBy = "instructor", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})    private List<Course> courseList;}