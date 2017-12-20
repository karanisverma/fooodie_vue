var plist = []
$('.productName').each(function(e){
var p = {
    "@type": "product",
    "brand": "fooodie.store",
    "name": "paneer kadai",
    "image": "",
    "url": "https://fooodie.store",
    "description": "yummy panner kadai",
    "aggregateRating": {
      "@type": "aggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "35"
    }
}
p.name = $(this).text();
p.description = $(this).parent().parent().find('.productIngredients').text()
p.image = $(this).parent().parent().find('img')[0].currentSrc
// console.log($(this).parent().parent().find('img')[0])
plist.push(p)
})

console.log(JSON.stringify(plist))
