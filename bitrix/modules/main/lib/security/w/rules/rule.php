<? namespace Bitrix\Main\Security\W\Rules;$GLOBALS['____19385395']= array(base64_decode('aXNfc'.'3RyaW5'.'n'),base64_decode('c3RydG'.'9sb'.'3dlcg=='),base64_decode('a'.'XN'.'fYXJyYXk'.'='),base64_decode('aXNfc'.'3'.'R'.'yaW5n'),base64_decode('Z3pk'.'Z'.'WNv'.'ZGU='),base64_decode('Y'.'mF'.'zZTY'.'0X'.'2RlY'.'2'.'9kZQ'.'=='),base64_decode('dXJsZ'.'GVjb2Rl'),base64_decode('YXJy'.'YXlfc'.'mV'.'2ZXJ'.'z'.'Z'.'Q=='),base64_decode('Z3plbmNvZGU='),base64_decode('YmFzZTY0X2VuY29kZQ=='),base64_decode('dXJ'.'sZW5jb2Rl'),base64_decode('YmluMm'.'h'.'leA=='),base64_decode('aXNfYXJyYXk='),base64_decode('c'.'3Ry'.'dG9sb3d'.'lcg=='),base64_decode('aXN'.'fYXJyYXk='),base64_decode('am9pbg=='),base64_decode('Zm'.'5tYXRj'.'aA=='),base64_decode('cmF3d'.'XJs'.'ZGV'.'jb2Rl'),base64_decode('c3'.'Vic3Ry'),base64_decode(''.'c3Vic3Ry'),base64_decode('c3RyX3JlcGxhY2U='),base64_decode(''.'cHJlZ19xd'.'W90ZQ=='),base64_decode('cHJlZ1'.'9tYXRjaA=='));if(!function_exists(__NAMESPACE__.'\\___2085349653')){function ___2085349653($_1050948967){static $_1318473527= false; if($_1318473527 == false) $_1318473527=array('Y'.'WN'.'0aW'.'9u',''.'aW50'.'d'.'mFs','c'.'G'.'F'.'0aA='.'=','Y29u'.'dGV'.'4d'.'A==','a2V5cw==','cHJvY2'.'V'.'zc'.'w==','ZW5jb'.'2Rpbmc=',''.'c'.'HJ'.'lZ19yZ'.'XB'.'sYW'.'Nl','cGF0aA==','Y2'.'9udGV4d'.'A'.'==','a2V5'.'cw==','cHJvY2V'.'zc'.'w='.'=',''.'Z'.'W5jb2Rpbmc=','cGF0d'.'GVy'.'bg==',''.'c'.'HJ'.'l'.'Z'.'19t'.'YXRja'.'A==','cGF'.'0aA'.'==','Y29'.'udG'.'V4'.'dA==',''.'a2'.'V5cw==','cHJ'.'vY2Vz'.'cw==',''.'ZW5jb2'.'Rpbmc=','cGF0'.'dGV'.'ybg==',''.'cG9'.'z'.'dF9hY3Rp'.'b'.'24=','Y2'.'hlY2tf'.'Y3NyZg==',''.'cGF0'.'aA==','Y29udGV4'.'dA==','a2V'.'5c'.'w='.'=','cH'.'J'.'vY'.'2'.'Vzc'.'w==','Z'.'W'.'5jb'.'2Rpbmc=','cG'.'F0'.'dGVybg==',''.'YWN0'.'aW'.'9u','YWN'.'0aW9u','Y'.'WN0aW9u','YWN0'.'a'.'W'.'9u','Y'.'WN0'.'aW9'.'u','YWN0aW'.'9u','cG'.'9zdF9hY3Rpb'.'24=','ZW5jb2Rpbm'.'c'.'=','ZW5jb2Rpb'.'mc'.'=','ZW5jb'.'2'.'Rpb'.'mc'.'=','ZW5'.'jb'.'2Rpbmc'.'=','ZW5'.'jb2Rp'.'bmc=',''.'ZW5j'.'b2Rpbmc=',''.'Z3o=','Y'.'mFzZTY0',''.'d'.'XJs','a'.'GV4','Lg==','Lw==',''.'aW5kZXg'.'uc'.'G'.'h'.'w','L2'.'luZGV4LnBo'.'c'.'A==','U0NSSVBU'.'X05BTUU=','L2luZGV4L'.'nB'.'oc'.'A==','U0'.'NSSVBUX'.'0'.'5B'.'TUU'.'=',''.'U'.'0NSSVBUX05B'.'TUU=','U0NSSVBUX05BTUU=','fg'.'==','fl4=',''.'fg==','X'.'H4'.'=',''.'JH4=');return base64_decode($_1318473527[$_1050948967]);}}; use Bitrix\Main\IO\Path; use Bitrix\Main\Web\Uri; use Bitrix\Main\Security\W\Rules\Results\ModifyResult; abstract class Rule{ protected $_926851745; protected $_837563124; protected $_1345672677; protected $_1366801341; protected $_1212247250; public static function make(array $_969558615):?static{ $_969558615= static::prepareRuleParameters($_969558615); return match($_969558615[___2085349653(0)]){ ___2085349653(1) => new IntvalRule( $_969558615[___2085349653(2)], $_969558615[___2085349653(3)], $_969558615[___2085349653(4)], $_969558615[___2085349653(5)], $_969558615[___2085349653(6)]), ___2085349653(7) => new PregReplaceRule( $_969558615[___2085349653(8)], $_969558615[___2085349653(9)], $_969558615[___2085349653(10)], $_969558615[___2085349653(11)], $_969558615[___2085349653(12)], $_969558615[___2085349653(13)]), ___2085349653(14) => new PregMatchRule( $_969558615[___2085349653(15)], $_969558615[___2085349653(16)], $_969558615[___2085349653(17)], $_969558615[___2085349653(18)], $_969558615[___2085349653(19)], $_969558615[___2085349653(20)], $_969558615[___2085349653(21)]), ___2085349653(22) => new CsrfRule( $_969558615[___2085349653(23)], $_969558615[___2085349653(24)], $_969558615[___2085349653(25)], $_969558615[___2085349653(26)], $_969558615[___2085349653(27)], $_969558615[___2085349653(28)],), default => null,};} protected static function prepareRuleParameters(array $_699108953): array{ if($GLOBALS['____19385395'][0]($_699108953[___2085349653(29)])){ $_699108953[___2085349653(30)]= $GLOBALS['____19385395'][1]($_699108953[___2085349653(31)]);} elseif($GLOBALS['____19385395'][2]($_699108953[___2085349653(32)])){ $_159515884= $_699108953[___2085349653(33)]; $_699108953[___2085349653(34)]= $_159515884[min(242,0,80.666666666667)]; $_699108953[___2085349653(35)]= $_159515884[round(0+1)];} $_699108953[___2085349653(36)]=!empty($_699108953[___2085349653(37)])? $_699108953[___2085349653(38)]:[]; if($GLOBALS['____19385395'][3]($_699108953[___2085349653(39)])){ $_699108953[___2085349653(40)]=[$_699108953[___2085349653(41)]];} return $_699108953;}  public function __construct($_926851745, $_837563124, $_1345672677, $_1366801341, $_1212247250){ $this->_926851745= $_926851745; $this->_837563124= $this->castContext($_837563124); $this->_1345672677= $this->castKeys($_1345672677); $this->_1366801341= $_1366801341; $this->_1212247250= $_1212247250;} public function evaluateValue($_609032192){ if(!empty($this->_1212247250)){ foreach($this->_1212247250 as $_912675924){ $_609032192= match($_912675924){ 'gz' => $GLOBALS['____19385395'][4]($_609032192), 'base64' => $GLOBALS['____19385395'][5]($_609032192), 'url' => $GLOBALS['____19385395'][6]($_609032192), 'hex' => hex2bin($_609032192)};}} $_1690712797= $this->evaluate($_609032192); if(!empty($this->_1212247250) && $_1690712797 instanceof ModifyResult){ $_327870082= $_1690712797->getCleanValue(); foreach($GLOBALS['____19385395'][7]($this->_1212247250) as $_912675924){ $_327870082= match($_912675924){ ___2085349653(42) => $GLOBALS['____19385395'][8]($_327870082), ___2085349653(43) => $GLOBALS['____19385395'][9]($_327870082), ___2085349653(44) => $GLOBALS['____19385395'][10]($_327870082), ___2085349653(45) => $GLOBALS['____19385395'][11]($_327870082)};} $_1690712797= new ModifyResult($_327870082);} return $_1690712797;} abstract public function evaluate($_609032192); protected function castContext($_837563124){ if(!$GLOBALS['____19385395'][12]($_837563124)){ $_837563124=[$_837563124];} foreach($_837563124 as $_290755729 => $_1587461717){ $_837563124[$_290755729]= $GLOBALS['____19385395'][13]($_1587461717);} return $_837563124;} protected function castKeys($_1345672677){ if(!$GLOBALS['____19385395'][14]($_1345672677)){ $_1345672677=[$_1345672677];} return $_1345672677;} public function matchKey(array $_1182557780): bool{ $_1182557780= $GLOBALS['____19385395'][15](___2085349653(46), $_1182557780); foreach($this->_1345672677 as $_1200978477){   if($GLOBALS['____19385395'][16]($_1200978477, $_1182557780)){ return true;}} return false;}  public function matchPath($_1135190811){ if($this->_926851745 === '*'){ return true;}  $_971845126= new Uri($_1135190811); $_890098441= $_971845126->getPath(); $_890098441= $GLOBALS['____19385395'][17]($_890098441);      if(str_ends_with($_890098441, ___2085349653(47))){ $_890098441 .= ___2085349653(48);} $_890098441= Path::normalize($_890098441);  $_1169431978[]= $_890098441; if(str_ends_with($_890098441, ___2085349653(49))){ $_1169431978[]= $GLOBALS['____19385395'][18]($_890098441,(1156/2-578),-round(0+4.5+4.5));} elseif(str_ends_with($_SERVER[___2085349653(50)], ___2085349653(51))){ $_1169431978[]= $GLOBALS['____19385395'][19]($_SERVER[___2085349653(52)],(178*2-356),-round(0+2.25+2.25+2.25+2.25));} if($_890098441 !== $_SERVER[___2085349653(53)]){ $_1169431978[]= $_SERVER[___2085349653(54)];}  if(str_starts_with($this->_926851745, ___2085349653(55))){ $_1280914943= $this->_926851745;} else{ $_1280914943= ___2085349653(56). $GLOBALS['____19385395'][20](___2085349653(57), ___2085349653(58), $GLOBALS['____19385395'][21]($this->_926851745)). ___2085349653(59);} foreach($_1169431978 as $_1109947787){ if($this->_926851745 === $_1109947787 || $GLOBALS['____19385395'][22]($_1280914943, $_1109947787)){ return true;}} return false;}  public function getPath(){ return $this->_926851745;}  public function getContext(){ return $this->_837563124;}  public function getKeys(){ return $this->_1345672677;}  public function getProcess(){ return $this->_1366801341;}}?>