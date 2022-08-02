<?php

return [
    
    'enable' => true,

    // Database details [ Key of this set is database name ]
    'sbba_db' => [
        'host' => 'localhost',
        'username' => 'root',
        'password' => '',
        'port' => 3306,
        'prefix' => '',
        'charset' => 'utf8',
        'socket' => null,
        'is_primary' => true
    ],
    'jolly_master_child' => [
        'host' => 'localhost',
        'username' => 'root',
        'password' => '',
        'port' => 3306,
        'prefix' => '',
        'charset' => 'utf8',
        'socket' => null,
        'is_primary' => false
    ],
    
];