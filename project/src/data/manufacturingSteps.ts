import { 
  Pencil, 
  Binary, 
  Factory, 
  Hammer,
  Shield 
} from 'lucide-react';

export const manufacturingSteps = [
  {
    icon: Pencil,
    title: "DESIGN & ENGINEERING",
    description: "Each wheel begins with precision CAD modeling and FEA analysis to ensure optimal strength-to-weight ratio and aerodynamic efficiency."
  },
  {
    icon: Binary,
    title: "DIGITAL SIMULATION",
    description: "Advanced computational fluid dynamics and stress testing simulations validate the design under extreme conditions."
  },
  {
    icon: Factory,
    title: "FORGING PROCESS",
    description: "Premium aluminum alloy is forged under 8,000 tons of pressure, creating a grain structure that maximizes strength while minimizing weight."
  },
  {
    icon: Hammer,
    title: "PRECISION MACHINING",
    description: "5-axis CNC machines with micron-level precision transform the forged blank into the final intricate design."
  },
  {
    icon: Shield,
    title: "QUALITY ASSURANCE",
    description: "Each wheel undergoes rigorous testing including X-ray analysis, impact testing, and precise dimensional verification."
  }
];