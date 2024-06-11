// useModalStore.js
import create from "zustand";

interface ModalState {
    [key: string]: {
        isOpen: boolean;
        props?: any;
    } | null;
}

const useModalStore = create<{
    modals: ModalState;
    openModal: (modalId: string, props?: any) => void;
    closeModal: (modalId: string) => void;
    closeSetModal: (modalId: string, props?: any) => void;
    isOpen: (modalId: string) => boolean;
}>((set, get) => ({
    modals: {},
    openModal: (modalId, props) =>
        set((state) => ({
            modals: { ...state.modals, [modalId]: { isOpen: true, props: props } },
        })),
    closeModal: (modalId) =>
        set((state) => ({
            modals: { ...state.modals, [modalId]: null },
        })),
    closeSetModal: (modalId, props) =>
        set((state) => ({
            modals: { ...state.modals, [modalId]: { isOpen: false, props: props } },
        })),
    isOpen: (modalId) => {
        const state = get();
        const modal = state.modals[modalId];
        return modal ? modal.isOpen : false;
    },
}));

export default useModalStore;
