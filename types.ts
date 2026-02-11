
export type Language = 'en' | 'ar';

export interface Template {
  id: string;
  category: string; // تم التغيير من Category إلى string للسماح بفئات مخصصة
  title: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
  tags: string[];
}

export enum Category {
  Greetings = 'Greetings',
  Query = 'Query',
  Technical = 'Technical',
  SIM = 'SIM & Services',
  Roaming = 'Roaming',
  Closing = 'Closing'
}
