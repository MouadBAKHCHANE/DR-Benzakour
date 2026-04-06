"use client";

import { useState, useEffect } from "react";

type Step = "datetime" | "info";

const TIME_SLOTS = [
  "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00",
  "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00",
  "15:30", "16:00", "16:30",
  "17:00",
];

const DAYS_FR = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
const MONTHS_FR = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

interface AppointmentModalProps {
  open: boolean;
  onClose: () => void;
}

export function AppointmentModal({ open, onClose }: AppointmentModalProps) {
  const [step, setStep] = useState<Step>("datetime");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [weekOffset, setWeekOffset] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      // Reset after close animation
      const t = setTimeout(() => {
        setStep("datetime");
        setSelectedDate(null);
        setSelectedTime(null);
        setWeekOffset(0);
        setName("");
        setPhone("");
        setEmail("");
        setConsent(false);
        setSubmitted(false);
        setSubmitting(false);
        setSubmitError(null);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Generate 7 days starting from today + weekOffset * 7
  const getDays = (): Date[] => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(today);
    start.setDate(today.getDate() + weekOffset * 7);
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  };

  const days = getDays();
  const currentMonth = days[0] ? `${MONTHS_FR[days[0].getMonth()]} ${days[0].getFullYear()}` : "";

  const isSunday = (date: Date) => date.getDay() === 0;
  const isPast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const formatDateFull = (d: Date) =>
    `${DAYS_FR[d.getDay()]} ${d.getDate()} ${MONTHS_FR[d.getMonth()]} ${d.getFullYear()}`;

  const canProceed = selectedDate && selectedTime;
  const canSubmit = name.trim() && phone.trim() && consent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || !selectedDate || !selectedTime) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          date: formatDateFull(selectedDate),
          time: selectedTime,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={`appt-modal-overlay ${open ? "open" : ""}`} onClick={onClose}>
      <div className="appt-modal" onClick={(e) => e.stopPropagation()}>
        {submitted ? (
          <div className="appt-modal-success">
            <div className="appt-success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3>Demande envoyée !</h3>
            <p>
              Votre demande de rendez-vous pour le <strong>{selectedDate && formatDateFull(selectedDate)}</strong> à <strong>{selectedTime}</strong> a bien été reçue.
            </p>
            <p className="appt-success-note">Notre secrétariat vous contactera rapidement pour confirmation.</p>
            <button className="appt-submit-btn" onClick={onClose}>Fermer</button>
          </div>
        ) : step === "datetime" ? (
          <>
            <div className="appt-modal-header">
              <h2>Prendre Rendez-vous</h2>
              <button className="appt-close" onClick={onClose} aria-label="Fermer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="appt-modal-body">
              <div className="appt-month-nav">
                <button
                  className="appt-nav-btn"
                  onClick={() => setWeekOffset((w) => Math.max(0, w - 1))}
                  disabled={weekOffset === 0}
                  aria-label="Semaine précédente"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <div className="appt-month-label">{currentMonth}</div>
                <button
                  className="appt-nav-btn"
                  onClick={() => setWeekOffset((w) => w + 1)}
                  aria-label="Semaine suivante"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>

              <div className="appt-days-grid">
                {days.map((d, i) => {
                  const disabled = isSunday(d) || isPast(d);
                  const selected = selectedDate && d.toDateString() === selectedDate.toDateString();
                  return (
                    <button
                      key={i}
                      className={`appt-day ${selected ? "selected" : ""} ${disabled ? "disabled" : ""}`}
                      onClick={() => !disabled && setSelectedDate(d)}
                      disabled={disabled}
                    >
                      <span className="appt-day-name">{DAYS_FR[d.getDay()]}</span>
                      <span className="appt-day-num">{d.getDate()}</span>
                    </button>
                  );
                })}
              </div>

              <div className="appt-section-label">Choisir l&rsquo;heure</div>
              <div className="appt-times-grid">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    className={`appt-time ${selectedTime === time ? "selected" : ""} ${!selectedDate ? "disabled" : ""}`}
                    onClick={() => selectedDate && setSelectedTime(time)}
                    disabled={!selectedDate}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="appt-modal-footer">
              <button
                className="appt-submit-btn"
                onClick={() => setStep("info")}
                disabled={!canProceed}
              >
                Suivant
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="appt-modal-header">
              <button className="appt-back" onClick={() => setStep("datetime")} aria-label="Retour">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <h2>Prendre Rendez-vous</h2>
              <button className="appt-close" onClick={onClose} aria-label="Fermer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="appt-datetime-summary">
              <div className="appt-datetime-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>
                </svg>
              </div>
              <div>
                <div className="appt-datetime-date">{selectedDate && formatDateFull(selectedDate)}</div>
                <div className="appt-datetime-time">à {selectedTime}</div>
              </div>
            </div>

            <form className="appt-modal-body" onSubmit={handleSubmit}>
              <h3 className="appt-form-title">Vos informations</h3>

              <div className="appt-field">
                <label>Nom complet <span className="appt-required">*</span></label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Entrez votre nom complet"
                  required
                />
              </div>

              <div className="appt-field">
                <label>Téléphone <span className="appt-required">*</span></label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="06 XX XX XX XX"
                  required
                />
              </div>

              <div className="appt-field">
                <label>Email <span className="appt-optional">(facultatif)</span></label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                />
              </div>

              <label className="appt-consent">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <span className="appt-consent-box">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
                <span className="appt-consent-text">
                  J&rsquo;autorise le cabinet à me recontacter pour confirmer mon rendez-vous<span className="appt-required">*</span>
                </span>
              </label>

              <div className="appt-modal-footer">
                <button type="submit" className="appt-submit-btn" disabled={!canSubmit || submitting}>
                  {submitting ? "Envoi en cours..." : "Réserver mon RDV"}
                </button>
                {submitError && (
                  <p className="appt-error-msg">{submitError}</p>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
