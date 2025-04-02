---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Dokumentacija o rekonstrukciji"
  text: "železničke stanice u Novom Sadu"
  tagline:  Detaljna analiza dokumentacije o rekonstrukciji železničke stanice u Novom Sadu
  # image:
  #   src: /nadstresnica-hero.png
  #   alt: VitePress
  actions:
    # - theme: brand
      # text: Nadstrešnica
      # link: /#
    - theme: brand
      text: 🔎 Pretraga
      link: https://pretraga.nadstresnica.info/
    - theme: brand
      text: 🤖 ChatBot
      link: https://ai.nadstresnica.info/
    - theme: brand
      text: 👀 Vizuelizacija
      link: http://graf.nadstresnica.info/
    - theme: brand
      text: 🗃️ Dokumentacija
      link: /dokumentacija
      

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

# Obaveštenja:
> [!WARNING] (27.3.2025.)  
>  
> U toku je implementacija **Graph-Enhanced Entity and Relationship Extraction**:  
> <a href="https://arxiv.org/abs/2410.05779" rel="nofollow" target="_blank">
> <img src="https://camo.githubusercontent.com/75124114ae539f960521098bc31b590246873173eef5b4329622b55ceda6788b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f61725869762d323431302e30353737392d623331623162" data-canonical-src="https://img.shields.io/badge/arXiv-2410.05779-b31b1b" style="max-width: 100%;">
> </a>
>
>---
>
> 🔹 Obrada podataka pomoću LLM-a — vršimo automatsko prepoznavanje ključnih entiteta kao što su imena, datumi, lokacije i događaji iz tekstualne dokumentacije.  
>  
> 🔹 Identifikacija i mapiranje odnosa između entiteta radi izgradnje sveobuhvatnog **grafičkog modela znanja** koji osvetljava međusobne veze i obrasce unutar celokupne kolekcije dokumenata.  
>  
> 🔹 Korišćenje napredne segmentacije dokumenata za efikasnije pretraživanje i precizno pronalaženje relevantnih informacija bez potrebe za analizom cele dokumentacije.
>
>---
>
> **Kategorije dokumenata koje su u pr`ogresu:**
> - ✅ 📂 **1_PROJEKAT** [VRS]
> - ✅ 📂 **2_NADSTRESNICA** [VRS]
> - ✅ 📂 **3_IZVESTAJI_MESECNI** [VRS]
> - ✅ 📂 **4_IZVESTAJI_NEDELJNI** [VRS]
> - ✅ 📂 **5_TEHNICKI_PREGLEDI** [VRS]
> - ✅ 📂 **6_PRIKLJUCENJA** [VRS]
> - ✅ 📂 **7_POKRAJNSKA_INSPEKCIJA** [VRS]
> - ✅ 📂 **8_DIREKCIJA_ZA_ZELEZNICE_I_OPSTA_AKTA** [VRS]
> - 🚧  *9_CEOP_DOKUMENTACIJA_IZ_APR* [VRS] 
> - - ✅  **199_ceop_dok_lokacijski_uslovi** 
> - - 🚧  *200_ceop_dok_gradjevinska_dozvola* **(🚨...U TOKU...🚨)**
> - - ✅  **201_ceop_dok_PZI_saglasnost_mup_vanredne_situacije** 
> - - 🚧  *202_ceop_dok_prijava_radova* 
> - - 🚧  *203_ceop_dok_prijava_zavrsetka_izrade_temelja* 
> - - 🚧  *204_ceop_dok_prijava_zavrsetka_objekta_konstrukt_smislu* 
> - - 🚧  *205_saglasnost_insvestitora_finensijera_na_izbor_podizvodjaca* 
> - 🚧  *10_DOK_PO_DODATNIM_ZAHTEVIMA* [VRS]
> - 🚧  *11_DOKUMENTA_ZELEZNICA_SRBIJE* [IžS]
> - 🚧  *12_VJT_NS_DOKUMENTACIJA* [VJT]
> - ✅ 📂   **13_EMAIL_MSG_PODACI_EXTRACTED** [EMAIL]
> - ✅ 📂   **14_OFFICE_DATOTEKE_EXTRACTED** [OFFICE]

> [!IMPORTANT] (24.03.2025.) 
> 
> 📢 **Veliki korak napred u istraživanju incidenta sa padom nadstrešnice na železničkoj stanici u Novom Sadu – dokumentacija je sada dostupna u interaktivnoj formi uz pomoć veštačke inteligencije!**
> 
> 🤖 **Chatbot (pitanja & odgovori)**:
> https://ai.nadstresnica.info
> 
> 🔎 **Pretraga dokumenata**:
> https://pretraga.nadstresnica.info
> 
> -> **Ova dva alata zajedno omogućavaju brže, jednostavnije i fokusiranije istraživanje velike količine dokumenata – i postavljaju odličnu osnovu za sledeće faze analize.**
> 
> 🧠 **Tehnički detalji:**
>
> OCR je trenutno realizovan putem pytesseract i PIL biblioteka – uz ograničeni kvalitet (u toku je unapređenje kroz integraciju naprednijih AI OCR rešenja).
> Za rad je iskorišćena OpenAI infrastruktura:
> 
> - Embeddings: text-embedding-3-small
> - Inference: gpt-4o-mini
> - Vector database: Qdrant
> 
> 🚀 **Šta nas čeka u FAZI 3?**
>
> ────୨ৎ────
>
> 👉 Poboljšanje OCR-a.
> 
> 👉 Kreiranje javno dostupnih "Hugging Face" datasetova.
> 
> 👉 I naravno – nove ideje koje će iz svega ovoga sigurno proizaći.
> 

> [!WARNING] (17.3.2025.) 
> 
> U toku je priprema dokumentacije za obradu podataka upotrebom alata veštačke inteligencijei to:
>
> ✅ Izvlačenje svih pdf stranica i celokupne dokumentacije.
>
> ✅  Učitavanje na s3 bucket (...18.3.2025...)
>
> 🚧 Priprema sistema za distribuiranu obradu (...In Progress...)
>
> 🔹 Obrada podataka.
>

> [!IMPORTANT] (06.03.2025.) 
> 
> 🚨🚨 **🔹 JUPiiiiiiiiiiiii...stiže nam još dokumentacije !!!!!!!🔹** 🚨🚨
>

> [!WARNING] (28.2.2025.) 
> 
> Ubačene Email (.msg) poruke i (office) dokumenti i dostupni za pretragu.
> 
> 🔹 Kategorije dokumenata uključuju:
> - 📂 1_PROJEKAT [VRS]
> - 📂 2_NADSTRESNICA [VRS]
> - 📂 3_IZVESTAJI_MESECNI [VRS]
> - 📂 4_IZVESTAJI_NEDELJNI [VRS]
> - 📂 5_TEHNICKI_PREGLEDI [VRS]
> - 📂 6_PRIKLJUCENJA [VRS]
> - 📂 7_POKRAJNSKA_INSPEKCIJA [VRS]
> - 📂 8_DIREKCIJA_ZA_ZELEZNICE_I_OPSTA_AKTA [VRS]
> - 📂 9_CEOP_DOKUMENTACIJA_IZ_APR [VRS]
> - 📂 10_DOK_PO_DODATNIM_ZAHTEVIMA [VRS]
> - 📂 11_DOKUMENTA_ZELEZNICA_SRBIJE [IžS]
> - 📂 12_VJT_NS_DOKUMENTACIJA [VJT]
> - 📂 13_EMAIL_MSG_PODACI_EXTRACTED [EMAIL]
> - 📂 14_OFFICE_DATOTEKE_EXTRACTED [OFFICE]

> [!IMPORTANT] (27.2.2025.) 
> 
> ✅ Raspakovane sve email poruke (**.msg**) i konvertovani u **.PDF** format.
> - Pristup email (**.msg**) porukama na linku: [EMAIL PORUKE](https://drive.google.com/drive/folders/16v4lwUwaccrvUep615EFIQLhw1q4QR_t?usp=sharing)
>
> ✅ Konvertovani svi **.docx, .doc, .xlsx, .xls** dokumenti u **.PDF** format.
> - Pristup **office dokumentima** na linku: [OFFICE DOKUMENTA](https://drive.google.com/drive/folders/1sc00PImY5CRldESG-z6ECL1ZoB8lQT9k?usp=sharing)
>
> 🚨🚨 **U toku je ubacivanje gorespomenutih dokumenata u *search engine* 🚨🚨**
>


> [!WARNING] (26.2.2025.) 
> 
> U toku je ekstrakcija svih datoteka koji nemaju **.PDF** ekstenziju (**.msg, .docx, .xlsx, .pptx, ...itd.**) i njihovo konvertovanje u .PDF format.
> Pre svega se fokusiramo na **.msg** datoteke, jer su to najčešće e-mail poruke koje sadrže važne informacije.
>

> [!IMPORTANT] (24.2.2025.) 
> 
> 🚨🚨 **🔹 FAZA 1 – ZAVRŠENA! what a ride...🔹** 🚨🚨
>
> ---
> 
> 📢 **Šta to znači?**
> Celokupna dokumentacija o urušavanju nadstrešnice na železničkoj stanici u Novom Sadu sada je dostupna za pretragu:
> 
> ➡️ https://pretraga.nadstresnica.info/
> 
> 🔎 **Dokumentacija je organizovana po izvorima:**
>
> ────୨ৎ────
>
> - ✅ Vlada Republike Srbije (VRS)
> - ✅ Infrastruktura železnice Srbije (IžS)
> - ✅ Više javno tužilaštvo Novi Sad (VJT)
> 
> 🔹 Kategorije dokumenata uključuju:
> - 📂 1_PROJEKAT [VRS]
> - 📂 2_NADSTRESNICA [VRS]
> - 📂 3_IZVESTAJI_MESECNI [VRS]
> - 📂 4_IZVESTAJI_NEDELJNI [VRS]
> - 📂 5_TEHNICKI_PREGLEDI [VRS]
> - 📂 6_PRIKLJUCENJA [VRS]
> - 📂 7_POKRAJNSKA_INSPEKCIJA [VRS]
> - 📂 8_DIREKCIJA_ZA_ZELEZNICE_I_OPSTA_AKTA [VRS]
> - 📂 9_CEOP_DOKUMENTACIJA_IZ_APR [VRS]
> - 📂 10_DOK_PO_DODATNIM_ZAHTEVIMA [VRS]
> - 📂 11_DOKUMENTA_ZELEZNICA_SRBIJE [IžS]
> - 📂 12_VJT_NS_DOKUMENTACIJA [VJT]
> 
> 🎢 **Malo statistike:**
>
> ────୨ৎ────
>
> - 🗃️ Ukupno dokumenata: 20.327
> - 📄 Broj stranica: 531.289
> - 📂 Broj foldera: 3.791
> 
> 🚀 **Šta dalje? 🔹FAZA 2🔹 – Aktiviranje AI alata!** 
>
> ────୨ৎ────
>
> Kako bismo unapredili pretragu i analizu dokumentacije, planiramo implementaciju AI tehnologija (LLM, NER, NLP itd.).
>
> Pozivamo sve relevantne stručnjake da se uključe i svojim ekspertizama pomognu u definisanju i usmeravanju AI rešenja. Svaka sugestija, ideja i predlog su dobrodošli!
> 
>

> [!WARNING] (22.2.2025.) 
> 
> ✅ 9_CEOP_DOKUMENTACIJA_IZ_APR: **GOTOVA**
> 
> Ostale još jedna kategorije dokumenata za ekstrakciju podataka koja su u procesu:
>
> 📌 10_DOK_PO_DODATNIM_ZAHTEVIMA
>
>Poboljšan UI pretrage na linku: [PRETRAGA DOKUMENTACIJE](https://pretraga.nadstresnica.info/)
>

> [!IMPORTANT] (20.2.2025.) 
> 
> ✅ 12_VJT_NS_DOKUMENTACIJA **GOTOVA**
> 
> Ostale još dve kategorije dokumenata za ekstrakciju podataka koja su u procesu:
>
> 📌 9_CEOP_DOKUMENTACIJA_IZ_APR
>
> 📌 10_DOK_PO_DODATNIM_ZAHTEVIMA
>
>

> [!WARNING] (18.2.2025.) Još tri kategorije dokumenata su u procesu ekstrakcije podataka, dostupna preliminarna pretraga.
> 
> <u>Kategorije koje su ostale da se "izvuku" podaci:</u>
>
> 📌 9_CEOP_DOKUMENTACIJA_IZ_APR
>
> 📌 10_DOK_PO_DODATNIM_ZAHTEVIMA
>
> 📌 12_VJT_NS_DOKUMENTACIJA
>
> ---
>
> 🔎 **Pretraga dostupna na linku: [PRETRAGA DOKUMENTACIJE](https://pretraga.nadstresnica.info/)**
>
> 📂 **Pristup Dokumentaciji: [DOKUMENTACIJA [ G-DRIVE ] po folderima](https://drive.google.com/drive/folders/1JnY0cUPzIX9tSkZ-cFRiDXdSgtqmhvYd?usp=sharing)**

> [!IMPORTANT] (13.2.2025.) 
> 
> - U procesu je EXTRAKCIJA podataka iz .pdf, docx, ...itd. formata i spremanje za pretragu i analizu.

> [!WARNING] (12.2.2025.) Sva dokumentacija je preuzeta i raspakovana.
> 
> Više informacija na linku: **[Dokumentacija](/dokumentacija)**
> 

> [!IMPORTANT] (9.2.2025.) 
> 
> - U procesu je EXTRAKCIJA .rar, .zip dokumentacije.
>

> [!WARNING] (8.2.2025.)
> - Dostupna dokumenticija na **G-DRIVE-u** i **ZIP** formatu, a u vezi celokupnog projekta izrade brze pruge Beograd-Subotica:
>
> **[DOKUMENTACIJA [ G-DRIVE ] po folderima](https://drive.google.com/drive/folders/1JnY0cUPzIX9tSkZ-cFRiDXdSgtqmhvYd?usp=sharing)**
>
<!-- > **[SVA DOKUMENTACIJA [ ZIP ] file format](https://drive.google.com/file/d/1_Fa0NNSXHu1Nmwsz5wWEJYA5lNXP8BoD/view?usp=sharing)** -->


---

> [!IMPORTANT] (7.2.2025.) 
> 
> - U procesu je preuzimanje dokumentacije o rekonstrukciji železničke stanice u Novom Sadu.
>
> - Prvo sređujemo 10. tačku: **[Dokumentacija Po Dodatnim Zahtevima](https://www.srbija.gov.rs/dokument/845935/dokumenta-ministarstva-gradjevinarstva-saobracaja-i-infrastrukture-koja-se-ticu-moguceg-izvrsenja-krivicnog-dela-povodom-pada-nadstresnice-na-zeleznickoj-stanici-u-novom-sadu-1-novembra-2024-godine-22.php)**

