<?php
include_once('C:\xampp\php\phpunit');


final class generalTests extends PHPUnit_Framework_TestCase
{
    /** @test */
    public function simpleTest()
    {
        $bool = true;
        
        $this->assertTrue($bool);
    }
}
