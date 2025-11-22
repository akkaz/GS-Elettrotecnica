# 📧 Email Setup - Choose Your Method

I've set up **TWO options** for your contact form. Choose the one that works best for you:

---

## 🎯 Option 1: SMTP with Nodemailer (Current Setup)

**File:** `/api/contact.js`

### ✅ Pros
- Use your existing email account (Gmail, Outlook, etc.)
- No additional service needed
- Emails come from your actual email address
- Free (uses your email provider)

### ❌ Cons
- Requires SMTP configuration (app passwords for Gmail)
- Gmail has daily sending limits (~500/day)
- More complex setup
- SMTP can be blocked by some providers

### 📝 Setup Steps

1. **Install dependency:**
   ```bash
   npm install nodemailer
   ```

2. **Configure `.env`:**
   ```bash
   # For Gmail
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password  # Get from Google Account settings
   SMTP_FROM_NAME=GS Elettrotecnica
   SMTP_TO_EMAIL=giomarco@cleversoft.it
   ```

3. **Add to Vercel:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add all the SMTP variables above

4. **Done!** The form uses `/api/contact` endpoint

---

## 🚀 Option 2: Resend (Recommended by Vercel)

**File:** `/api/contact-resend.js`

### ✅ Pros
- **Super simple setup** - just one API key
- **Free tier:** 100 emails/day, 3,000/month
- **Reliable** - designed for transactional emails
- **Analytics** - track email delivery
- **No SMTP hassles**
- Recommended by Vercel official docs

### ❌ Cons
- Requires signing up for another service (free)
- Emails come from `onboarding@resend.dev` (free tier) or your domain (paid)

### 📝 Setup Steps

1. **Sign up for Resend:**
   - Go to https://resend.com
   - Create free account
   - Get your API key from dashboard

2. **Install dependency:**
   ```bash
   npm install resend
   ```

3. **Configure `.env`:**
   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   SMTP_TO_EMAIL=giomarco@cleversoft.it
   ```

4. **Rename the file:**
   ```bash
   # Delete or rename current contact.js
   mv api/contact.js api/contact-nodemailer.js
   
   # Use Resend version
   mv api/contact-resend.js api/contact.js
   ```

5. **Add to Vercel:**
   - Go to Vercel Dashboard → Settings → Environment Variables
   - Add `RESEND_API_KEY` and `SMTP_TO_EMAIL`

6. **Done!** The form still uses `/api/contact` endpoint

---

## 🤔 Which Should You Choose?

### Choose **SMTP (Option 1)** if:
- ✅ You want emails to come from your actual email address
- ✅ You already have email hosting
- ✅ You don't want to sign up for another service
- ✅ You send less than 100 emails/day

### Choose **Resend (Option 2)** if:
- ✅ You want the **easiest setup** (just one API key!)
- ✅ You want **better reliability**
- ✅ You want email **analytics and tracking**
- ✅ You're okay with emails from `onboarding@resend.dev` (or will add your domain later)
- ✅ **Recommended for most users!**

---

## 📊 Quick Comparison

| Feature | SMTP (Nodemailer) | Resend |
|---------|-------------------|--------|
| **Setup Difficulty** | Medium | Easy |
| **Free Tier** | Depends on provider | 3,000/month |
| **Reliability** | Good | Excellent |
| **From Address** | Your email | resend.dev (free) or your domain |
| **Analytics** | No | Yes |
| **Vercel Recommended** | Yes | **Yes** ⭐ |
| **Configuration** | 6 env variables | 2 env variables |

---

## 🔄 How to Switch

### Currently using: SMTP (Option 1)

To switch to Resend:
```bash
npm install resend
mv api/contact.js api/contact-nodemailer.js
mv api/contact-resend.js api/contact.js
```

Update `.env`:
```bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
SMTP_TO_EMAIL=giomarco@cleversoft.it
```

### Currently using: Resend (Option 2)

To switch to SMTP:
```bash
npm install nodemailer
mv api/contact.js api/contact-resend.js
mv api/contact-nodemailer.js api/contact.js
```

Update `.env` with all SMTP variables (see Option 1 above)

---

## 💡 My Recommendation

**Start with Resend (Option 2)** because:
1. Setup takes 2 minutes
2. Just one API key needed
3. More reliable than SMTP
4. Free tier is generous (3,000 emails/month)
5. Officially recommended by Vercel

You can always switch to SMTP later if needed!

---

## 🆘 Need Help?

- **Resend Docs:** https://resend.com/docs
- **Nodemailer Docs:** https://nodemailer.com/
- **Vercel Guide:** https://vercel.com/guides/sending-emails-from-an-application-on-vercel

Both implementations are ready to go - just choose one and follow the setup steps above! 🚀
