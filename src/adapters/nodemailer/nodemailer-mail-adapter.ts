import nodemailer from 'nodemailer';
import { brotliCompressSync } from 'zlib';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "14284e4d7757c7",
    pass: "12d57ffc206f29"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@geedget.com>',
      to: 'Leandro <jlaleandro@gmail.com',
      subject,
      html: body,
    })
  }
}