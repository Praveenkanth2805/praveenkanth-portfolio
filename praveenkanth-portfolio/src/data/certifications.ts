import type { Certification } from "@/types/certification";

export const certifications: Certification[] = [
  {
    id: "python-genai",
    name: "Python with GenAI",
    issuer: "Course Completion", // Replace with actual issuer name if needed
    date: "May 2025 - Apr 2026",
    type: "course",
    // image: "/certificates/python-genai.jpg", (You can add this later when you have the digital file)
  },
  {
    id: "college-2.0",
    name: "College 2.0 - 1st Prize",
    issuer: "Staff Schedule Reminder System (Digital Solution)",
    date: "Sep 2025",
    type: "award",
  },
  {
    id: "quiz-competition",
    name: "Department Quiz Competition - 1st Prize",
    issuer: "College Department Function",
    date: "2023",
    type: "award",
  },
];