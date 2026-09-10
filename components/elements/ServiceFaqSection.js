'use client';

import { useState } from 'react';

export default function ServiceFaqSection({ faqs, serviceTitle }) {
  const [activeFaq, setActiveFaq] = useState(1);

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  // Split FAQs into 2 equal columns (e.g. 5 items per column for 10 items)
  const halfIndex = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, halfIndex);
  const rightFaqs = faqs.slice(halfIndex);

  const renderFaqColumn = (items, startIndex) => {
    return items.map((faq, index) => {
      const globalIndex = startIndex + index;
      const isActive = activeFaq === faq.id;
      const numStr = String(globalIndex + 1).padStart(2, '0');

      return (
        <div 
          key={faq.id} 
          className={`accordion-item border rounded-4 mb-3 overflow-hidden transition-all ${
            isActive ? 'shadow-sm border-primary' : ''
          }`}
          style={{ 
            backgroundColor: '#ffffff', 
            borderColor: isActive ? '#03214e' : '#e2e8f0',
            transition: 'all 0.25s ease'
          }}
        >
          <h3 className="accordion-header m-0" id={`heading-${faq.id}`}>
            <button
              className="accordion-button bg-transparent shadow-none w-100 text-start d-flex align-items-center justify-content-between p-3 p-md-4 border-0"
              type="button"
              onClick={() => toggleFaq(faq.id)}
              style={{ cursor: 'pointer', outline: 'none' }}
            >
              <div className="d-flex align-items-center gap-3 me-2">
                <span 
                  className="badge rounded-pill fw-7 fs-14" 
                  style={{ 
                    backgroundColor: isActive ? '#03214e' : '#e2e8f0', 
                    color: isActive ? '#ffffff' : '#475569',
                    padding: '7px 14px',
                    minWidth: '38px',
                    flexShrink: 0
                  }}
                >
                  {numStr}
                </span>
                <span 
                  className="fw-7 leading-snug" 
                  style={{ 
                    fontSize: '18px', 
                    color: isActive ? '#c8102e' : '#03214e', 
                    transition: 'color 0.2s ease',
                    lineHeight: '1.4'
                  }}
                >
                  {faq.question}
                </span>
              </div>
              <span 
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: isActive ? '#c8102e' : '#f1f5f9',
                  color: isActive ? '#ffffff' : '#03214e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  flexShrink: 0,
                  transition: 'all 0.2s ease'
                }}
              >
                {isActive ? '−' : '+'}
              </span>
            </button>
          </h3>

          {isActive && (
            <div className="accordion-body px-3 px-md-4 pb-4 pt-1">
              <div 
                className="p-3 p-md-4 rounded-3" 
                style={{ 
                  backgroundColor: '#f8fafc', 
                  borderLeft: '4px solid #c8102e'
                }}
              >
                <p className="fs-15 text-secondary leading-relaxed m-0" style={{ color: '#334155', lineHeight: '1.75' }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <section 
      className="position-relative" 
      style={{ 
        backgroundColor: '#ffffff', 
        borderTop: '1px solid #e2e8f0', 
        borderBottom: '1px solid #e2e8f0',
        paddingTop: '24px',
        paddingBottom: '48px'
      }}
    >
      <div className="tf-container">
        
        {/* 2-Column Accordion Layout (5 FAQs per column) */}
        <div className="row g-4">
          <div className="col-lg-6">
            {renderFaqColumn(leftFaqs, 0)}
          </div>
          <div className="col-lg-6">
            {renderFaqColumn(rightFaqs, leftFaqs.length)}
          </div>
        </div>

      </div>
    </section>
  );
}

