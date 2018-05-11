/**
 * email validation
 * @param email
 *
 */

export const emailFormatChecker = email => /^[a-zA-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/.test(email);

