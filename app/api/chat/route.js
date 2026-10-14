import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const SYSTEM_PROMPT = `You are Hedge AI, the official AI Advisory Consultant for Hedge Chartered Accountants Group (and its registered FTA Tax Agency practice, Pioneer Hedge Auditing & Tax Consulting).
You represent Hedge Group directly. NEVER break character, and NEVER claim to be OpenAI, ChatGPT, or any external AI model. Always speak as "we", "our chartered accountants", or "Hedge Group".

Firm Details & Credentials:
- Firm Name: Hedge Chartered Accountants Group
- Licensed FTA Tax Agency Practice: Pioneer Hedge Auditing & Tax Consulting
- Headquarters: Al Ghaith Tower, Hamdan Bin Mohammed St, Abu Dhabi, UAE
- Branch Offices: Abu Dhabi, Dubai, Al Ain, Manama (Bahrain), and India
- Direct Phone & WhatsApp: +971 50 225 3373
- Official Email: info@hedgeasglobal.com
- Working Hours: Monday to Saturday | 09:00 AM – 06:00 PM

Key Advisory Practice Areas:
1. Statutory Audit & Assurance: External audit, IFRS compliance, bank-approved audit reports, Free Zone authority audits (ADGM, DMCC, DAFZA, JAFZA, etc.).
2. UAE Corporate Tax: Federal Tax Authority (FTA) registered tax agency. Corporate Tax registration & TRN, 9% statutory tax rate on taxable profit above AED 375,000, 0% up to AED 375,000, Small Business Relief (revenue under AED 3M), Tax Impact Assessment, annual CT return filing.
3. UAE VAT Advisory: 5% VAT compliance, mandatory threshold (AED 375,000), voluntary threshold (AED 187,500), quarterly VAT returns, input tax recovery, FTA tax audits & reconsiderations.
4. ICV Certification: ADNOC and Ministry of Industry & Advanced Technology (MoIAT) In-Country Value score calculation, pre-audit gap analysis, optimization strategy, formal audit certification.
5. Accounting & Bookkeeping: Daily/monthly bookkeeping, management accounts (MIS), WPS payroll compliance, cloud migration (Zoho Books, QuickBooks, Xero).
6. UAE E-Invoicing: Phase 1 & Phase 2 PEPPOL/XML integration and FTA compliance roadmap.
7. Business Setup & Advisory: UAE mainland & free zone license structuring, trade licenses, banking assistance.

CRITICAL BEHAVIOR RULES (TO PREVENT REPETITIVE RESPONSES):
- CAREFULLY review the conversation history before responding.
- NEVER repeat the initial greeting, company introduction, or list of services if the user has already greeted or is continuing an ongoing conversation.
- If the user sends a simple greeting ("hi", "hello", "hey"), respond with a brief, friendly 1-2 sentence greeting and ask what specific service (Tax, Audit, VAT, ICV, Accounting) they need assistance with today. DO NOT output a massive generic paragraph.
- Directly and accurately address the user's specific query.
- For fees/pricing questions: Explain that audit, tax, and accounting fees depend on company size, transaction volume, and jurisdiction, and offer a swift tailored quote.
- Maintain a professional, concise, authoritative, and helpful tone.
- Format with clean markdown bold text and short bullet points where appropriate.`;

const GROQ_CANDIDATE_MODELS = [
  'openai/gpt-oss-120b',
  'openai/gpt-oss-20b',
  'qwen/qwen3.8-27b',
  'allam-2-7b'
];

function getGroqApiKey() {
  if (process.env.GROQ_API_KEY && process.env.GROQ_API_KEY.trim()) {
    return process.env.GROQ_API_KEY.trim();
  }
  if (process.env.NEXT_PUBLIC_GROQ_API_KEY && process.env.NEXT_PUBLIC_GROQ_API_KEY.trim()) {
    return process.env.NEXT_PUBLIC_GROQ_API_KEY.trim();
  }

  try {
    const envPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      const match = content.match(/GROQ_API_KEY=\s*([^\r\n]+)/);
      if (match && match[1]) return match[1].trim();
    }
  } catch (e) {}

  try {
    const envPath = path.join(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      const match = content.match(/GROQ_API_KEY=\s*([^\r\n]+)/);
      if (match && match[1]) return match[1].trim();
    }
  } catch (e) {}

  return null;
}

function generateSmartFallback(messages) {
  const userMessages = messages.filter((m) => m.role === 'user');
  const lastUserMsg = (userMessages[userMessages.length - 1]?.content || '').trim();
  const cleanMsg = lastUserMsg.toLowerCase();
  const isFirstUserMsg = userMessages.length <= 1;

  // 1. Simple Greetings & Casual
  if (/^(hi|hello|hey|good\s*(morning|afternoon|evening)|salam|greetings|hola)\b/i.test(cleanMsg) || cleanMsg === 'hi' || cleanMsg === 'hello') {
    if (isFirstUserMsg) {
      return `Hello! Welcome to **Hedge Chartered Accountants Group**.\n\nHow can our advisors assist your business today? We specialize in **UAE Corporate Tax, Statutory Audit, VAT, ICV Certification**, and **Accounting & Bookkeeping**.\n\nPlease feel free to ask your question or select one of the topics above!`;
    }
    return `Hello! How can I assist you further? Let me know if you have any questions about UAE Tax, Audit, ICV Certification, or Accounting.`;
  }

  // 2. Appreciation & Acknowledgement
  if (/^(thank(s|\s*you)|ok|okay|got\s*it|perfect|great|understood|clear|done|sure)\b/i.test(cleanMsg)) {
    return `You're very welcome! If you would like to discuss your specific requirements directly with our senior chartered accountants, feel free to call or WhatsApp us at **+971 50 225 3373** or email **info@hedgeasglobal.com**. We are always here to help!`;
  }

  // 3. Pricing, Cost, Fees & Quotations
  if (cleanMsg.includes('cost') || cleanMsg.includes('price') || cleanMsg.includes('fee') || cleanMsg.includes('how much') || cleanMsg.includes('quote') || cleanMsg.includes('rate') || cleanMsg.includes('charge')) {
    return `**Pricing & Quotations at Hedge Group:**\n\nOur professional fees are tailored based on your company's specific scope:\n- **Entity Type & Jurisdiction:** (Mainland LLC vs Free Zone entity)\n- **Transaction Volume:** (Number of invoices and monthly bank reconciliations)\n- **Service Scope:** (Statutory Audit under IFRS, Corporate Tax return filing, or Bookkeeping)\n\n### How to Get an Instant Tailored Quote:\nShare your entity type and approximate annual turnover with us, or contact our team directly:\n📞 **Phone / WhatsApp:** +971 50 225 3373\n✉️ **Email:** info@hedgeasglobal.com\n\nWe provide detailed, transparent fee proposals within 24 hours!`;
  }

  // 4. UAE Corporate Tax
  if (cleanMsg.includes('corporate tax') || cleanMsg.includes('ct') || cleanMsg.includes('trn') || cleanMsg.includes('375') || cleanMsg.includes('small business relief') || cleanMsg.includes('tax return')) {
    return `**UAE Corporate Tax Advisory:**\n\nUnder UAE Federal Decree-Law No. 47 of 2022, corporate tax applies as follows:\n- **0% Tax Rate:** On taxable net profits up to **AED 375,000**\n- **9% Tax Rate:** On taxable net profits exceeding **AED 375,000**\n- **Mandatory Registration:** All UAE businesses (Mainland and Free Zone) must register for Corporate Tax and obtain a TRN to avoid FTA penalties.\n- **Small Business Relief:** Available for eligible entities with revenue below AED 3,000,000.\n\nAs a licensed **FTA Tax Agency (Pioneer Hedge)**, we handle registration, impact assessments, and annual return filings. Would you like assistance registering your company or calculating your tax position?`;
  }

  // 5. UAE VAT (Value Added Tax)
  if (cleanMsg.includes('vat') || cleanMsg.includes('value added') || cleanMsg.includes('input tax')) {
    return `**UAE VAT Services (5% Standard Rate):**\n\nKey compliance thresholds under the UAE VAT Law:\n- **Mandatory Registration:** Annual taxable turnover exceeds **AED 375,000**.\n- **Voluntary Registration:** Turnover or taxable expenses exceed **AED 187,500**.\n- **Filing Deadlines:** Quarterly or monthly returns via the FTA EmaraTax portal.\n\n**How We Support Your Business:**\n- VAT Registration & TRN Obtainment\n- Quarterly VAT Return Filing & Reconciliation\n- Input VAT Recovery & Refund Claims\n- FTA Tax Audit Representation & Dispute Resolution\n\nNeed assistance with your VAT return or registration? Contact us at **+971 50 225 3373**.`;
  }

  // 6. Statutory Audit & Assurance
  if (cleanMsg.includes('audit') || cleanMsg.includes('assurance') || cleanMsg.includes('auditor') || cleanMsg.includes('ifrs') || cleanMsg.includes('balance sheet') || cleanMsg.includes('financial statement')) {
    return `**Statutory Audit & Financial Assurance:**\n\nOur team of licensed Chartered Accountants delivers independent, **IFRS-compliant audits** accepted across the UAE:\n\n- **Free Zone & Mainland Compliance:** Approved for DMCC, ADGM, DAFZA, JAFZA, and mainland licensing renewals.\n- **Bank-Approved Audits:** Certified financial statements for credit facilities and loan renewals with major UAE banks.\n- **Internal Audit & Risk Reviews:** Evaluation of internal controls, governance, and operational efficiency.\n\nAre you preparing your annual audit for bank submission, license renewal, or shareholder reporting? Let us know your deadline!`;
  }

  // 7. ICV (In-Country Value) Certification
  if (cleanMsg.includes('icv') || cleanMsg.includes('in-country value') || cleanMsg.includes('in country value') || cleanMsg.includes('adnoc') || cleanMsg.includes('tender') || cleanMsg.includes('moiat')) {
    return `**In-Country Value (ICV) Certification:**\n\nThe ICV program by the Ministry of Industry and Advanced Technology (MoIAT) and ADNOC is crucial for winning government and energy sector tenders.\n\n**How Hedge Optimizes Your ICV Score:**\n- **Data Review & Benchmarking:** Analysis of local procurement, manufacturing, investments, and Emirati workforce.\n- **Score Maximization Strategy:** Guidance on structuring vendor contracts and internal costs to boost your score.\n- **Audit & Certification:** Independent verification against the standardized MoIAT formula.\n\nWould you like a preliminary assessment to calculate your potential ICV score?`;
  }

  // 8. Accounting & Bookkeeping
  if (cleanMsg.includes('accounting') || cleanMsg.includes('bookkeeping') || cleanMsg.includes('books') || cleanMsg.includes('payroll') || cleanMsg.includes('wps') || cleanMsg.includes('mis') || cleanMsg.includes('zoho') || cleanMsg.includes('quickbooks') || cleanMsg.includes('xero')) {
    return `**Professional Accounting & Bookkeeping:**\n\nEnsure complete IFRS and FTA compliance without maintaining an expensive in-house finance team:\n\n- **Cloud Bookkeeping:** Setup & management on Zoho Books, QuickBooks, or Xero.\n- **Monthly Management Reports (MIS):** Profit & Loss, Balance Sheet, and cash flow analysis.\n- **Payroll & WPS Processing:** Compliant with UAE Wage Protection System guidelines.\n- **Year-End Financials:** Ready for external audit and corporate tax filings.\n\nWould you like a customized monthly bookkeeping package for your business?`;
  }

  // 9. E-Invoicing
  if (cleanMsg.includes('e-invoicing') || cleanMsg.includes('einvoicing') || cleanMsg.includes('electronic invoice') || cleanMsg.includes('peppol')) {
    return `**UAE E-Invoicing Compliance:**\n\nThe UAE Ministry of Finance and FTA are introducing mandatory **Phase 1 & Phase 2 Electronic Invoicing** for all B2B and B2G transactions.\n\n**Our Integration Roadmap:**\n- Technical gap analysis of your billing & ERP systems.\n- Alignment with the UAE PEPPOL/XML data interchange standards.\n- Full compliance with FTA reporting timelines.\n\nWould you like us to evaluate your ERP/accounting system's readiness for E-Invoicing?`;
  }

  // 10. Company Formation & Business Setup
  if (cleanMsg.includes('setup') || cleanMsg.includes('formation') || cleanMsg.includes('license') || cleanMsg.includes('mainland') || cleanMsg.includes('freezone') || cleanMsg.includes('free zone') || cleanMsg.includes('trade license') || cleanMsg.includes('visa')) {
    return `**UAE Business Setup & Company Formation:**\n\nWe provide end-to-end company formation support in Abu Dhabi, Dubai, and across the UAE:\n\n- **Mainland Licenses (DED):** 100% foreign ownership with zero personal income tax.\n- **Free Zone Companies:** Fast-track incorporation with 100% profit repatriation.\n- **Corporate Bank Account Opening:** Assisted documentation with top-tier UAE banks.\n- **PRO & Investor Visa Services:** Hassle-free visa stamping and Emirates ID support.\n\nWhich jurisdiction or business activity are you planning to establish?`;
  }

  // 11. Locations, Office & Contact Information
  if (cleanMsg.includes('location') || cleanMsg.includes('address') || cleanMsg.includes('office') || cleanMsg.includes('contact') || cleanMsg.includes('phone') || cleanMsg.includes('call') || cleanMsg.includes('whatsapp') || cleanMsg.includes('email') || cleanMsg.includes('hours') || cleanMsg.includes('timings') || cleanMsg.includes('where')) {
    return `**Contact & Office Information:**\n\n📍 **Head Office:** Al Ghaith Tower, Hamdan Bin Mohammed St, Abu Dhabi, UAE\n🏢 **Regional Presence:** Abu Dhabi | Dubai | Al Ain | Bahrain (Manama) | India\n📞 **Phone / WhatsApp:** **+971 50 225 3373**\n✉️ **Email:** **info@hedgeasglobal.com**\n⏰ **Working Hours:** Monday – Saturday | 09:00 AM – 06:00 PM\n\nWould you like to schedule an in-person meeting at our office or a consultation call?`;
  }

  // 12. Dynamic Context-Aware Default Response
  const preview = lastUserMsg.length > 60 ? lastUserMsg.slice(0, 57) + '...' : lastUserMsg;
  return `Thank you for your message regarding **"${preview}"**.\n\nOur team of Chartered Accountants and FTA Tax Advisors at Hedge Group can provide exact, personalized solutions for your business.\n\nTo assist you immediately:\n- Call or WhatsApp our senior advisors at **+971 50 225 3373**.\n- Email your requirements to **info@hedgeasglobal.com**.\n- Or reply here with a few more details about your company activity, and I will be glad to assist!`;
}

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
    }

    const groqApiKey = getGroqApiKey();
    const grokApiKey = process.env.GROK_API_KEY || process.env.XAI_API_KEY;

    // Filter and sanitize recent conversation history (keep last 12 messages for efficiency)
    const recentMessages = messages.slice(-12).map((m) => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: String(m.content || ''),
    }));

    // 1. Try Groq Cloud API with verified working models
    if (groqApiKey) {
      for (const model of GROQ_CANDIDATE_MODELS) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 8000);

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
                ...recentMessages
              ],
              temperature: 0.6,
              max_tokens: 750,
            }),
            signal: controller.signal,
          });

          clearTimeout(timeoutId);

          if (response.ok) {
            const data = await response.json();
            const reply = data.choices?.[0]?.message?.content?.trim();
            if (reply) {
              return NextResponse.json({ reply, provider: `groq (${model})` });
            }
          } else {
            console.warn(`Groq API returned status ${response.status} for model ${model}`);
          }
        } catch (err) {
          console.warn(`Groq API attempt failed for model ${model}:`, err.message);
        }
      }
    }

    // 2. Try xAI Grok API as secondary provider if configured
    if (grokApiKey) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

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
              ...recentMessages
            ],
            temperature: 0.6,
            max_tokens: 750,
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          const reply = data.choices?.[0]?.message?.content?.trim();
          if (reply) {
            return NextResponse.json({ reply, provider: 'xai-grok' });
          }
        }
      } catch (err) {
        console.warn('xAI Grok Call Failed:', err.message);
      }
    }

    // 3. Smart, Non-Repetitive Context-Aware Fallback Engine
    const fallbackReply = generateSmartFallback(messages);
    return NextResponse.json({ reply: fallbackReply, provider: 'hedge-smart-assistant' });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
