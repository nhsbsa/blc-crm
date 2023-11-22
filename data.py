import json
from datetime import datetime, timedelta
import random

# Function to generate a random date within the last two weeks with time between 9 AM and 10 PM
def generate_recent_datetime():
    end = datetime.now()
    start = end - timedelta(days=14)
    random_date = start + (end - start) * random.random()
    random_date = random_date.replace(hour=random.randint(9, 22), minute=random.randint(0, 59), second=random.randint(0, 59))
    return random_date.strftime("%Y-%m-%dT%H:%M:%S")

# Function to generate a unique reference number
def generate_reference_number():
    return ''.join(random.choices('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', k=10))

# Possible values for other fields
first_names = ["Maria", "James", "Emily", "John", "Sophie"]
last_names = ["Martinez", "Taylor", "Brown", "Smith", "Johnson"]
addresses = ["44 Windsor Road, Sheffield, L16 E6", "88 Chester Street, Bristol, B4 5LJ", "22 Park Lane, Manchester, M3 4AB"]
postcodes = ["L16 E6", "B4 5LJ", "M3 4AB"]
dob = ["1991-01-19", "1988-05-23", "1977-07-08"]
emails = ["example1@email.com", "example2@email.com", "example3@email.com"]
statuses = ["Incomplete", "Expired", "Rejected", "Failed", "Sent"]
years = ["2019", "2020", "2021", "2022"]

# Generate 50 data items
data_items = []
for _ in range(50):
    item = {
        "referenceNumber": generate_reference_number(),
        "firstName": random.choice(first_names),
        "lastName": random.choice(last_names),
        "address": random.choice(addresses),
        "postcode": random.choice(postcodes),
        "dateOfBirth": random.choice(dob),
        "emailAddress": random.choice(emails),
        "status": random.choice(statuses),
        "submitted": generate_recent_datetime(),
        "dateOfLoss": random.choice(years)
    }
    data_items.append(item)

# Save to a file
file_path = '/mnt/data/generated_test_data_50_items.json'
with open(file_path, 'w') as file:
    json.dump(data_items, file, indent=4)

file_path
