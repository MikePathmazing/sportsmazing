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
            var html = `<div class="col">
                          <div style='height:500px;border-radius:20px' class='shadow-none p-3 mb-5 bg-light'>
                            <div class="card border-0" style="width: 800px, height: 800px">
                            <div class="card-footer border-0">
                              <img src="/website_custom/static/src/img/i_am_team_cambodia_t_shirt.svg"
                                   class="img img-fluid mx-auto pt16 pb32"
                                   alt=""/>

                              <h4 style='font-weight:700;'>I AM TEAM CAMBODIA T-SHIRT</h4>
                              <a href="/shop" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">SHOP NOW</a>
                            </div>
                          </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class='row' style='height:240px;'>
                          <div class='col'>
                            <div class="card border-0">
                              <div class="card-footer border-0">
                                <img src="/website_custom/static/src/img/bottle.svg" class="img img-fluid mx-auto pt16 pb16"
                                     alt=""/>
                                <a href="/shop" class="btn btn-primary mb-2">SHOP NOW</a>
                              </div>
                            </div>
                            </div>
                            <div class='col'>
                            <div class="card border-0">
                              <div class="card-footer border-0">
                                <img src="/website_custom/static/src/img/face_mask.png" class="img img-fluid mx-auto pt16 pb16"
                                     alt=""/>
                                <a href="/shop" class="btn btn-primary mb-2">SHOP NOW</a>
                              </div>
                            </div>
                            </div>
                          </div>
                          <div class='row' style='height:240px;'>
                          <div class='col'>
                          <div class="card border-0">
                            <div class="card-footer border-0">
                              <img src="/website_custom/static/src/img/hats.svg" class="img img-fluid mx-auto pt16 pb16"
                                   alt=""/>
                              <a href="/shop" class="btn btn-primary mb-2">SHOP NOW</a>
                            </div>
                          </div>
                          </div>
                          </div>

                        </div>`
            productRow.innerHTML = html
          }

    },

});

publicWidget.registry.dynamic_product = DynamicProduct;

return DynamicProduct;

});
