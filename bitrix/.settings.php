<?php
// Ansible managed
return array (
  'cache' => 
  array (
    'value' => 
    array (
      'type' => 
      array (
        'class_name' => '\\Bitrix\\Main\\Data\\CacheEngineRedis',
        'extension' => 'redis',
      ),
      'redis' => 
      array (
        'host' => '/var/run/redis-7000/redis.sock',
        'port' => '0',
      ),
      'sid' => '/home/bitrix/konev#01',
    ),
  ),
  'cache_flags' => 
  array (
    'value' => 
    array (
      'config_options' => 3600,
      'site_domain' => 3600,
    ),
    'readonly' => false,
  ),
  'connections' => 
  array (
    'value' => 
    array (
      'default' => 
      array (
        'className' => '\\Bitrix\\Main\\DB\\MysqliConnection',
        'host' => 'localhost',
        'port' => 3306,
        'database' => 'sitemanager_konev',
        'login' => 'stud',
        'password' => 'Phae6eekvodai1Ei',
        'options' => 2,
      ),
    ),
    'readonly' => true,
  ),
  'cookies' => 
  array (
    'value' => 
    array (
      'secure' => false,
      'http_only' => true,
    ),
    'readonly' => false,
  ),
  'crypto' => 
  array (
    'value' => 
    array (
      'crypto_key' => 'ezo6b5lczm0t133pcvwwsd4ykd42xqzz',
    ),
    'readonly' => true,
  ),
  'exception_handling' => 
  array (
    'value' => 
    array (
      'debug' => false,
      'handled_errors_types' => 4437,
      'exception_errors_types' => 4437,
      'ignore_silence' => false,
      'assertion_throws_exception' => true,
      'assertion_error_type' => 256,
      'log' => 
      array (
        'settings' => 
        array (
          'file' => '/var/log/php/exceptions.log',
          'log_size' => 1000000,
        ),
      ),
    ),
    'readonly' => false,
  ),
  'pull' => 
  array (
    'value' => 
    array (
      'nginx_version' => 4,
      'nginx_command_per_hit' => 100,
      'nginx' => 'Y',
      'nginx_headers' => 'N',
      'push' => 'Y',
      'websocket' => 'Y',
      'signature_key' => 'gw7ca31rdidzke816mt6uu92vihxzk',
      'signature_algo' => 'sha1',
      'guest' => 'N',
    ),
  ),
  'session' => 
  array (
    'value' => 
    array (
      'lifetime' => '14400',
      'mode' => 'separated',
      'handlers' => 
      array (
        'kernel' => 'encrypted_cookies',
        'general' => 
        array (
          'type' => 'redis',
          'port' => '0',
          'host' => '/var/run/redis-7000/redis.sock',
        ),
      ),
    ),
  ),
  'utf_mode' => 
  array (
    'value' => true,
    'readonly' => true,
  ),
);
// Ansible managed
