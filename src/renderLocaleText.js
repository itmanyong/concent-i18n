/*
 * @Author: itmanyong
 * @Date: 2021-11-12 09:55:53
 * @LastEditTime: 2021-11-12 10:16:23
 * @LastEditors: itmanyong
 * @Description:
 * @FilePath: \cxy-react-i18n\src\renderLocaleText.js
 * ___
 */
import React, { memo, useMemo } from 'react';
import { useConcent } from 'concent';
import { isEqual, transI18nText } from './utils';
// 组件式
export const RenderI18nKeyToText = memo(
	(props) => {
		const { path, msg } = props;
		const {
			moduleComputed: { i18nMessage },
		} = useConcent({ module: 'cxy_react_i18n' });

		const i18nText = useMemo(() => transI18nText(path, i18nMessage, msg), [path, i18nMessage, msg]);

		return i18nText;
	},
	(n, o) => isEqual(n, o),
);
// 函数式
export const renderI18nKeyToText = (path, msg) => {
	return React.createElement(RenderI18nKeyToText, { path, msg });
};
