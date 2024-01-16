<?php

// +----------------------------------------------------------------------+
// | OpenConf                                                             |
// +----------------------------------------------------------------------+
// | Copyright (c) 2002-2024 Zakon Group LLC.  All Rights Reserved.       |
// +----------------------------------------------------------------------+
// | This source file is subject to the OpenConf License, available on    |
// | the OpenConf web site: www.OpenConf.com                              |
// +----------------------------------------------------------------------+

if (isset($_POST['settings']) && in_array('mail', $_POST['settings'])) {
	$settings['modules']['mail'] = $OC_modulesAR['mail']['name'];
	$oc_encryptedSettingsAR[] = 'mail:MOD_MAIL_smtp_password';
}
