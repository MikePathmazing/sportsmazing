{
    'name': 'Sportsmazing Theme',
    'version': '1.0',
    'summary': 'Customize theme website',
    'description': 'Customize theme website',
    'category': 'Theme',
    'author': 'Mike (Pathmazing)',
    'depends': ['website'],
    'data': [
        'views/header.xml',
        'views/footer.xml',
        'views/snippets/dynamic_product.xml',
        'views/snippets/snippets.xml',
    ],
    'installable': True,
    'auto_install': False,
    'assets': {
        'web.assets_frontend': [
            'sportsmazing_theme/static/src/js/dynamic_product.js',
        ]
    }
}