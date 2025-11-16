
export interface Testimonial {
  quote: string;
  name: string;
}

export interface Review {
  quote: string;
  name: string;
  stars: number;
}

export interface Service {
  title: string;
  hinglishTitle: string;
  reuseContent: string;
  enrichedContent: string;
  details: string[];
}

export interface Faq {
  question: string;
  answer: string;
}
