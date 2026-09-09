import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const SYSTEM_PROMPT = `You are Hedge AI, the official AI Advisory Assistant for Hedge Chartered Accountants Group (and its registered FTA Tax Agency practice, Pioneer Hedge Auditing & Tax Consulting).
Your role is to assist clients, business owners, and finance professionals with inquiries regarding Accounting, Statutory Audit, UAE Corporate Tax, VAT, ICV Certification, E-Invoicing, and Business Advisory.

Firm Details:
- Firm Name: Hedge Chartered Accountants Group
- Licensed FTA Tax Agency Practice: Pioneer Hedge Auditing & Tax Consulting
- Head Office: Al Ghaith Tower, Hamdan Bin Mohammed St, Abu Dhabi, UAE
- Regional Presence: Abu Dhabi, Dubai, Al Ain, Manama (Bahrain), and India
- Direct Phone & WhatsApp: +971 50 225 3373
- Email: info@hedgeasglobal.com
- Operating Hours: Monday to Saturday | 09:00 AM – 06:00 PM

Key Services Offered:
1. Accounting & Bookkeeping: IFRS-compliant bookkeeping, financial statements, payroll, cloud accounting setup.
2. Statutory Audit & Assurance: External audit, internal audit, financial reviews by licensed chartered auditors.
3. UAE Corporate Tax: Corporate Tax registration, Tax Registration Number (TRN) obtainment, Small Business Relief, Tax Impact Assessments, Annual CT Return filing.
4. UAE VAT Services: VAT registration, VAT returns, FTA audit representation, voluntary disclosures.
5. In-Country Value (ICV) Certification: ICV score optimization, audit & certification for ADNOC and UAE government tenders.
6. UAE E-Invoicing Integration: Phase 1 & 2 electronic invoicing compliance with FTA mandate.

Behavior Rules:
- Be polite, professional, concise, and helpful.
- For complex legal tax disputes or custom audits, recommend speaking directly with Hedge senior advisors at +971 50 225 3373 or info@hedgeasglobal.com.
- Use clear formatting with bullet points when appropriate.`;

const GROQ_CANDIDATE_MODELS = [
  'groq/compound',
  'openai/gpt-oss-120b',
  'qwen/qwen3.8-27b',
  'openai/gpt-oss-20b',
  'llama-3.3-70b-versatile',
  'llama-3.1-8b-instant'
];

function getGroqApiKey() {
  if (process.env.GROQ_API_KEY) return process.env.GROQ_API_KEY.trim();
  try {
    const envPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      const match = content.match(/GROQ_API_KEY=\s*([^\r\n]+)/);
      if (match && match[1]) return match[1].trim();
    }
  } catch (e) {}
  return null;
}

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
    }

    const groqApiKey = getGroqApiKey();
    const grokApiKey = process.env.GROK_API_KEY || process.env.XAI_API_KEY;

    // 1. Try Groq Cloud API (console.groq.com)
    if (groqApiKey) {
      for (const model of GROQ_CANDIDATE_MODELS) {
        try {
          const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${groqApiKey}`,
            },
            body: JSON.stringify({
              model: model,
              messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                ...messages
              ],
              temperature: 0.7,
              max_tokens: 800,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            const reply = data.choices[0]?.message?.content || 'Thank you for contacting Hedge Group. How can I assist you further?';
            return NextResponse.json({ reply, provider: `groq-cloud (${model})` });
          }
        } catch (err) {
          console.error(`Groq API error for model ${model}:`, err);
        }
      }
    }

    // 2. Try xAI Grok API (console.x.ai)
    if (grokApiKey) {
      try {
        const response = await fetch('https://api.x.ai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${grokApiKey}`,
          },
          body: JSON.stringify({
            model: 'grok-2-latest',
            messages: [
              { role: 'system', content: SYSTEM_PROMPT },
              ...messages
            ],
            temperature: 0.7,
            max_tokens: 800,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const reply = data.choices[0]?.message?.content || 'Thank you for contacting Hedge Group. How can I assist you further?';
          return NextResponse.json({ reply, provider: 'xai-grok' });
        }
      } catch (err) {
        console.error('xAI Grok Call Failed:', err);
      }
    }

    // 3. Smart Fallback Assistant (when API Key is not added yet)
    const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || '';
    let reply = "";

    if (lastUserMsg.includes('tax') || lastUserMsg.includes('corporate tax') || lastUserMsg.includes('trn')) {
      reply = `**UAE Corporate Tax & VAT Services:**\n\nHedge Chartered Accountants Group (Pioneer Hedge) is a licensed **FTA Tax Agency**. We provide:\n- Corporate Tax Registration & TRN Obtainment\n- Tax Impact Assessment & Small Business Relief\n- VAT Return Filing & FTA Dispute Resolution\n\nWould you like to schedule a consultation with an FTA Tax Agent? Call us at **+971 50 225 3373** or email **info@hedgeasglobal.com**.`;
    } else if (lastUserMsg.includes('audit') || lastUserMsg.includes('assurance')) {
      reply = `**Statutory Audit & Financial Assurance:**\n\nOur team of senior Chartered Accountants conducts independent statutory audits compliant with International Financial Reporting Standards (IFRS).\n\nWe serve entities across Abu Dhabi, Dubai, Bahrain, and India. Contact our audit team directly at **+971 50 225 3373**.`;
    } else if (lastUserMsg.includes('service') || lastUserMsg.includes('offer')) {
      reply = `**Hedge Group Core Services:**\n\n1. **Accounting & Bookkeeping** (IFRS Compliant)\n2. **Statutory Audit & Assurance**\n3. **UAE Corporate Tax Consulting & Filing**\n4. **UAE VAT Advisory & Registration**\n5. **ICV Certification** (ADNOC & UAE Tenders)\n6. **UAE E-Invoicing Integration**\n\nHow can we help your business today?`;
    } else if (lastUserMsg.includes('location') || lastUserMsg.includes('address') || lastUserMsg.includes('office')) {
      reply = `**Our Head Office & Locations:**\n\n📍 **Headquarters:** Al Ghaith Tower, Hamdan St, Abu Dhabi, UAE\n🏢 **Regional Offices:** Abu Dhabi | Dubai | Al Ain | Manama (Bahrain) | India\n\n⏰ **Office Hours:** Mon – Sat | 09:00 AM – 06:00 PM\n📞 **Phone:** +971 50 225 3373`;
    } else if (lastUserMsg.includes('contact') || lastUserMsg.includes('phone') || lastUserMsg.includes('call') || lastUserMsg.includes('email')) {
      reply = `**Contact Hedge Chartered Accountants:**\n\n📞 **Direct Call / WhatsApp:** +971 50 225 3373\n✉️ **Official Email:** info@hedgeasglobal.com\n🏢 **Head Office:** Al Ghaith Tower, Hamdan St, Abu Dhabi, UAE\n\nOur senior advisors respond within 1 business hour!`;
    } else {
      reply = `Hello! Welcome to **Hedge Chartered Accountants Group**.\n\nWe provide professional **Accounting, Statutory Audit, UAE Corporate Tax, VAT, ICV Certification**, and **E-Invoicing** solutions.\n\nHow can I assist your business today? You can also reach our team directly at **+971 50 225 3373** or **info@hedgeasglobal.com**.`;
    }

    return NextResponse.json({ reply, provider: 'hedge-smart-assistant' });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
