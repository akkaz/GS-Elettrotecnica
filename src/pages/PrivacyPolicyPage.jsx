import React from 'react';
import { Head } from '@unhead/react';
import { Shield, Lock, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-white dark:bg-slate-950 min-h-screen pt-24 pb-12">
            <Head>
                <title>Privacy Policy - GS Elettrotecnica</title>
                <meta name="description" content="Informativa sulla privacy di GS Elettrotecnica Automazioni Industriali Srl." />
            </Head>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 mb-6">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Informativa sulla Privacy
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="lead text-lg text-slate-600 dark:text-slate-300 mb-8">
                        La presente informativa descrive le modalità di gestione del sito web di GS Elettrotecnica Automazioni Industriali Srl in riferimento al trattamento dei dati personali degli utenti che lo consultano.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Lock className="w-6 h-6 text-brand-600" />
                            1. Titolare del Trattamento
                        </h2>
                        <p>
                            Il Titolare del trattamento dei dati è <strong>GS Elettrotecnica Automazioni Industriali Srl</strong>, con sede legale in Via delle Cave, 17 - 25040 Cividate Camuno (BS).
                            <br />
                            Email di contatto: <a href="mailto:info@elettrotecnicags.it" className="text-brand-600 hover:underline">info@elettrotecnicags.it</a>
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <FileText className="w-6 h-6 text-brand-600" />
                            2. Tipologia di Dati Trattati
                        </h2>
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">Dati di navigazione</h3>
                        <p>
                            I sistemi informatici e le procedure software preposte al funzionamento di questo sito web acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet. In questa categoria di dati rientrano gli indirizzi IP o i nomi a dominio dei computer utilizzati dagli utenti che si connettono al sito, gli indirizzi in notazione URI (Uniform Resource Identifier) delle risorse richieste, l'orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) ed altri parametri relativi al sistema operativo e all'ambiente informatico dell'utente.
                        </p>

                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">Dati forniti volontariamente dall'utente</h3>
                        <p>
                            L'invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati su questo sito comporta la successiva acquisizione dell'indirizzo del mittente, necessario per rispondere alle richieste, nonché degli eventuali altri dati personali inseriti nella missiva.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Finalità del Trattamento</h2>
                        <p>
                            I dati personali forniti dagli utenti sono utilizzati al solo fine di eseguire il servizio o la prestazione richiesta e sono comunicati a terzi nel solo caso in cui ciò sia a tal fine necessario. I dati di navigazione vengono utilizzati al solo fine di ricavare informazioni statistiche anonime sull'uso del sito e per controllarne il corretto funzionamento.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Modalità del Trattamento</h2>
                        <p>
                            I dati personali sono trattati con strumenti automatizzati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti. Specifiche misure di sicurezza sono osservate per prevenire la perdita dei dati, usi illeciti o non corretti ed accessi non autorizzati.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Diritti degli Interessati</h2>
                        <p>
                            I soggetti cui si riferiscono i dati personali hanno il diritto in qualunque momento di ottenere la conferma dell'esistenza o meno dei medesimi dati e di conoscerne il contenuto e l'origine, verificarne l'esattezza o chiederne l'integrazione o l'aggiornamento, oppure la rettificazione. Si ha il diritto di chiedere la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, nonché di opporsi in ogni caso, per motivi legittimi, al loro trattamento.
                        </p>
                        <p className="mt-4">
                            Le richieste vanno rivolte al Titolare del trattamento tramite email all'indirizzo: <a href="mailto:info@elettrotecnicags.it" className="text-brand-600 hover:underline">info@elettrotecnicags.it</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
