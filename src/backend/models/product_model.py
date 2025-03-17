from backend.models.database import db

class ProductModel(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    brand = db.Column(db.String(255), nullable=False)
    color = db.Column(db.String(100), nullable=True)
    size = db.Column(db.Integer, nullable=True)
    price = db.Column(db.Float, nullable=True)
    offer_price = db.Column(db.Float, nullable=True)
    category = db.Column(db.String(255), nullable=True)
    customer_rating = db.Column(db.Integer, nullable=True)
    purchase_frequency = db.Column(db.Integer, nullable=True)
    stock_availability = db.Column(db.String(50), nullable=True)
    age_group = db.Column(db.String(50), nullable=True)
    gender = db.Column(db.String(50), nullable=True)
    seasonality = db.Column(db.String(100), nullable=True)
    material = db.Column(db.String(255), nullable=True)

    def __init__(self, brand, color, size, price, offer_price, category, customer_rating, 
                 purchase_frequency, stock_availability, age_group, gender, seasonality, material):
        self.brand = brand
        self.color = color
        self.size = size
        self.price = price
        self.offer_price = offer_price
        self.category = category
        self.customer_rating = customer_rating
        self.purchase_frequency = purchase_frequency
        self.stock_availability = stock_availability
        self.age_group = age_group
        self.gender = gender
        self.seasonality = seasonality
        self.material = material
