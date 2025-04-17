<?php
error_reporting(E_ALL);
//ini_set('display_errors', 1);
setlocale(LC_ALL, 'ru_RU');
date_default_timezone_set('Europe/Moscow');
header('Content-type: text/html; charset=utf-8');

include_once __DIR__ . '/phpQuery-onefile.php';

$doc = phpQuery::newDocument(file_get_contents("https://krd.saturn.net/"));

$data = array();

$entry = $doc->find('a.h_c_aside_list_item');
foreach ($entry as $row) {
    $ent = pq($ent);

    $thisdata["title"] = $ent->find('.mainMenu__list-item-title')->text();
    $thisdata["url"] = $ent->find('.mainMenu__list-item-link')->attr('href');
    $links = pq($row)->find('.mainMenu__right-list a');
    $submenu = array();
    foreach($links as $link){
        $value = pq($link);
        $menu["title"]= trim($value->text());
        $menu["url"] = $value->attr('href');

        $submenu[] = $menu;
    }

    $thisdata["submenu"] = $submenu;

//    $url = $ent->attr('href');
    $data[] = $thisdata;
}

echo "<pre>";print_r($data);echo "</pre>";