<?php

// +----------------------------------------------------------------------+
// | OpenConf                                                             |
// +----------------------------------------------------------------------+
// | Copyright (c) 2002-2024 Zakon Group LLC.  All Rights Reserved.       |
// +----------------------------------------------------------------------+
// | This source file is subject to the OpenConf License, available on    |
// | the OpenConf web site: www.OpenConf.com                              |
// +----------------------------------------------------------------------+

require_once "../include.php";

if (oc_hookSet('chair-signout-pre')) {
	   foreach ($GLOBALS['OC_hooksAR']['chair-signout-pre'] as $hook) {
			   require_once $hook;
	   }
}

unset($_SESSION[OCC_SESSION_VAR_NAME]['chairlast']);
session_write_close();

if (oc_hookSet('chair-signout-post')) {
	   foreach ($GLOBALS['OC_hooksAR']['chair-signout-post'] as $hook) {
			   require_once $hook;
	   }
}

header("Location: " . OCC_BASE_URL);

?>
