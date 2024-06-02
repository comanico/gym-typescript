export enum SelectedPage {
    Home = "home",
    About = "about",
    Articles = "artciles",
    ContactUs = "contact"
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ClassType {
    name: string;
    description?: string;
    image: string;
    content: string;
  }