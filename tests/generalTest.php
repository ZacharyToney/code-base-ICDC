<?php
declare(strict_types=1);

include_once('C:\xampp\php\phpunit');


final class EmailTest extends PHPUnit_Framework_TestCase
{
    public function simpleTest()
    {
        $stack = [];
        $this->assertSame(0, count($stack));
    }
}
