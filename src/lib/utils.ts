import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phoneNumberString: string) {
	var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
	var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
	if (match) {
		return "" + match[1] + "." + match[2] + "." + match[3];
	}
	return null;
}
