import type { Schema, Attribute } from '@strapi/strapi';

export interface TitlesTitles extends Schema.Component {
  collectionName: 'components_titles_titles';
  info: {
    displayName: 'Titles';
    description: '';
  };
  attributes: {
    link: Attribute.String & Attribute.DefaultTo<'Social links & Websites'>;
    skills: Attribute.String & Attribute.DefaultTo<'Skills'>;
    summary: Attribute.String & Attribute.DefaultTo<'Professional Summary'>;
    personal: Attribute.String & Attribute.DefaultTo<'Personal Details'>;
    education: Attribute.String & Attribute.DefaultTo<'Education'>;
    employment: Attribute.String & Attribute.DefaultTo<'Expirience'>;
    course: Attribute.String & Attribute.DefaultTo<'Courses'>;
    languages: Attribute.String & Attribute.DefaultTo<'Languages'>;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    uuid: Attribute.String;
  };
}

export interface LanguageLanguage extends Schema.Component {
  collectionName: 'components_language_languages';
  info: {
    displayName: 'Language';
    description: '';
  };
  attributes: {
    languagesName: Attribute.String;
    languagesLevel: Attribute.String;
    uuid: Attribute.String;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    description: '';
  };
  attributes: {
    job: Attribute.String;
    employer: Attribute.String;
    city: Attribute.String;
    description: Attribute.Text;
    startDate: Attribute.String;
    endDate: Attribute.String;
    uuid: Attribute.String;
  };
}

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    description: '';
  };
  attributes: {
    school: Attribute.String;
    degree: Attribute.String;
    specialty: Attribute.String;
    description: Attribute.Text;
    city: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    uuid: Attribute.String;
  };
}

export interface ContactContact extends Schema.Component {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'Contact';
    description: '';
  };
  attributes: {
    job: Attribute.String;
    firstName: Attribute.String;
    lastName: Attribute.String;
    email: Attribute.String;
    phone: Attribute.String;
    country: Attribute.String;
    city: Attribute.String;
    address: Attribute.Text;
    drivingLicense: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'titles.titles': TitlesTitles;
      'link.link': LinkLink;
      'language.language': LanguageLanguage;
      'experience.experience': ExperienceExperience;
      'education.education': EducationEducation;
      'contact.contact': ContactContact;
    }
  }
}
