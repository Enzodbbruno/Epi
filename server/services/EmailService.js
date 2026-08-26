'use strict';
const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = null;
    this.initTransporter();
  }

  initTransporter() {
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = parseInt(process.env.SMTP_PORT || '587', 10);
    const user = process.env.SMTP_USER || '';
    const pass = process.env.SMTP_PASS || '';

    if (user && pass) {
      this.transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass }
      });
    } else {
      this.transporter = nodemailer.createTransport({
        streamTransport: true,
        newline: 'unix',
        buffer: true
      });
    }
  }

  /**
   * Envia e-mail de confirmação de notificação finalizada.
   */
  async sendNotificationCompletionEmail({ recipientEmail = 'dreaeverning@gmail.com', notificationData = {}, patientName, disease, healthUnit, notificatorName }) {
    const targetEmail = recipientEmail || 'dreaeverning@gmail.com';
    const dateFormatted = new Date().toLocaleDateString('pt-BR', {
      day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #cbd5e1; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        <!-- Header -->
        <div style="background: #0f2942; color: #ffffff; padding: 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 1.4rem; font-weight: 700; letter-spacing: 0.5px;">🏥 EpiConecta - Vigilância Epidemiológica</h1>
          <p style="margin: 6px 0 0 0; font-size: 0.85rem; color: #cbd5e1;">Secretaria Municipal de Saúde • Marabá - PA</p>
        </div>

        <!-- Content -->
        <div style="padding: 26px;">
          <div style="background: #e0f2fe; border-left: 4px solid #0284c7; padding: 12px 16px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="margin: 0; font-size: 1.05rem; color: #0369a1;">✓ Notificação Compulsória Finalizada com Sucesso!</h3>
            <p style="margin: 4px 0 0 0; font-size: 0.83rem; color: #334155;">Esta é uma confirmação automática de registro no SINAN / EpiConecta.</p>
          </div>

          <h4 style="margin: 0 0 12px 0; font-size: 0.95rem; color: #1e293b; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">📋 Detalhes da Ficha de Notificação</h4>

          <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #334155; margin-bottom: 20px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b; width: 140px;">Paciente:</td>
              <td style="padding: 8px 0; font-weight: 700; color: #0f172a;">${patientName || 'Paciente Notificado'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Agravo / Doença:</td>
              <td style="padding: 8px 0; font-weight: 700; color: #ef4444;">${disease || 'Agravo Epidemiológico'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Unidade de Saúde:</td>
              <td style="padding: 8px 0;">${healthUnit || 'UBS / Hospital de Marabá'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Profissional:</td>
              <td style="padding: 8px 0;">${notificatorName || 'Profissional de Saúde'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Data & Hora:</td>
              <td style="padding: 8px 0;">${dateFormatted}</td>
            </tr>
          </table>

          <div style="background: #f8fafc; padding: 14px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 0.82rem; color: #475569;">
            <p style="margin: 0;"><strong>Status da Notificação:</strong> Transmitida com sucesso para a base da Vigilância Epidemiológica SVS de Marabá - PA. O caso já foi georreferenciado e está visível no Mapa de Calor e nos Indicadores do Sistema.</p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f1f5f9; padding: 14px 24px; text-align: center; font-size: 0.75rem; color: #64748b; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0;">EpiConecta • Sistema Governamental Integrado de Vigilância Epidemiológica</p>
          <p style="margin: 2px 0 0 0;">Confirmação de teste enviada para <strong>${targetEmail}</strong></p>
        </div>
      </div>
    `;

    try {
      const mailOptions = {
        from: '"EpiConecta Vigilância" <notificacoes@epiconecta.gov.br>',
        to: targetEmail,
        subject: `[EpiConecta] Confirmação de Notificação Finalizada: ${disease} - ${patientName}`,
        html: htmlContent
      };

      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        const info = await this.transporter.sendMail(mailOptions);
        console.log(`[EmailService] E-mail de notificação enviado para ${targetEmail}. MessageID: ${info.messageId}`);
        return { success: true, messageId: info.messageId, email: targetEmail };
      } else {
        console.log(`====================================================`);
        console.log(`[EMAIL DISPATCH] NOTIFICAÇÃO COMPLETA ENVIADA PARA: ${targetEmail}`);
        console.log(`ASSUNTO: ${mailOptions.subject}`);
        console.log(`PACIENTE: ${patientName} | AGRAVO: ${disease}`);
        console.log(`====================================================`);
        return { success: true, simulated: true, email: targetEmail };
      }
    } catch (err) {
      console.error(`[EmailService] Erro ao enviar e-mail para ${targetEmail}:`, err);
      return { success: false, error: err.message };
    }
  }
}

module.exports = new EmailService();
