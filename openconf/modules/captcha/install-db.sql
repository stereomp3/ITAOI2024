## +----------------------------------------------------------------------+
## | OpenConf                                                             |
## +----------------------------------------------------------------------+
## | Copyright (c) 2002-2024 Zakon Group LLC.  All Rights Reserved.       |
## +----------------------------------------------------------------------+
## | This source file is subject to the OpenConf License, available on    |
## | the OpenConf web site: www.OpenConf.com                              |
## +----------------------------------------------------------------------+

## NOTE: This file cannot contain a semi-colon (;) except at the end of a
## SQL statement.

# --------------------------------------------------------

INSERT INTO `config` (`module`, `setting`, `value`, `name`, `description`, `parse`) VALUES ('captcha', 'MOD_CAPTCHA_private_key', '', 'reCAPTCHA Private Key', 'obtain from google.com/recaptcha', 0);

INSERT INTO `config` (`module`, `setting`, `value`, `name`, `description`, `parse`) VALUES ('captcha', 'MOD_CAPTCHA_public_key', '', 'reCAPTCHA Public Key', 'obtain from google.com/recaptcha', 0);

INSERT INTO `config` (`module`, `setting`, `value`, `name`, `description`, `parse`) VALUES ('captcha', 'MOD_CAPTCHA_hcaptcha_private_key', '', 'hCaptcha Private Key', 'obtain from hcaptcha.com', 0);

INSERT INTO `config` (`module`, `setting`, `value`, `name`, `description`, `parse`) VALUES ('captcha', 'MOD_CAPTCHA_hcaptcha_public_key', '', 'hCaptcha Public Key', 'obtain from hcaptcha.com', 0);
