import React from 'react';
import { motion } from 'framer-motion';
import { Head } from '@unhead/react';
import { HelpCircle } from 'lucide-react';
import Accordion from '../components/ui/Accordion';

export default function FAQPage() {
  const faqCategories = [
    {
      category: 'Servizi Generali',
      questions: [
        {
          question: 'Quali servizi offrite?',
          answer: 'Offriamo una gamma completa di servizi: impiantistica elettrica civile e industriale, automazione industriale con programmazione PLC, costruzione quadri elettrici, impianti fotovoltaici, revamping macchinari e servizi di manutenzione programmata.'
        },
        {
          question: 'In quali zone operate?',
          answer: 'Operiamo principalmente in Valle Camonica e provincia di Brescia, ma siamo disponibili per progetti in tutta la Lombardia e regioni limitrofe.'
        },
        {
          question: 'Quanto tempo ci vuole per un preventivo?',
          answer: 'Generalmente forniamo un preventivo entro 48 ore dalla richiesta. Per progetti complessi potrebbe essere necessario un sopralluogo tecnico.'
        }
      ]
    },
    {
      category: 'Impianti Elettrici',
      questions: [
        {
          question: 'Rilasciate certificazioni per gli impianti?',
          answer: 'Sì, rilasciamo tutte le certificazioni previste dal DM 37/08 e garantiamo la conformità alle normative vigenti.'
        },
        {
          question: 'Offrite servizi di manutenzione?',
          answer: 'Sì, offriamo contratti di manutenzione programmata e servizio di pronto intervento 24/7 per emergenze.'
        }
      ]
    },
    {
      category: 'Automazione Industriale',
      questions: [
        {
          question: 'Quali PLC programmate?',
          answer: 'Programmiamo PLC di tutti i principali brand: Siemens, Allen Bradley, Fagor, Omron, Schneider Electric e altri.'
        },
        {
          question: 'Fate anche retrofitting di vecchi macchinari?',
          answer: 'Sì, siamo specializzati nel revamping e ammodernamento di macchinari obsoleti, con adeguamento alle normative CE.'
        }
      ]
    },
    {
      category: 'Fotovoltaico',
      questions: [
        {
          question: 'Installate impianti fotovoltaici?',
          answer: 'Sì, attraverso la nostra divisione Novatech Automation ci occupiamo di progettazione, installazione e manutenzione di impianti fotovoltaici.'
        },
        {
          question: 'Ci sono incentivi disponibili?',
          answer: 'Sì, vi assistiamo nella richiesta di tutti gli incentivi disponibili e nelle pratiche burocratiche necessarie.'
        }
      ]
    }
  ];

  return (
    <div className="overflow-hidden bg-white dark:bg-slate-950">
      <Head>
        <title>FAQ - Domande Frequenti | GS Elettrotecnica</title>
        <meta name="description" content="Risposte alle domande più frequenti sui nostri servizi di impiantistica elettrica, automazione industriale e fotovoltaico." />
        <link rel="canonical" href="https://www.elettrotecnicags.it/faq" />
      </Head>

      {/* Header */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-600 to-brand-800" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HelpCircle className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-4" />
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">
              Domande Frequenti
            </h1>
            <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto">
              Trova rapidamente le risposte alle domande più comuni
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {category.category}
              </h2>
              <Accordion items={category.questions} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Non hai trovato la risposta?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Contattaci direttamente, saremo felici di aiutarti
          </p>
          <a
            href="/contatti"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Contattaci
          </a>
        </div>
      </section>
    </div>
  );
}
