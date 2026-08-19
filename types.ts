import { ReactNode, ComponentType } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  detailedDescription: string;
  icon: any; // Using any for the Lucide component type in this context
  image: string;
  staff: StaffMember[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  avatar: string;
}