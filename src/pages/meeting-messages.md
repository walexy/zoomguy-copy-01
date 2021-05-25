---
title: Meeting Messages
sections:
  - type: section_hero
    content: ""
    image: /images/img_0167.jpg
  - type: section_content
    background: gray
    content: >-
      `<div id='product-component-1621977026843'></div>

      <script type="text/javascript">

      /*<![CDATA[*/

      (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }
        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'mtsq-shop.myshopify.com',
            storefrontAccessToken: '4aef4f8eddcaa3e53751e88cffe3d2de',
          });
          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
              id: '6789820678299',
              node: document.getElementById('product-component-1621977026843'),
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: {
        "product": {
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0",
                "margin-bottom": "50px"
              },
              "text-align": "left"
            },
            "title": {
              "font-family": "Montserrat, sans-serif",
              "font-size": "26px"
            },
            "button": {
              "font-family": "Lato, sans-serif",
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px",
              ":hover": {
                "background-color": "#4473e3"
              },
              "background-color": "#4b80fc",
              ":focus": {
                "background-color": "#4473e3"
              }
            },
            "quantityInput": {
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px"
            },
            "price": {
              "font-family": "Montserrat, sans-serif",
              "font-size": "18px"
            },
            "compareAt": {
              "font-family": "Montserrat, sans-serif",
              "font-size": "15.299999999999999px"
            },
            "unitPrice": {
              "font-family": "Montserrat, sans-serif",
              "font-size": "15.299999999999999px"
            }
          },
          "layout": "horizontal",
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "description": true
          },
          "width": "100%",
          "text": {
            "button": "Add to cart"
          },
          "googleFonts": [
            "Montserrat",
            "Lato"
          ]
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "-20px"
              }
            }
          }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            },
            "button": {
              "font-family": "Lato, sans-serif",
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px",
              ":hover": {
                "background-color": "#4473e3"
              },
              "background-color": "#4b80fc",
              ":focus": {
                "background-color": "#4473e3"
              }
            },
            "quantityInput": {
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px"
            },
            "title": {
              "font-family": "Helvetica Neue, sans-serif",
              "font-weight": "bold",
              "font-size": "26px",
              "color": "#4c4c4c"
            },
            "price": {
              "font-family": "Helvetica Neue, sans-serif",
              "font-weight": "normal",
              "font-size": "18px",
              "color": "#4c4c4c"
            },
            "compareAt": {
              "font-family": "Helvetica Neue, sans-serif",
              "font-weight": "normal",
              "font-size": "15.299999999999999px",
              "color": "#4c4c4c"
            },
            "unitPrice": {
              "font-family": "Helvetica Neue, sans-serif",
              "font-weight": "normal",
              "font-size": "15.299999999999999px",
              "color": "#4c4c4c"
            }
          },
          "googleFonts": [
            "Lato"
          ],
          "text": {
            "button": "Add to cart"
          }
        },
        "option": {},
        "cart": {
          "styles": {
            "button": {
              "font-family": "Lato, sans-serif",
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px",
              ":hover": {
                "background-color": "#4473e3"
              },
              "background-color": "#4b80fc",
              ":focus": {
                "background-color": "#4473e3"
              }
            }
          },
          "text": {
            "total": "Subtotal",
            "button": "Checkout"
          },
          "googleFonts": [
            "Lato"
          ]
        },
        "toggle": {
          "styles": {
            "toggle": {
              "font-family": "Lato, sans-serif",
              "background-color": "#4b80fc",
              ":hover": {
                "background-color": "#4473e3"
              },
              ":focus": {
                "background-color": "#4473e3"
              }
            },
            "count": {
              "font-size": "16px"
            }
          },
          "googleFonts": [
            "Lato"
          ]
        }
      },
            });
          });
        }
      })();

      /*]]>*/

      </script>`
template: landing
---
