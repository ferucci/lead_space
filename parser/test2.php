<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("test");
?>

<div class="container block item-block   padding-on first-bigblock kraken-firsttype-2">

<?


function getcontents($url){
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_ENCODING, 'gzip');
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
	$output = curl_exec($ch);
	curl_close($ch);
	return $output;
}
 

include_once __DIR__ . '/phpQuery-onefile.php';
$page = (int)$_POST["page"] + 1;

$arSelect = Array("ID", "NAME", "CODE");
$arFilter = Array("IBLOCK_ID"=>12, "ACTIVE" => "Y");
$arNav = array(
    'nTopCount' => false,
    'nPageSize' => 1,
    'iNumPage' => 1,
    'checkOutOfRange' => true
);
$res = CIBlockElement::GetList(Array(), $arFilter, false, array(), $arSelect);
while($ob = $res->GetNextElement())
{
 $arFields = $ob->GetFields();
 
$arr[] = $arFields;


}
//echo "<pre>";print_r($arr);echo "<pre>";
foreach($arr as $value){

 


$doc = phpQuery::newDocument(file_get_contents("https://marketplace.1c-bitrix.ru/solutions/".$value["CODE"]."/"));

$PROP = array();
$data['ver'] = pq($doc->find('#bundles'))->text();
$data['ver'] = str_replace("Добавьте редакцию", "", $data['ver']);
$data['ver'] = str_replace(['"', "'"], '', $data['ver']);
$data['ver'] = explode("с редакцией ", $data['ver']);
unset($data['ver'][0]);
//$data['ver'] = array_shift($data['ver']);
$data['oldpprice'] = pq($doc->find('#total_bndl_sum_old'))->text();
$data['oldpprice'] = str_replace(" руб.", "", $data['oldpprice']);
$data['oldpprice'] = str_replace(" ", "", $data['oldpprice']);
$data['price'] = pq($doc->find('#total_bndl_sum'))->text();
$data['price'] = str_replace(" руб.", "", $data['price']);
$data['price'] = str_replace(" ", "", $data['price']);
$data['demo'] = pq($doc->find('.work-top-btn a'))->attr('href');

//$PROP['DEMO'] = pq($doc->find('.work-top-btn a'))->attr('href');
//$PROP['EXIST'] = 1562;
//$PROP['ITEM_TEMPLATE'] = 1557;
//$PROP['CURRENCY'] = 1571;
//$PROP['CART_ADD_ON'] = 1607;
$code = str_replace("https://marketplace.1c-bitrix.ru/solutions/", "", $value["PROPERTY_LINK_VALUE"]);
$code = str_replace("/", "", $code);

$entry = $doc->find('.tab-section-container .description');
$data['text'] = pq($entry)->html();
$images= array();

$data['images'] = array();
 
$entry = $doc->find('.screenshots-block-slides img');

$verarray = array();
foreach($data['ver'] as $str){


$str = trim($str);
$verarray[] = $str;
}
$PROP["OLD_PRICE"] = $data['oldpprice'];
$PROP["PRICE"] = $data['price'];
//$PROP["VER"] = $verarray;
//$PROP["UNIT"] = 1;

//$PROP["LINK"] = $value["PROPERTY_LINK_VALUE"];

//echo "<pre>";print_r(print_r($data));echo "</pre>";
//echo "<pre>";print_r(print_r($arLoadProductArray));echo "</pre>";
//$el = new CIBlockElement;
//$res = $el->Update($value["ID"], $arLoadProductArray);
//$arFile= array();
/*foreach($data['images'] as $key => $img){

//$arFile[] = array("VALUE" => CFile::MakeFileArray($img),"DESCRIPTION"=>"");
}*/
$el = new CIBlockElement;
echo $value["ID"];
if($value["ID"] == "1630" || $value["ID"] == "1631" || $value["ID"] == "1632" || $value["ID"] == "1633"){
continue;
}
echo "<pre>";print_r($PROP);echo "</pre>";
//CIBlockElement::SetPropertyValuesEx($value["ID"], 146, array("MORE_PHOTO" => Array ("VALUE" => array("del" => "Y")))); 
CIBlockElement::SetPropertyValueCode($value["ID"], "PRICE", $PROP["PRICE"]);
CIBlockElement::SetPropertyValueCode($value["ID"], "OLD_PRICE", $PROP["OLD_PRICE"]);
//CIBlockElement::SetPropertyValueCode($value["ID"], "DEMO", $PROP["DEMO"]);

//CIBlockElement::SetPropertyValues($value["ID"], 12, $PROP["PRICE"], "PRICE");

//CIBlockElement::SetPropertyValues($value["ID"], 12, $PROP["OLD_PRICE"], "OLD_PRICE");
//CPrice::DeleteByProduct($value["ID"]);

}
//sleep(1);
//$doc = phpQuery::newDocument(file_get_contents('https://marketplace.1c-bitrix.ru/solutions/magwai.companylanding/'));




 











?>


</div>
 <br><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>