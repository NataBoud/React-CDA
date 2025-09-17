export interface ClipboardInterface {
    copy: (text: string) => Promise<void>;
    copied: boolean;
}