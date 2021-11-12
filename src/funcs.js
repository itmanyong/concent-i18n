import { getState as ccGetState, getComputed as ccGetComputed, reducer as ccReducer } from 'concent';
import { transI18nText } from './utils';
const MODEL_NAME = 'cxy_react_i18n';

// 获取计算属性值
export function getComputed(computedkey) {
	return computedkey ? ccGetComputed()[MODEL_NAME][computedkey] || '' : ccGetComputed()[MODEL_NAME];
}

// 获取模块值
export function getState(moduleKey) {
	return moduleKey ? ccGetState()[MODEL_NAME][moduleKey] || '' : ccGetState()[MODEL_NAME];
}

// 设置应用的语言包
export function setLang(lang) {
	ccReducer[MODEL_NAME].setLang(lang);
}

// 替换整个语言包
export function setMessage(message) {
	ccReducer[MODEL_NAME].setMessage(message);
}

// 新增|更新语言包
export function editMessage(message) {
	ccReducer[MODEL_NAME].editMessage(message);
}

// 删除语言包
export function delMessage(lang) {
	ccReducer[MODEL_NAME].delMessage(lang);
}

// 获取指定翻译值
export function getLocaleText(path, msg) {
	if (!path || !getComputed('i18nMessage')) return '';
	return transI18nText(path, getComputed('i18nMessage'), msg);
}
