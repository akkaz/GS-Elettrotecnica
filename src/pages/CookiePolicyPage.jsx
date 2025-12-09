import React from 'react';
import { Head } from '@unhead/react';
import { Cookie, Info, Settings } from 'lucide-react';

export default function CookiePolicyPage() {
    return (
        <div className="bg-white dark:bg-slate-950 min-h-screen pt-24 pb-12">
            <Head>
                <title>Cookie Policy - GS Elettrotecnica</title>
                <meta name="description" content="Informativa sui cookie di GS Elettrotecnica Automazioni Industriali Srl." />
            </Head>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 mb-6">
                        <Cookie className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Cookie Policy
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="lead text-lg text-slate-600 dark:text-slate-300 mb-8">
                        Questa Cookie Policy spiega cosa sono i cookie e come li utilizziamo. Ti invitiamo a leggere questa politica per capire che tipo di cookie utilizziamo, le informazioni che raccogliamo tramite i cookie e come tali informazioni vengono utilizzate.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Info className="w-6 h-6 text-brand-600" />
                            1. Cosa sono i cookie?
                        </h2>
                        <p>
                            I cookie sono piccoli file di testo che vengono salvati sul tuo computer o dispositivo mobile quando visiti un sito web. I cookie permettono al sito di "ricordare" le tue azioni e preferenze (come il login, la lingua, la dimensione dei caratteri e altre impostazioni di visualizzazione) per un periodo di tempo, in modo che tu non debba reinserirle ogni volta che torni sul sito o navighi da una pagina all'altra.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Come utilizziamo i cookie?</h2>
                        <p>
                            Il nostro sito utilizza i cookie per diverse finalità:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li><strong>Cookie Tecnici (Necessari):</strong> Questi cookie sono essenziali per il corretto funzionamento del sito web e per permetterti di navigare e utilizzare le sue funzionalità. Senza questi cookie, il sito non potrebbe funzionare correttamente.</li>
                            <li><strong>Cookie Analitici:</strong> Utilizziamo questi cookie per raccogliere informazioni su come i visitatori utilizzano il sito web, ad esempio quali pagine vengono visitate più spesso. Questi dati vengono raccolti in forma anonima e aggregata per aiutarci a migliorare il funzionamento del sito.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Settings className="w-6 h-6 text-brand-600" />
                            3. Gestione dei cookie
                        </h2>
                        <p>
                            Puoi controllare e/o eliminare i cookie come preferisci. Puoi cancellare i cookie già presenti nel tuo computer e impostare la maggior parte dei browser in modo da bloccarne l'installazione. Se scegli di fare questo, potresti dover modificare manualmente alcune preferenze ogni volta che visiti il sito e alcuni servizi o funzionalità potrebbero non funzionare.
                        </p>
                        <p className="mt-4">
                            Per maggiori informazioni su come gestire i cookie, puoi visitare le pagine di aiuto del tuo browser:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li><a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Google Chrome</a></li>
                            <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Mozilla Firefox</a></li>
                            <li><a href="https://support.apple.com/it-it/HT201265" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Apple Safari</a></li>
                            <li><a href="https://support.microsoft.com/it-it/help/4027947/microsoft-edge-delete-cookies" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Microsoft Edge</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
