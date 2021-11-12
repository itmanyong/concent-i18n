/**
 * 获取数据类型
 * @param {any} arg 数据
 * @returns { type: string,name:any}
 */
export function getType(arg) {
	let t,
		type = (arg) => ((t = typeof arg) === 'object' ? {}.toString.call(arg).slice(8, -1).toLowerCase() : t),
		name = (arg) => ((t = type(arg)) === 'function' ? arg.name : t === 'undefined' ? undefined : arg.constructor.name);
	return { type: type(arg), name: name(arg) };
}
/**
 * 毕竟两个值是否一致
 * @param {any} oldData 旧数据
 * @param {any} newData 新数据
 * @returns boolean
 */
export function isEqual(oldData, newData) {
	if (oldData === newData) return true;
	if (getType(oldData) === 'object' && getType(newData) === 'object' && Object.keys(oldData).length === Object.keys(newData).length) {
		for (const key in oldData) {
			if (oldData.hasOwnProperty(key)) {
				if (!isEqual(oldData[key], newData[key])) {
					return false;
				}
			}
		}
	} else if (getType(newData) === 'array' && getType(oldData) === 'array' && oldData.length === newData.length) {
		for (let i = 0, length = oldData.length; i < length; i++) {
			if (!isEqual(oldData[i], newData[i])) {
				return false;
			}
		}
	} else {
		return false;
	}
	return true;
}
/**
 * 深层次合并
 * @param {object} source 源数据
 * @param {object} other 新数据
 * @returns object
 */
export function merge(source, other) {
	if (getType(source).type != 'object' || getType(other).type != 'object') {
		return other === undefined ? source : other;
	}
	// 合并两个对象的 key，另外要区分数组的初始值为 []
	return Object.keys({
		...source,
		...other,
	}).reduce(
		(acc, key) => {
			// 递归合并 value
			acc[key] = merge(source[key], other[key]);
			return acc;
		},
		Array.isArray(source) ? [] : {},
	);
}
/**
 * 转换指定path到显示文本
 * @param {string} path 路径path
 * @param {object} locale locale数据
 * @param {object} msg 替换数据
 * @returns string
 */
export function transI18nText(path, locale, msg) {
	try {
		if (!path && !locale) return '';
		const i18nValue =
			path.indexOf('.') === -1
				? locale[path]
				: path.split('.').reduce((str, cur) => {
						try {
							return str[cur];
						} catch (err) {
							return '';
						}
				  }, locale);
		console.log(i18nValue);
		if (getType(i18nValue).type === 'string') {
			const replaceKeys = msg && getType(msg).type === 'object' ? Object.keys(msg) : [];
			if (!replaceKeys.length) return i18nValue || '';
			return replaceKeys.reduce((val, cur) => {
				return val.replace(`{${cur}}`, msg[cur]);
			}, i18nValue);
		}
		return '';
	} catch (err) {
		console.log(err);
		return '';
	}
}
