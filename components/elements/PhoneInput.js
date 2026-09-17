'use client';

import { useState, useRef, useEffect } from 'react';

export const COUNTRIES = [
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪' },
  { code: 'BH', name: 'Bahrain', dialCode: '+973', flag: '🇧🇭' },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦' },
  { code: 'QA', name: 'Qatar', dialCode: '+974', flag: '🇶🇦' },
  { code: 'OM', name: 'Oman', dialCode: '+968', flag: '🇴🇲' },
  { code: 'KW', name: 'Kuwait', dialCode: '+965', flag: '🇰🇼' },
  { code: 'EG', name: 'Egypt', dialCode: '+20', flag: '🇪🇬' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬' },
  { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾' },
  { code: 'PK', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰' },
  { code: 'BD', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩' },
  { code: 'PH', name: 'Philippines', dialCode: '+63', flag: '🇵🇭' },
];

export default function PhoneInput({
  value = '',
  onChange,
  name = 'phone',
  id = 'phone',
  placeholder = 'Phone Number',
  required = false,
  className = '',
  style = {},
  theme = 'light' // 'light' | 'dark' | 'hero'
}) {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]); // UAE (+971) by default
  const [isOpen, setIsOpen] = useState(false);
  const [rawNumber, setRawNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);

  // Parse existing value if provided (e.g. "+971 50 123 4567")
  useEffect(() => {
    if (value) {
      const matched = COUNTRIES.find((c) => value.startsWith(c.dialCode));
      if (matched) {
        setSelectedCountry(matched);
        setRawNumber(value.replace(matched.dialCode, '').trim());
      } else {
        setRawNumber(value);
      }
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchQuery('');
    triggerOnChange(country, rawNumber);
  };

  const handleNumberChange = (e) => {
    const num = e.target.value;
    setRawNumber(num);
    triggerOnChange(selectedCountry, num);
  };

  const triggerOnChange = (country, num) => {
    if (onChange) {
      const fullVal = num ? `${country.dialCode} ${num}` : '';
      onChange({
        target: {
          name: name,
          value: fullVal,
        },
      });
    }
  };

  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.dialCode.includes(searchQuery) ||
      c.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isHeroTheme = theme === 'hero';
  const isDarkTheme = theme === 'dark';

  return (
    <div className="phone-input-wrapper position-relative w-100" ref={dropdownRef}>
      <div
        className={`d-flex align-items-center ${className}`}
        style={{
          border: isHeroTheme
            ? '1px solid rgba(255,255,255,0.2)'
            : isDarkTheme
            ? '1px solid rgba(255,255,255,0.2)'
            : '1px solid #e4e4e7',
          borderRadius: '8px',
          backgroundColor: isHeroTheme
            ? 'rgba(255,255,255,0.06)'
            : isDarkTheme
            ? 'rgba(255,255,255,0.05)'
            : '#ffffff',
          overflow: 'hidden',
          transition: 'all 0.2s ease',
          ...style,
        }}
      >
        {/* Country Flag & Code Trigger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="d-flex align-items-center gap-2 border-0 bg-transparent px-3 py-2 text-decoration-none flex-shrink-0"
          style={{
            cursor: 'pointer',
            color: isHeroTheme || isDarkTheme ? '#ffffff' : '#18181b',
            fontSize: '14px',
            fontWeight: 600,
            borderRight: isHeroTheme || isDarkTheme ? '1px solid rgba(255,255,255,0.15)' : '1px solid #e4e4e7',
            height: '100%',
          }}
          aria-label="Select Country Code"
        >
          {/* Flag Image for cross-platform HD flag rendering */}
          <img
            src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
            alt={selectedCountry.name}
            style={{
              width: '20px',
              height: '14px',
              objectFit: 'cover',
              borderRadius: '2px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
            }}
          />
          <span style={{ fontSize: '13px', fontWeight: 700 }}>{selectedCountry.dialCode}</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
              opacity: 0.7,
              marginLeft: '1px',
            }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        {/* Input Field */}
        <input
          type="tel"
          id={id}
          name={name}
          required={required}
          value={rawNumber}
          onChange={handleNumberChange}
          placeholder={placeholder}
          className="w-100 border-0 bg-transparent px-3 py-2"
          style={{
            color: isHeroTheme || isDarkTheme ? '#ffffff' : '#18181b',
            fontSize: '14px',
            outline: 'none',
            boxShadow: 'none',
          }}
        />
      </div>

      {/* Hidden input for form submission if uncontrolled */}
      {!onChange && (
        <input
          type="hidden"
          name={name}
          value={rawNumber ? `${selectedCountry.dialCode} ${rawNumber}` : ''}
        />
      )}

      {/* Country Dropdown Menu */}
      {isOpen && (
        <div
          className="position-absolute start-0 top-100 mt-1 shadow-lg rounded-3 border bg-white overflow-hidden"
          style={{
            zIndex: 9999,
            width: '280px',
            maxHeight: '260px',
            borderColor: '#e4e4e7',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Search Box */}
          <div className="p-2 border-bottom bg-light">
            <input
              type="text"
              placeholder="Search country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control form-control-sm border-secondary border-opacity-25"
              style={{ fontSize: '12.5px' }}
              autoFocus
            />
          </div>

          {/* List */}
          <div style={{ overflowY: 'auto', flex: 1 }}>
            {filteredCountries.map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => handleCountrySelect(c)}
                className="d-flex align-items-center justify-content-between w-100 border-0 bg-transparent px-3 py-2 text-start"
                style={{
                  cursor: 'pointer',
                  fontSize: '13px',
                  backgroundColor: selectedCountry.code === c.code ? '#f4f4f5' : 'transparent',
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f4f4f5')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    selectedCountry.code === c.code ? '#f4f4f5' : 'transparent')
                }
              >
                <div className="d-flex align-items-center gap-2 overflow-hidden">
                  <img
                    src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                    alt={c.name}
                    style={{
                      width: '20px',
                      height: '14px',
                      objectFit: 'cover',
                      borderRadius: '2px',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.12)',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="text-dark text-truncate"
                    style={{ fontWeight: selectedCountry.code === c.code ? 700 : 500 }}
                  >
                    {c.name}
                  </span>
                </div>
                <span className="text-secondary fw-7 ms-2" style={{ fontSize: '12px', flexShrink: 0 }}>
                  {c.dialCode}
                </span>
              </button>
            ))}
            {filteredCountries.length === 0 && (
              <div className="p-3 text-center text-muted fs-13">No countries found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
