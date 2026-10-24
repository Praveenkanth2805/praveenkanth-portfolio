export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  type?: "course" | "award";
  image?: string; // For future use when you want to show the certificate photo
};