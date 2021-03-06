<?php

$finder = PhpCsFixer\Finder::create()
    ->in(__DIR__)
    ->exclude('vendor');

return (new PhpCsFixer\Config())
    ->setCacheFile(__DIR__.'/.php-cs-fixer.cache')
    ->setRules(
        [
            '@Symfony' => true,
        ]
    )
    ->setFinder($finder);
