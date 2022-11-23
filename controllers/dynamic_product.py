from odoo import http


class DynamicProduct(http.Controller):

  @http.route('/product/dynamic/', auth='public', website=True, type='json', methods=['POST'])
  def get_product(self):
    print('route exist')
    products = http.request.env['product.template'].search_read([], ['name', 'image_1920', 'description_sale'])
    return products


