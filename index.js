const Parser = require("rss-parser");

//------------------ IMPORT PRODUCT DATA -------------------//

// Map CustomFields from XML rss feed
const parser = new Parser({
  customFields: {
    // feed: ["author"],
    item: [
      ["g:id", "id"],
      ["g:brand", "brand"],
      ["g:condition", "condition"],
      ["g:image_link", "imageUrl"],
      ["g:price", "unitPrice"],
      ["g:sale_price", "sale_price"],
      ["g:availability", "availability"],
      ["g:custom_label_0", "product_dept"],
      ["g:custom_label_1", "product_cate"],
      ["g:custom_label_2", "product_type"],
      ["g:gender", "gender"],
      ["title", "name"],
    ],
  },
});

// Import and Parse XML rss feed into Array
const productData = async () => {
  const feed = await parser.parseURL(
    "https://integration.wakeupdata.com/Url/FetchCached/4774-6823-2073-9249-7681-0348"
  );

  feed.items.forEach((item) => {
    console.log(item);
  });
};

await promise.all(productData);
