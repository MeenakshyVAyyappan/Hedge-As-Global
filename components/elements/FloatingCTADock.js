'use client';

import React, { useState, useRef, useEffect } from 'react';

// Helper to format inline markdown bold text and structure
function formatInline(str) {
  if (!str) return '';
  const parts = str.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, pIdx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={pIdx} style={{ fontWeight: 700, color: 'inherit' }}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderFormattedText(text) {
  if (!text) return null;
  const lines = text.split('\n');

  return lines.map((line, lIdx) => {
    const trimmed = line.trim();

    // Headings (### or ## or #)
    if (trimmed.startsWith('### ')) {
      return (
        <h6 key={lIdx} style={{ fontSize: '14px', fontWeight: 800, margin: '8px 0 4px 0', color: '#03214e', letterSpacing: '-0.2px' }}>
          {formatInline(trimmed.replace('### ', ''))}
        </h6>
      );
    }
    if (trimmed.startsWith('## ') || trimmed.startsWith('# ')) {
      return (
        <h5 key={lIdx} style={{ fontSize: '15px', fontWeight: 800, margin: '10px 0 4px 0', color: '#03214e', letterSpacing: '-0.2px' }}>
          {formatInline(trimmed.replace(/#+\s*/, ''))}
        </h5>
      );
    }

    // Bullet lists (- or *)
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const cleanItem = trimmed.substring(2);
      return (
        <div key={lIdx} style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', marginBottom: '4px', fontSize: '13.5px' }}>
          <span style={{ color: '#c8102e', fontWeight: 'bold', lineHeight: '1.4' }}>•</span>
          <span style={{ lineHeight: '1.5' }}>{formatInline(cleanItem)}</span>
        </div>
      );
    }

    // Empty lines for spacing
    if (!trimmed) {
      return <div key={lIdx} style={{ height: '6px' }} />;
    }

    // Regular Paragraph
    return (
      <div key={lIdx} style={{ marginBottom: '4px', fontSize: '13.5px', lineHeight: '1.55' }}>
        {formatInline(line)}
      </div>
    );
  });
}

export default function FloatingCTADock() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I am **Hedge AI**, your virtual advisory assistant for Hedge Chartered Accountants Group.\n\nHow may I assist you today with **Accounting, Statutory Audit, UAE Corporate Tax, VAT, ICV Certification, or E-Invoicing**?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const phoneNumber = "971502253373";
  const defaultMessage = encodeURIComponent("Hello Hedge, I would like to know more about your Accounting, Audit or Tax services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
  const phoneCallUrl = `tel:+${phoneNumber}`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

  const handleSendMessage = async (customText = null) => {
    const textToSend = customText || inputMessage.trim();
    if (!textToSend) return;

    const userMessage = { role: 'user', content: textToSend };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    if (!customText) setInputMessage('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: 'Thank you for your message. For immediate assistance, please call our senior advisors directly at **+971 50 225 3373**.'
          }
        ]);
      }
    } catch (err) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'You can reach Hedge Chartered Accountants directly via Phone or WhatsApp at **+971 50 225 3373** or email **info@hedgeasglobal.com**.'
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* ── PREMIUM AI CHATBOT MODAL BOX ── */}
      {isChatOpen && (
        <div
          className="position-fixed bottom-0 end-0 mb-4 me-3 me-md-4 rounded-4 overflow-hidden border-0"
          style={{
            width: '92vw',
            maxWidth: '410px',
            height: '560px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 99999,
            boxShadow: '0 24px 60px rgba(3, 33, 78, 0.30)',
            fontFamily: 'inherit',
            backgroundColor: '#ffffff'
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 text-white d-flex align-items-center justify-content-between"
            style={{ background: 'linear-gradient(135deg, #03214e 0%, #0a3a6e 100%)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="d-flex align-items-center gap-3">
              <div
                className="rounded-circle bg-white d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: '40px', height: '40px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#03214e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
                  <rect x="4" y="8" width="16" height="12" rx="2"/>
                  <circle cx="9" cy="13" r="1"/>
                  <circle cx="15" cy="13" r="1"/>
                  <path d="M10 17h4"/>
                </svg>
              </div>
              <div>
                <h6 className="m-0 text-white fw-8 fs-16 letter-spacing-tight">Hedge AI Assistant</h6>
                <div className="d-flex align-items-center gap-1 mt-1">
                  <span className="rounded-circle bg-success" style={{ width: '8px', height: '8px', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }}></span>
                  <span className="text-white-80 fs-12 fw-6">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="btn text-white p-1 opacity-80 hover-opacity-100 border-0 bg-transparent"
              aria-label="Close Chat"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          {/* Quick Preset Buttons (Hidden Scrollbars) */}
          <div
            className="px-3 py-2 border-bottom border-secondary border-opacity-10 d-flex gap-2 text-nowrap"
            style={{
              backgroundColor: '#f8fafc',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <button
              onClick={() => handleSendMessage("Tell me about UAE Corporate Tax")}
              className="btn btn-sm bg-white text-dark rounded-pill fs-12 py-1 px-3 fw-6 shadow-sm border"
              style={{ borderColor: '#e2e8f0' }}
            >
              📊 Corporate Tax
            </button>
            <button
              onClick={() => handleSendMessage("Statutory Audit services")}
              className="btn btn-sm bg-white text-dark rounded-pill fs-12 py-1 px-3 fw-6 shadow-sm border"
              style={{ borderColor: '#e2e8f0' }}
            >
              📑 Audit & Assurance
            </button>
            <button
              onClick={() => handleSendMessage("ICV Certification details")}
              className="btn btn-sm bg-white text-dark rounded-pill fs-12 py-1 px-3 fw-6 shadow-sm border"
              style={{ borderColor: '#e2e8f0' }}
            >
              🏆 ICV Score
            </button>
            <button
              onClick={() => handleSendMessage("Contact phone & office location")}
              className="btn btn-sm bg-white text-dark rounded-pill fs-12 py-1 px-3 fw-6 shadow-sm border"
              style={{ borderColor: '#e2e8f0' }}
            >
              📍 Contact Details
            </button>
          </div>

          {/* Messages Container */}
          <div
            className="flex-grow-1 p-3 overflow-auto"
            style={{ backgroundColor: '#f1f5f9' }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`d-flex mb-3 ${msg.role === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
              >
                <div
                  className={`p-3 rounded-4 ${
                    msg.role === 'user'
                      ? 'text-white'
                      : 'text-dark bg-white border border-slate-200'
                  }`}
                  style={{
                    maxWidth: '86%',
                    backgroundColor: msg.role === 'user' ? '#c8102e' : '#ffffff',
                    color: msg.role === 'user' ? '#ffffff' : '#0f172a',
                    boxShadow: msg.role === 'user' ? '0 4px 14px rgba(200,16,46,0.25)' : '0 3px 10px rgba(0,0,0,0.04)',
                    borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px'
                  }}
                >
                  {renderFormattedText(msg.content)}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="d-flex mb-3 justify-content-start">
                <div
                  className="p-3 bg-white text-secondary rounded-4 fs-13 shadow-sm border border-slate-200 d-flex align-items-center gap-2"
                  style={{ borderRadius: '18px 18px 18px 4px' }}
                >
                  <div className="spinner-border spinner-border-sm text-red" role="status" style={{ width: '14px', height: '14px', borderLineWidth: '2px' }}></div>
                  <span className="fw-6 fs-13 text-dark">Hedge AI is typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-top border-secondary border-opacity-10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="d-flex align-items-center gap-2"
            >
              <input
                type="text"
                className="form-control rounded-pill px-3 py-2 fs-14 border-secondary border-opacity-25"
                placeholder="Ask Hedge AI about Tax, Audit, VAT..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                style={{ backgroundColor: '#f8fafc', boxShadow: 'none' }}
              />
              <button
                type="submit"
                className="btn rounded-circle p-0 d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: '40px', height: '40px', backgroundColor: '#c8102e', color: '#ffffff', boxShadow: '0 4px 12px rgba(200,16,46,0.3)', border: 'none' }}
                aria-label="Send Message"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── FLOATING ACTION DOCK (BOTTOM RIGHT) ── */}
      <div
        className="position-fixed bottom-0 end-0 mb-4 me-3 me-md-4 z-999 d-flex flex-column gap-2 align-items-end"
        style={{ zIndex: 99990 }}
      >
        {/* Phone Calling Icon Button */}
        <a
          href={phoneCallUrl}
          className="cta-dock-btn phone-btn d-flex align-items-center gap-2 text-decoration-none shadow-lg rounded-pill"
          style={{
            background: 'linear-gradient(135deg, #c8102e 0%, #9e0c23 100%)',
            color: '#ffffff',
            padding: '10px 16px',
            boxShadow: '0 6px 20px rgba(200, 16, 46, 0.4)',
            transition: 'all 0.3s ease'
          }}
          title="Call Hedge Group: +971 50 225 3373"
        >
          <div className="d-flex align-items-center justify-content-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <span className="fw-7 fs-13 d-none d-sm-inline">Call Us</span>
        </a>

        {/* WhatsApp Icon Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-dock-btn whatsapp-btn d-flex align-items-center gap-2 text-decoration-none shadow-lg rounded-pill"
          style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: '#ffffff',
            padding: '10px 16px',
            boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
            transition: 'all 0.3s ease'
          }}
          title="Chat on WhatsApp"
        >
          <div className="d-flex align-items-center justify-content-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </div>
          <span className="fw-7 fs-13 d-none d-sm-inline">WhatsApp</span>
        </a>

        {/* AI Chatbot Icon Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="cta-dock-btn ai-btn d-flex align-items-center gap-2 border-0 shadow-lg rounded-pill"
          style={{
            background: 'linear-gradient(135deg, #03214e 0%, #1e40af 100%)',
            color: '#ffffff',
            padding: '10px 16px',
            boxShadow: '0 6px 20px rgba(3, 33, 78, 0.4)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          title="Hedge AI Advisory Bot"
        >
          <div className="d-flex align-items-center justify-content-center position-relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle" style={{ width: '8px', height: '8px' }}></span>
          </div>
          <span className="fw-7 fs-13 d-none d-sm-inline">AI Chat Bot</span>
        </button>
      </div>
    </>
  );
}
