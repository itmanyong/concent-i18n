/*
 * @Author: itmanyong
 * @Date: 2021-11-12 09:55:53
 * @LastEditTime: 2021-11-12 14:05:02
 * @LastEditors: itmanyong
 * @Description:
 * @FilePath: \concent-i18n\src\model.js
 * ___
 */
import { configure, getState } from 'concent';
import { getType, merge } from './utils';
const i18nModel = {
	state: {
		lang: '',
		message: '',
	},
	computed: {
		// 当前语言包数据
		i18nMessage: {
			depKeys: ['lang', 'message'],
			compare: true,
			fn: ({ lang, message }) => (lang && message && message[lang] ? message[lang] : {}),
		},
		// 已有语言包langs
		i18nLangKeys: {
			depKeys: ['message'],
			compare: true,
			fn: ({ message }) => {
				return Object.keys(message);
			},
		},
	},
	reducer: {
		// 设置lang
		setLang: (lang, ms, fctx) => {
			if (lang && fctx.moduleComputed.i18nLangKeys.includes(lang)) {
				return {
					lang,
				};
			}
		},
		// 替换整个语言包
		setMessage: (message) => {
			if (message && getType(message).type === 'object') {
				return { message: { ...message } };
			}
		},
		// 新增|更新语言包
		editMessage: (message, ms, fctx) => {
			if (message && getType(message).type === 'object') {
				return { message: { ...merge(ms.message, message) } };
			}
		},
		// 删除语言包
		delMessage: (lang, ms, fctx) => {
			if (lang && lang != ms.lang && fctx.moduleComputed.i18nLangKeys.includes(lang)) {
				delete ms.message[lang];
				return { message: { ...ms.message } };
			}
		},
	},
};

export function registerI18n() {
	if (!getState('cxy_react_i18n')) {
		configure('cxy_react_i18n', i18nModel);
	}
}
