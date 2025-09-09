'use client';

import { useState } from 'react';

interface ContactProps {
  language: 'fr' | 'en';
}

const translations = {
  fr: {
    title: "Parlons de votre ADN de marque",
    subtitle: "Contactez-nous pour découvrir comment révéler et activer l'ADN de votre entreprise",
    firstName: "Prénom",
    lastName: "Nom",
    position: "Fonction",
    company: "Société",
    email: "Email",
    phone: "Téléphone",
    message: "Message",
    submit: "Envoyer le message",
    charCounter: "caractères"
  },
  en: {
    title: "Let's talk about your brand DNA",
    subtitle: "Contact us to discover how to reveal and activate your company's DNA",
    firstName: "First Name",
    lastName: "Last Name",
    position: "Position",
    company: "Company",
    email: "Email",
    phone: "Phone",
    message: "Message",
    submit: "Send Message",
    charCounter: "characters"
  }
};

export default function Contact({ language }: ContactProps) {
  const [charCount, setCharCount] = useState(0);
  const t = translations[language];

  const updateCharCounter = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
  };

  return (
    <>
      <section id="contact" className="section contact">
        <div className="container">
          <div className="contact-container">
            <div className="contact-header">
              <h2 className="contact-title" id="contact-title">{t.title}</h2>
              <p className="contact-subtitle" id="contact-subtitle">{t.subtitle}</p>
            </div>

            <form className="contact-form" action="mailto:contact@coresense.com" method="post" encType="text/plain">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" id="label-firstName">{t.firstName}</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" id="label-lastName">{t.lastName}</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="position" id="label-position">{t.position}</label>
                  <input type="text" id="position" name="position" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company" id="label-company">{t.company}</label>
                  <input type="text" id="company" name="company" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" id="label-email">{t.email}</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" id="label-phone">{t.phone}</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message" id="label-message">{t.message}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  maxLength={500} 
                  onChange={updateCharCounter}
                  required
                />
                <div className="char-counter" id="char-counter">{charCount}/500 {t.charCounter}</div>
              </div>
              <button type="submit" className="submit-btn" id="submit-btn">{t.submit}</button>
            </form>
          </div>
        </div>
      </section>

    </>
  );
}
