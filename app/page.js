
'use client'

import {
    Building2,
    Target,
    Briefcase,
    MapPin,
    Phone,
    Mail,
    CheckCircle,
    Truck,
    ShoppingCart,
    Users,
    Globe,
    School,
    Printer,
    Bike,
    Monitor
} from "lucide-react";

import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "../public/logo.png"
import ImageSrc from "../public/logo.png";
import ImageSrc2 from "../public/AdobeStock_143303680-scaled.jpg";
import ImgIdentite from "../public/idenrtité-dentreprise.jpg";
import ImageSrc3 from "../public/idenrtité-dentreprise.jpg";
import ImageSrc4 from "../public/projets.jpg";
import ImgServices from "../public/conseils_secteur_dactivité.jpg";
import ImageSrc5 from "../public/conseils_secteur_dactivité.jpg";

import  ImgLogistiques from "../public/stock logistique.png";
import ImgCommerce from "../public/121221.jpg";
import ImgPersonnel from "../public/misadisposition1.jpg";
import './globals.css'

export default function Home() {



    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="font-sans text-zinc-800 bg-white scroll-smooth">

            {/* ================= NAVBAR (ORIGINALE) ================= */}
            <nav className="fixed top-0 z-50 w-full bg-transparent backdrop-blur">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                    <ul className="hidden md:flex gap-6 text-black text-sm font-medium justify-end w-full">
                        <li><a href="#identite" className="hover:text-blue-600">Identité</a></li>
                        <li><a href="#vision" className="hover:text-blue-600">Vision</a></li>
                        <li><a href="#services" className="hover:text-blue-600">Services</a></li>
                        <li><a href="#filiales" className="hover:text-blue-600">Filiales</a></li>
                        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                    </ul>

                    <ul className="flex md:hidden gap-4 text-blue-600 justify-end w-full">
                        <a href="#identite"><Building2 size={20}/></a>
                        <a href="#vision"><Target size={20}/></a>
                        <a href="#services"><Briefcase size={20}/></a>
                        <a href="#contact"><Phone size={20}/></a>
                    </ul>
                </div>
            </nav>


            {/* ================= HERO ================= */}
            <section className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <p className="text-blue-600 font-semibold uppercase text-sm">
                            Société de services professionnels
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold">
                            CBLIND GROUP<br/>L’avenir est entre vos mains
                        </h1>
                        <p className="text-zinc-600 max-w-xl">
                            Assistance technique, administrative et transformation digitale
                            pour entreprises, institutions et particuliers.
                        </p>
                        <div className="flex gap-4">
                            <a href="#services" className="px-6 py-3 bg-blue-600 text-white rounded-lg">
                                Nos services
                            </a>
                            <a href="#contact" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg">
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
            </section>


            {/* ================= HERO (INCHANGÉ) ================= */}
            {/*<div className="pt-32 pb-24">*/}
            {/*    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">*/}
            {/*        <div className="space-y-6">*/}
            {/*            <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm">*/}
            {/*                Groupe de services professionnels*/}
            {/*            </p>*/}
            {/*            <h1 className="text-4xl md:text-5xl font-bold leading-tight">*/}
            {/*                Accompagner les entreprises<br/>vers une croissance durable*/}
            {/*            </h1>*/}
            {/*            <p className="text-zinc-600 max-w-xl">*/}
            {/*                CBLIND GROUP accompagne les organisations dans leur développement*/}
            {/*                administratif, stratégique et digital au Congo et à l’international.*/}
            {/*            </p>*/}
            {/*            <div className="flex gap-4">*/}
            {/*                <a href="#services"*/}
            {/*                   className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">*/}
            {/*                    Nos services*/}
            {/*                </a>*/}
            {/*                <a href="#contact"*/}
            {/*                   className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium">*/}
            {/*                    Contact*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="hidden md:flex relative flex items-center justify-center">*/}
            {/*            <motion.div*/}
            {/*                animate={{rotate: 360}}*/}
            {/*                transition={{repeat: Infinity, duration: 3, ease: "linear"}}*/}
            {/*                className="absolute w-66 h-66 rounded-full border-t-5"*/}
            {/*            />*/}
            {/*            <motion.div*/}
            {/*                animate={{rotate: -360}}*/}
            {/*                transition={{repeat: Infinity, duration: 2, ease: "linear"}}*/}
            {/*                className="absolute w-52 h-52 rounded-full border-b-5 border-yellow-500"*/}
            {/*            />*/}
            {/*            <Image src={ImageSrc} alt="CBLIND" width={260} height={140}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* ================= QUI SOMMES-NOUS ================= */}
            {/*<section id="identite" className="py-24 pt-2">*/}
            {/*    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4 items-center">*/}
            {/*        <Image src={ImageSrc3} alt="Qui sommes-nous" className="rounded-2xl shadow-lg"/>*/}
            {/*        <div>*/}
            {/*            <h2 className="text-3xl font-bold mb-4">QUI SOMMES-NOUS ?</h2>*/}
            {/*            <p className="text-zinc-600 leading-relaxed mb-4">*/}
            {/*                <strong>CBLIND GROUP</strong> est une entreprise congolaise spécialisée*/}
            {/*                dans l’accompagnement administratif, technique et stratégique*/}
            {/*                des entreprises, institutions et particuliers.*/}
            {/*            </p>*/}
            {/*            <p className="text-zinc-600">*/}
            {/*                Nous offrons des solutions fiables, professionnelles et adaptées*/}
            {/*                aux exigences du marché local et international.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* ================= IDENTITÉ ================= */}
            <section id="identite" className="py-24 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <Image src={ImgIdentite} alt="CBLIND" className="rounded-2xl shadow"/>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Présentation Générale</h2>
                        <p className="text-zinc-600 mb-3">
                            <strong>Nom :</strong> CBLIND Technologies (SARLU)
                        </p>
                        <p className="text-zinc-600 mb-3">
                            <strong>Siège :</strong> Brazzaville, République du Congo 🇨🇬
                        </p>
                        <p className="text-zinc-600 mb-3">
                            <strong>CBLIND GROUP</strong> est une entreprise congolaise dédiée à l’assistance
                            technique, administrative et à la transformation digitale
                            des organisations.
                        </p>
                        <p className="text-zinc-600">
                            Nous offrons des solutions fiables, professionnelles et adaptées
                            aux exigences du marché local et international.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= HISTORIQUE ================= */}
            <section className="py-24 bg-zinc-50">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Historique & Genèse</h2>
                    <p className="text-zinc-600 mb-4">
                        Fondée le <strong>24 mai 2021</strong> à Brazzaville par
                        <strong> PRISMAN NGOULOU</strong>, l’entreprise a débuté sous
                        le nom <strong>Fleur de Lys Inc.</strong>.
                    </p>
                    <p className="text-zinc-600">
                        Le nom <strong>CBLIND</strong>, issu de « Blind Confidence »,
                        symbolise la foi, la confiance et le potentiel de croissance
                        portés par son fondateur.
                    </p>
                </div>
            </section>


            {/* ================= MISSION & VISION ================= */}
            <section id="mission" className="py-24 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Mission</h3>
                        <p className="text-zinc-600">
                            Accompagner les organisations dans leur développement
                            opérationnel, administratif et digital à travers
                            des solutions personnalisées.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Vision</h3>
                        <p className="text-zinc-600">
                            Devenir un acteur majeur du développement économique
                            et digital au Congo et en Afrique.
                        </p>
                    </div>
                </div>
            </section>


            {/* ================= SERVICES ================= */}
            <section id="services" className="py-24 bg-zinc-50">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4 items-start">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Nos services</h3>
                        <


                            ul className="space-y-4">
                            {[
                                'Assistance administrative et gestion',
                                'Assistance administrative',
                                'Assistance commerciale & marketing',
                                'Assainissement, dératisation et désinfection',
                                'Assistance comptable & fiscale',
                                'Sécurité et gardiennage',
                                'Logistique, déménagement et transport',
                                'Mise à disposition du personnel',
                                'Communication et publicité',
                                'Gestion des communications digitales',
                                'Services sur mesure'
                            ].map(item => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle className="text-red-600 mt-1" size={20}/>
                                    <span className="text-zinc-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Image src={ImageSrc5} alt="Services" className="rounded-2xl mt-24 shadow-lg"/>
                </div>
            </section>


            {/* ================= SERVICES ================= */}
            {/*<section id="services" className="py-24 bg-zinc-50 scroll-mt-20">*/}
            {/*    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">*/}
            {/*        <div>*/}
            {/*            <h3 className="text-2xl font-bold mb-6">Domaines d’activité</h3>*/}
            {/*            <ul className="space-y-4">*/}
            {/*                {[*/}
            {/*                    "",*/}
            {/*                    "",*/}
            {/*                    "",*/}
            {/*                    "",*/}
            {/*                    ""*/}
            {/*                ].map(item => (*/}
            {/*                    <li key={item} className="flex gap-3">*/}
            {/*                        <CheckCircle className="text-red-600 mt-1" />*/}
            {/*                        <span>{item}</span>*/}
            {/*                    </li>*/}
            {/*                ))}*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*        <Image src={ImgServices} alt="Services" className="rounded-2xl shadow" />*/}
            {/*    </div>*/}
            {/*</section>*/}


            {/* ================= FILIALES ================= */}
            <section id="filiales" className="py-24 scroll-mt-20 bg-zinc-50">
                <div className="max-w-7xl mx-auto px-4">

                    <h2 className="text-3xl font-bold mb-10 text-center md:text-left">
                        Filiales & Activités
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            {title: "CBLIND Technologie", icon: Monitor},
                            {title: "Cblind Delivery", icon: Truck},
                            {title: "Cblind Multiservice", icon: Printer},
                        ].map((f) => {
                            const Icon = f.icon;

                            return (
                                <motion.div
                                    key={f.title}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true, amount: 0.2}}
                                    whileHover={{y: -8, scale: 1.05}}
                                    transition={{type: "spring", stiffness: 200}}
                                    className="relative rounded-2xl overflow-hidden shadow-lg bg-white p-28 text-center"
                                >
                                    <div
                                        className="absolute inset-0 bg-white/80 h-auto flex flex-col items-center justify-center  m-1 text-center rounded-xl"
                                    >
                                        <div
                                            className="w-16 h-16 bg-red-600 rounded-full mb-4 flex items-center justify-center"
                                        >
                                            <Icon className="w-8 h-8 text-white"/>
                                        </div>

                                        <h4 className="font-semibold text-xl">
                                            {f.title}
                                        </h4>
                                    </div>


                                </motion.div>
                            );
                        })}

                    </div>
                </div>
            </section>


            {/* ================= CARTES SERVICES ================= */
            }
            <section id="services" className="py-24 bg-zinc-50 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

                    {[
                        {
                            title: "Logistique",
                            img: ImgLogistiques,
                            icon: Truck,
                            desc: "Transport, livraison, déménagement et gestion logistique professionnelle."
                        },
                        {
                            title: "Commerce Général",
                            img: ImgCommerce,
                            icon: ShoppingCart,
                            desc: "Achat, vente et distribution de produits et marchandises diverses."
                        },
                        {
                            title: "Mise à disposition du personnel",
                            img: ImgPersonnel,
                            icon: Users,
                            desc: "Personnel qualifié et opérationnel pour entreprises et institutions."
                        }
                    ].map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, amount: 0.2}}
                                whileHover={{y: -8, scale: 1.05}}
                                transition={{type: "spring", stiffness: 200}}
                                className="relative rounded-2xl overflow-hidden shadow-lg bg-white"
                            >
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    className="h-64 w-full object-cover"
                                />

                                <div
                                    className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center px-5 text-center">
                                    <div
                                        className="w-12 h-12 bg-red-600 rounded-full mb-3 flex items-center justify-center">
                                        <Icon size={22} className="text-white"/>
                                    </div>
                                    <h4 className="relative font-semibold text-[20px] mb-2 text-red-600">{service.title}</h4>
                                    <p className="text-sm font-semibold text-black">{service.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}

                </div>
            </section>

            {/* ================= VALEURS ================= */}
            <section id="valeurs" className="py-6 bg-zinc-50 scroll-mt-20">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Nos valeurs</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            "Professionnalisme",
                            "Contrôle qualité",
                            "Satisfaction client",
                            "Tarifs abordables",
                            "Croissance durable"
                        ].map(v => (
                            <div key={v} className="bg-white p-6 rounded-xl shadow">
                                <CheckCircle className="mx-auto text-green-600 mb-2"/>
                                <p>{v}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CONTACT ================= */}
            <motion.section
                id="contact"
                className="py-4 bg-zinc-50"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
            >
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4">

                    {/* LEFT SIDE CONTACT INFO */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Nos contacts</h2>

                        {/* Adresse */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.2}}
                            whileHover={{y: -8, scale: 1.05}}
                            transition={{type: "spring", stiffness: 200}}
                            className="bg-white rounded-2xl shadow-lg p-8 text-center"
                        >
                            <MapPin className="mx-auto text-red-600 mb-4 w-6 h-6"/>
                            <p className="font-semibold">Adresse</p>
                            <p className="text-sm">N°35, Rue Bitala Moukoudo</p>
                        </motion.div>

                        {/* Téléphone & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, amount: 0.2}}
                                whileHover={{y: -8, scale: 1.05}}
                                transition={{type: "spring", stiffness: 200}}
                                className="bg-white rounded-2xl shadow-lg p-8 text-center"
                            >
                                <Phone className="mx-auto text-red-600 mb-4 w-6 h-6"/>
                                <p className="font-semibold">Téléphone</p>
                                <p className="text-sm">+242 04 475 79 79</p>
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, amount: 0.2}}
                                whileHover={{y: -8, scale: 1.05}}
                                transition={{type: "spring", stiffness: 200}}
                                className="bg-white rounded-2xl shadow-lg p-8 text-center"
                            >
                                <Mail className="mx-auto text-red-600 mb-4 w-6 h-6"/>
                                <p className="font-semibold">Email</p>
                                <p className="text-sm">contact@cblindgroup.com</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div
                        // variants={fadeUp}
                        // initial="hidden"
                        // whileInView="visible"
                        // viewport={{once: true, amount: 0.2}}
                        // whileHover={{y: -4, scale: 1.02}}
                        // transition={{type: "spring", stiffness: 200}}
                        className="bg-white p-8 rounded-2xl shadow space-y-4"
                    >
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input className="border p-3 rounded" placeholder="Votre nom"/>
                            <input className="border p-3 rounded" placeholder="Votre email"/>
                        </div>
                        <input className="border p-3 rounded w-full" placeholder="Sujet"/>
                        <textarea className="border p-3 rounded w-full h-32" placeholder="Message"/>
                        <button className="bg-red-600 text-white px-6 py-3 rounded-full w-fit">
                            Envoyer un message
                        </button>
                    </div>
                </div>
            </motion.section>

            {/* ================= FOOTER ================= */}
            <footer className="bg-zinc-900 text-white">
                <div className="max-w-7xl mx-auto px-4 py-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                    <div>
                        <h3 className="font-semibold text-lg mb-2">CBLIND GROUP</h3>
                        <p>Services professionnels & solutions d’entreprise.</p>
                    </div>
                    {/*<div>*/}
                    {/*    <p className="flex items-center gap-2"><MapPin size={16}/> Brazzaville, Congo</p>*/}
                    {/*    <p className="flex items-center gap-2"><Phone size={16}/> +242 04 475 79 79</p>*/}
                    {/*    <p className="flex items-center gap-2"><Mail size={16}/> contact@cblindgroup.com</p>*/}
                    {/*</div>*/}
                    {/*<div className="italic">« L’avenir est entre vos mains »</div>*/}
                    <div className="text-center text-xs text-zinc-400 mt-6 pb-4">
                        © {new Date().getFullYear()} CBLIND GROUP — Tous droits réservés
                    </div>
                </div>

            </footer>

        </div>
    )
}
