import type { Schema, Attribute } from '@strapi/strapi';

export interface LanguageLanguage extends Schema.Component {
  collectionName: 'components_language_languages';
  info: {
    displayName: 'Language';
  };
  attributes: {
    language: Attribute.String;
    level: Attribute.String;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
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
    uuid: Attribute.String & Attribute.Unique;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
  };
  attributes: {
    job: Attribute.String;
    startDate: Attribute.Date;
    endDate: Attribute.Date;
    city: Attribute.String;
    description: Attribute.Text;
    employer: Attribute.String;
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
    photo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
      'language.language': LanguageLanguage;
      'link.link': LinkLink;
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'contact.contact': ContactContact;
    }
  }
}
