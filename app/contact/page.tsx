// app/contact/page.tsx
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 bg-pixel-bg text-pixel-text min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* En-tête de page */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Lançons votre <span className="text-pixel-primary">projet</span>
            </h1>
            <p className="text-xl text-pixel-muted max-w-xl mx-auto">
              Vous avez une idée ? Discutons-en. Je réponds généralement en
              moins de 24 heures avec une analyse personnalisée.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-16 items-start">
            {/* Formulaire de contact */}
            <div className="md:col-span-7">
              <div className="bg-pixel-surface border border-pixel-border/40 rounded-3xl p-8 md:p-10 shadow-xs">
                <h2 className="text-2xl font-bold mb-8 tracking-tight">
                  Envoyez-moi un message
                </h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-pixel-text/80 mb-2">
                        Prénom & Nom
                      </label>
                      <input
                        type="text"
                        className="w-full px-5 py-3.5 bg-pixel-bg border border-pixel-border/60 text-pixel-text rounded-2xl focus:outline-none focus:border-pixel-primary focus:ring-2 focus:ring-pixel-primary/10 transition-all text-sm md:text-base placeholder:text-pixel-muted/50"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-pixel-text/80 mb-2">
                        Adresse Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-5 py-3.5 bg-pixel-bg border border-pixel-border/60 text-pixel-text rounded-2xl focus:outline-none focus:border-pixel-primary focus:ring-2 focus:ring-pixel-primary/10 transition-all text-sm md:text-base placeholder:text-pixel-muted/50"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-pixel-text/80 mb-2">
                      Type de projet
                    </label>
                    <div className="relative">
                      <select className="w-full px-5 py-3.5 bg-pixel-bg border border-pixel-border/60 text-pixel-text rounded-2xl focus:outline-none focus:border-pixel-primary focus:ring-2 focus:ring-pixel-primary/10 transition-all text-sm md:text-base appearance-none">
                        <option value="">Sélectionnez une option</option>
                        <option value="web">Site Web / Application Web</option>
                        <option value="mobile">
                          Application Mobile (React Native)
                        </option>
                        <option value="refonte">Refonte & Optimisation</option>
                        <option value="saas">Architecture SaaS / MVP</option>
                        <option value="autre">Autre besoin technique</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-pixel-text/80 mb-2">
                      Description du projet
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-5 py-3.5 bg-pixel-bg border border-pixel-border/60 text-pixel-text rounded-2xl focus:outline-none focus:border-pixel-primary focus:ring-2 focus:ring-pixel-primary/10 transition-all text-sm md:text-base placeholder:text-pixel-muted/50 resize-none"
                      placeholder="Décrivez brièvement vos objectifs, vos contraintes de délais ou les fonctionnalités clés..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pixel-primary hover:bg-opacity-95 text-white font-semibold py-4 rounded-2xl transition-all shadow-lg shadow-pixel-primary/10 text-base"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>

            {/* Informations directes (Sidebar) */}
            <div className="md:col-span-5 space-y-8">
              <div className="bg-pixel-surface border border-pixel-border/40 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-8 tracking-tight">
                  Canaux directs
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-pixel-primary/10 flex items-center justify-center text-pixel-primary shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-pixel-muted uppercase tracking-wider">
                        Email
                      </p>
                      <a
                        href="mailto:contact@pixelfasodigital.com"
                        className="text-pixel-text hover:text-pixel-primary transition-colors text-base font-medium"
                      >
                        contact@pixelfasodigital.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-pixel-primary/10 flex items-center justify-center text-pixel-primary shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-pixel-muted uppercase tracking-wider">
                        WhatsApp / Tel
                      </p>
                      <a
                        href="https://wa.me/226XXXXXXXX"
                        className="text-pixel-text hover:text-pixel-primary transition-colors text-base font-medium"
                      >
                        +226 XX XX XX XX
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-pixel-primary/10 flex items-center justify-center text-pixel-primary shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-pixel-muted uppercase tracking-wider">
                        Localisation
                      </p>
                      <p className="text-pixel-text text-base font-medium">
                        Ouagadougou, Burkina Faso
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-pixel-primary/10 flex items-center justify-center text-pixel-primary shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-pixel-muted uppercase tracking-wider">
                        Disponibilité
                      </p>
                      <p className="text-pixel-text text-base font-medium">
                        Lundi au Vendredi — 8h à 18h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Encadré d'appel découverte */}
              <div className="bg-pixel-text text-white rounded-3xl p-8 border border-white/5 relative overflow-hidden group">
                <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-pixel-primary/10 rounded-full blur-2xl group-hover:bg-pixel-primary/25 transition-colors duration-300" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-pixel-primary shrink-0">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      Un échange direct ?
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed mb-5">
                      Discutons de vos besoins d&apos;architecture ou de vos
                      défis de développement lors d&apos;un appel découverte de
                      20 minutes.
                    </p>
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-pixel-primary font-semibold text-sm hover:text-white transition-colors"
                    >
                      Réserver un créneau →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
