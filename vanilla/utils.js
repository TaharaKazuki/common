/**
 * email validation
 * mailアドレスのバリデーション関数
 * -> ○○○@○○○ なら通過
 * @param email
 *
 */

export const emailFormatChecker = email => /^[a-zA-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/.test(email);

/**
 * pick url
 * textの中にあるurl形式の箇所をpickUpしてaタグで囲む関数
 * @param text
 */

export const pickUrl = text => (text.replace(/((https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+))/gi,"<a href='$1' target='_blank'>$1</a>"));