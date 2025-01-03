import { create } from 'zustand';

interface CartDropdownStore {
  isOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

export const useCartDropdown = create<CartDropdownStore>((set) => ({
  isOpen: false,
  setCartOpen: (open) => set({ isOpen: open }),
}));