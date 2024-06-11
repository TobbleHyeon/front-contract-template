import useModalStore from "../zustand/useModalStore";

type CustomHookModal = {
    open: (modalId: string, props?: any) => void;
    close: (modalId: string) => void;
    closeSet: (modalId: string, props?: any) => void;
    isOpen: (modalId: string) => boolean;
};

export function useModal(): CustomHookModal {
    const { openModal, closeModal, closeSetModal, isOpen } = useModalStore();

    function open(modalId: string, props: any = {}): void {
        openModal(modalId, props);
    }

    function close(modalId: string): void {
        closeModal(modalId);
    }

    function closeSet(modalId: string, props: any = {}): void {
        closeSetModal(modalId, props);
    }

    return { open, close, closeSet, isOpen };
}
