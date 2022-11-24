odoo.define('sportsmazing_theme.dynamic-product', function (require) {
'use strict';

var publicWidget = require('web.public.widget');

const DynamicProduct = publicWidget.Widget.extend({
    selector: '.dynamic-product',

    start() {
        let productRow = this.el.querySelector('#product-row')
//        if (productRow){
//            this._rpc({
//                route: '/product/dynamic/',
//                params:{}
//            }).then(data=>{
//                let html = ``
//                data.forEach(product=>{
//                    console.log(product)
//                    html += `<div class="col-lg-3 mb-5">
//                        <div class="d-flex align-items-center">
//                            <div class="img-container mr-3 rounded">
//                              <img class="ms-3 img img-fluid" style="height:72px;" src="data:image/png;base64,${product.image_1920}"/>
//                            </div>
//                            <div>
//                                 <h5 class="mb-0">${product.name}</h5>
//                                <div>${product.description_sale ? product.description_sale : ''}</div>
//                            </div>
//                        </div>
//                    </div>`
//                })
//                productRow.innerHTML = html
//            })
//        }
          if (productRow) {
            var html = `<div class="col-md-6">
                          <div class="card border-0 h-100 w-100" style="border-radius: 20px;">
                            <img src="sportsmazing_theme/static/src/img/i_am_team_cambodia_t_shirt.svg" class="img img-fluid mx-auto py-5"/>
                            <div class="card-body mt-auto">
                              <h5 class="card-title mx-3 mt-auto">I am team Cambodia T Shirt</h5>
                              <a href="/shop" class="btn btn-primary m-3 mt-auto">SHOP NOW</a>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="row g-2">
                                <div class="col-6">
                                      <div class="card border-0 h-100 w-100" style="border-radius: 20px;">
                                        <img src="sportsmazing_theme/static/src/img/bottle.svg" class="img img-fluid mx-auto pt-3 w-50 h-30" style='height:200px'/>
                                        <div class="card-body mx-auto">
                                          <h5 class="card-title mx-auto">Bottle</h5>
                                          <a href="/shop" class="btn btn-outline-primary">SHOP NOW</a>
                                        </div>
                                      </div>
                                </div>
                                <div class="col-6">
                                      <div class="card border-0 h-100 w-100" style="border-radius: 20px;">
                                        <img src="sportsmazing_theme/static/src/img/face_mask.svg" class="img img-fluid mx-auto pt-3 w-50 h-50"/>
                                        <div class="card-body mx-auto">
                                          <h5 class="card-title mx-auto">Mask</h5>
                                          <a href="/shop" class="btn btn-outline-primary">SHOP NOW</a>
                                        </div>
                                      </div>
                                </div>
                                <div class="col-12">
                                      <div class="card border-0 h-100 w-100" style="border-radius: 20px;">
                                        <img src="sportsmazing_theme/static/src/img/hats.svg" class="img img-fluid mx-auto pt-5 w-20"/>
                                        <div class="card-body mx-auto">
                                          <h5 class="card-title mx-auto">Hats</h5>
                                          <a href="/shop" class="btn btn-outline-primary">SHOP NOW</a>
                                        </div>
                                      </div>
                                </div>
                          </div>
                        </div>
            `
            productRow.innerHTML = html
          }

    },

});

publicWidget.registry.dynamic_product = DynamicProduct;

return DynamicProduct;

});
