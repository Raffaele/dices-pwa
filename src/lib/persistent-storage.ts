export const persistentStorage = {
  getFields,
  saveFields
};

const APP_KEY = 'dices-pwa';
const FIELDS_KEY = 'stored-fields';

function getFields() {
  return getItem(FIELDS_KEY) || [{
    dices: [6],
  }];
}

function saveFields(storedFields: any[]) {
  setItem(FIELDS_KEY, storedFields);
}

function getItem(key: string) {
  const storedValue = localStorage.getItem(getFullKey(key));
  if (!storedValue) return null;
  try {
    return JSON.parse(storedValue);
  } catch (ex) {
    return null;
  }
}

function setItem(key: string, value: Record<string, any>) {
  const toStore = JSON.stringify(value);
  localStorage.setItem(getFullKey(key), toStore);
}

function getFullKey(partialKey: string) {
  return `${APP_KEY}:${partialKey}`;
}
