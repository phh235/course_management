package org.example.duanxuong.service.impl;import jakarta.mail.internet.MimeMessage;import lombok.RequiredArgsConstructor;import org.example.duanxuong.entity.Mail;import org.example.duanxuong.service.MailService;import org.springframework.mail.javamail.JavaMailSender;import org.springframework.mail.javamail.MimeMessageHelper;import org.springframework.stereotype.Service;@Service@RequiredArgsConstructorpublic class MailServiceImpl implements MailService {    private final JavaMailSender mailSender;    @Override    public void sendMail(Mail mailModel) throws Exception {        MimeMessage message = mailSender.createMimeMessage();        MimeMessageHelper helper = new MimeMessageHelper(message, true, "utf-8");        helper.setTo(mailModel.getTo());        helper.setFrom(mailModel.getFrom());        helper.setSubject(mailModel.getSubject());        helper.setText(mailModel.getBody());        helper.setReplyTo(mailModel.getFrom());        mailSender.send(message);    }}