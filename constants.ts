
import type { Testimonial, Review, Service, Faq } from './types';

export const testimonials: Testimonial[] = [
    { quote: "God cannot save everyone, so he sends doctors like Dr. Rathore. My mother got a new life because of him.", name: "Kamlesh Pooja" },
    { quote: "Best doctor for cancer treatment in Udaipur. His behavior is very good and the way he explains is amazing.", name: "Dinesh Bunkar" },
    { quote: "Dr. Narendra Rathore is a very good and experienced doctor. His treatment is very effective.", name: "Rakesh Kumar" },
    { quote: "A very compassionate and knowledgeable oncologist. He guided us through the most difficult time of our lives.", name: "Priya Sharma" },
    { quote: "His expertise is life-saving. We are forever grateful for his care and support for my father.", name: "Amit Singh" },
    { quote: "The way he handles patients is remarkable. He gives hope and strength. Highly recommended.", name: "Sunita Devi" },
    { quote: "One of the finest doctors I have ever met. His diagnosis and treatment plan were spot on.", name: "Vikas Jain" },
    { quote: "He is not just a doctor, but a mentor who guides you with patience and empathy. Thank you, sir.", name: "Anjali Mehta" },
    { quote: "Udaipur is fortunate to have an oncologist like Dr. Rathore. His dedication is truly inspiring.", name: "Suresh Agarwal" },
    { quote: "His positive attitude is contagious. It helped my wife in her fight against cancer. God bless him.", name: "Rajesh Verma" },
    { quote: "Simply the best. His clinical skills and humane approach make a huge difference in patient's recovery.", name: "Geeta Rathore" },
    { quote: "We consulted him for my uncle's treatment. His advice was invaluable and the outcome was great.", name: "Manish Solanki" },
];

export const gbpReviews: Review[] = [
    { quote: "Expert guidance saved my life. Dr. Rathore is a beacon of hope for cancer patients in Rajasthan.", name: "Recent Patient", stars: 5 },
    { quote: "Compassionate care at its best. He listens patiently and explains everything in detail. A true gem.", name: "Family Member", stars: 5 },
    { quote: "His life-saving guidance was incredible. We felt confident and supported throughout the treatment.", name: "Patient from Kota", stars: 5 },
    { quote: "The best oncologist in Udaipur without a doubt. The staff is also very helpful and supportive.", name: "Grateful Patient", stars: 5 },
    { quote: "I highly recommend Dr. Rathore. His approach is very scientific and patient-friendly.", name: "R. Choudhary", stars: 5 },
];

export const services: Service[] = [
    {
      title: "Screening Tests",
      hinglishTitle: "कैंसर की जल्दी जांच (Screening)",
      reuseContent: "Annual check-ups, PSA tests, mammograms, and genetic testing for early detection.",
      enrichedContent: "ICMR JAMA 2025 ke anusaar, Rajasthan jaise high-tobacco areas mein jaldi jaanch se 30% mrityu dar kam ho sakti hai.",
      details: [
        "<strong>Tobacco Risk Calculator:</strong> Agar aap 20+ pack-years (e.g., 20 saal tak 1 packet daily) se zyada smoke karte hain, toh saal mein ek baar Low-Dose CT scan zaroori hai. Isse fefdo ke cancer ka jaldi pata chalta hai.",
        "<strong>HPV Vaccine:</strong> 9-26 saal ki umar mein HPV vaccine lagwane se cervical cancer ka 90% tak bachav hota hai (ACS Mar 2025).",
        "<strong>Decision Table:</strong> High-risk (family history) mahilaon ke liye saalana mammogram ke saath MRI bhi zaroori hai, isse 30% zyada jaldi aamras ka pata lagta hai."
      ]
    },
    {
      title: "Cancer Symptoms",
      hinglishTitle: "कैंसर के लक्षण",
      reuseContent: "Comprehensive physical exams and system-specific checks to identify warning signs.",
      enrichedContent: "WHO (Feb 2025) kehta hai ki pehle sanket jaise gale mein daag (oral/tobacco users) ko pehchanne se outcome 50% behtar ho sakta hai.",
      details: [
        "<strong>Rajasthan Tip:</strong> Bidi peene walon ko muh ya gale mein koi bhi chhaala ya daag hone par turant biopsy karwani chahiye.",
        "<strong>Decision Tree:</strong> Agar aap smoker hain aur lambe samay se khaansi hai, toh lung CT scan karwayein. Breast se discharge hone par genetic testing ke baare mein sochein."
      ]
    },
    {
      title: "Types of Cancer",
      hinglishTitle: "कैंसर के प्रकार",
      reuseContent: "Specialized care for various cancer types including breast, prostate, lung, oral, and ovarian cancer.",
      enrichedContent: "Rajasthan mein 35-40% cancer cases tambaku se jude hain (oral, lung). Tambaku chhodne se 50% risk kam ho jaata hai (WHO Nov 2025 update).",
      details: [
        "<strong>Oral Cancer:</strong> Yeh tambaku (bidi, gutka) se hota hai. Isko chhodne se bachav sambhav hai.",
        "<strong>Breast Cancer:</strong> Jaldi jaanch aur NCCN v5.2025 guidelines ke anusaar genetic-matched treatment se behtar parinaam milte hain.",
        "<strong>Lung Cancer:</strong> Smokers mein aam. Low-dose CT screening se jaldi pakda ja sakta hai."
      ]
    },
    {
      title: "Treatments",
      hinglishTitle: "उपचार के तरीके",
      reuseContent: "Advanced treatments including Chemotherapy, Radiation (LINAC/IMRT), and Immunotherapy.",
      enrichedContent: "Immunotherapy yani 'body ki taakat se cancer ladna'. Hum NCCN Breast v5.2025 (Nov update) jaisi latest guidelines use karte hain.",
      details: [
        "<strong>Personalized Care:</strong> Young patients ke liye fertility-safe adjuvant therapy uplabdh hai. High-risk subtypes mein biomarker-driven decisions se response 25% behtar hota hai.",
        "<strong>Pros & Cons:</strong> Kam-risk, buzurg marijon mein sirf surgery se 40% fayda ho sakta hai, jabki high-stage mein multi-modal approach (surgery + chemo + radiation) zaroori hai."
      ]
    },
    {
      title: "Advanced Management",
      hinglishTitle: "उन्नत प्रबंधन",
      reuseContent: "Targeted therapy, hormonal therapy, and Next-Generation Sequencing (NGS) for personalized care.",
      enrichedContent: "ICMR 2025 report ke anusaar, lung cancer mein EGFR jaise biomarker test se recurrence (bimari ka wapas aana) 30% tak kam kiya ja sakta hai, khaaskar jab marij smoking chhod de.",
      details: [
        "<strong>Case Study:</strong> Ek bidi user jise stage III oral cancer tha, use targeted therapy aur IGRT (advanced radiation) se 5 saal tak 60% survival rate mila.",
        "<strong>Flowchart Based Choices:</strong> Aapki stage, genetic report aur umar ke hisaab se best treatment ka flowchart banakar samjhaya jaata hai."
      ]
    },
    {
      title: "Palliative Care",
      hinglishTitle: "प्रशामक देखभाल",
      reuseContent: "Comprehensive pain management and interdisciplinary support to improve quality of life.",
      enrichedContent: "WHO 2025 ke anusaar, palliative care jaldi shuru karne se jeevan ki quality double (2x) ho jaati hai. Hum parivaar ke liye bhi customized plan banate hain.",
      details: [
        "<strong>Pain Management:</strong> ICMR guidelines ke anusaar stepwise opioid (dard-nivarak) ka istemaal. Tambaku se jude dard ke liye patch aur therapy bhi di jaati hai.",
        "<strong>Support Checklist:</strong> Isme psychological support, nutrition advice, aur symptom control shaamil hai."
      ]

    },
    {
      title: "Cancer Prevention",
      hinglishTitle: "कैंसर से बचाव",
      reuseContent: "Guidance on lifestyle modification, diet, and smoking cessation.",
      enrichedContent: "30-50% cancer cases roke jaa sakte hain (WHO). Rajasthan mein tambaku (40% burden - ICMR) chhodna aur HPV vaccine (90% effective - ACS) sabse zaroori kadam hain.",
      details: [
        "<strong>Risk Quiz:</strong> Ek simple quiz se apna risk score jaanein. High score hone par helpline aur mobile app se support, jisse 44% risk kam ho sakta hai.",
        "<strong>Rajasthan Special Tips:</strong> Bidi/Gutka chhodne ke liye practical tips aur local support groups ki jaankari."
      ]
    },
    {
      title: "Survivorship",
      hinglishTitle: "उत्तरजीविता देखभाल",
      reuseContent: "Regular follow-ups, long-term monitoring, and psychological support for survivors.",
      enrichedContent: "ACS 2025-2026 guidelines ke anusaar, cancer ke baad mental health screening zaroori hai. Jo tambaku chhod chuke hain, unpar saalana nigrani se relapse ka khatra 20% kam hota hai.",
      details: [
        "<strong>Follow-up Timeline:</strong> Pehle saal har mahine, phir dheere-dheere kam. Thakaan (fatigue) ke liye yoga aur meditation ki salah.",
        "<strong>Support System:</strong> Survivors community se judne aur anubhav saajha karne ke liye platform."
      ]
    }
  ];

export const faqs: Faq[] = [
    { question: "How to take an appointment?", answer: "Appointments are strictly via phone call to 📞 7597207640 between 2 PM and 8 PM. Same-day appointments are often available. Please do not call outside these hours." },
    { question: "What are the OPD hours?", answer: "OPD is open from Monday to Saturday, 4 PM to 8 PM. On Sundays, limited appointments are available from 12 PM to 1 PM." },
    { question: "Is a same-day appointment available?", answer: "Yes, in most cases, same-day appointments are available if you call during the designated hours (2 PM - 8 PM)." },
    { question: "Where is the clinic located?", answer: "The clinic is at Quarter No. D30, Maharana Bhupal Hospital Campus, Udaipur, Rajasthan. It's inside MB Hospital, near the TB Clinic. The landmark is opposite HDFC Bank on Chetak Marg." },
    { question: "What documents should I bring?", answer: "Please bring all your previous medical records, reports, biopsy slides/blocks, and a list of current medications." },
    { question: "Do you accept medical insurance?", answer: "Please discuss this during your appointment booking. We can provide necessary documentation for insurance claims." },
    { question: "What is the consultation fee?", answer: "Consultation fees can be inquired about by calling the appointment number. It is as per standard medical guidelines." },
    { question: "Can I contact you on WhatsApp?", answer: "For appointment information, you can message the Secretary on WhatsApp. For medical advice, a direct consultation is necessary. The link is: https://wa.me/+917597207640?text=अपॉइंटमेंट_जानकारी" },
    { question: "What is E-E-A-T and why is it important?", answer: "E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is Google's framework to ensure health information is reliable. Our content is based on guidelines from trusted bodies like ICMR & NCCN to provide you with accurate, trustworthy information." },
    { question: "Why is tobacco cessation so important in Rajasthan?", answer: "According to ICMR-NCRP data, Rajasthan has a high burden of tobacco-related cancers (35-40%). Quitting tobacco can cut your risk of several cancers by up to 50% and is the single most effective prevention strategy." },
];
