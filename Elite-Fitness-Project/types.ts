export enum PlanType {
  STANDARD = 'STANDARD',
  TRANSFORMATION = 'TRANSFORMATION',
}

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  height: number; // in cm
  weight: number; // in kg
  plan: PlanType | null;
  joinedDate: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: User | null;
}

export interface DietPlanRequest {
  goal: 'weight_loss' | 'muscle_gain' | 'maintenance';
  dietaryPreference: 'veg' | 'non_veg' | 'vegan';
  allergies: string;
}

// Helper to calculate BMI
export const calculateBMI = (weightKg: number, heightCm: number): string => {
  const heightM = heightCm / 100;
  return (weightKg / (heightM * heightM)).toFixed(1);
};