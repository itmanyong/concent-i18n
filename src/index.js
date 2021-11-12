import { RenderI18nKeyToText as _RenderI18nKeyToText, renderI18nKeyToText as _renderI18nKeyToText } from './renderLocaleText';
import { useI18nComputed as _useI18nComputed, useI18nText as _useI18nText, useI18nState as _useI18nState } from './hooks';
import {
	setLang as _setLang,
	setMessage as _setMessage,
	editMessage as _editMessage,
	delMessage as _delMessage,
	getState as _getState,
	getComputed as _getComputed,
	getLocaleText as _getLocaleText,
} from './funcs';
import {registerI18n as _registerI18n} from './model';

export const RenderI18nKeyToText = _RenderI18nKeyToText;
export const renderI18nKeyToText = _renderI18nKeyToText;
export const Rt = _RenderI18nKeyToText;
export const rt = _renderI18nKeyToText;
export const $t = _renderI18nKeyToText;

export const useI18nComputed = _useI18nComputed;
export const useI18nText = _useI18nText;
export const useI18nState = _useI18nState;
export const runI18n = _registerI18n;

export const setLang = _setLang;
export const sl = _setLang;
export const setMessage = _setMessage;
export const sm = _setMessage;
export const editMessage = _editMessage;
export const em = _editMessage;
export const delMessage = _delMessage;
export const dm = _delMessage;
export const getState = _getState;
export const gs = _getState;
export const getComputed = _getComputed;
export const gc = _getComputed;
export const getLocaleText = _getLocaleText;
export const gt = _getLocaleText;
export const $tt = _getLocaleText;

export default {
	runI18n,
	RenderI18nKeyToText,
	renderI18nKeyToText,
	useI18nComputed,
	useI18nText,
	useI18nState,

	setLang,
	setMessage,
	editMessage,
	delMessage,
	getState,
	getComputed,
	getLocaleText,
	sl,
	sm,
	em,
	dm,
	gs,
	gc,
	Rt,
	rt,
	$t,
	gt,
	$tt,
};
