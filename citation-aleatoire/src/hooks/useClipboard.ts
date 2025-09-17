import { useState } from "react";
import type { ClipboardInterface } from "../interfaces/ClipboardInterface";

export default function useClipboard(): ClipboardInterface {

  const [copied, setCopied] = useState<boolean>(false);

    const copy = async (text: string): Promise<void> => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Erreur lors de la copie :", err);
        }
    };

    return { copy, copied };
  
}
