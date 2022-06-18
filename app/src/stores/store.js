import { writable } from 'svelte/store';

export const mobileMenu = writable(false);

export const formMeasurement = writable(false);
export const formPhone = writable(false);
export const formEmail = writable(true);
export const formConsultation = writable(false);
export const formCalculation = writable(false);
export const formSearch = writable(false);

export const lengthCart = writable(0);
export const InCart = writable([]);
export const arrayProductsInCart = writable([]);

export const buttonSendOffer = writable(true);
export const buttonVisibleCatalog = writable(false);

export const pageTitle = writable('');

export const descriptionInfo = writable(true);
export const paymentInfo = writable(false);
export const deliveryInfo = writable(false);
