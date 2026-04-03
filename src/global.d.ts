/* eslint-disable @typescript-eslint/no-explicit-any */

/** Extend the Window interface for Google Tag Manager dataLayer. */
interface Window {
    dataLayer?: Record<string, any>[];
}
