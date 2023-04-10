import requests
from parsel import Selector


try:
    URL_BASE = "http://books.toscrape.com/catalogue/"
    next_page_url = 'page-1.html'
    while next_page_url:
        response = requests.get(URL_BASE + next_page_url)
        selector = Selector(text=response.text)
        for product in selector.css(".product_pod"):
            title = product.css("h3 a::attr(title)").get()
            price = product.css(".price_color::text").re(r"£\d+\.\d{2}")
            print(f"Tittle: {title}, Price: {price[0]}")
            next_page_url = selector.css(".next a::attr(href)").get()
except requests.Timeout:
    response = requests.get("http://httpbin.org/delay/1", timeout=2)
