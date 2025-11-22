export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validateItalianPhone(phone) {
  if (!phone) return true; // Optional field
  const cleaned = phone.replace(/\s/g, '');
  const re = /^(\+39)?[0-9]{9,10}$/;
  return re.test(cleaned);
}

export function sanitizeInput(input) {
  return input.trim().replace(/<[^>]*>/g, '');
}

export function validateForm(formData) {
  const errors = {};

  if (!formData.nome || formData.nome.trim().length < 2) {
    errors.nome = 'Il nome deve contenere almeno 2 caratteri';
  }

  if (!formData.cognome || formData.cognome.trim().length < 2) {
    errors.cognome = 'Il cognome deve contenere almeno 2 caratteri';
  }

  if (!validateEmail(formData.email)) {
    errors.email = 'Inserisci un indirizzo email valido';
  }

  if (formData.telefono && !validateItalianPhone(formData.telefono)) {
    errors.telefono = 'Inserisci un numero di telefono valido (es. +39 333 1234567)';
  }

  if (!formData.messaggio || formData.messaggio.trim().length < 10) {
    errors.messaggio = 'Il messaggio deve contenere almeno 10 caratteri';
  }

  if (!formData.privacy) {
    errors.privacy = 'Devi accettare la privacy policy per continuare';
  }

  return errors;
}
