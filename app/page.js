'use client'

import {
  Building2,
  Target,
  Briefcase,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageSrc from "../public/logo.png";
import ImageSrc2 from "../public/AdobeStock_143303680-scaled.jpg";
import ImageSrc3 from "../public/idenrtité-dentreprise.jpg";
import ImageSrc4 from "../public/projets.jpg";
import ImageSrc5 from "../public/conseils_secteur_dactivité.jpg";
import './globals.css'
export default function Home() {
  return (
      <div className="relative font-sans text-zinc-800 scroll-smooth">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-l from-blue-500/40 to-white z-0" />

        {/* Main Content */}
        <div className="relative z-10">
          {/* ================= NAVBAR ================= */}
          <nav className="fixed top-0 z-50 w-full bg-transparent backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
              {/* MENU GAUCHE */}
              <ul className="hidden md:flex gap-6 text-black text-sm font-medium justify-end w-full">
                <li><a href="#identite" className="hover:text-blue-600">Identité</a></li>
                <li><a href="#vision" className="hover:text-blue-600">Vision</a></li>
                <li><a href="#services" className="hover:text-blue-600">Services</a></li>
                <li><a href="#filiales" className="hover:text-blue-600">Filiales</a></li>
                <li><a href="#positionnement" className="hover:text-blue-600">Positionnement</a></li>
                <li><a href="#objectifs" className="hover:text-blue-600">Objectifs</a></li>
                <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
              </ul>

              {/* MOBILE ICONS */}
              <ul className="flex md:hidden gap-4 text-blue-600 justify-end w-full">
                <a href="#identite"><Building2 size={20}/></a>
                <a href="#vision"><Target size={20}/></a>
                <a href="#services"><Briefcase size={20}/></a>
                <a href="#contact"><Phone size={20}/></a>
              </ul>
            </div>
          </nav>
          {/* ================= HERO ================= */}
          <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                  Groupe de services professionnels
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Accompagner les entreprises<br/>vers une croissance durable
                </h1>
                <p className="text-zinc-600 max-w-xl">
                  CBLIND GROUP accompagne les organisations dans leur développement
                  administratif, stratégique et digital au Congo et à l’international.
                </p>
                <div className="flex gap-4">
                  <a href="#services" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">
                    Nos services
                  </a>
                  <a href="#contact"
                     className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium">
                    Contact
                  </a>
                </div>
              </div>
              <div className="hidden md:flex relative flex items-center justify-center">
                <motion.div
                    animate={{rotate: 360}}
                    transition={{repeat: Infinity, duration: 3, ease: "linear"}}
                    className="absolute w-66 h-66 rounded-full border-t-5"
                />
                <motion.div
                    animate={{rotate: -360}}
                    transition={{repeat: Infinity, duration: 2, ease: "linear"}}
                    className="absolute w-52 h-52 rounded-full border-b-5 border-yellow-500"
                />
                <Image src={ImageSrc} alt="CBLIND" width={260} height={140}/>
              </div>
            </div>
          </div>



          {/* ================= IDENTITÉ ================= */}
          {/* ================= IDENTITÉ ================= */}
          <div id="identite" className="scroll-mt-24 py-20 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
              {/* Image à gauche */}
              <div className="flex justify-center">
                <Image
                    src={ImageSrc3}
                    alt="Identité CBLIND GROUP"
                    width={600}
                    height={600}
                    className="rounded-lg shadow"
                />
              </div>

              {/* Texte à droite */}
              <div className="space-y-4 text-sm">
                <h2 className="text-blue-600 text-lg font-semibold tracking-wide">
                  Identité de la société
                </h2>
                <p>
                  <strong>CBLIND GROUP</strong> est une entreprise spécialisée dans
                  l’assistance administrative, technique et la transformation digitale
                  des organisations.
                </p>

                <div className="grid sm:grid-cols-1 gap-2   p-4 ">
                  <p>
                    <span className="font-medium text-black">Forme juridique :</span><br/>
                    Société à Responsabilité Limitée (SARL)
                  </p>
                  <p>
                    <span className="font-medium text-black">Date de création :</span><br/>
                    24 mai 2021
                  </p>
                  <p>
                    <span className="font-medium text-black">Siège social :</span><br/>
                    Brazzaville, République du Congo
                  </p>
                </div>

                <p className="italic text-blue-700">« L’avenir est entre vos mains »</p>
              </div>
            </div>
          </div>

          {/* ================= VISION & MISSION ================= */}
          <section id="vision" className="scroll-mt-24 py-20 px-4 ">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
              {/* Texte à gauche */}
              <div className="space-y-4 text-sm">
                <h2 className="text-blue-600 text-lg font-semibold tracking-wide">
                  Vision & Mission
                </h2>
                <p><strong>Vision :</strong> devenir un acteur majeur du développement économique et digital.</p>
                <p><strong>Mission :</strong> accompagner les entreprises par des services fiables et adaptés.</p>
              </div>

              {/* Image à droite */}
              <div className="flex justify-center">
                <Image
                    src={ImageSrc2}
                    alt="Vision & Mission"
                    width={600}
                    height={600}
                    className="rounded-lg shadow"
                />
              </div>
            </div>
          </section>

          {/* ================= DOMAINES D’ACTIVITÉ ================= */}
          <section id="services" className="scroll-mt-24 py-20 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
              <div className="flex justify-center">
                <Image
                    src={ImageSrc5}
                    alt="Domaines d’activité"
                    width={600}
                    height={600}
                    className="rounded-lg shadow"
                />
              </div>

              {/* Texte à gauche */}
              <div className="space-y-4 text-sm">
                <h2 className="text-blue-600 text-lg font-semibold tracking-wide">
                  Domaines d’activité
                </h2>
                <ul className="list-disc pl-6 text-black space-y-2">
                  <li>Assistance administrative</li>
                  <li>Assistance commerciale & marketing</li>
                  <li>Gestion comptable et fiscale</li>
                  <li>Ressources humaines</li>
                  <li>Communication & services sur mesure</li>
                </ul>
              </div>

              {/* Image à droite */}

            </div>
          </section>

          {/* ================= FILIALES & PROJETS ================= */}
          <section id="filiales" className="scroll-mt-24 py-20 px-4 ">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
              {/* Texte à gauche */}
              <div className="space-y-4 text-sm">
                <h2 className="text-blue-600 text-lg font-semibold tracking-wide">
                  Filiales & Projets
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "CBLIND Technologie",
                    "Brain School",
                    "Binder",
                    "Lightness",
                    "Cblind Delivery",
                    "Cblind Multi-Service",
                    "Happiness",
                  ].map(f => (
                      <div key={f} className="bg-white rounded-lg shadow p-3">{f}</div>
                  ))}
                </div>
              </div>

              {/* Image à droite */}
              <div className="flex justify-center">
                <Image
                    src={ImageSrc4}
                    alt="Filiales & Projets"
                    width={600}
                    height={600}
                    className="rounded-lg shadow"
                />
              </div>

            </div>
          </section>

          {/* ================= POSITIONNEMENT & OBJECTIFS ================= */}
          <section id="position-objectifs" className="scroll-mt-24 py-20 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
              {/* Positionnement stratégique */}
              <div className="   p-6 space-y-2 text-sm">
                <h2 className="text-blue-600 text-lg font-semibold tracking-wide">
                  Positionnement stratégique
                </h2>
                <p className="text-black">
                  Plateforme de soutien transverse offrant une externalisation flexible
                  des fonctions support des organisations.
                </p>
              </div>

              {/* Objectifs futurs */}
              <div className="  p-6 space-y-2 text-sm">
                <h2 className="text-blue-600 text-lg font-semibold tracking-wide">
                  Objectifs futurs
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Renforcer la présence au Congo</li>
                  <li>Étendre les services numériques</li>
                  <li>Déploiement international</li>
                  <li>Création de nouvelles filiales</li>
                </ul>
              </div>
            </div>
          </section>




          {/* ================= FOOTER ================= */}
          <footer id="contact" className="bg-blue-700 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 text-sm">
              <div>
                <h3 className="font-semibold text-lg mb-2">CBLIND GROUP</h3>
                <p>Assistance administrative, technique et digitale.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <p className="flex gap-2 items-center"><MapPin size={16}/> Brazzaville, Congo</p>
                <p className="flex gap-2 items-center"><Phone size={16}/> +242 06 9472219</p>
                <p className="flex gap-2 items-center"><Mail size={16}/> cblindgroupsarlu@gmail.com</p>
              </div>
              <div>
                <p className="italic">« L’avenir est entre vos mains »</p>
              </div>
            </div>
            <div className="text-center text-sm opacity-80 pb-4">
              © {new Date().getFullYear()} CBLIND GROUP — Tous droits réservés
            </div>
          </footer>

        </div>
      </div>
  );
}