<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
$arComponentDescription = array(
	"NAME" => GetMessage("PM_EDIT"), 
	"DESCRIPTION" => GetMessage("PM_EDIT_DESCRIPTION"), 
	"ICON" => "/images/icon.gif",
	"CACHE_PATH" => "Y",
	"PATH" => array(
		"ID" => "communication", 
		"CHILD" => array(
			"ID" => "forum",
			"NAME" => GetMessage("FORUM"),
			"CHILD" => array(
				"ID" => "pm",
				"NAME" => GetMessage("PM"),
			)
		)
	),
);
?>