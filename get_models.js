const puppeteer = require('puppeteer');


let date = new Date('2017-11-18T17:08:17.310Z');

(async() => {

const browser = await puppeteer.launch({
  headless: false,
  // devtools: true
  // Launch chromium using a proxy server on port 9876.
  // More on proxying:
  //    https://www.chromium.org/developers/design-documents/network-settings
   // args: ['--proxy-server=83.169.244.158:8080']
});
const page = await browser.newPage();
await page.setCookie({
  'name': 'spravka',
  'value': 'dD0xNTA4NDMyNzg3O2k9OTUuMjIwLjIyMS4xMjI7dT0xNTA4NDMyNzg3ODIzOTYwOTc1O2g9NTEzMDk0M2M2ZTYzMjcwMjNhYzFiOWZmYTg2YzBhMzI',
  expires: date.getTime(),
  domain: '.auto.ru'
})
const test = await FactoryMethod.getData('auto', {
  page,
  url: "https://auto.ru/",
});
// await page.click('.Select_with-search .Button');
console.log(test);
// await browser.close();

})();

class FactoryMethod {
  static async getData(site, options) {
    if(site == 'auto') {
      return await AutoRuData.getData(options);
    } else if(site == 'avito'){
      return await AvitoData.getData(options);
    }
  }
}

class AutoRuData {
  static async getData(options) {
    let { page, url } = options;
    
    await page.goto(url);
    // await page.click('.Select_with-search .Button');

    const brands = await page.evaluate(() => {
      let nodes = document.querySelectorAll(
        '.ControlGroup .Select_with-search .Popup .MenuItem:not(.MenuItem_has-clear)'
      );
      
      let data = {};
      [].forEach.call(nodes, (node, i) => {

        data[node.textContent] = {
          name: node.textContent,
          id: i + 1
        };
      });

      return data;
    });
    
    return await this.getModels(brands, page);
    
  }

  static getModels(brands, page) {
    
    return (async () => {      
        for(let i in brands) {
          await page.click('.Select_with-search .Button');
          await page.evaluate(() => {
            document.querySelector('.Popup.Popup_size_l.Popup_js_inited').style.maxHeight = '2000px';
            let badDiv = document.querySelector('.Popup.Popup_size_l.Popup_js_inited .MenuItem_has-clear');
            if(badDiv) badDiv.remove();
            return Promise.resolve();
          });
          await page.click('.Popup.Popup_size_l.Popup_js_inited .MenuItem:nth-child('+ brands[i].id +')');
          // await page.screenshot({path: `screen/f${brands[i].id}.png`});
          let models = await page.evaluate(() => {
            return new Promise(resolve => {
              
              setTimeout(() => {
                let mod = document.querySelector('.ControlGroup > div:not(.Select_with-search)');
                let modelas = mod.querySelectorAll('.MenuItem');
                resolve([].map.call(modelas, node => node.textContent));    
              }, 1000);  
            });
          });
          console.log(models);
          brands[i].models = models;
        }

        return brands;
    })();  
  }
}