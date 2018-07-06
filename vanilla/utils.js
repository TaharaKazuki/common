/**
 * email validation
 * mailアドレスのバリデーション関数
 * -> ○○○@○○○ の形式なら通過
 * @param email
 *
 */

export const emailFormatChecker = email => /^[a-zA-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/.test(email);

/**
 * pick url
 * textの中にあるurl形式の箇所をpickUpしてaタグで囲む関数
 * ex: 'テストテストテストhttps://www.hoge.hogeテストテストテスト'
 * -> 'テストテストテスト<a href="https://www.hoge.hoge" target='_blank'>https://www.hoge.hoge</a>テストテストテスト'
 * @param text
 */

export const pickUrl = text => (text.replace(/((https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+))/gi,"<a href='$1' target='_blank'>$1</a>"));

/**
 * check postal code
 * 郵便番号形式のvalidation
 * @param postalCode
 */

export const checkPostalCode = postalCode => /[0-9]{3}-?[0-9]{4}/.test(postalcode);

/**
 * check phoneNumber
 * 電話番号のvalidation
 * @param phoneNumber
 */

export const checkPhoneNumber = phoneNumber => /[0-9-]{6,9}$|[0-9-]{12}/.test(phoneNumber);

/**
 * check mobilePhoneNumber
 * 携帯電話番号のみのvalidation
 * @param mobilePhoneNumber
 */

export const checkMobilePhoneNumber = mobilePhoneNumber => /\d{3}-\d{4}-\d{4}$|\d{11}/.test(mobilePhoneNumber);

/**
 * check password
 * passwordのvalidation
 * -> 数字, 小文字, 大文字それぞれを含む8文字以上の文字列
 * @param password
 */

export const checkPassWord = password => /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password);

