/*
 * @Author: itmanyong
 * @Date: 2021-11-12 09:55:53
 * @LastEditTime: 2021-11-12 10:32:13
 * @LastEditors: itmanyong
 * @Description:
 * @FilePath: \cxy-react-i18n\src\hooks.js
 * ___
 */
import React, { useMemo } from 'react';
import { useConcent } from 'concent';
import { getType, transI18nText } from './utils';

const MODEL_NAME = 'cxy_react_i18n';
// 计算属性use
export function useI18nComputed(computedKey) {
	const { moduleComputed } = useConcent({ module: MODEL_NAME });

	const i18nComputed = useMemo(() => {
		return computedKey ? moduleComputed[computedKey] || '' : moduleComputed;
	}, [moduleComputed, computedKey]);

	return i18nComputed;
}

// 计算文本
export function useI18nText(path, msg) {
	const {
		moduleComputed: { i18nMessage },
	} = useConcent({ module: MODEL_NAME });

	const i18nText = useMemo(() => transI18nText(path, i18nMessage, msg), [path, msg, i18nMessage]);

	return i18nText;
}

// 计算存储值
export function useI18nState(moduleKey) {
	const { moduleState } = useConcent({ module: MODEL_NAME });

	const i18nState = useMemo(() => {
		return moduleKey ? moduleState[moduleKey] || '' : moduleState;
	}, [moduleState, moduleKey]);

	return i18nState;
}
