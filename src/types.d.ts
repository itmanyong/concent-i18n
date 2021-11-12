/*
 * @Author: itmanyong
 * @Date: 2021-11-12 09:59:13
 * @LastEditTime: 2021-11-12 10:44:50
 * @LastEditors: itmanyong
 * @Description:
 * @FilePath: \cxy-react-i18n\src\types.d.ts
 * ___
 */
import React from 'react';

export interface IAnyObj {
	[key: string]: string | number;
}
export interface ComputedObj {
	i18nMessage?: IAnyObj;
	i18nLangKeys?: Array<string>;
}

export function RenderI18nKeyToText(props: { path: string; msg?: IAnyObj }): React.FC;
export function Rt(props: { path: string; msg?: IAnyObj }): React.FC;

export function renderI18nKeyToText(path: string, msg?: IAnyObj): React.FC;
export function rt(path: string, msg?: IAnyObj): React.FC;
export function $t(path: string, msg?: IAnyObj): React.FC;

export function useI18nComputed(computedKey?: 'i18nMessage' | 'i18nLangKeys'): IAnyObj | ComputedObj | Array<string>;
export function useI18nText(path: string, msg?: IAnyObj): string;
export function useI18nState(moduleKey?: string): IAnyObj | string;

export function runI18n(): void;

export function setLang(lang: string): void;
export function sl(lang: string): void;
export function setMessage(message: IAnyObj): void;
export function sm(message: IAnyObj): void;
export function editMessage(message: IAnyObj): void;
export function em(message: IAnyObj): void;
export function delMessage(lang: string): void;
export function dm(lang: string): void;
export function getState(moduleKey?: 'lang' | 'message'): IAnyObj | string;
export function gs(moduleKey?: 'lang' | 'message'): IAnyObj | string;
export function getComputed(computedkey?: 'i18nMessage' | 'i18nLangKeys'): IAnyObj | ComputedObj | Array<string>;
export function gc(computedkey?: 'i18nMessage' | 'i18nLangKeys'): IAnyObj | ComputedObj | Array<string>;
export function getLocaleText(path: string, msg?: IAnyObj): string;
export function gt(path: string, msg?: IAnyObj): string;
export function $tt(path: string, msg?: IAnyObj): string;

declare type DefaultExport = {
	runI18n: typeof runI18n;
	RenderI18nKeyToText: typeof RenderI18nKeyToText;
	renderI18nKeyToText: typeof renderI18nKeyToText;
	useI18nComputed: typeof useI18nComputed;
	useI18nText: typeof useI18nText;
	useI18nState: typeof useI18nState;

	setLang: typeof setLang;
	setMessage: typeof setMessage;
	editMessage: typeof editMessage;
	delMessage: typeof delMessage;
	getState: typeof getState;
	getComputed: typeof getComputed;
	getLocaleText: typeof getLocaleText;
	sl: typeof sl;
	sm: typeof sm;
	em: typeof em;
	dm: typeof dm;
	gs: typeof gs;
	gc: typeof gc;
	Rt: typeof Rt;
	rt: typeof rt;
	$t: typeof $t;
	gt: typeof gt;
	$tt: typeof $tt;
};

declare let defaultExport: DefaultExport;
export default defaultExport;
