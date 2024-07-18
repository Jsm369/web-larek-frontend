export const API_URL = `https://larek-api.nomoreparties.co/api/weblarek`;
export const CDN_URL = `https://larek-api.nomoreparties.co/content/weblarek`;

export const settings: { [key: string]: string } = {
	'софт-скил': 'soft',
	'хард-скил': 'hard',
	кнопка: 'button',
	дополнительное: 'additional',
	другое: 'other',
};

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^(\+7|8)?[\d]{10}$/;
export const addressRegex = /^(?=.*\d)(?=.*[a-zA-Zа-яА-ЯёЁ]).{6,}$/;

export const BasketStorageKey = 'basket-items';
