export type Note = {
    id: number
    title: string
    content: string
}

/* eslint-disable */
declare global {
    interface Window {
        SpeechRecognition: any;
        webkitSpeechRecognition: any;
    }
}
/* eslint-enable */